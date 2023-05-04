import { error } from '@sveltejs/kit';

export function load() {
	throw error(404, "That page doesn't seem to exist.");
}
