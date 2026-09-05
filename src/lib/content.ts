export const site = {
	name: 'Palnet Plants',
	tagline: 'Houseplants, delivered.',
	description:
		'A demo marketing site for Palnet Plants — curated indoor plants with care guides and doorstep delivery.'
};

export const nav = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/pricing', label: 'Pricing' }
] as const;

export const features = [
	{
		title: 'Curated, not crowded',
		body: 'A short list of plants that actually thrive indoors. No filler, no mystery species.'
	},
	{
		title: 'Care that sticks',
		body: 'Every order includes a one-page care card: light, water, and what to do in the first two weeks.'
	},
	{
		title: 'Delivered ready to live',
		body: 'Shipped in protective packaging with soil already settled. Unpack, place, and leave it be.'
	}
] as const;

export const steps = [
	{
		n: '01',
		title: 'Pick a plant',
		body: 'Filter by light, size, and how involved you want to be.'
	},
	{
		n: '02',
		title: 'We pack it',
		body: 'Each plant is inspected, watered, and boxed the morning it ships.'
	},
	{
		n: '03',
		title: 'You place it',
		body: 'Follow the care card. Most plants settle in within a week.'
	}
] as const;

export const quotes = [
	{
		quote: 'The pothos arrived upright and already putting out a new leaf. That never happens.',
		name: 'Mira K.',
		role: 'Apartment, low light'
	},
	{
		quote: 'I wanted one plant I would not kill. The care card is the whole product, honestly.',
		name: 'James O.',
		role: 'First-time plant person'
	},
	{
		quote: 'We ordered three for the studio. They still look like the photos two months later.',
		name: 'Elena V.',
		role: 'Small office'
	}
] as const;

export const plans = [
	{
		name: 'Starter',
		price: '$28',
		cadence: 'one plant',
		blurb: 'A hardy plant plus a care card. Good if you want to try us once.',
		perks: ['One 6-inch plant', 'Printed care card', 'Free shipping over $40'],
		featured: false
	},
	{
		name: 'Grove',
		price: '$48',
		cadence: '/ quarter',
		blurb: 'A seasonal plant, swapped or added to your collection four times a year.',
		perks: ['Seasonal plant drop', 'Skip or swap any cycle', 'Priority shipping'],
		featured: true
	},
	{
		name: 'Greenhouse',
		price: '$96',
		cadence: '/ quarter',
		blurb: 'Larger statement plants and replacements if something fails in the first 30 days.',
		perks: ['8-inch or larger plants', '30-day replacement', 'Care desk on chat'],
		featured: false
	}
] as const;
