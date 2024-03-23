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
        offsetY: 18
    },

    dataLabels: {
        enabled: false
    }

}

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
            data: [1, 5, 10, 15, 20, 25, 30, 35, 40, 50, 100, 0]
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
            top: -30,
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

        categories: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"]

    }

};

let chart = new ApexCharts(
    document.querySelector(".area-chart"), barOptions
);

chart.render();
