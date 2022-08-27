import { supabase } from '$lib/db';
import type { Project } from '$lib/types';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({locals}) {
	if (!locals.user) throw redirect(307, '/login');
	return { user: locals.user };
}