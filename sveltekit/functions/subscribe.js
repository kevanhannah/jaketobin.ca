async function handler(event) {
	// Only allow POST
	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			body: 'Method not allowed',
		};
	}

	function generateError({ statusCode, message }) {
		return {
			statusCode: statusCode || 500,
			body: message,
		};
	}

	try {
		const { email, syrup } = JSON.parse(event.body);

		if (syrup) {
			return {
				statusCode: 400,
				body: JSON.stringify({ message: 'Cannot submit (Error 474)' }),
			};
		}

		if (!email) {
			return generateError({ message: 'Missing email' });
		}

		const subscriber = {
			email_address: email,
			status: 'subscribed',
		};
		const creds = `key:${process.env.MAILCHIMP_API_KEY}`;
		const res = await fetch(
			`https://${process.env.MAILCHIMP_DATA_CENTRE}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/`,
			{
				method: 'POST',
				headers: {
					Accept: '*/*',
					'Content-Type': 'application/json',
					Authorization: `Basic ${Buffer.from(creds).toString('base64')}`,
				},
				body: JSON.stringify(subscriber),
			}
		);

		const data = await res.json();

		if (!res.ok) {
			return {
				statusCode: data.status,
				body: JSON.stringify({ message: data.detail }),
			};
		}

		return {
			statusCode: 200,
			body: JSON.stringify({
				message: "You're subscribed to the newsletter!",
				detail: data,
			}),
		};
	} catch (err) {
		return {
			statusCode: 500,
			body: JSON.stringify({ message: err.message }),
		};
	}
}

export { handler };
