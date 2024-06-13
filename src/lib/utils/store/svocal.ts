import type { NavigationTarget } from '$lib/components/layout/navigation/types';
import type { Timetable } from '$lib/components/settings/timetable/types';
import type { OwnUserDetails } from '$lib/dlool/userInfo/own';
import type { LocaleAbbr } from '$lib/i18n/i18n';
import { localstorage } from 'svocal';

const sv = {
	'settings.nav.entries': [
		'settings.nav.entries',
		() =>
			[
				'homework',
				'notes',
				'calendar',
				'launcher'
			] satisfies NavigationTarget[] as NavigationTarget[]
	],
	'settings.nav.texts': ['settings.nav.texts', () => true],
	'settings.weekStartsOn': ['settings.weekStartsOn', () => 1 as 0 | 1 | 2 | 3 | 4 | 5 | 6],
	'i18n.currentlang': ['i18n.currentlang', () => 'de' satisfies LocaleAbbr as LocaleAbbr],
	'api.url': ['api.url', () => 'http://localhost:3000'],

	'auth.refresh.token': ['auth.refresh.token', () => null satisfies string | null as string | null],
	'auth.refresh.expires': [
		'auth.refresh.expires',
		() => null satisfies number | null as number | null
	],
	'auth.access.token': ['auth.access.token', () => null satisfies string | null as string | null],
	'auth.access.expires': [
		'auth.access.expires',
		() => null satisfies number | null as number | null
	],
	'auth.access.generatedBy': [
		'auth.access.generatedBy',
		() => null satisfies null | 'refreshToken' | 'login' as null | 'refreshToken' | 'login'
	],
	'dlool.ownUserDetails': ['dlool.ownUserDetails', () => null as null | OwnUserDetails],
	'settings.homework.transparency': ['settings.homework.transparency', () => 0.6],
	'settings.color': ['settings.color', () => ({}) as Record<string, string>],
	'settings.color.showHex': ['settings.color.showHex', () => false],
	'settings.timetable': [
		'settings.timetable',
		() =>
			({
				sun: [],
				mon: [],
				tue: [],
				wed: [],
				thu: [],
				fri: [],
				sat: []
			}) satisfies Timetable as Timetable
	],
	'settings.launcher.outlineWidth': [
		'settings.launcher.outlineWidth',
		() => 2
	]
} as const;

type SvocalKey = keyof typeof sv;

export const svocal = <T extends SvocalKey>(key: T) => {
	const entry = sv[key];

	const svocalKey = entry[0];
	const fallback = entry[1]() as ReturnType<(typeof sv)[T][1]>;

	return localstorage(svocalKey, fallback);
};

const svNoCallback = {
	'filter.school': null as string | null,
	'filter.classes': [] as string[]
} as const;

type SvocalNoFallback = keyof typeof svNoCallback;
type SvocalFallback<T extends SvocalNoFallback> = (typeof svNoCallback)[T];

export const svocalWithFallback = <T extends SvocalNoFallback, F extends SvocalFallback<T>>(
	key: T,
	fallback: F
) => localstorage<F>(key, fallback);
