window.addEventListener('DOMContentLoaded', (event) => {
	// document.querySelector('select').innerHTML=    '<option value="volvo">Volvo</option>'
});

const w = 500,
	h = 500,
	padding = 30;

const yScale = d3
	.scaleLinear()
	.domain(d3.extent(birthData2011, (d) => d.lifeExpectancy))
	.range([h - padding, padding]);
const xScale = d3
	.scaleLinear()
	.domain(d3.extent(birthData2011, (d) => d.births / d.population))
	.range([padding, w - padding]);

const colorScale = d3
	.scaleLinear()
	.domain(d3.extent(birthData2011, (d) => d.population / d.area))
	.range(['lightgreen', 'black']);

const radiusScale = d3
	.scaleLinear()
	.domain(d3.extent(birthData2011, (d) => d.births))
	.range([2, 40]);

const xAxis = d3.axisBottom(xScale).tickSize(-h+2*padding)
const yAxis = d3.axisLeft(yScale).tickSize(-w+2*padding)

d3.select('svg').append('g')
.attr('transform',`translate(0,${h-padding})`)
.call(xAxis);

d3.select('svg').append('g')
.attr('transform',`translate(${padding},0)`)
.call(yAxis);



d3.select('svg')
	.attr('width', w)
	.attr('height', h)
	.selectAll('circle')
	.data(birthData2011)
	.enter()
	.append('circle')
	.attr('cx', (d) => xScale(d.births / d.population))
	.attr('cy', (d) => yScale(d.lifeExpectancy))
	.attr('r', (d) => radiusScale(d.births))
	.attr('fill', (d) => colorScale(d.population / d.area))
	.attr('stroke-width', 1)
	.attr('stroke', 'blue');


d3.select('svg')
.append('text')
.attr('x',w/2)
.attr('y',h-padding)
.attr('dy','1.5em')
.style('text-anchor','middle')
.text('Births per Capita')

d3.select('svg')
.append('text')
.attr('x',w/2)
.attr('y',padding)
.attr('font-size','1.5em')
.style('text-anchor','middle')
.text('Data on Births by Country in 2011')

d3.select('svg')
.append('text')
.attr('transform','rotate(-90)')
.attr('x',-h/2)
.attr('y',-5)
.attr('dy','1.1em')
.style('text-anchor','middle')
.text('Life Expectancy')
