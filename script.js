// creating Bar chart data
const barchartData = [4,8,15,16,23,42];

d3.select('#barchart').selectAll("div")
    .data(barchartData)
    .enter()
    .append("div")
    .style("height", (d) => d + "px");

d3.select('.heading-primary')
    .append("span")
    .text(" Welcome to my D3 js portfolio")
    .attr('class','heading-primary-main' );


// creating random data
var svg = d3.select("#svg"),
            width = svg.attr("width"),
            height = svg.attr("height"),
            radius = 200;

var data = [{name:"Gabriel",share:20.70},
    {name:"Rafael",share:30.9},
    {name:"Yasmim",share:15.42},
    {name:"Francisco",share: 13.65},
    {name:"Karla",share:19.3}];

var g = svg.append("g")
.attr("transform", "translate(400,250)");


var ordScale = d3.scaleOrdinal()
    .domain(data)
    .range(['#ffd384','#94ebcd','#fbaccc','#d3e0ea','#fa7f72']);

var pie = d3.pie().value(function(d) {
    return d.share;
});

var arc =  g.selectAll("arc").data(pie(data)).enter();

var path = d3.arc().outerRadius(radius).innerRadius(0);

arc.append("path").attr("d",path).attr("fill",function(d){
    return ordScale(d.data.name);
});

var label = d3.arc()
                .outerRadius(radius)
                .innerRadius(0);
            
arc.append("text")
    .attr("transform", function(d) { 
            return "translate(" + label.centroid(d) + ")"; 
    })
    .text(function(d) { return d.data.name; })
    .style("font-family", "arial")
    .style("font-size", 15);
