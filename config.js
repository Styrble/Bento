// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Styrble',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'e6a6499febc8bc095c95423f87cdd4c5', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '52.52000660',
	defaultLongitude: '13.40495400',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'chatgpt',
			icon: 'bot',
			link: 'https://chat.openai.com/',
		},
		{
			id: '2',
			name: 'freemediaheckyeah',
			icon: 'play',
			link: 'https://fmhy.pages.dev/',
		},
		{
			id: '3',
			name: 'modrinth',
			icon: 'wrench',
			link: 'https://modrinth.com/',
		},
		{
			id: '4',
			name: 'nexusmods',
			icon: 'globe-2',
			link: 'https://www.nexusmods.com/',
		},
		{
			id: '5',
			name: 'pcgamingwiki',
			icon: 'pc-case',
			link: 'https://www.pcgamingwiki.com/wiki/Home/',
		},
		{
			id: '6',
			name: 'youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/feed/subscriptions',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		    {
		      	icon: 'swatch-book',
		      	id: '1',
		      	links: [
		        	{
		          		name: 'atlas os',
		          		link: 'https://atlasos.net/',
		        	},
		        	{
		          		name: 'rectify11',
		          		link: 'https://rectify11.net/',
		        	},
		        	{
		         		name: 'steam skins',
		          		link: 'https://steamskins.pages.dev/guides/installation/',
		        	},
		        	{
		          		name: 'spicetify',
		          		link: 'https://spicetify.app/docs/getting-started/',
		        	},
		      	],
		},
		{
			icon: 'graduation-cap',
			id: '2',
			links: [
				{
					name: 'boxup',
					link: 'https://boxup.uni-potsdam.de/',
				},
				{
					name: 'gitup',
					link: 'https://gitup.uni-potsdam.de/',
				},
				{
					name: 'moodle',
					link: 'https://moodle2.uni-potsdam.de/my/',
				},
				{
					name: 'puls',
					link: 'https://puls.uni-potsdam.de/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
	],
};
