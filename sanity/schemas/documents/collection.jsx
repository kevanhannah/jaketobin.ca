import React from 'react';
import pluralize from 'pluralize-esm';
import { PackageIcon } from '@sanity/icons';
import { CollectionHiddenInput } from '../../components/inputs/CollectionHidden';
import { ShopifyIcon } from '../../components/icons/Shopify';
import { ShopifyDocumentStatus } from '../../components/media/ShopifyDocumentStatus';

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

export const collection = {
	name: 'collection',
	title: 'Collection',
	type: 'document',
	icon: PackageIcon,
	groups: GROUPS,
	fields: [
		// Product hidden status
		{
			name: 'hidden',
			type: 'string',
			components: {
				field: CollectionHiddenInput,
			},
			hidden: ({ parent }) => {
				const isDeleted = parent?.store?.isDeleted;
				return !isDeleted;
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
		// Shopify collection
		{
			name: 'store',
			title: 'Shopify',
			type: 'shopifyCollection',
			description: 'Collection data from Shopify (read-only)',
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
	],
	preview: {
		select: {
			imageUrl: 'store.imageUrl',
			isDeleted: 'store.isDeleted',
			rules: 'store.rules',
			title: 'store.title',
		},
		prepare(selection) {
			const { imageUrl, isDeleted, rules, title } = selection;
			const ruleCount = rules?.length || 0;

			return {
				media: (
					<ShopifyDocumentStatus
						isDeleted={isDeleted}
						type="collection"
						url={imageUrl}
						title={title}
					/>
				),
				subtitle:
					ruleCount > 0
						? `Automated (${pluralize('rule', ruleCount, true)})`
						: 'Manual',
				title,
			};
		},
	},
};
