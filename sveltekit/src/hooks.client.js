import { PUBLIC_SENTRY_DSN } from '$env/static/public';
import * as SentrySvelte from '@sentry/svelte';
import { BrowserTracing } from '@sentry/browser';

SentrySvelte.init({
	dsn: PUBLIC_SENTRY_DSN,
	integrations: [new BrowserTracing()],
	tracesSampleRate: 1.0,
});

SentrySvelte.setTag('svelteKit', 'browser');

// This will catch errors in load functions from +page.ts files
export const handleError = ({ error, event }) => {
	SentrySvelte.captureException(error, { contexts: { sveltekit: { event } } });

	return {
		message: error.message,
	};
};
