import { client } from '$lib/utils/sanityClient';

export async function load() {
	const { modules } = await client.fetch('*[_type == "home"][0]');

	return {
		modules,
	};
}
