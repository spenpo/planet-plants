<script lang="ts">
	import { featured, popular, site, trust } from '$lib/content';
</script>

<svelte:head>
	<title>{site.name} — {site.tagline}</title>
</svelte:head>

<section
	class="mx-auto grid max-w-[1440px] items-center gap-10 px-8 py-10 md:grid-cols-2 md:gap-14 md:px-16 md:py-14"
>
	<div class="max-w-xl">
		<p class="text-sm font-semibold text-leaf">Indoor collection · New season</p>
		<h1 class="mt-4 font-display text-4xl leading-[1.08] font-bold text-balance md:text-6xl">
			Bring the greenhouse home.
		</h1>
		<p class="mt-5 max-w-md text-lg leading-relaxed text-muted">
			The same plants from the app, laid out for the web. White cards, quiet type, and a collection
			that fits real rooms.
		</p>
		<div class="mt-8 flex flex-wrap gap-3">
			<a
				href="#featured"
				class="rounded-full bg-ink px-5 py-3 text-[15px] font-bold text-white hover:bg-leaf"
			>
				Browse collection
			</a>
			<a
				href="/about"
				class="rounded-full border border-ink bg-white px-5 py-3 text-[15px] font-semibold hover:bg-white/70"
			>
				How it works
			</a>
		</div>
	</div>

	<div class="relative mx-auto w-full max-w-[560px]">
		<div
			class="pointer-events-none absolute -top-6 -left-8 size-40 rounded-full bg-sage/20 md:size-52"
			aria-hidden="true"
		></div>
		<div
			class="pointer-events-none absolute -right-4 -bottom-8 size-28 rounded-full bg-lilac/35 md:size-40"
			aria-hidden="true"
		></div>

		<div class="relative overflow-hidden rounded-[40px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
			<img
				src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=80"
				alt="Seasonal indoor plant in a black pot"
				class="aspect-[11/12] w-full object-cover"
			/>
			<span
				class="absolute top-5 left-5 rounded-full bg-leaf px-4 py-2 text-[13px] font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
			>
				Season pick
			</span>
			<aside
				class="absolute right-5 bottom-5 max-w-[210px] rounded-[20px] bg-white/95 p-4 shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
			>
				<p class="text-xs font-semibold text-leaf">Care tip</p>
				<p class="mt-1 text-[13px] leading-snug text-muted">
					Bright indirect light, water when the top inch is dry.
				</p>
			</aside>
		</div>
	</div>
</section>

<section class="bg-white">
	<div
		class="mx-auto grid max-w-[1440px] gap-6 px-8 py-6 md:grid-cols-3 md:gap-8 md:px-16 md:py-7"
	>
		{#each trust as item (item.label)}
			<div class="flex items-center gap-2.5 text-[15px] font-medium text-muted">
				<span class="text-ink" aria-hidden="true">{item.icon}</span>
				<span>{item.label}</span>
			</div>
		{/each}
	</div>
</section>

<section id="featured" class="mx-auto max-w-[1440px] px-8 py-14 md:px-16 md:py-16">
	<span id="indoor" class="sr-only">Indoor</span>
	<span id="outdoor" class="sr-only">Outdoor</span>
	<span id="cactus" class="sr-only">Cactus</span>
	<span id="aromatic" class="sr-only">Aromatic</span>
	<h2 class="font-display text-3xl font-bold md:text-4xl">This week</h2>
	<p class="mt-2 text-base text-muted">Hand-picked for bright rooms this week</p>

	<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each featured as plant (plant.name)}
			<article class="relative overflow-hidden rounded-[32px] bg-white shadow-sm">
				<img src={plant.image} alt={plant.name} class="aspect-[4/5] w-full object-cover" />
				<div class="space-y-1 p-5 pb-16">
					<h3 class="text-xl font-medium">{plant.name}</h3>
					<p class="text-sm text-hint">{plant.caption}</p>
					<p class="pt-1 text-lg font-semibold">{plant.price}</p>
				</div>
				<button
					type="button"
					class="absolute right-5 bottom-5 inline-flex size-[42px] items-center justify-center rounded-lg bg-ink text-xl text-white"
					aria-label="Add {plant.name}"
				>
					+
				</button>
			</article>
		{/each}
	</div>
</section>

<section class="mx-auto max-w-[1440px] px-8 pb-14 md:px-16">
	<h2 class="font-display text-3xl font-bold">Popular</h2>
	<div class="mt-6 max-w-md rounded-[28px] bg-white p-4 shadow-sm">
		<ul class="flex flex-col gap-2">
			{#each popular as plant (plant.name)}
				<li class="flex items-center gap-4 rounded-2xl px-2 py-2">
					<img src={plant.image} alt="" class="size-14 rounded-xl object-cover" />
					<div class="min-w-0 flex-1">
						<p class="truncate text-lg">{plant.name}</p>
						<p class="text-sm text-hint">{plant.caption}</p>
					</div>
					<p class="text-sm font-semibold">{plant.price}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="bg-soft">
	<div
		class="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 px-8 py-10 md:flex-row md:items-center md:px-16"
	>
		<div class="max-w-xl">
			<h2 class="font-display text-2xl font-bold md:text-[24px]">
				Get quiet plant tips in your inbox
			</h2>
			<p class="mt-2 text-[15px] text-muted">
				Seasonal picks, watering reminders, and styling ideas — no spam.
			</p>
		</div>
		<a
			href="mailto:hello@example.com"
			class="rounded-full bg-leaf px-6 py-3 text-[15px] font-semibold text-white hover:bg-ink"
		>
			Subscribe
		</a>
	</div>
</section>
