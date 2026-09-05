<script lang="ts">
	import { plans, site } from '$lib/content';
</script>

<svelte:head>
	<title>Pricing — {site.name}</title>
</svelte:head>

<section class="mx-auto max-w-6xl px-5 py-16 md:py-24">
	<p class="text-sm font-semibold tracking-[0.18em] text-leaf uppercase">Pricing</p>
	<h1 class="mt-3 max-w-2xl font-display text-5xl">One plant, or a rhythm.</h1>
	<p class="mt-4 max-w-xl text-lg text-ink/70">
		Placeholder plans for the demo. Nothing here is billed.
	</p>

	<div class="mt-12 grid gap-6 md:grid-cols-3">
		{#each plans as plan (plan.name)}
			<article
				class={[
					'flex flex-col rounded-3xl border p-7',
					plan.featured ? 'border-leaf-dark bg-leaf-dark text-cream' : 'border-sand bg-white/50'
				]}
			>
				<h2 class="font-display text-3xl">{plan.name}</h2>
				<p class="mt-3">
					<span class="text-4xl font-semibold">{plan.price}</span>
					<span class="text-sm opacity-70">{plan.cadence}</span>
				</p>
				<p class="mt-4 text-sm leading-relaxed opacity-80">{plan.blurb}</p>
				<ul class="mt-6 flex flex-1 flex-col gap-2 text-sm">
					{#each plan.perks as perk (perk)}
						<li>{perk}</li>
					{/each}
				</ul>
				<a
					href="/about"
					class={[
						'mt-8 rounded-full px-4 py-2 text-center text-sm font-semibold',
						plan.featured ? 'bg-cream text-leaf-dark' : 'bg-leaf-dark text-cream'
					]}
				>
					Choose {plan.name}
				</a>
			</article>
		{/each}
	</div>
</section>
