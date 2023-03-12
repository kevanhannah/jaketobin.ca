import { client } from '$lib/utils/sanityClient';

export async function load() {
  const { modules } = await client.fetch(
    '*[_type == "home" && _id == "home"][0]{ modules }',
  );

  return {
    modules,
  };
}
