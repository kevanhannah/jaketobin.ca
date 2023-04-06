export const shopifyProduct = {
	name: 'shopifyProduct',
	title: 'Shopify',
	type: 'object',
	options: {
		collapsed: false,
		collapsible: true,
	},
	fieldsets: [
		{
			name: 'status',
			title: 'Status',
		},
		{
			name: 'organization',
			title: 'Organization',
			options: {
				columns: 2,
			},
		},
		{
			name: 'variants',
			title: 'Variants',
			options: {
				collapsed: true,
				collapsible: true,
			},
		},
	],
	fields: [
		// Created at
		{
			fieldset: 'status',
			name: 'createdAt',
			title: 'Created at',
			type: 'string',
			readOnly: true,
		},
		// Updated at
		{
			fieldset: 'status',
			name: 'updatedAt',
			title: 'Updated at',
			type: 'string',
			readOnly: true,
		},
		// Product status
		{
			fieldset: 'status',
			name: 'status',
			title: 'Product status',
			type: 'string',
			readOnly: true,
			options: {
				layout: 'dropdown',
				list: ['active', 'archived', 'draft'],
			},
		},
		// Deleted
		{
			fieldset: 'status',
			name: 'isDeleted',
			title: 'Deleted from Shopify?',
			type: 'boolean',
			readOnly: true,
		},
		// Title
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description: 'Title displayed in both cart and checkout',
			readOnly: true,
		},
		// Product ID
		{
			name: 'id',
			title: 'ID',
			type: 'number',
			description: 'Shopify Product ID',
			readOnly: true,
		},
		// Product GID
		{
			name: 'gid',
			title: 'GID',
			type: 'string',
			description: 'Shopify Product GID',
			readOnly: true,
		},
		// Slug
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description: 'Shopify Product handle',
			readOnly: true,
		},
		// Description
		{
			name: 'descriptionHtml',
			title: 'HTML Description',
			type: 'text',
			rows: 5,
			readOnly: true,
		},
		// Product Type
		{
			fieldset: 'organization',
			name: 'productType',
			title: 'Product type',
			type: 'string',
			readOnly: true,
		},
		// Vendor
		{
			fieldset: 'organization',
			name: 'vendor',
			title: 'Vendor',
			type: 'string',
			readOnly: true,
		},
		// Tags
		{
			fieldset: 'organization',
			name: 'tags',
			title: 'Tags',
			type: 'string',
			readOnly: true,
		},
		// Price range
		{
			name: 'priceRange',
			title: 'Price range',
			type: 'object',
			readOnly: true,
			options: {
				columns: 2,
			},
			fields: [
				{
					name: 'minVariantPrice',
					title: 'Min variant price',
					type: 'number',
				},
				{
					name: 'maxVariantPrice',
					title: 'Max variant price',
					type: 'number',
				},
			],
		},
		// Preview Image URL
		{
			name: 'previewImageUrl',
			title: 'Preview Image URL',
			type: 'string',
			description: 'Image displayed in both cart and checkout',
			readOnly: true,
		},
		// Options
		{
			name: 'options',
			title: 'Options',
			type: 'array',
			of: [
				{
					name: 'option',
					title: 'Option',
					type: 'productOption',
				},
			],
			readOnly: true,
		},
		// Variants
		{
			fieldset: 'variants',
			name: 'variants',
			title: 'Variants',
			type: 'array',
			of: [
				{
					title: 'Variant',
					type: 'reference',
					weak: true,
					to: [{ type: 'productVariant' }],
				},
			],
		},
	],
};
