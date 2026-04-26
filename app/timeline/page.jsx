"use client";
import { useTimeline } from "@/context/TimelineContext";
import { Phone, MessageSquare, Video, ChevronDown } from "lucide-react";
import { useState } from "react";

const typeConfig = {
  Call:  { icon: Phone,         color: "text-gray-600",   bg: "bg-gray-100",    label: "Call" },
  Text:  { icon: MessageSquare, color: "text-yellow-600", bg: "bg-yellow-100",  label: "Text" },
  Video: { icon: Video,         color: "text-orange-500", bg: "bg-orange-100",  label: "Video" },
};

export default function TimelinePage() {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filters = ["All", "Call", "Text", "Video"];
  const filtered = filter === "All" ? entries : entries.filter((e) => e.type === filter);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">

      {/* Header */}
      <h1 className="font-display text-3xl font-bold text-base-content mb-6">
        Timeline
      </h1>

      {/* Filter Dropdown */}
      <div className="relative mb-6 w-48">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full flex items-center justify-between px-4 py-2 bg-white border border-base-300 rounded-lg text-sm text-gray-500 hover:border-gray-400 transition"
        >
          Filter: {filter}
          <ChevronDown size={14} />
        </button>
        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white border border-base-300 rounded-lg shadow-md z-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => { setFilter(f); setDropdownOpen(false); }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-base-200 transition ${
                  filter === f ? "font-semibold text-primary" : "text-gray-500"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Entries */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p>No interactions yet.</p>
        </div>
      ) : (
        <div className="flex flex-col">
          {filtered.map((entry) => {
            const config = typeConfig[entry.type];
            const Icon = config.icon;
            const date = new Date(entry.date);
            const formatted = date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            });

            return (
              <div
                key={entry.id}
                className="flex items-center gap-4 py-4 border-b border-base-300"
              >
                {/* Icon */}
                <div className={`w-9 h-9 rounded-full ${config.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={15} className={config.color} />
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm text-base-content">
                    <span className="font-semibold">{entry.type}</span>{" "}
                    with {entry.friendName}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{formatted}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}