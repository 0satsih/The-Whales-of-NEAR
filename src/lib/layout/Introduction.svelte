<script>
	import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<div id="Preamble" class="ml-4 mr-3">
	<Tabs style="underline" contentClass="pt-4 mt-4 mx-2">
		<TabItem open title="Preamble">
			<p class="">
				The purpose of this analysis is to identify the top 20 whales, who are regular users and not
				exchanges or custodial addresses etc. and to examine their behaviour across the NEAR
				ecosystem.
				<br />
				<br />
			</p>
		</TabItem>
		<TabItem title="Methodolgy">
			<p>
				<b>Whale Identification:</b>
				<br />
				The addresses identified were gathered from excluding any labelled address on the flipside data
				tables that are known as an exchange address or other non-regular user type address.
				<br/>
				<br/>
				<b>Holdings:</b>
				<br/>
				The holdings of the identified whales and their distribution are displayed
				<br />
				<br />
			</p>
		</TabItem>
	</Tabs>
</div>
