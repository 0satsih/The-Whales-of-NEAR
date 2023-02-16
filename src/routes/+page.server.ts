import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (async ({ fetch }) => {
    const res = await fetch(`./src/lib/data/data.json`);
    const item = await res.json();
    return { item }
  }) satisfies PageServerLoad;