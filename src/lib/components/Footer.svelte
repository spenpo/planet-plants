<script lang="ts">
	import { nav, site } from '$lib/content';
	import Logo from '$lib/components/Logo.svelte';
</script>

<footer class="border-t border-sand bg-leaf-dark text-cream">
	<div class="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr]">
		<div>
			<a href="/" class="inline-block text-cream">
				<Logo />
			</a>
			<p class="mt-4 max-w-sm text-sm leading-relaxed text-cream/75">
				{site.description}
			</p>
		</div>
		<div class="flex flex-col gap-3 text-sm">
			<p class="font-semibold tracking-wide uppercase">Site</p>
			{#each nav as item (item.href)}
				<a href={item.href} class="text-cream/80 hover:text-cream">{item.label}</a>
			{/each}
		</div>
	</div>
	<p class="mx-auto max-w-6xl px-5 pb-8 text-xs text-cream/50">
		Demo project. Not for production use.
	</p>
</footer>
