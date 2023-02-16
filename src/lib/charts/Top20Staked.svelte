<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import 'chartjs-adapter-date-fns';

	export let chart_data: Array<Object>;

	let canvas: any;

	const data = {
		datasets: [
			{
				label: 'Staked',
				data: chart_data,
				parsing: {
					xAxisKey: 'STAKED',
					yAxisKey: 'ADDRESS'
				},
				backgroundColor: [
					'#2F2A69',
					'#35306E',
					'#3B3773',
					'#423D79',
					'#48447E',
					'#4E4A83',
					'#545188',
					'#5A578D',
					'#615E93',
					'#676498',
					'#6D6B9D',
					'#7371A2',
					'#7A78A8',
					'#807EAD',
					'#8685B2',
					'#8C8BB7',
					'#9292BC',
					'#9998C2',
					'#9F9FC7',
					'#A5A5CC'
				]
			},
			{
				label: 'Unstaked',
				data: chart_data,
				parsing: {
					xAxisKey: 'UNSTAKED',
					yAxisKey: 'ADDRESS'
				},
				backgroundColor: [
					'#694A2A',
					'#6E5030',
					'#735537',
					'#795B3D',
					'#7E6144',
					'#83664A',
					'#886C51',
					'#8D7157',
					'#93775E',
					'#987D64',
					'#9D826B',
					'#A28871',
					'#A88E78',
					'#AD937E',
					'#B29985',
					'#B79E8B',
					'#BCA492',
					'#C2AA98',
					'#C7AF9F',
					'#CCB5A5'
				]
			}
		]
	};
	onMount(() => {
		const ctx = canvas.getContext('2d');
		var chart = new Chart(ctx, {
			type: 'bar',
			data: data,
			options: {
				indexAxis: 'y',
				maintainAspectRatio: false,
				responsive: true,
				scales: {
					y: {
						reverse: false,
						border: {
							display: true,
							color: 'black',
							width: 1
						},
						grid: {
							display: false
						},
						ticks: {
							callback: function (value: any) {
								return this.getLabelForValue(value).substring(0, 7) + '...';
							}
						}
					},
					x: {
						title: {
							display: true,
							text: 'Amount Staked',
							font: {
								size: 15,
								family: "'Quicksand', 'sans-serif"
							},
							color: 'black',
							padding: 10
						},
						border: {
							display: true,
							color: 'black',
							width: 1
						}
					}
				},
				elements: {
					point: {
						pointStyle: false
					},
					line: {
						fill: false
					}
				},

				plugins: {
					legend: {
						display: true,
						position: 'right',
						align: 'start',
						labels: {
							usePointStyle: true,
							pointStyle: 'circle'
						}
					},
					tooltip: {
						padding: 10,
						boxPadding: 3,
						titleAlign: 'center',
						titleMarginBottom: 6
					}
				},
				interaction: {
					intersect: false,
					mode: 'nearest',
					axis: 'y'
				}
			}
		});
	});
</script>

<canvas bind:this={canvas} class="pr-2" />
