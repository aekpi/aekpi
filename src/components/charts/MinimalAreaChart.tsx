"use client";

import { PropsWithChildren } from "react";
import { Area, AreaChart } from "recharts";

interface Props {
  data: number[];
}

export function MinimalAreaChart({ data }: PropsWithChildren<Props>) {
  return (
    <AreaChart
      style={{
        width: "100%",
        maxHeight: "100px",
        aspectRatio: 1.618,
      }}
      responsive
      data={data.map((uv) => ({ uv }))}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#0030dd"
        fill="#0030dd"
        fillOpacity={1}
      />
    </AreaChart>
  );
}
