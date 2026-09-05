<script lang="ts">
	import { site } from '$lib/content';
</script>

<svelte:head>
	<title>About — {site.name}</title>
</svelte:head>

<article class="mx-auto max-w-3xl px-5 py-16 md:py-24">
	<p class="text-sm font-semibold tracking-[0.18em] text-leaf uppercase">About</p>
	<h1 class="mt-3 font-display text-5xl">Grown for rooms, not nurseries.</h1>
	<div class="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
		<p>
			Palnet Plants is a demo brand for a design-to-code walkthrough. The copy is placeholder. The
			layout is a fast SvelteKit shell so a later pass can replace the homepage from Penpot.
		</p>
		<p>
			The idea is simple: fewer SKUs, clearer care, packing that does not snap stems. We would
			source from regional growers and ship early in the week so plants are not sitting in a truck
			over the weekend.
		</p>
		<p>
			If you are running the demo, leave this page as-is. The homepage is the surface meant to match
			the focused Penpot frame.
		</p>
	</div>
</article>
