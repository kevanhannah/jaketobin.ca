import { client } from '$lib/utils/sanityClient';
import singletonQuery from '$lib/utils/singletonQuery';

export async function load() {
  const { pageContent } = await client.fetch(singletonQuery('home'));

  return {
    pageContent
  };
}
