import { createEmailTemplate } from './src/createEmailTemplate';

const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
	username: 'api',
	key: process.env.MAILGUN_API_KEY,
});

async function handler(event) {
	function generateError({ statusCode, message }) {
		return {
			statusCode: statusCode || 500,
			body: JSON.stringify({ message }),
		};
	}

	// Only allow POST
	if (event.httpMethod !== 'POST') {
		return generateError({ statusCode: 405, message: 'Method not allowed' });
	}

	try {
		const { commissionInfo, syrup } = JSON.parse(event.body);
		const {
			firstName = '',
			lastName = '',
			email = '',
			dueDate = '',
			size = '',
			framed = false,
			frameColor = undefined,
			description = '',
		} = commissionInfo;

		if (syrup) {
			return generateError({
				statusCode: 400,
				message: 'Cannot submit (Error 474)',
			});
		}

		const res = await mg.messages.create('mail.jaketobin.ca', {
			from: 'jaketobin.ca <noreply@mail.jaketobin.ca>',
			to: [process.env.COMMISSION_REQUEST_EMAIL],
			subject: `Custom illustration request: ${commissionInfo.firstName} ${commissionInfo.lastName}`,
			html: createEmailTemplate({
				description,
				dueDate,
				email,
				firstName,
				framed,
				frameColor,
				lastName,
				size,
			}),
		});

		if (res.status !== 200) {
			return generateError({ statusCode: res.status, message: res.message });
		}

		return {
			statusCode: 200,
			body: JSON.stringify({
				message: "Request submitted! I'll reach out to you soon.",
			}),
		};
	} catch (err) {
		return generateError({ statusCode: 500, message: err.message });
	}
}

export { handler };
