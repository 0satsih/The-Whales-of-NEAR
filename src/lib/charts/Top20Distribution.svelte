<script lang="ts">
	import { onMount } from 'svelte';
	import { Tooltip } from 'chart.js';
	import Chart from 'chart.js/auto';
	import ChartDataLabels from 'chartjs-plugin-datalabels';

	

	export let chart_data: any;

	let canvas: any;

	const data = {
		labels: chart_data.map((e: any) => e.ADDRESS.substring(0, 4) + '...'),
		datasets: [
			{
				label: 'Balance (NEAR)',
				data: chart_data,
				parsing: {
					key: 'BALANCE'
				},
				backgroundColor: [
					'#2F2A69',
					'#35306E',
					'#3B3773',
					'#3B3773',
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
			}
		]
	};
	onMount(() => {
		const ctx = canvas.getContext('2d');
		var chart = new Chart(ctx, {
			type: 'doughnut',
			data: data,
			plugins: [ChartDataLabels],
			options: {
				maintainAspectRatio: false,
				responsive: true,

				datasets: {
					doughnut: {
						borderJoinStyle: 'round',
						borderRadius: 2,
						hoverBorderColor: 'gray'
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
						padding: 20,
						cornerRadius: 40,
						borderColor: 'gray',
						borderWidth: 2,
						boxPadding: 3,
						titleAlign: 'center',
						titleMarginBottom: 6,
						xAlign: 'center',
						yAlign: 'center',
						//position: 'myCustomPositioner',
						callbacks: {
							label: function (context) {
								let value: any = context.formattedValue;
								let total: any = context.dataset.data
									.map((e: any) => e.BALANCE)
									.reduce((a: any, b: any) => a + b, 0);
								let percentage: any = ((context.parsed / total) * 100).toFixed(2) + '%';

								return value + ' | ' + percentage;
							}
						}
					},
					datalabels: {
						formatter: function (value: any, context: any) {
							return context.chart.data.labels[context.dataIndex]; // +
						},
						display: true,
						textAlign: 'center',
						color: 'black',
						padding: {
							top: 20,
							bottom: 20
						},
						labels: {
							title: {
								font: {
									weight: 'bold',
									family: "'Quicksand', 'sans-serif"
								}
							}
						}
					}
				}
			}
		});
	});
</script>

<canvas bind:this={canvas} class="ml-[65px] mt-4" />
