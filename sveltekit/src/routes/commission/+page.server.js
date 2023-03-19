import { client } from '$lib/utils/sanityClient';

export async function load() {
	const { content, image } = await client.fetch(
		'*[_type == "commission"][0]{ image, content[]{ _type == "portfolioPreview" => @{ _key, _type, items[]-> { images }, link { link -> { slug }, text } }, _type != "portfolioPreview" => @, } }',
	);

	return {
    content,
    image,
  };
}
