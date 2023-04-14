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
		const { email, syrup } = JSON.parse(event.body);

		if (syrup) {
			return generateError({
				statusCode: 400,
				message: 'Cannot submit (Error 474)',
			});
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
			if (data.status === 400 && data.title === 'Member Exists') {
				return generateError({
					statusCode: 400,
					message: 'This email address is already subscribed.',
				});
			}

			return generateError({ statusCode: data.status, message: data.detail });
		}

		return {
			statusCode: 200,
			body: JSON.stringify({
				message: "You're subscribed to the newsletter!",
				detail: data,
			}),
		};
	} catch (err) {
		return generateError({ statusCode: 500, message: err.message });
	}
}

export { handler };
