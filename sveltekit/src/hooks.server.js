import { PUBLIC_SENTRY_DSN } from '$env/static/public';
import * as SentryNode from '@sentry/node';
import '@sentry/tracing';

SentryNode.init({
	dsn: PUBLIC_SENTRY_DSN,
	tracesSampleRate: 1.0,
	integrations: [new SentryNode.Integrations.Http()],
});

SentryNode.setTag('svelteKit', 'server');

export const handleError = ({ error, event }) => {
	SentryNode.captureException(error, { contexts: { sveltekit: { event } } });

	return {
		message: error.message,
	};
};
