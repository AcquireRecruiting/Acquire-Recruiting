import { echartSetOption } from '../echarts-utils';

const radarMultipleChartInit = () => {
  const { getColor, getData, rgbaColor, resize } = window.phoenix.utils;
  const $chartEl = document.querySelector(
    '.echart-radar-multiple-chart-example'
  );

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const getCenter = () => {
    if (window.innerWidth < 1540 && window.innerWidth > 992) {
      return [
        ['25%', '40%'],
        ['50%', '75%'],
        ['75%', '40%']
      ];
    }
    if (window.innerWidth < 992) {
      return [
        ['50%', '20%'],
        ['50%', '50%'],
        ['50%', '80%']
      ];
    }
    return [
      ['15%', '50%'],
      ['50%', '50%'],
      ['85%', '50%']
    ];
  };

  if ($chartEl) {
    const userOptions = getData($chartEl, 'echarts');
    const chart = window.echarts.init($chartEl);
    const getDefaultOptions = () => ({
      legend: {
        left: 'left',
        textStyle: {
          color: getColor('tertiary-color')
        }
      },
      tooltip: {
        trigger: 'item',
        padding: [7, 10],
        backgroundColor: getColor('body-highlight-bg'),
        borderColor: getColor('border-color'),
        textStyle: { color: getColor('light-text-emphasis') },
        borderWidth: 1,
        transitionDuration: 0,
        axisPointer: {
          type: 'none'
        },
        position(pos, ...size) {
          if (window.innerWidth <= 540) {
            const tooltipHeight = size[1].offsetHeight;
            const obj = { top: pos[1] - tooltipHeight - 20 };
            obj[pos[0] < size[3].viewSize[0] / 2 ? 'left' : 'right'] = 5;
            return obj;
          }
          return null;
        }
      },

      radar: [
        {
          indicator: [
            { text: 'Brand', max: 100 },
            { text: 'content', max: 100 },
            { text: 'Usability', max: 100 },
            { text: 'Features', max: 100 }
          ],
          center: getCenter()[0],
          radius: 85,
          splitLine: {
            lineStyle: {
              color: rgbaColor(getColor('tertiary-color'))
            }
          }
        },
        {
          indicator: [
            { text: 'Exterior', max: 100 },
            { text: 'Take pictures', max: 100 },
            { text: 'system', max: 100 },
            { text: 'performance', max: 100 },
            { text: 'screen', max: 100 }
          ],
          radius: 85,
          center: getCenter()[1],
          splitLine: {
            lineStyle: {
              color: rgbaColor(getColor('tertiary-color'))
            }
          }
        },
        {
          indicator: months.map(month => ({
            text: month,
            max: 100
          })),
          center: getCenter()[2],
          radius: 85,
          splitLine: {
            lineStyle: {
              color: rgbaColor(getColor('tertiary-color'))
            }
          }
        }
      ],

      series: [
        {
          type: 'radar',
          tooltip: {
            trigger: 'item'
          },
          areaStyle: {
            color: rgbaColor(getColor('info'), 0.5)
          },
          data: [
            {
              value: [60, 73, 85, 40],
              name: 'A software',
              itemStyle: {
                color: getColor('info')
              }
            }
          ]
        },
        {
          type: 'radar',
          radarIndex: 1,
          data: [
            {
              value: [85, 90, 90, 95, 95],
              name: 'A staple mobile phone',
              itemStyle: {
                color: rgbaColor(getColor('primary'), 0.8)
              },
              areaStyle: {
                color: rgbaColor(getColor('primary'), 0.3)
              }
            },
            {
              value: [95, 80, 75, 90, 93],
              name: 'A fruit phone',
              itemStyle: {
                color: getColor('success')
              },
              areaStyle: {
                color: rgbaColor(getColor('success'), 0.3)
              }
            }
          ]
        },
        {
          type: 'radar',
          radarIndex: 2,
          areaStyle: {},
          tooltip: {
            show: false
          },
          data: [
            {
              name: 'Precipitation',
              value: [
                2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0,
                2.3
              ],
              itemStyle: {
                color: getColor('primary')
              },
              areaStyle: {
                color: rgbaColor(getColor('primary'), 0.5)
              }
            },
            {
              name: 'Evaporation',
              value: [
                2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4,
                3.3
              ],
              itemStyle: {
                color: getColor('warning')
              },
              areaStyle: {
                color: rgbaColor(getColor('warning'), 0.5)
              }
            }
          ]
        }
      ]
    });
    echartSetOption(chart, userOptions, getDefaultOptions);

    resize(() => {
      chart.setOption({
        radar: getCenter().map(item => ({
          center: item
        }))
      });
    });
  }
};

export default radarMultipleChartInit;
