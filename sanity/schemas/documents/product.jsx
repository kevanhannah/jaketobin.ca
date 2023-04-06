import React from 'react';
import pluralize from 'pluralize-esm';
import { TagIcon } from '@sanity/icons';
import { ShopifyIcon } from '../../components/icons/Shopify';
import { ProductHiddenInput } from '../../components/inputs/ProductHidden';
import { ShopifyDocumentStatus } from '../../components/media/ShopifyDocumentStatus';
import { getPriceRange } from '../../utils/getPriceRange';

const GROUPS = [
	{
		default: true,
		name: 'editorial',
		title: 'Editorial',
	},
	{
		name: 'shopifySync',
		title: 'Shopify sync',
		icon: ShopifyIcon,
	},
	{
		name: 'seo',
		title: 'SEO',
	},
];

export const product = {
	name: 'product',
	title: 'Product',
	type: 'document',
	icon: TagIcon,
	groups: GROUPS,
	fields: [
		{
			name: 'hidden',
			type: 'string',
			components: {
				field: ProductHiddenInput,
			},
			group: GROUPS.map((group) => group.name),
			hidden: ({ parent }) => {
				const isActive = parent?.store?.status === 'active';
				const isDeleted = parent?.store?.isDeleted;
				return !parent?.store || (isActive && !isDeleted);
			},
		},
		// Title (proxy)
		{
			name: 'titleProxy',
			title: 'Title',
			type: 'proxyString',
			options: { field: 'store.title' },
		},
		// Slug (proxy)
		{
			name: 'slugProxy',
			title: 'Slug',
			type: 'proxyString',
			options: { field: 'store.slug.current' },
		},
		// Images
		{
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [{ type: 'module.image' }],
			group: 'editorial',
		},
		// FAQs
		{
			name: 'faqs',
			title: 'FAQs',
			description: 'Set of FAQs to appear beneath the product description',
			type: 'reference',
			to: [{ type: 'faq' }],
			group: 'editorial',
			options: {
				disableNew: true,
			},
			initialValue: () => {
				return {
					_ref: '702fabca-0d3c-44fb-8e77-da57db2d7fa8',
					_type: 'reference',
				};
			},
		},
		// Body
		{
			name: 'body',
			title: 'Editorial content',
			description: 'Additional content related to the product',
			type: 'body',
			group: 'editorial',
		},
		// Store
		{
			name: 'store',
			title: 'Shopify',
			type: 'shopifyProduct',
			description: 'Product data from Shopify (read-only)',
			group: 'shopifySync',
		},
		// SEO
		{
			name: 'seo',
			title: 'SEO',
			type: 'seo.shopify',
			group: 'seo',
		},
	],
	orderings: [
		{
			name: 'titleAsc',
			title: 'Title (A-Z)',
			by: [{ field: 'store.title', direction: 'asc' }],
		},
		{
			name: 'titleDesc',
			title: 'Title (Z-A)',
			by: [{ field: 'store.title', direction: 'desc' }],
		},
		{
			name: 'priceDesc',
			title: 'Price (Highest first)',
			by: [{ field: 'store.priceRange.minVariantPrice', direction: 'desc' }],
		},
		{
			name: 'priceAsc',
			title: 'Title (Lowest first)',
			by: [{ field: 'store.priceRange.minVariantPrice', direction: 'asc' }],
		},
	],
	preview: {
		select: {
			isDeleted: 'store.isDeleted',
			options: 'store.options',
			previewImageUrl: 'store.previewImageUrl',
			priceRange: 'store.priceRange',
			status: 'store.status',
			title: 'store.title',
			variants: 'store.variants',
		},
		prepare(selection) {
			const {
				isDeleted,
				options,
				previewImageUrl,
				priceRange,
				status,
				title,
				variants,
			} = selection;

			const optionCount = options?.length;
			const variantCount = variants?.length;

			const description = [
				variantCount ? pluralize('variant', variantCount, true) : 'No variants',
				optionCount ? pluralize('option', optionCount, true) : 'No options',
			];

			let subtitle = getPriceRange(priceRange);
			if (status !== 'active') {
				subtitle = '(Unavailable in Shopify)';
			}
			if (isDeleted) {
				subtitle = '(Deleted from Shopify)';
			}

			return {
				description: description.join(' / '),
				subtitle,
				title,
				media: (
					<ShopifyDocumentStatus
						isActive={status === 'active'}
						isDeleted={isDeleted}
						type="product"
						url={previewImageUrl}
						title={title}
					/>
				),
			};
		},
	},
};
