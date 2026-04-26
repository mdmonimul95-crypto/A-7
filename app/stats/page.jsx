"use client";
import { useTimeline } from "@/context/TimelineContext";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#52b788", "#2d6a4f", "#f4a261"];

export default function StatsPage() {
  const { entries } = useTimeline();

  const counts = entries.reduce(
    (acc, e) => {
      acc[e.type] = (acc[e.type] || 0) + 1;
      return acc;
    },
    { Call: 0, Text: 0, Video: 0 }
  );

  const data = [
    { name: "Call", value: counts.Call },
    { name: "Text", value: counts.Text },
    { name: "Video", value: counts.Video },
  ].filter((d) => d.value > 0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-display text-3xl font-bold text-base-content mb-2">
        Friendship Analytics
      </h1>
      <p className="text-gray-400 mb-10">An overview of your interaction patterns.</p>

      {/* Summary row */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { label: "Total Calls", value: counts.Call, color: "text-success", bg: "bg-success/10" },
          { label: "Total Texts", value: counts.Text, color: "text-primary", bg: "bg-primary/10" },
          { label: "Total Videos", value: counts.Video, color: "text-warning", bg: "bg-warning/10" },
        ].map((item) => (
          <div key={item.label} className={`rounded-2xl p-5 text-center ${item.bg}`}>
            <div className={`font-display text-4xl font-bold ${item.color}`}>{item.value}</div>
            <div className="text-sm text-gray-500 mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Pie chart */}
      <div className="bg-white rounded-2xl border border-base-300 p-6">
        <h2 className="font-semibold text-base-content mb-4">Interaction Breakdown</h2>
        {data.length === 0 ? (
          <p className="text-center text-gray-400 py-10">
            No interactions yet. Log check-ins from friend detail pages!
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
