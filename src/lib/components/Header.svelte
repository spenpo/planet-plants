<script lang="ts">
	import { page } from '$app/state';
	import { nav } from '$lib/content';
	import Logo from '$lib/components/Logo.svelte';

	let open = $state(false);

	function isActive(href: string) {
		if (href.includes('indoor')) return page.url.pathname === '/';
		return false;
	}
</script>

<header class="bg-cream">
	<div class="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-8 py-6 md:px-16">
		<a
			href="/"
			class="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
		>
			<Logo />
		</a>

		<nav class="hidden items-center gap-7 md:flex" aria-label="Primary">
			{#each nav as item (item.href)}
				<a
					href={item.href}
					class={[
						'text-[15px] tracking-wide',
						isActive(item.href) ? 'font-bold text-ink' : 'font-medium text-muted hover:text-ink'
					]}
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<a
			href="/pricing"
			class="hidden rounded-full bg-ink px-5 py-3 text-[15px] font-bold text-white hover:bg-leaf md:inline-flex"
		>
			Shop plants
		</a>

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
			<li>
				<a
					href="/pricing"
					class="mt-2 inline-flex rounded-full bg-ink px-4 py-2 text-sm font-bold text-white"
					onclick={() => (open = false)}
				>
					Shop plants
				</a>
			</li>
		</ul>
	</nav>
</header>
