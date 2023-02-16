<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import 'chartjs-adapter-date-fns';
	import { whales } from '$lib/stores/stores.js'

	export let chart_data: Array<Object>;

	let canvas: any;

	const labels: any = whales.map((e:any) => e.substring(0, 4))

	const data = {
		labels: labels,
		datasets: [
			{
				label: whales[0],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[0]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#2F2A69'],
				backgroundColor: ['#2F2A69']
			},
			{
				label: whales[1],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[1]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#35306E'],
				backgroundColor: ['#35306E']
			},
			{
				label: whales[2],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[2]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#3B3773'],
				backgroundColor: ['#3B3773']
			},
			{
				label: whales[3],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[3]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#3B3773'],
				backgroundColor: ['#3B3773']
			},
			{
				label: whales[4],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[4]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#48447E'],
				backgroundColor: ['#48447E']
			},
			{
				label: whales[5],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[5]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#4E4A83'],
				backgroundColor: ['#4E4A83']
			},
			{
				label: whales[6],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[6]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#545188'],
				backgroundColor: ['#545188']
			},
			{
				label: whales[7],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[7]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#5A578D'],
				backgroundColor: ['#5A578D']
			},
			{
				label: whales[8],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[8]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#615E93'],
				backgroundColor: ['#615E93']
			},
			{
				label: whales[9],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[9]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#676498'],
				backgroundColor: ['#676498']
			},
			{
				label: whales[10],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[10]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#6D6B9D'],
				backgroundColor: ['#6D6B9D']
			},
			{
				label: whales[11],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[11]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#7371A2'],
				backgroundColor: ['#7371A2']
			},
			{
				label: whales[12],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[12]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#7A78A8'],
				backgroundColor: ['#7A78A8']
			},
			{
				label: whales[13],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[13]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#807EAD'],
				backgroundColor: ['#807EAD']
			},
			{
				label: whales[14],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[14]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#8685B2'],
				backgroundColor: ['#8685B2']
			},
			{
				label: whales[15],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[15]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#8C8BB7'],
				backgroundColor: ['#8C8BB7']
			},
			{
				label: whales[16],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[16]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#9292BC'],
				backgroundColor: ['#9292BC']
			},
			{
				label: whales[17],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[17]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#9998C2'],
				backgroundColor: ['#9998C2']
			},
			{
				label: whales[18],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[18]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#9F9FC7'],
				backgroundColor: ['#9F9FC7']
			},
			{
				label: whales[19],
				data: chart_data.filter((e:any) => e.ADDRESS == whales[19]),
				parsing: {
					xAxisKey: 'DATE',
					yAxisKey: 'BALANCE'
				},
				borderColor: ['#A5A5CC'],
				backgroundColor: ['#A5A5CC']
			},
			
		]
	};
	onMount(() => {
		const ctx = canvas.getContext('2d');
		var chart = new Chart(ctx, {
			type: 'line',
			data: data,
			options: {
				maintainAspectRatio: false,
				responsive: true,
				scales: {
					x: {
						type: 'time',
						time: {
							unit: 'month'
						},
						reverse: false,
						border: {
							display: true,
							color: 'black',
							width: 1
						},
						grid: {
							display: false
						},
						min: '2021-10-01',
						max: '2023-02-01'
					},
					y: {
						title: {
							display: true,
							text: 'Balance (NEAR)',
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
						},
						ticks: {
							callback: function (value) {
								return value;
							}
						}
					}
				},
				elements: {
					point: {
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
						callbacks: {
							title: function (context) {
								if (context[0].label.length == 26) {
									return context[0].label.substring(0, 11);
								} else {
									return context[0].label.substring(0, 12);
								}
							}
						},
						padding: 10,
						boxPadding: 3,
						titleAlign: 'center',
						titleMarginBottom: 6
					}
				},
				interaction: {
					intersect: false,
					mode: 'nearest',
					axis: 'x'
				}
			}
		});
	});
</script>

<canvas bind:this={canvas} />
