<script lang="ts">
	import { features, quotes, site, steps } from '$lib/content';
</script>

<svelte:head>
	<title>{site.name} — {site.tagline}</title>
</svelte:head>

<section class="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
	<div>
		<p class="text-sm font-semibold tracking-[0.18em] text-leaf uppercase">
			Indoor plants, shipped
		</p>
		<h1 class="mt-4 font-display text-5xl leading-[1.1] text-balance md:text-6xl">
			Bring a little jungle home.
		</h1>
		<p class="mt-5 max-w-md text-lg leading-relaxed text-ink/75">
			Healthy houseplants chosen for real apartments. Care cards included. No greenhouse degree
			required.
		</p>
		<div class="mt-8 flex flex-wrap gap-3">
			<a
				href="/pricing"
				class="rounded-full bg-leaf-dark px-5 py-3 text-sm font-semibold text-cream hover:bg-ink"
			>
				See plans
			</a>
			<a
				href="/about"
				class="rounded-full border border-sand px-5 py-3 text-sm font-semibold hover:bg-sand/50"
			>
				How we grow
			</a>
		</div>
	</div>
	<div class="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand">
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#3d7a58,transparent_55%),radial-gradient(circle_at_80%_80%,#1b4332,transparent_50%)]"
		></div>
		<p class="absolute right-6 bottom-6 left-6 font-display text-3xl text-cream/95">
			Placeholder hero. Swap this homepage with the Penpot design during the demo.
		</p>
	</div>
</section>

<section class="border-y border-sand bg-white/40">
	<div class="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
		{#each features as feature (feature.title)}
			<article>
				<h2 class="font-display text-2xl">{feature.title}</h2>
				<p class="mt-3 leading-relaxed text-ink/70">{feature.body}</p>
			</article>
		{/each}
	</div>
</section>

<section class="mx-auto max-w-6xl px-5 py-16 md:py-24">
	<h2 class="font-display text-4xl">Three steps, then you water it.</h2>
	<ol class="mt-10 grid gap-8 md:grid-cols-3">
		{#each steps as step (step.n)}
			<li class="rounded-2xl border border-sand bg-white/50 p-6">
				<p class="font-display text-sm text-leaf">{step.n}</p>
				<h3 class="mt-2 text-xl font-semibold">{step.title}</h3>
				<p class="mt-2 text-ink/70">{step.body}</p>
			</li>
		{/each}
	</ol>
</section>

<section class="bg-leaf-dark text-cream">
	<div class="mx-auto max-w-6xl px-5 py-16 md:py-24">
		<h2 class="font-display text-4xl">People keep the plants.</h2>
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each quotes as item (item.name)}
				<blockquote class="rounded-2xl bg-cream/10 p-6 ring-1 ring-cream/15">
					<p class="text-lg leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
					<footer class="mt-6 text-sm text-cream/70">
						<p class="font-semibold text-cream">{item.name}</p>
						<p>{item.role}</p>
					</footer>
				</blockquote>
			{/each}
		</div>
	</div>
</section>

<section class="mx-auto max-w-3xl px-5 py-20 text-center">
	<h2 class="font-display text-4xl">Ready when you have a sunny corner.</h2>
	<p class="mt-4 text-lg text-ink/70">Start with one plant or a quarterly drop. Cancel whenever.</p>
	<a
		href="/pricing"
		class="mt-8 inline-flex rounded-full bg-leaf-dark px-6 py-3 text-sm font-semibold text-cream hover:bg-ink"
	>
		Choose a plan
	</a>
</section>
