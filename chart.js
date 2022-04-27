"use strict";


google.charts.load("current", { packages: ["corechart"] });

/** line CHART */
function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Bitcoin', 'Ethereum', 'Polygon'],
			['Jan',  	4257269, 216484, 107.35],
               ['Feb',  2640420, 187286	,92.59],
               ['Mar',  2500918, 157658, 139.94],
               ['Apr',  3065117, 193314, 149.60],
               ['May',  3559358, 271248, 191.20],
               ['Jun',  3527191, 242409, 123.57],
               
               ['Jul',  4535328, 320732, 121.29],
               ['Aug',  4335150, 350985, 128.66],
               ['Sep',  3555110, 279584, 109.28],
               ['Oct',  2898589, 207751, 121.91],
               ['Nov',  3304436, 222202, 105.75],
               ['Dec',  3530623, 263682, 109.28]
            ]);
       
		
		var options = {'title' : 'Average Price of Coins',
               hAxis: {
                  title: 'Month'
               },
               vAxis: {
                  title: 'Price'
               },   
               'width':700,
               'height':300,
               pointsVisible: true	  
            };


        var chart = new google.visualization.LineChart(document.getElementById('linechart'));
        chart.draw(data, options);
      }
      google.charts.setOnLoadCallback(drawChart);
/** line END */


/** PIE CHART */
function drawPieChart() {
  var data = google.visualization.arrayToDataTable([
    ["Coins", "Price"],
    ["ETHEREUM", 4181563],
    ["BITCOIN", 2175498],
    ["SOLONA", 3125844],
    ["CARDANO", 1176121],
    
  ]);

  var options = {
    pieHole: 0.4,
    width: 500,
    height: 300,
    chartArea: { left: 0, top: 10, width: "100%", height: "100%" },
    colors: ["#339af0", "#cc5de8", "#20c997", "#fcc419"],
    legend: {
      alignment: "center",
      textStyle: { fontSize: 16 },
    },
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawPieChart);
/** PIE END */


/** COLUMN CHART */
function drawColumnChart() {
  var data = google.visualization.arrayToDataTable([
    ["Age", "Stock", "Crypto", "Other"],
    ["18-25", 26, 23, 54],
    ["26-41", 37, 38, 64],
    ["42-57", 38, 28, 59],
    ["58-76", 27, 6, 43],
  ]);

  var options = {
    vAxis: { title: "Investment Percentage" },
    hAxis: { title: "Age" },
    width: 1300,
    height: 400,
    colors: ["#228be6", "#e64980", "#fa5252"],
    chartArea: { left: 200, top: 60 },
    seriesType: "bars",
    animation: {
      duration: 300,
      easing: "in",
      startup: "true",
    },
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("columnchart")
  );
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawColumnChart);
/** COLUMN END */
