<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';
	import Header from '$lib/layout/Header.svelte';
	import Introduction from '$lib/layout/Introduction.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import Chart from '$lib/charts/layout/Chart.svelte';

	import Top20 from '$lib/charts/Top20.svelte';
	import Top20USD from '$lib/charts/Top20USD.svelte';
	import Top20Distribution from '$lib/charts/Top20Distribution.svelte';
	import Top20History from '$lib/charts/Top20History.svelte';
	import Top20Actions from '$lib/charts/Top20Actions.svelte';
	import Top20Swaps from '$lib/charts/Top20Swaps.svelte';
	import Top20Staked from '$lib/charts/Top20Staked.svelte';
	import Top20Pools from '$lib/charts/Top20Pools.svelte';
	import ChartLanguage from '$lib/charts/language/ChartLanguage.svelte';

	//export let data: PageData;

</script>

<body>
	<div class="flex justify-center 2xl:mx-96 3xl:mx-[550px]">
		<div class="grid grid-cols-9 gap-2">
			<div class="col-start-2	col-span-7">
				<Header />
			</div>
			<div class="row-start-2 col-start-2 col-span-7">
				<Introduction />
			</div>
			
				<div class="col-span-2 justify-self-center">
					<Footer />
				</div>
			</div>
		</div>
</body>
