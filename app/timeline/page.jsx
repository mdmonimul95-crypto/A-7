"use client";
import { useTimeline } from "@/context/TimelineContext";
import { Phone, MessageSquare, Video, Filter } from "lucide-react";
import { useState } from "react";

const typeConfig = {
  Call: { icon: Phone, color: "text-success", bg: "bg-success/10", label: "Call" },
  Text: { icon: MessageSquare, color: "text-primary", bg: "bg-primary/10", label: "Text" },
  Video: { icon: Video, color: "text-warning", bg: "bg-warning/10", label: "Video" },
};

export default function TimelinePage() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Call", "Text", "Video"];

  const filtered = filter === "All" ? entries : entries.filter((e) => e.type === filter);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-display text-3xl font-bold text-base-content mb-2">Timeline</h1>
      <p className="text-gray-400 mb-8">Your interaction history with friends.</p>

      {/* Filter Buttons */}
      <div className="flex items-center gap-2 mb-8">
        <Filter size={16} className="text-gray-400" />
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`btn btn-sm rounded-full ${
              filter === f ? "btn-primary text-white" : "btn-ghost"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Timeline Entries */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">No interactions yet.</p>
          <p className="text-sm mt-2">Log a check-in from a friend's detail page.</p>
        </div>
      ) : (
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-base-300" />

          <div className="flex flex-col gap-6">
            {filtered.map((entry) => {
              const config = typeConfig[entry.type];
              const Icon = config.icon;
              const date = new Date(entry.date);
              const formatted = date.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
              });

              return (
                <div key={entry.id} className="flex gap-5 items-start pl-2">
                  {/* Icon circle */}
                  <div className={`relative z-10 w-8 h-8 rounded-full ${config.bg} flex items-center justify-center flex-shrink-0 border-2 border-white shadow`}>
                    <Icon size={14} className={config.color} />
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-xl border border-base-300 p-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-base-content text-sm">
                        {entry.type} with {entry.friendName}
                      </h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${config.bg} ${config.color}`}>
                        {config.label}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{formatted}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
