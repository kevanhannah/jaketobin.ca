import { imageBuilder } from './sanityClient';
import { getImageDimensions } from './getImageDimensions';

const LARGEST_VIEWPORT = 1920; // Retina sizes will take care of 4k (2560px) and other huge screens

const DEFAULT_MIN_STEP = 0.1; // 10%
const DEFAULT_WIDTH_STEPS = [400, 600, 850, 1000, 1150]; // arbitrary
const DEFAULT_FULL_WIDTH_STEPS = [360, 414, 768, 1366, 1536, 1920];

export default function getImageProps({
	/**
	 * The image's reference object.
	 * Example: {asset: {_ref: string}, hotspot: {...}, crop: {...} }
	 */
	image,

	// Number of the largest width it can assume in the design
	// or "100vw" if it occupies the whole width
	maxWidth: userMaxWidth,

	// Aspect ratio
	aspectRatio: userAspectRatio,

	/**
	 * The minimal width difference, in PERCENTAGE (decimal), between the image's srcSet variations.
	 *
	 * -> 0.10 (10%) by default.
	 */
	minimumWidthStep = DEFAULT_MIN_STEP,

	// List of width sizes to use in the srcSet (NON-RETINA)
	customWidthSteps,

	// Custom <img> element's `sizes` attribute
	sizes,
}) {
	if (!image?.asset?._ref) {
		return {};
	}
	const maxWidth =
		typeof userMaxWidth === 'number' ? userMaxWidth : LARGEST_VIEWPORT;

	// For all image variations, we'll use an auto format and prevent scaling it over its max dimensions
	const builder = imageBuilder.image(image).fit('max').auto('format');
	const imageDimensions = getImageDimensions(image);

	// If no aspect ratio is passed in, use what's available from the base image
	const aspectRatio =
		typeof userAspectRatio === 'number'
			? userAspectRatio
			: imageDimensions.aspectRatio;

	// Width sizes the image could assume
	const baseSizes = [
		{ width: maxWidth, height: parseInt(maxWidth / aspectRatio) },
		...(
			customWidthSteps ||
			(typeof userMaxWidth === 'number'
				? DEFAULT_WIDTH_STEPS
				: DEFAULT_FULL_WIDTH_STEPS)
		).map((step) => ({ width: step, height: parseInt(step / aspectRatio) })),
	];

	const retinaSizes = Array.from(
		// De-duplicate sizes with a Set
		new Set(
			[
				...baseSizes,
				...baseSizes.map((sizeObj) => ({
					width: sizeObj.width * 2,
					height: sizeObj.height * 2,
				})),
				...baseSizes.map((sizeObj) => ({
					width: sizeObj.width * 3,
					height: sizeObj.height * 3,
				})),
			].map(JSON.stringify)
		)
	)
		.map(JSON.parse)
		.sort((a, b) => a.width - b.width) // Lowest to highest
		.filter(
			(sizeObj) =>
				// Exclude sizes 10% or more larger than the image itself. Sizes slightly larger
				// than the image are included to ensure we always get closest to the highest
				// quality for an image. Sanity's CDN won't scale the image above its limits.
				sizeObj.width <= imageDimensions.width * 1.1 &&
				// Exclude those larger than width's retina (x3)
				sizeObj.width <= maxWidth * 3
		)
		// Exclude those with a value difference to their following size smaller than `minimumWidthStep`
		// This ensures we don't have too many srcSet variations, polluting the HTML
		.filter((size, i, arr) => {
			const nextSize = arr[i + 1];
			if (nextSize) {
				return nextSize.width / size.width > minimumWidthStep + 1;
			}

			return true;
		});

	return {
		alt: image.alt || '',
		// Use the original image as the `src` for the <img>
		src: builder.size(maxWidth, parseInt(maxWidth / aspectRatio)).url(),
		// Build a `{URL} {SIZE}w, ...` string for the srcset
		srcset: retinaSizes
			.map(
				(size) =>
					`${builder.size(size.width, size.height).url()} ${size.width}w`
			)
			.join(', '),
		sizes:
			maxWidth === '100vw'
				? '100vw'
				: sizes || `(max-width: ${maxWidth}px) 100vw, ${maxWidth}px`,
		// Tell the browser what's the size of the image so it can calculate aspect ratios
		width: retinaSizes[0].width,
		height: retinaSizes[0].height,
	};
}
