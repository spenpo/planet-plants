<script lang="ts">
	import { page } from '$app/state';
	import { nav, site } from '$lib/content';
	import Logo from '$lib/components/Logo.svelte';

	let open = $state(false);

	function isActive(href: string) {
		return href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
	}
</script>

<header class="sticky top-0 z-20 border-b border-sand/80 bg-cream/90 backdrop-blur">
	<div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
		<a
			href="/"
			class="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
		>
			<Logo />
		</a>

		<nav class="hidden items-center gap-8 md:flex" aria-label="Primary">
			{#each nav as item (item.href)}
				<a
					href={item.href}
					class={[
						'text-sm font-medium tracking-wide',
						isActive(item.href) ? 'text-leaf-dark' : 'text-ink/70 hover:text-ink'
					]}
				>
					{item.label}
				</a>
			{/each}
			<a
				href="/pricing"
				class="rounded-full bg-leaf-dark px-4 py-2 text-sm font-semibold text-cream hover:bg-ink"
			>
				Get a plant
			</a>
		</nav>

		<button
			type="button"
			class="inline-flex size-10 items-center justify-center rounded-md border border-sand md:hidden"
			aria-expanded={open}
			aria-controls="mobile-nav"
			onclick={() => (open = !open)}
		>
			<span class="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
			<span class="flex flex-col gap-1.5" aria-hidden="true">
				<span class="block h-0.5 w-5 bg-ink"></span>
				<span class="block h-0.5 w-5 bg-ink"></span>
				<span class="block h-0.5 w-3 bg-ink"></span>
			</span>
		</button>
	</div>

	<nav
		id="mobile-nav"
		class={['border-t border-sand px-5 py-4 md:hidden', !open && 'hidden']}
		aria-label="Mobile"
	>
		<ul class="flex flex-col gap-3">
			{#each nav as item (item.href)}
				<li>
					<a
						href={item.href}
						class="block py-1 text-base font-medium"
						onclick={() => (open = false)}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
		<p class="mt-4 text-sm text-ink/60">{site.tagline}</p>
	</nav>
</header>
