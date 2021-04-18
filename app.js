// write your code here!

const getFrequencies = (str) => {
	let occObj = str
		.split('')
		.sort()
		.reduce((a, e) => {
			return a[e] ? a[e]++ : (a[e] = 1), a;
		}, {});
	return Object.keys(occObj).map((e) => {
		const val = occObj[e];
		return { character: e, count: val };
	});
};

d3.select('form').on('submit', () => {
	d3.event.preventDefault();
	let strFrequencies = getFrequencies(d3.select('input').property('value'));
	console.log(strFrequencies);
	d3.select('#letters')
    .selectAll('.letter')
		.data(strFrequencies)
		.enter()
		.append('div')
		.text((d) => d.character)
        .classed('letter',true)
        .style('height',d=>d.count*20+'px')
        .style('width','20px')
        .style('line-height','20px')
        .style('margin-right','5px')
});
