import { echartSetOption } from '../echarts-utils';

const basicScatterChartInit = () => {
  const { getColor, getData } = window.phoenix.utils;
  const $chartEl = document.querySelector(
    '.echart-basic-scatter-chart-example'
  );

  if ($chartEl) {
    const userOptions = getData($chartEl, 'echarts');
    const chart = window.echarts.init($chartEl);
    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'none'
        },
        padding: [7, 10],
        backgroundColor: getColor('body-highlight-bg'),
        borderColor: getColor('border-color'),
        textStyle: { color: getColor('light-text-emphasis') },
        borderWidth: 1,
        transitionDuration: 0
      },
      xAxis: {
        axisLabel: {
          color: getColor('quaternary-color')
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: getColor('secondary-bg')
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: getColor('secondary-bg')
          }
        }
      },
      yAxis: {
        axisLabel: {
          color: getColor('quaternary-color')
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: getColor('secondary-bg')
          }
        },

        axisLine: {
          show: true,
          lineStyle: {
            color: getColor('secondary-bg')
          }
        }
      },
      series: [
        {
          // symbolSize: val => val[2] * 2,
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.2],
            [11.5, 7.2],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
            [7.08, 5.82],
            [5.02, 5.68]
          ],
          type: 'scatter',
          itemStyle: {
            color: getColor('danger')
          }
        }
      ],
      grid: {
        right: 8,
        left: 5,
        bottom: 5,
        top: 8,
        containLabel: true
      }
    });
    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default basicScatterChartInit;
