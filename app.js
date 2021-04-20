let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');

let a=Array.of(12,6,1)
const data = {
	labels: ['Oct', 'Nov', 'Dec'],
	datasets: [
		{
			label: '# of Sales',
			data: [12, 9, 13],
			backgroundColor: [
				'rgba(238,183,104,1)',
				'rgba(75,166,223,1)',
				'rgba(239,118,122,1)',
			],
			borderWidth: 0,
		},
	],
};

let monthlySales = new Chart(ctx, {
	type: 'bar',
	data,
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Chart.js Bar Chart',
			},
		},
	},
});

let deptSales = new Chart(pieCtx, {
	type: 'pie',
	data: {
		labels: ['Hiking', 'Running', 'Swimming'],
		datasets: [
			{
				label: '# of Sales',
				data: [12, 9, 13],
				backgroundColor: [
					'rgba(238,183,104,1)',
					'rgba(75,166,223,1)',
					'rgba(239,118,122,1)',
				],
				borderWidth: 0,
			},
		],
	},
});
