import { createEmailTemplate } from './src/createEmailTemplate';

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
			style = '',
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

		const formdata = new FormData();
		formdata.append('from', process.env.MAILGUN_FROM_ADDRESS);
		formdata.append('to', process.env.MAILGUN_TO_ADDRESS);
		formdata.append(
			'subject',
			`Custom illustration request: ${commissionInfo.firstName} ${commissionInfo.lastName}`
		);
		formdata.append(
			'html',
			createEmailTemplate({
				description,
				dueDate,
				email,
				firstName,
				framed,
				frameColor,
				lastName,
				size,
				style,
			})
		);

		const creds = `api:${process.env.MAILGUN_API_KEY}`;
		const res = await fetch(
			`https://api.mailgun.net/v3/${process.env.MAILGUN_MAIL_DOMAIN}/messages`,
			{
				method: 'POST',
				headers: {
					Authorization: `Basic ${Buffer.from(creds).toString('base64')}`,
				},
				body: formdata,
			}
		);

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
