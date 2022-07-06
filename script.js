const barchartData = [4,8,15,16,23,42];

d3.select('#barchart').selectAll("div")
    .data(barchartData)
    .enter()
    .append("div")
    .style("height", (d) => d + "px");

d3.select('#hello')
    .append("p")
    .text(" Welcome to my D3 portfolio Channel");


// creating random data
const yAxis  = 500;
const xAxis  = 500;
const numPoints = 50;
const data = [];
for(let i=0; i < numPoints; i++){
    data.push([Math.random(),Math.random()])
}

d3.select('#scatter')
    .append("svg")
    .apped("g")
    .attr("transform","translate(" + margin + "," + margin + ")");

