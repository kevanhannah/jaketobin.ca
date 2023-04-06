import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { dashboardTool } from '@sanity/dashboard';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { dashboardConfig } from './dashboardConfig';
import { deskConfig } from './deskConfig';

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

// Define the singleton document types
const singletonTypes = new Set(['home', 'settings']);

export default defineConfig({
	name: 'default',
	title: 'Jake Tobin',
	projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
	dataset: import.meta.env.SANITY_STUDIO_DATASET,
	plugins: [
		dashboardTool({
			widgets: dashboardConfig,
		}),
		deskTool({
			structure: deskConfig,
		}),
		visionTool(),
	],
	schema: {
		types: schemaTypes,
		// Filter out singleton types from the global “New document” menu options
		templates: (templates) =>
			templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
	},
	document: {
		// For singleton types, filter out actions that are not explicitly included
		// in the `singletonActions` list defined above
		actions: (input, context) =>
			singletonTypes.has(context.schemaType)
				? input.filter(({ action }) => action && singletonActions.has(action))
				: input,
	},
});
