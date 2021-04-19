const data = [3, 2, 4, 6, 7];
const width = 600;
const height = 600;
const r = 50;

function plot(svg, data) {
	d3.select(svg)
		.attr('width', width)
		.attr('height', height)
		.selectAll('circle')
		.data(data)
		.enter()
		.append('circle')
		.attr('cx', (d, i) => i * r * 2 + r)
		.attr('cy', height / 2)
		.attr('r', (d) => d*10)
		.attr('fill', (d) => `hsl(120,100%,${d*10}%`)
        .on("click", function(e, i){
            data.splice(i, 1);
            plot();
          })
		.exit()
		.remove()
}

function remove(){
    data.pop()
    plot('svg', data);
}

window.addEventListener('DOMContentLoaded', () => {
	plot('svg', data);
})

document.querySelectorAll('circle')