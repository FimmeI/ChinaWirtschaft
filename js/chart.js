const colorPrimary = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-primary")
    .trim();

const colorLabel = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-label")
    .trim();

const fontFamily = getComputedStyle(document.documentElement)
    .getPropertyValue("--font-family")
    .trim();

const defaultOptions = {

    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        width: '100%',
        height: 180,
        offsetY: 15
    },

    dataLabels: {
        enabled: false
    }

}



document.querySelectorAll(".area-chart").forEach(chart => {
	

let barOptions = {

    ...defaultOptions,

    chart: {
        ...defaultOptions.chart,
        type: "area"
    },

    tooltip: {
        enabled: true,
        style: {
            fontFamily: fontFamily
        },
        y: {
            formatter: value => `${value}`
        }
    },

    series: [
        {
            name: "Export in Millionen",
            data: []
        }
    ],

    colors: [colorPrimary],

    fill: {
        type: "gradient",
        gradient: {
            type: "vertical",
            opacityFrom: 1,
            opacityTo: 0,
            stops: [0, 100],
            colorStops: [
                {
                    offset: 0,
                    opacity: .2,
                    color: "#ffffff"
                },
                {
                    offset: 100,
                    opacity: 0,
                    color: "#ffffff"
                }
            ]
        }
    },

    stroke: { colors: [colorPrimary], lineCap: "round" },

    grid: {
        borderColor: "rgba(0, 0, 0, 0)",
        padding: {
            top: -20,
            right: 0,
            bottom: -8,
            left: 12
        }
    },

    markers: {
        strokeColors: colorPrimary
    },

    yaxis: {
        labels: {
            show: true,
            floating: true,
            style: {
                colors: colorLabel,
                fontFamily: fontFamily
            }
        },
    },

    xaxis: {

        labels: {
            show: true,
            floating: true,
            style: {
                colors: colorLabel,
                fontFamily: fontFamily
            }
        },

        axisBorder: {
            show: false
        },

        crosshairs: {
            show: false
        },

        categories: ["2011", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2022"]

    }

};
	
	
	barOptions.series[0].name = chart.parentElement.children[0].innerText
	
	var dataText = chart.parentElement.children[1].innerText.replace(/\s/g, '');
	var dataArray = dataText.split(',');
	var numberArray = dataArray.map(function(item) {
		return parseFloat(item);
	});
	
	barOptions.series[0].data = numberArray
	
	// Remove Element
	var elementToRemove = chart.parentElement.children[1];
	if (elementToRemove) {
		elementToRemove.remove();
	}
	
	let c = new ApexCharts(
		chart, barOptions
	);
	c.render();
});
