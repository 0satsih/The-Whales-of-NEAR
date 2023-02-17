import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (async ({ fetch }) => {
	/**const res = await fetch(`./src/lib/data/data.json`);
    const item = await res.json();
    return { item }**/

	return {
		WHALES: [
			'5c33c6218d47e00ef229f60da78d0897e1ee9665312550b8afd5f9c7bc6957d2',
			'58d5132fa9b65a4bf3e8602f996ef3099db7fd7e927c68155b4dc12408275fd0',
			'443fffc6210e647e911a059d1fa36c416b92dfdb5c07a8a6fdaa1037de66880a',
			'00283ec6cd947efff474d624dd004952955860a1c2d8a27fb62344936836f686',
			'c65eba1235b3fad3facd231bf6749f967b14e72c2015de7e417e5f0fe4b91199',
			'5c71c296c47719b4da9b53e39aa621aa43829b812a59398c8d73391cf534f719',
			'a778de7fc42034af1c85cac901fd40392dfc1cc69c3a688ea149112f57b0063e',
			'eb3c2bfd6bf357f433be30292d78b23f948ee75f63baca2cc5f56cff1751c294',
			'ef774989d6808922e4958feabeaf7dc1687c5ac3fef654c812a0cc7f007fd9ae',
			'e4e64900ca92a7b2818e7b3921fc76b745111122b98bcd94280bfd55fdd4164f',
			'bb273c1b4fe46a54743de83f92513d644e57423d2fee2ad4549cd4b40737f3d3',
			'314c84d2e387984ecb394a978108cc2b511fdfd63d17a250ce0e1eb4192fe955',
			'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
			'2cb04b0ca42cae381caf2baf80ed93ecd361d0c7e90ef6821c42e70c08276ed1',
			'c6d39aa078dbcba02800d1251194d33dbea2122d671435ac1c6ed5ffae383c03',
			'6972348ec8e7c100a8f4f08171dde5e38ae0e329308e2fa60a986b6439ca3932',
			'03793fb37ffb46533e9b8ab6b9c7a1ebdd6d84f6ebc151b8f60ec1754bbcada6',
			'b04656820f98d9cd90aa8ecc0d1b2c12a3a457d63fad61eca9805ef868f19edd',
			'68f5bab7f593e6031632570e61e27165247ef7c971285a441820d52414641937',
			'15e7f364d0060c4b4c2393061942ca80b3d89953b036faf8ee95d708f7d01e55'
		],
		TOP_20: [
			{
				ADDRESS: '2cb04b0ca42cae381caf2baf80ed93ecd361d0c7e90ef6821c42e70c08276ed1',
				RECEIVED: 28094288,
				SENT: 0,
				BALANCE: 28094288,
				BALANCE_USD: 61526490
			},
			{
				ADDRESS: 'a778de7fc42034af1c85cac901fd40392dfc1cc69c3a688ea149112f57b0063e',
				RECEIVED: 21465821,
				SENT: 19711,
				BALANCE: 21446110,
				BALANCE_USD: 46966980
			},
			{
				ADDRESS: 'c6d39aa078dbcba02800d1251194d33dbea2122d671435ac1c6ed5ffae383c03',
				RECEIVED: 20852485,
				SENT: 0,
				BALANCE: 20852485,
				BALANCE_USD: 45666941
			},
			{
				ADDRESS: '03793fb37ffb46533e9b8ab6b9c7a1ebdd6d84f6ebc151b8f60ec1754bbcada6',
				RECEIVED: 19634050,
				SENT: 1,
				BALANCE: 19634048,
				BALANCE_USD: 42998566
			},
			{
				ADDRESS: '6972348ec8e7c100a8f4f08171dde5e38ae0e329308e2fa60a986b6439ca3932',
				RECEIVED: 8147080,
				SENT: 0,
				BALANCE: 8147080,
				BALANCE_USD: 17842106
			},
			{
				ADDRESS: 'ef774989d6808922e4958feabeaf7dc1687c5ac3fef654c812a0cc7f007fd9ae',
				RECEIVED: 5685800,
				SENT: 0,
				BALANCE: 5685800,
				BALANCE_USD: 12451902
			},
			{
				ADDRESS: 'eb3c2bfd6bf357f433be30292d78b23f948ee75f63baca2cc5f56cff1751c294',
				RECEIVED: 12404172,
				SENT: 8954279,
				BALANCE: 3449893,
				BALANCE_USD: 7555267
			},
			{
				ADDRESS: '5c33c6218d47e00ef229f60da78d0897e1ee9665312550b8afd5f9c7bc6957d2',
				RECEIVED: 270101295,
				SENT: 266743297,
				BALANCE: 3357998,
				BALANCE_USD: 7354016
			},
			{
				ADDRESS: 'c65eba1235b3fad3facd231bf6749f967b14e72c2015de7e417e5f0fe4b91199',
				RECEIVED: 2120010,
				SENT: 62000,
				BALANCE: 2058010,
				BALANCE_USD: 4507042
			},
			{
				ADDRESS: '15e7f364d0060c4b4c2393061942ca80b3d89953b036faf8ee95d708f7d01e55',
				RECEIVED: 1863295,
				SENT: 0,
				BALANCE: 1863295,
				BALANCE_USD: 4080617
			},
			{
				ADDRESS: '5c71c296c47719b4da9b53e39aa621aa43829b812a59398c8d73391cf534f719',
				RECEIVED: 4559620,
				SENT: 2712860,
				BALANCE: 1846760,
				BALANCE_USD: 4044404
			},
			{
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				RECEIVED: 9684146,
				SENT: 7877009,
				BALANCE: 1807136,
				BALANCE_USD: 3957629
			},
			{
				ADDRESS: '68f5bab7f593e6031632570e61e27165247ef7c971285a441820d52414641937',
				RECEIVED: 3600005,
				SENT: 1964662,
				BALANCE: 1635343,
				BALANCE_USD: 3581400
			},
			{
				ADDRESS: 'bb273c1b4fe46a54743de83f92513d644e57423d2fee2ad4549cd4b40737f3d3',
				RECEIVED: 1599204,
				SENT: 34346,
				BALANCE: 1564858,
				BALANCE_USD: 3427040
			},
			{
				ADDRESS: 'b04656820f98d9cd90aa8ecc0d1b2c12a3a457d63fad61eca9805ef868f19edd',
				RECEIVED: 6269647,
				SENT: 4709470,
				BALANCE: 1560177,
				BALANCE_USD: 3416787
			},
			{
				ADDRESS: '314c84d2e387984ecb394a978108cc2b511fdfd63d17a250ce0e1eb4192fe955',
				RECEIVED: 1493569,
				SENT: 0,
				BALANCE: 1493569,
				BALANCE_USD: 3270916
			},
			{
				ADDRESS: '443fffc6210e647e911a059d1fa36c416b92dfdb5c07a8a6fdaa1037de66880a',
				RECEIVED: 1309177,
				SENT: 0,
				BALANCE: 1309177,
				BALANCE_USD: 2867098
			},
			{
				ADDRESS: '58d5132fa9b65a4bf3e8602f996ef3099db7fd7e927c68155b4dc12408275fd0',
				RECEIVED: 1309177,
				SENT: 0,
				BALANCE: 1309177,
				BALANCE_USD: 2867098
			},
			{
				ADDRESS: '00283ec6cd947efff474d624dd004952955860a1c2d8a27fb62344936836f686',
				RECEIVED: 1210719,
				SENT: 10,
				BALANCE: 1210709,
				BALANCE_USD: 2651452
			},
			{
				ADDRESS: 'e4e64900ca92a7b2818e7b3921fc76b745111122b98bcd94280bfd55fdd4164f',
				RECEIVED: 1092231,
				SENT: 0,
				BALANCE: 1092231,
				BALANCE_USD: 2391985
			}
		],
		HISTORY: [
			{
				DATE: '2021-10-01 00:00:00.000',
				ADDRESS: '68f5bab7f593e6031632570e61e27165247ef7c971285a441820d52414641937',
				RECEVIED: 500005,
				RECEIVED_COUNT: 6,
				SENT: 2710,
				SENT_COUNT: 35,
				BALANCE: 497295
			},
			{
				DATE: '2021-12-01 00:00:00.000',
				ADDRESS: '68f5bab7f593e6031632570e61e27165247ef7c971285a441820d52414641937',
				RECEVIED: 400000,
				RECEIVED_COUNT: 2,
				SENT: 9847,
				SENT_COUNT: 33,
				BALANCE: 887447
			},
			{
				DATE: '2022-01-01 00:00:00.000',
				ADDRESS: '68f5bab7f593e6031632570e61e27165247ef7c971285a441820d52414641937',
				RECEVIED: 700000,
				RECEIVED_COUNT: 4,
				SENT: 20443,
				SENT_COUNT: 40,
				BALANCE: 1567004
			},
			{
				DATE: '2022-01-01 00:00:00.000',
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				RECEVIED: 6,
				RECEIVED_COUNT: 4,
				SENT: 5,
				SENT_COUNT: 2,
				BALANCE: 1
			},
			{
				DATE: '2022-02-01 00:00:00.000',
				ADDRESS: '5c71c296c47719b4da9b53e39aa621aa43829b812a59398c8d73391cf534f719',
				RECEVIED: 172861,
				RECEIVED_COUNT: 6,
				SENT: 86430,
				SENT_COUNT: 2,
				BALANCE: 86430
			},
			{
				DATE: '2022-03-01 00:00:00.000',
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				RECEVIED: 37734,
				RECEIVED_COUNT: 952,
				SENT: 11924,
				SENT_COUNT: 470,
				BALANCE: 25811
			},
			{
				DATE: '2022-03-01 00:00:00.000',
				ADDRESS: '58d5132fa9b65a4bf3e8602f996ef3099db7fd7e927c68155b4dc12408275fd0',
				RECEVIED: 1065578,
				RECEIVED_COUNT: 10,
				SENT: 0,
				SENT_COUNT: 5,
				BALANCE: 1065578
			},
			{
				DATE: '2022-03-01 00:00:00.000',
				ADDRESS: '5c71c296c47719b4da9b53e39aa621aa43829b812a59398c8d73391cf534f719',
				RECEVIED: 866100,
				RECEIVED_COUNT: 4,
				SENT: 866100,
				SENT_COUNT: 4,
				BALANCE: 86430
			},
			{
				DATE: '2022-03-01 00:00:00.000',
				ADDRESS: '443fffc6210e647e911a059d1fa36c416b92dfdb5c07a8a6fdaa1037de66880a',
				RECEVIED: 1066383,
				RECEIVED_COUNT: 8,
				SENT: 0,
				SENT_COUNT: 5,
				BALANCE: 1066383
			},
			{
				DATE: '2022-04-01 00:00:00.000',
				ADDRESS: 'bb273c1b4fe46a54743de83f92513d644e57423d2fee2ad4549cd4b40737f3d3',
				RECEVIED: 110000,
				RECEIVED_COUNT: 4,
				SENT: 20000,
				SENT_COUNT: 14,
				BALANCE: 90000
			},
			{
				DATE: '2022-04-01 00:00:00.000',
				ADDRESS: '5c71c296c47719b4da9b53e39aa621aa43829b812a59398c8d73391cf534f719',
				RECEVIED: 42580,
				RECEIVED_COUNT: 12,
				SENT: 21290,
				SENT_COUNT: 4,
				BALANCE: 107720
			},
			{
				DATE: '2022-04-01 00:00:00.000',
				ADDRESS: '443fffc6210e647e911a059d1fa36c416b92dfdb5c07a8a6fdaa1037de66880a',
				RECEVIED: 242794,
				RECEIVED_COUNT: 2,
				SENT: 0,
				SENT_COUNT: 3,
				BALANCE: 1309177
			},
			{
				DATE: '2022-04-01 00:00:00.000',
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				RECEVIED: 280001,
				RECEIVED_COUNT: 2606,
				SENT: 157098,
				SENT_COUNT: 2016,
				BALANCE: 148714
			},
			{
				DATE: '2022-04-01 00:00:00.000',
				ADDRESS: '58d5132fa9b65a4bf3e8602f996ef3099db7fd7e927c68155b4dc12408275fd0',
				RECEVIED: 243599,
				RECEIVED_COUNT: 2,
				SENT: 0,
				SENT_COUNT: 3,
				BALANCE: 1309177
			},
			{
				DATE: '2022-05-01 00:00:00.000',
				ADDRESS: 'bb273c1b4fe46a54743de83f92513d644e57423d2fee2ad4549cd4b40737f3d3',
				RECEVIED: 282913,
				RECEIVED_COUNT: 6,
				SENT: 0,
				SENT_COUNT: 27,
				BALANCE: 372912
			},
			{
				DATE: '2022-05-01 00:00:00.000',
				ADDRESS: '5c71c296c47719b4da9b53e39aa621aa43829b812a59398c8d73391cf534f719',
				RECEVIED: 478076,
				RECEIVED_COUNT: 6,
				SENT: 239038,
				SENT_COUNT: 2,
				BALANCE: 346758
			},
			{
				DATE: '2022-05-01 00:00:00.000',
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				RECEVIED: 279490,
				RECEIVED_COUNT: 2832,
				SENT: 114410,
				SENT_COUNT: 3226,
				BALANCE: 313795
			},
			{
				DATE: '2022-05-01 00:00:00.000',
				ADDRESS: '5c33c6218d47e00ef229f60da78d0897e1ee9665312550b8afd5f9c7bc6957d2',
				RECEVIED: 10000002,
				RECEIVED_COUNT: 6,
				SENT: 4370052,
				SENT_COUNT: 11980,
				BALANCE: 5629950
			},
			{
				DATE: '2022-06-01 00:00:00.000',
				ADDRESS: '5c33c6218d47e00ef229f60da78d0897e1ee9665312550b8afd5f9c7bc6957d2',
				RECEVIED: 29070124,
				RECEIVED_COUNT: 16220,
				SENT: 29159029,
				SENT_COUNT: 47268,
				BALANCE: 5541045
			},
			{
				DATE: '2022-06-01 00:00:00.000',
				ADDRESS: 'eb3c2bfd6bf357f433be30292d78b23f948ee75f63baca2cc5f56cff1751c294',
				RECEVIED: 265096,
				RECEIVED_COUNT: 466,
				SENT: 46595,
				SENT_COUNT: 353,
				BALANCE: 218501
			},
			{
				DATE: '2022-06-01 00:00:00.000',
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				RECEVIED: 310682,
				RECEIVED_COUNT: 3044,
				SENT: 229391,
				SENT_COUNT: 2992,
				BALANCE: 395086
			},
			{
				DATE: '2022-06-01 00:00:00.000',
				ADDRESS: 'b04656820f98d9cd90aa8ecc0d1b2c12a3a457d63fad61eca9805ef868f19edd',
				RECEVIED: 2450974,
				RECEIVED_COUNT: 684,
				SENT: 401012,
				SENT_COUNT: 20,
				BALANCE: 2049962
			},
			{
				DATE: '2022-06-01 00:00:00.000',
				ADDRESS: 'bb273c1b4fe46a54743de83f92513d644e57423d2fee2ad4549cd4b40737f3d3',
				RECEVIED: 826592,
				RECEIVED_COUNT: 10,
				SENT: 14345,
				SENT_COUNT: 122,
				BALANCE: 1185159
			},
			{
				DATE: '2022-06-01 00:00:00.000',
				ADDRESS: '5c71c296c47719b4da9b53e39aa621aa43829b812a59398c8d73391cf534f719',
				RECEVIED: 1000000,
				RECEIVED_COUNT: 3,
				SENT: 500000,
				SENT_COUNT: 1,
				BALANCE: 846758
			},
			{
				DATE: '2022-07-01 00:00:00.000',
				ADDRESS: 'eb3c2bfd6bf357f433be30292d78b23f948ee75f63baca2cc5f56cff1751c294',
				RECEVIED: 1065892,
				RECEIVED_COUNT: 1084,
				SENT: 426116,
				SENT_COUNT: 1124,
				BALANCE: 858276
			},
			{
				DATE: '2022-07-01 00:00:00.000',
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				RECEVIED: 279480,
				RECEIVED_COUNT: 3512,
				SENT: 206831,
				SENT_COUNT: 2754,
				BALANCE: 467735
			},
			{
				DATE: '2022-07-01 00:00:00.000',
				ADDRESS: 'b04656820f98d9cd90aa8ecc0d1b2c12a3a457d63fad61eca9805ef868f19edd',
				RECEVIED: 477333,
				RECEIVED_COUNT: 1270,
				SENT: 1549000,
				SENT_COUNT: 18,
				BALANCE: 978295
			},
			{
				DATE: '2022-07-01 00:00:00.000',
				ADDRESS: '5c33c6218d47e00ef229f60da78d0897e1ee9665312550b8afd5f9c7bc6957d2',
				RECEVIED: 18285702,
				RECEIVED_COUNT: 15970,
				SENT: 15959466,
				SENT_COUNT: 30702,
				BALANCE: 7867280
			},
			{
				DATE: '2022-08-01 00:00:00.000',
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				RECEVIED: 708841,
				RECEIVED_COUNT: 4076,
				SENT: 413656,
				SENT_COUNT: 3597,
				BALANCE: 762919
			},
			{
				DATE: '2022-08-01 00:00:00.000',
				ADDRESS: 'eb3c2bfd6bf357f433be30292d78b23f948ee75f63baca2cc5f56cff1751c294',
				RECEVIED: 1529677,
				RECEIVED_COUNT: 748,
				SENT: 1112132,
				SENT_COUNT: 1520,
				BALANCE: 1275821
			},
			{
				DATE: '2022-08-01 00:00:00.000',
				ADDRESS: 'b04656820f98d9cd90aa8ecc0d1b2c12a3a457d63fad61eca9805ef868f19edd',
				RECEVIED: 249255,
				RECEIVED_COUNT: 1146,
				SENT: 65000,
				SENT_COUNT: 4,
				BALANCE: 1162550
			},
			{
				DATE: '2022-08-01 00:00:00.000',
				ADDRESS: 'c65eba1235b3fad3facd231bf6749f967b14e72c2015de7e417e5f0fe4b91199',
				RECEVIED: 520010,
				RECEIVED_COUNT: 4,
				SENT: 0,
				SENT_COUNT: 3,
				BALANCE: 520010
			},
			{
				DATE: '2022-08-01 00:00:00.000',
				ADDRESS: '5c33c6218d47e00ef229f60da78d0897e1ee9665312550b8afd5f9c7bc6957d2',
				RECEVIED: 27981011,
				RECEIVED_COUNT: 16918,
				SENT: 31281619,
				SENT_COUNT: 35598,
				BALANCE: 4566673
			},
			{
				DATE: '2022-09-01 00:00:00.000',
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				RECEVIED: 382011,
				RECEIVED_COUNT: 4612,
				SENT: 344883,
				SENT_COUNT: 8202,
				BALANCE: 800047
			},
			{
				DATE: '2022-09-01 00:00:00.000',
				ADDRESS: 'c65eba1235b3fad3facd231bf6749f967b14e72c2015de7e417e5f0fe4b91199',
				RECEVIED: 600000,
				RECEIVED_COUNT: 2,
				SENT: 0,
				SENT_COUNT: null,
				BALANCE: 1120010
			},
			{
				DATE: '2022-09-01 00:00:00.000',
				ADDRESS: '5c33c6218d47e00ef229f60da78d0897e1ee9665312550b8afd5f9c7bc6957d2',
				RECEVIED: 16311393,
				RECEIVED_COUNT: 11446,
				SENT: 15934588,
				SENT_COUNT: 33922,
				BALANCE: 4943478
			},
			{
				DATE: '2022-09-01 00:00:00.000',
				ADDRESS: 'eb3c2bfd6bf357f433be30292d78b23f948ee75f63baca2cc5f56cff1751c294',
				RECEVIED: 1133236,
				RECEIVED_COUNT: 940,
				SENT: 816729,
				SENT_COUNT: 1436,
				BALANCE: 1592329
			},
			{
				DATE: '2022-09-01 00:00:00.000',
				ADDRESS: 'b04656820f98d9cd90aa8ecc0d1b2c12a3a457d63fad61eca9805ef868f19edd',
				RECEVIED: 527983,
				RECEIVED_COUNT: 1268,
				SENT: 942000,
				SENT_COUNT: 12,
				BALANCE: 748533
			},
			{
				DATE: '2022-10-01 00:00:00.000',
				ADDRESS: '68f5bab7f593e6031632570e61e27165247ef7c971285a441820d52414641937',
				RECEVIED: 2000000,
				RECEIVED_COUNT: 20,
				SENT: 15284,
				SENT_COUNT: 45,
				BALANCE: 3551721
			},
			{
				DATE: '2022-10-01 00:00:00.000',
				ADDRESS: 'c65eba1235b3fad3facd231bf6749f967b14e72c2015de7e417e5f0fe4b91199',
				RECEVIED: 1000000,
				RECEIVED_COUNT: 2,
				SENT: 0,
				SENT_COUNT: 3,
				BALANCE: 2120010
			},
			{
				DATE: '2022-10-01 00:00:00.000',
				ADDRESS: 'b04656820f98d9cd90aa8ecc0d1b2c12a3a457d63fad61eca9805ef868f19edd',
				RECEVIED: 303579,
				RECEIVED_COUNT: 850,
				SENT: 154200,
				SENT_COUNT: 12,
				BALANCE: 897912
			},
			{
				DATE: '2022-10-01 00:00:00.000',
				ADDRESS: '5c33c6218d47e00ef229f60da78d0897e1ee9665312550b8afd5f9c7bc6957d2',
				RECEVIED: 19687717,
				RECEIVED_COUNT: 13778,
				SENT: 20454226,
				SENT_COUNT: 38456,
				BALANCE: 4176968
			},
			{
				DATE: '2022-10-01 00:00:00.000',
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				RECEVIED: 1186888,
				RECEIVED_COUNT: 7374,
				SENT: 767293,
				SENT_COUNT: 14459,
				BALANCE: 1219642
			},
			{
				DATE: '2022-10-01 00:00:00.000',
				ADDRESS: 'e4e64900ca92a7b2818e7b3921fc76b745111122b98bcd94280bfd55fdd4164f',
				RECEVIED: 1092231,
				RECEIVED_COUNT: 14,
				SENT: 0,
				SENT_COUNT: 15,
				BALANCE: 1092231
			},
			{
				DATE: '2022-10-01 00:00:00.000',
				ADDRESS: 'eb3c2bfd6bf357f433be30292d78b23f948ee75f63baca2cc5f56cff1751c294',
				RECEVIED: 787044,
				RECEIVED_COUNT: 684,
				SENT: 639389,
				SENT_COUNT: 1336,
				BALANCE: 1739984
			},
			{
				DATE: '2022-11-01 00:00:00.000',
				ADDRESS: 'ef774989d6808922e4958feabeaf7dc1687c5ac3fef654c812a0cc7f007fd9ae',
				RECEVIED: 5685800,
				RECEIVED_COUNT: 4,
				SENT: 0,
				SENT_COUNT: null,
				BALANCE: 5685800
			},
			{
				DATE: '2022-11-01 00:00:00.000',
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				RECEVIED: 1687237,
				RECEIVED_COUNT: 6646,
				SENT: 1607948,
				SENT_COUNT: 17151,
				BALANCE: 1298931
			},
			{
				DATE: '2022-11-01 00:00:00.000',
				ADDRESS: '6972348ec8e7c100a8f4f08171dde5e38ae0e329308e2fa60a986b6439ca3932',
				RECEVIED: 8147080,
				RECEIVED_COUNT: 8,
				SENT: 0,
				SENT_COUNT: null,
				BALANCE: 8147080
			},
			{
				DATE: '2022-11-01 00:00:00.000',
				ADDRESS: 'b04656820f98d9cd90aa8ecc0d1b2c12a3a457d63fad61eca9805ef868f19edd',
				RECEVIED: 1311536,
				RECEIVED_COUNT: 1228,
				SENT: 990158,
				SENT_COUNT: 36,
				BALANCE: 1219290
			},
			{
				DATE: '2022-11-01 00:00:00.000',
				ADDRESS: 'eb3c2bfd6bf357f433be30292d78b23f948ee75f63baca2cc5f56cff1751c294',
				RECEVIED: 2699621,
				RECEIVED_COUNT: 1756,
				SENT: 2183159,
				SENT_COUNT: 2534,
				BALANCE: 2256446
			},
			{
				DATE: '2022-11-01 00:00:00.000',
				ADDRESS: '5c71c296c47719b4da9b53e39aa621aa43829b812a59398c8d73391cf534f719',
				RECEVIED: 2000002,
				RECEIVED_COUNT: 6,
				SENT: 1000001,
				SENT_COUNT: 2,
				BALANCE: 1846759
			},
			{
				DATE: '2022-11-01 00:00:00.000',
				ADDRESS: 'c6d39aa078dbcba02800d1251194d33dbea2122d671435ac1c6ed5ffae383c03',
				RECEVIED: 20681979,
				RECEIVED_COUNT: 6,
				SENT: 0,
				SENT_COUNT: 3,
				BALANCE: 20681979
			},
			{
				DATE: '2022-11-01 00:00:00.000',
				ADDRESS: '5c33c6218d47e00ef229f60da78d0897e1ee9665312550b8afd5f9c7bc6957d2',
				RECEVIED: 56510034,
				RECEIVED_COUNT: 21386,
				SENT: 57093211,
				SENT_COUNT: 61222,
				BALANCE: 3593791
			},
			{
				DATE: '2022-12-01 00:00:00.000',
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				RECEVIED: 982200,
				RECEIVED_COUNT: 5710,
				SENT: 789550,
				SENT_COUNT: 10772,
				BALANCE: 1491581
			},
			{
				DATE: '2022-12-01 00:00:00.000',
				ADDRESS: '15e7f364d0060c4b4c2393061942ca80b3d89953b036faf8ee95d708f7d01e55',
				RECEVIED: 1863295,
				RECEIVED_COUNT: 6,
				SENT: 0,
				SENT_COUNT: null,
				BALANCE: 1863295
			},
			{
				DATE: '2022-12-01 00:00:00.000',
				ADDRESS: 'bb273c1b4fe46a54743de83f92513d644e57423d2fee2ad4549cd4b40737f3d3',
				RECEVIED: 379700,
				RECEIVED_COUNT: 4,
				SENT: 0,
				SENT_COUNT: 6,
				BALANCE: 1564859
			},
			{
				DATE: '2022-12-01 00:00:00.000',
				ADDRESS: '5c33c6218d47e00ef229f60da78d0897e1ee9665312550b8afd5f9c7bc6957d2',
				RECEVIED: 26086896,
				RECEIVED_COUNT: 13702,
				SENT: 23493846,
				SENT_COUNT: 55047,
				BALANCE: 6186842
			},
			{
				DATE: '2022-12-01 00:00:00.000',
				ADDRESS: 'a778de7fc42034af1c85cac901fd40392dfc1cc69c3a688ea149112f57b0063e',
				RECEVIED: 21465821,
				RECEIVED_COUNT: 12,
				SENT: 19711,
				SENT_COUNT: 4,
				BALANCE: 21446110
			},
			{
				DATE: '2022-12-01 00:00:00.000',
				ADDRESS: '00283ec6cd947efff474d624dd004952955860a1c2d8a27fb62344936836f686',
				RECEVIED: 1210719,
				RECEIVED_COUNT: 26,
				SENT: 10,
				SENT_COUNT: 2,
				BALANCE: 1210709
			},
			{
				DATE: '2022-12-01 00:00:00.000',
				ADDRESS: 'eb3c2bfd6bf357f433be30292d78b23f948ee75f63baca2cc5f56cff1751c294',
				RECEVIED: 2222971,
				RECEIVED_COUNT: 1286,
				SENT: 1772318,
				SENT_COUNT: 1781,
				BALANCE: 2707099
			},
			{
				DATE: '2022-12-01 00:00:00.000',
				ADDRESS: 'b04656820f98d9cd90aa8ecc0d1b2c12a3a457d63fad61eca9805ef868f19edd',
				RECEVIED: 263876,
				RECEIVED_COUNT: 808,
				SENT: 220000,
				SENT_COUNT: 18,
				BALANCE: 1263166
			},
			{
				DATE: '2023-01-01 00:00:00.000',
				ADDRESS: '5c33c6218d47e00ef229f60da78d0897e1ee9665312550b8afd5f9c7bc6957d2',
				RECEVIED: 48667715,
				RECEIVED_COUNT: 20558,
				SENT: 51349098,
				SENT_COUNT: 42396,
				BALANCE: 3505458
			},
			{
				DATE: '2023-01-01 00:00:00.000',
				ADDRESS: 'b04656820f98d9cd90aa8ecc0d1b2c12a3a457d63fad61eca9805ef868f19edd',
				RECEVIED: 529157,
				RECEIVED_COUNT: 1052,
				SENT: 296600,
				SENT_COUNT: 30,
				BALANCE: 1495723
			},
			{
				DATE: '2023-01-01 00:00:00.000',
				ADDRESS: 'eb3c2bfd6bf357f433be30292d78b23f948ee75f63baca2cc5f56cff1751c294',
				RECEVIED: 1898372,
				RECEIVED_COUNT: 1260,
				SENT: 1274150,
				SENT_COUNT: 1965,
				BALANCE: 3331321
			},
			{
				DATE: '2023-01-01 00:00:00.000',
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				RECEVIED: 2687276,
				RECEIVED_COUNT: 8590,
				SENT: 2475840,
				SENT_COUNT: 11124,
				BALANCE: 1703016
			},
			{
				DATE: '2023-01-01 00:00:00.000',
				ADDRESS: '5c71c296c47719b4da9b53e39aa621aa43829b812a59398c8d73391cf534f719',
				RECEVIED: 0,
				RECEIVED_COUNT: 3,
				SENT: 0,
				SENT_COUNT: 1,
				BALANCE: 1846760
			},
			{
				DATE: '2023-01-01 00:00:00.000',
				ADDRESS: '314c84d2e387984ecb394a978108cc2b511fdfd63d17a250ce0e1eb4192fe955',
				RECEVIED: 1493569,
				RECEIVED_COUNT: 4,
				SENT: 0,
				SENT_COUNT: null,
				BALANCE: 1493569
			},
			{
				DATE: '2023-01-01 00:00:00.000',
				ADDRESS: '2cb04b0ca42cae381caf2baf80ed93ecd361d0c7e90ef6821c42e70c08276ed1',
				RECEVIED: 28094288,
				RECEIVED_COUNT: 4,
				SENT: 0,
				SENT_COUNT: null,
				BALANCE: 28094288
			},
			{
				DATE: '2023-02-01 00:00:00.000',
				ADDRESS: 'c6d39aa078dbcba02800d1251194d33dbea2122d671435ac1c6ed5ffae383c03',
				RECEVIED: 170506,
				RECEIVED_COUNT: 4,
				SENT: 0,
				SENT_COUNT: null,
				BALANCE: 20852485
			},
			{
				DATE: '2023-02-01 00:00:00.000',
				ADDRESS: '03793fb37ffb46533e9b8ab6b9c7a1ebdd6d84f6ebc151b8f60ec1754bbcada6',
				RECEVIED: 19634050,
				RECEIVED_COUNT: 4,
				SENT: 1,
				SENT_COUNT: 2,
				BALANCE: 19634048
			},
			{
				DATE: '2023-02-01 00:00:00.000',
				ADDRESS: 'b04656820f98d9cd90aa8ecc0d1b2c12a3a457d63fad61eca9805ef868f19edd',
				RECEVIED: 156115,
				RECEIVED_COUNT: 502,
				SENT: 91500,
				SENT_COUNT: 12,
				BALANCE: 1560338
			},
			{
				DATE: '2023-02-01 00:00:00.000',
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				RECEVIED: 862303,
				RECEIVED_COUNT: 4898,
				SENT: 758188,
				SENT_COUNT: 5224,
				BALANCE: 1807131
			},
			{
				DATE: '2023-02-01 00:00:00.000',
				ADDRESS: '5c33c6218d47e00ef229f60da78d0897e1ee9665312550b8afd5f9c7bc6957d2',
				RECEVIED: 17502003,
				RECEIVED_COUNT: 7092,
				SENT: 17670174,
				SENT_COUNT: 20078,
				BALANCE: 3337288
			},
			{
				DATE: '2023-02-01 00:00:00.000',
				ADDRESS: 'eb3c2bfd6bf357f433be30292d78b23f948ee75f63baca2cc5f56cff1751c294',
				RECEVIED: 802262,
				RECEIVED_COUNT: 528,
				SENT: 684109,
				SENT_COUNT: 1490,
				BALANCE: 3449474
			},
			{
				DATE: null,
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				RECEVIED: 4,
				RECEIVED_COUNT: 2,
				SENT: 0,
				SENT_COUNT: null,
				BALANCE: 1807135
			}
		],
		ACTIONS: [
			{
				ADDRESS: '5c33c6218d47e00ef229f60da78d0897e1ee9665312550b8afd5f9c7bc6957d2',
				ACTIONS: 189809
			},
			{
				ADDRESS: 'ccb91e1db61e8d7e1d4ae3e043001140132959a86ee35a548b6563a46284a6ea',
				ACTIONS: 53075
			},
			{
				ADDRESS: 'eb3c2bfd6bf357f433be30292d78b23f948ee75f63baca2cc5f56cff1751c294',
				ACTIONS: 6824
			},
			{
				ADDRESS: '68f5bab7f593e6031632570e61e27165247ef7c971285a441820d52414641937',
				ACTIONS: 204
			},
			{
				ADDRESS: 'bb273c1b4fe46a54743de83f92513d644e57423d2fee2ad4549cd4b40737f3d3',
				ACTIONS: 83
			},
			{
				ADDRESS: 'b04656820f98d9cd90aa8ecc0d1b2c12a3a457d63fad61eca9805ef868f19edd',
				ACTIONS: 82
			},
			{
				ADDRESS: '5c71c296c47719b4da9b53e39aa621aa43829b812a59398c8d73391cf534f719',
				ACTIONS: 16
			},
			{ ADDRESS: 'c65eba1235b3fad3facd231bf6749f967b14e72c2015de7e417e5f0fe4b91199', ACTIONS: 6 },
			{ ADDRESS: 'e4e64900ca92a7b2818e7b3921fc76b745111122b98bcd94280bfd55fdd4164f', ACTIONS: 5 },
			{ ADDRESS: '58d5132fa9b65a4bf3e8602f996ef3099db7fd7e927c68155b4dc12408275fd0', ACTIONS: 4 },
			{ ADDRESS: '443fffc6210e647e911a059d1fa36c416b92dfdb5c07a8a6fdaa1037de66880a', ACTIONS: 4 },
			{ ADDRESS: 'a778de7fc42034af1c85cac901fd40392dfc1cc69c3a688ea149112f57b0063e', ACTIONS: 2 },
			{ ADDRESS: '6972348ec8e7c100a8f4f08171dde5e38ae0e329308e2fa60a986b6439ca3932', ACTIONS: 1 },
			{ ADDRESS: '03793fb37ffb46533e9b8ab6b9c7a1ebdd6d84f6ebc151b8f60ec1754bbcada6', ACTIONS: 1 },
			{ ADDRESS: 'c6d39aa078dbcba02800d1251194d33dbea2122d671435ac1c6ed5ffae383c03', ACTIONS: 1 },
			{ ADDRESS: '00283ec6cd947efff474d624dd004952955860a1c2d8a27fb62344936836f686', ACTIONS: 1 }
		],
		SWAPS: [
			{
				ADDRESS: 'bb273c1b4fe46a54743de83f92513d644e57423d2fee2ad4549cd4b40737f3d3',
				SWAPS: 10,
				VOLUME: 5673
			}
		],
		STAKED: [
			{
				ADDRESS: 'c6d39aa078dbcba02800d1251194d33dbea2122d671435ac1c6ed5ffae383c03',
				STAKED: 20681978.519401,
				UNSTAKED: 0,
				STAKES: 1,
				UNSTAKES: 0
			},
			{
				ADDRESS: '6972348ec8e7c100a8f4f08171dde5e38ae0e329308e2fa60a986b6439ca3932',
				STAKED: 8147080.337955,
				UNSTAKED: 0,
				STAKES: 1,
				UNSTAKES: 0
			},
			{
				ADDRESS: '68f5bab7f593e6031632570e61e27165247ef7c971285a441820d52414641937',
				STAKED: 3599999,
				UNSTAKED: 982331.996205,
				STAKES: 6,
				UNSTAKES: 67
			},
			{
				ADDRESS: 'c65eba1235b3fad3facd231bf6749f967b14e72c2015de7e417e5f0fe4b91199',
				STAKED: 2120000,
				UNSTAKED: 31000,
				STAKES: 3,
				UNSTAKES: 1
			},
			{
				ADDRESS: '58d5132fa9b65a4bf3e8602f996ef3099db7fd7e927c68155b4dc12408275fd0',
				STAKED: 1309177.064623,
				UNSTAKED: 0,
				STAKES: 2,
				UNSTAKES: 0
			},
			{
				ADDRESS: '443fffc6210e647e911a059d1fa36c416b92dfdb5c07a8a6fdaa1037de66880a',
				STAKED: 1309177.064623,
				UNSTAKED: 0,
				STAKES: 2,
				UNSTAKES: 0
			},
			{
				ADDRESS: 'e4e64900ca92a7b2818e7b3921fc76b745111122b98bcd94280bfd55fdd4164f',
				STAKED: 1092230,
				UNSTAKED: 0,
				STAKES: 5,
				UNSTAKES: 0
			}
		],
		POOLS: [
			{
				POOL_ADDRESS: 'figment.poolv1.near',
				STAKED: 30949058.857356,
				UNSTAKED: 31000,
				STAKES: 5,
				UNSTAKES: 1
			},
			{
				POOL_ADDRESS: 'hashquark.poolv1.near',
				STAKED: 3599999,
				UNSTAKED: 982331.996205,
				STAKES: 6,
				UNSTAKES: 67
			},
			{
				POOL_ADDRESS: 'electric.poolv1.near',
				STAKED: 2618354.129246,
				UNSTAKED: 0,
				STAKES: 4,
				UNSTAKES: 0
			},
			{
				POOL_ADDRESS: 'epic.poolv1.near',
				STAKED: 1092230,
				UNSTAKED: 0,
				STAKES: 5,
				UNSTAKES: 0
			}
		]
	};
}) satisfies PageServerLoad;
