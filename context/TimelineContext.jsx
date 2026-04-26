"use client";
import { createContext, useContext, useState } from "react";

const TimelineContext = createContext(null);

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState([
    {
      id: "init-1",
      type: "Call",
      friendName: "Sarah Chen",
      date: new Date(Date.now() - 18 * 86400000).toISOString(),
    },
    {
      id: "init-2",
      type: "Text",
      friendName: "Marcus Williams",
      date: new Date(Date.now() - 5 * 86400000).toISOString(),
    },
    {
      id: "init-3",
      type: "Video",
      friendName: "Priya Sharma",
      date: new Date(Date.now() - 11 * 86400000).toISOString(),
    },
  ]);

  const addEntry = (type, friendName) => {
    const newEntry = {
      id: `${Date.now()}-${Math.random()}`,
      type,
      friendName,
      date: new Date().toISOString(),
    };
    setEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  return useContext(TimelineContext);
}
