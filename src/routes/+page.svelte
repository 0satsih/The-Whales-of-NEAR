<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';
	import Header from '$lib/layout/Header.svelte';
	import Introduction from '$lib/layout/Introduction.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import Chart from '$lib/charts/layout/Chart.svelte';
	import Divider from '$lib/layout/Divider.svelte';
	import Conclusion from '$lib/layout/Conclusion.svelte';
	import BarChart from '$lib/charts/templates/BarChart.svelte';
	import GroupedBarChart from '$lib/charts/templates/GroupedBarChart.svelte';
	import HorizontalBarChart from '$lib/charts/templates/HorizontalBarChart.svelte';
	import LineChart from '$lib/charts/templates/LineChart.svelte';
	import DoughnutChart from '$lib/charts/templates/DoughnutChart.svelte';
	import ScatterChart from '$lib/charts/templates/ScatterChart.svelte';
	import Table from '$lib/charts/templates/Table.svelte';

	import Top20 from '$lib/charts/Top20.svelte';
	import Top20USD from '$lib/charts/Top20USD.svelte';
	import Top20Distribution from '$lib/charts/Top20Distribution.svelte';
	import Top20History from '$lib/charts/Top20History.svelte';
	import Top20Actions from '$lib/charts/Top20Actions.svelte';
	import Top20Swaps from '$lib/charts/Top20Swaps.svelte';
	import Top20Staked from '$lib/charts/Top20Staked.svelte';
	import Top20Pools from '$lib/charts/Top20Pools.svelte';
	import ChartLanguage from '$lib/charts/language/ChartLanguage.svelte';

	export let data: PageData;

	let view: string = 'Go to Swaps on Avalanche Summary';

	function handleClick() {
		if (view == 'Go to Swaps on Avalanche Summary') {
			view = 'Go to Swaps on Osmosis Summary';
		} else {
			view = 'Go to Swaps on Avalanche Summary';
		}
	}
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
			<div class="row-start-4 col-start-1 col-span-9 mx-2 grid grid-cols-2 gap-2">
				<div>
					<Chart
						title={'NEAR Whales'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/7ccc72bf-5ac3-435d-8b6d-51b2f9626bf7'}
						description={'Top 20 addresses in terms of NEAR held'}
					>
						<div class="h-96" slot="figure">
							<Top20 chart_data={data.TOP_20} />
						</div>
					</Chart>
				</div>
				<div>
					<Chart
						title={'NEAR Whales ($USD)'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/7ccc72bf-5ac3-435d-8b6d-51b2f9626bf7'}
						description={'Top 20 addresses in terms of NEAR held, measured in $USD'}
					>
						<div class="h-96" slot="figure">
							<Top20USD chart_data={data.TOP_20} />
						</div>
					</Chart>
				</div>
				<div class="col-span-2 justify-self-center">
					<ChartLanguage
						><p slot="language">
							There are four addresses that are significantly larger than the rest of the group of
							20 whales, each holding around 20 million NEAR of more, which currently equates to
							over 40 million $USD.
						</p></ChartLanguage
					>
				</div>
				<div>
					<Chart
						title={'Top 20 Balances Distribution'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/7ccc72bf-5ac3-435d-8b6d-51b2f9626bf7'}
						description={''}
					>
						<div class="h-96" slot="figure">
							<Top20Distribution chart_data={data.TOP_20} />
						</div>
					</Chart>
				</div>
				<div>
					<Chart
						title={'NEAR Whales Holdings'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/cd870bf3-ba1e-4ba8-ba22-5cce7645e7c7'}
						description={'History of current NEAR whales'}
					>
						<div class="h-96" slot="figure">
							<Top20History chart_data={data.HISTORY} />
						</div>
					</Chart>
				</div>
				<div class="col-span-2 justify-self-center">
					<ChartLanguage
						><p slot="language">
							Those top address hold ~60% of the NEAR in the top 20 whales. As the chart of the
							right shows, these mega-whales obtained their NEAR more recently as compared to the
							other whales in the list, only obtaining their NEAR since the end of 2022. The other
							whales have much more of a history when it comes to transacting on NEAR.
						</p></ChartLanguage
					>
				</div>
				<div>
					<Chart
						title={'Whale Actions'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/26df78f1-cbc2-4054-97df-ef82a93bd7d6'}
						description={'Number of actions taken by whales'}
					>
						<div class="h-96" slot="figure">
							<Top20Actions chart_data={data.ACTIONS} />
						</div>
					</Chart>
				</div>
				<div>
					<Chart
						title={'Whale DEX Swaps'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/170993f4-9ea6-4e6e-a661-f4280bc1d119'}
						description={'Number of swaps conducted by whales'}
					>
						<div class="h-96" slot="figure">
							<Top20Swaps chart_data={data.SWAPS} />
						</div>
					</Chart>
				</div>
				<div class="col-span-2 justify-self-center">
					<ChartLanguage
						><p slot="language">
							There are 3 whales that have an unusually high amount of actions, from thousand to
							hundreds of thousands! This could suggest that these are bots. The rest of the whales
							have not really conducted many actions in the system, recording only hundreds or less.
							<br />
							<br />
							As for swapping on DEXes, it is clear that these whales do not use DEXes whatsoever, with
							only one whale having ever swapped on a DEX.
						</p></ChartLanguage
					>
				</div>
				<div>
					<Chart
						title={'Whale Staking'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/4e3ff4ba-87ab-4628-bc15-0ed8d2cfa8db'}
						description={'Which whales have staked, and how much'}
					>
						<div class="h-96" slot="figure">
							<Top20Staked chart_data={data.STAKED} />
						</div>
					</Chart>
				</div>
				<div>
					<Chart
						title={'Whale Staking Pool'}
						query_link={'https://flipsidecrypto.xyz/edit/queries/cbf2dde7-d507-4f73-ae72-9b9d063e6a29'}
						description={'Which staking pools whales have chosen to delegate to'}
					>
						<div class="h-96" slot="figure">
							<Top20Pools chart_data={data.POOLS} />
						</div>
					</Chart>
				</div>
				<div class="col-span-2 justify-self-center">
					<ChartLanguage
						><p slot="language">
							Looking in the staking area of the NEAR ecosystem, only 7 of the top 20 whales have
							ever staked their NEAR. Of these 7, they have actually staked quite a substantial
							amount of NEAR, all staking above 1 million, with the highest staking almost 21
							million NEAR, all while not unstaking much at all.
							<br>
							<br>
							All this staking have gone to 4 staking pool as displayed on the right, the most popular by far being figment pool.
						</p></ChartLanguage
					>
				</div>
				<div class="col-span-2 justify-self-center">
					<Footer />
				</div>
			</div>
		</div>
	</div>
</body>
