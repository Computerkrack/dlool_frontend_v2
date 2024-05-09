import { specifcNote } from '$lib/dlool/notes/list';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const data = await specifcNote(params.id);

	if (data.status === 'error' && data.error === 'Note not found') error(404);

	return { data };
};
