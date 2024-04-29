import type { I18nDict } from './types';

const en = {
	'nav.homework': 'Homework',
	'nav.calendar': 'Calendar',
	'nav.notes': 'Notes',
	'nav.login': 'Login',
	'nav.register': 'Register',
	'nav.launcher': 'Launcher',

	'home.subtitle': 'Next generation homework for your entire class',
	'home.digitalEra': 'A homework management system for the digital era',
	'home.quick.getStarted': '🚀 Get Started',
	'home.quick.why': 'Why Dlool?',
	'home.quick.github': 'View on GitHub',
	'home.logo.alt': 'The beautifull Dlool Logo',
	'home.homeworkBut': 'Homeworkbooks but',
	'home.homeworkBut.collaborative': 'Collaborative',
	'home.homeworkBut.collaborative.1': 'One users writes the data into Dlool',
	'home.homeworkBut.collaborative.2': 'Everybody can see it',
	'home.homeworkBut.collaborative.3':
		'To prevent cybermobbing it is public, no account is needed to view data',
	'home.homeworkBut.collaborative.4': 'Other registered users can edit it to correct errors',
	'home.homeworkBut.collaborative.5': 'No need to ask for homework in messangers',

	'home.homeworkBut.convenient': 'Convenient',
	'home.homeworkBut.convenient.1': 'You can see your assignments everytime from everywhere',
	'home.homeworkBut.convenient.2':
		'Thanks to subject specific icons and colors it is easy to identify subjects at first glance',
	'home.homeworkBut.convenient.3': 'The timetable and presets allow for quick and precice edits',
	'home.homeworkBut.convenient.4': 'Export your data as ical or todo.txt',
	'home.homeworkBut.convenient.5': 'Use a siri-shortcut to integrate Dlool with apple reminders',

	'home.homeworkBut.free': 'Free',
	'home.homeworkBut.free.1': 'Dlool is completly free, no hidden costs!',
	'home.homeworkBut.free.2': 'It is Open-Source Software liscenced under the GPL',
	'home.homeworkBut.free.3': 'No spying, no ads, no abos!',
	'home.homeworkBut.free.4': 'Free to use API',

	'home.more': 'Discover more',
	'home.more.gh.frontend': 'Frontend on GitHub',
	'home.more.gh.backend': 'Backend on GitHub',
	'home.more.mastodon': '#dlool on Mastodon',
	'home.more.ccc': 'My (German) Lightning-Talk',

	'home.boxes.crossPlattform': 'Cross plattform',
	'home.boxes.crossPlattform.description':
		'As a progressive web app Dlool can be used on all devices and all operating systems',
	'home.boxes.collaborative': 'Collaborative',
	'home.boxes.collaborative.description':
		'The collaborative idea has been a focal point from the very beginning.',
	'home.boxes.customizable': 'Customizable',
	'home.boxes.customizable.description': 'A lot of settings allow you to it really your Dlool',
	'home.boxes.libre': 'Libre',
	'home.boxes.libre.description':
		'Every single line of code as well as all libraries and APIs in use are free Software ',
	'home.boxes.students': 'Made for students',
	'home.boxes.students.description': 'Dlool was made by students for students',
	'home.boxes.easy': 'Easy & fast to use',
	'home.boxes.easy.description':
		'Eventhough Dlool has many advanced features it is still very easy and intuitive to use'
} as const satisfies I18nDict;

export default en;
