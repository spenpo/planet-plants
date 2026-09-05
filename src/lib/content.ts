export const site = {
	name: 'Plants',
	tagline: 'Bring the greenhouse home.',
	description:
		'The same plants from the app, laid out for the web. White cards, quiet type, and a collection that fits real rooms.'
};

export const nav = [
	{ href: '/#featured', label: 'Indoor' },
	{ href: '/#featured', label: 'Outdoor' },
	{ href: '/#featured', label: 'Cactus' },
	{ href: '/#featured', label: 'Aromatic' }
] as const;

export const featured = [
	{
		name: 'Phalaenopsis',
		caption: 'Indoor orchid',
		price: '28,00€',
		image:
			'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80'
	},
	{
		name: 'Echeveria',
		caption: 'Compact succulent',
		price: '12,99€',
		image:
			'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80'
	},
	{
		name: 'Areca palm',
		caption: 'Bright rooms',
		price: '34,00€',
		image:
			'https://images.unsplash.com/photo-1614594895170-1762004822d3?auto=format&fit=crop&w=600&q=80'
	}
] as const;

export const popular = [
	{
		name: 'Snake plant',
		caption: 'Low light',
		price: '18,00€',
		image:
			'https://images.unsplash.com/photo-1593482892290-f54927ae2b7a?auto=format&fit=crop&w=200&q=80'
	},
	{
		name: 'Monstera',
		caption: 'Bright indirect',
		price: '24,50€',
		image:
			'https://images.unsplash.com/photo-1614594805320-e6a734357fa3?auto=format&fit=crop&w=200&q=80'
	},
	{
		name: 'Pothos',
		caption: 'Easy care',
		price: '11,99€',
		image:
			'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=200&q=80'
	}
] as const;

export const trust = [
	{ icon: '🚚', label: 'Free shipping over 40€' },
	{ icon: '🪴', label: 'Care guides with every plant' },
	{ icon: '✓', label: '30-day happy plant guarantee' }
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
