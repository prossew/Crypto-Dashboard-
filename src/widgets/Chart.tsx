import { useEffect, useRef } from "react";
import { createChart, LineSeries } from "lightweight-charts";
import { getCoinChart } from "../entities/coin/api";

export interface ChartProps {
  id: string;
  days: number;
}

function Chart({ id, days }: ChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: 800,
      height: 400,
    });

    const lineSeries = chart.addSeries(LineSeries);

    async function fetchChart() {
      const data = await getCoinChart(id, days);
      const formattedData = data.prices.map(([time, value]) => ({
        time: Math.floor(time / 1000) as any,
        value,
      }));
      lineSeries.setData(formattedData);
    }

    fetchChart();

    return () => chart.remove();
  }, [id, days]);

  return <div ref={chartContainerRef} />;
}

export default Chart;