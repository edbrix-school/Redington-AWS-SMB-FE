"use client";

import React from "react";
import ReactEcharts from "echarts-for-react";

export default function SimplebarChart() {
  const option = {
    grid: {
      left: "0%",
      right: "0%",
      bottom: "3%",
      top: "3%",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      axisLine: { show: true, lineStyle: { color: "#E5E5E5" } },
      axisTick: { show: false },
      axisLabel: { show: false },  
    },

    yAxis: {
      type: "value",
      min: 0,
      max: 100,
      interval: 25,

      axisLine: { show: false },
      axisTick: { show: false },

      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#E5E5E5",
        },
      },

      axisLabel: {
        color: "#999",
        fontSize: 12,
      },
    },

    series: [
      {
        type: "bar",
        data: [10, 18, 28, 40,46, 68, 73, 88,95],
        barWidth:'50%',
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color: function (params) {
            const colors = [
              "#E5E2F1",
              "#DCD8EC",
              "#D3CDE7",
              "#C9C2E2",
              "#C0B7DD",
             
               "#C9C2E2",
              "#C0B7DD",
              "#B6ACD8",
              "#5B428F",
            ];
            return colors[params.dataIndex];
          },
        },
      },
    ],
  };

  return (
    <ReactEcharts option={option} style={{ width: "100%", height: "100%" }} />
  );
}
