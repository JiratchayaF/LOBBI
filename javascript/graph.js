var xValues = ["S", "M", "T", "W", "T","F","S"];
var yValues = [0,7.5, 9, 7.5, 7, 6.5,0];
var barColors = ["#45B39D","#45B39D","#C0392B","#45B39D","#45B39D","#45B39D"];
// "#C0392B"

    new Chart("myChart", {
        type: "bar",
        data: {
                labels: xValues,
                datasets: [{
                
                backgroundColor: barColors,
                data: yValues
                }]
                },
                options: {
                legend: {display: false},
                title: {
                    display: true,
                    text: "Time Spend statistic"
                    }
                  }
                });