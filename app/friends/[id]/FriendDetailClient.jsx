"use client";
import { useTimeline } from "@/context/TimelineContext";
import { Phone, MessageSquare, Video, Bell, Archive, Trash2, Edit2, Calendar, Target, Clock } from "lucide-react";
import toast from "react-hot-toast";

const tagStyles = {
  "close friend": "bg-pink-100 text-pink-700",
  "college":      "bg-blue-100 text-blue-700",
  "work":         "bg-purple-100 text-purple-700",
  "mentor":       "bg-indigo-100 text-indigo-700",
  "childhood":    "bg-yellow-100 text-yellow-700",
  "travel":       "bg-orange-100 text-orange-700",
  "travel buddy": "bg-orange-100 text-orange-700",
  "tech":         "bg-cyan-100 text-cyan-700",
  "book club":    "bg-emerald-100 text-emerald-700",
  "neighbor":     "bg-lime-100 text-lime-700",
  "photography":  "bg-rose-100 text-rose-700",
  "family":       "bg-amber-100 text-amber-700",
  "hobby":        "bg-green-100 text-green-700",
};

function getTagStyle(tag) {
  return tagStyles[tag.toLowerCase()] || "bg-base-200 text-base-content/70";
}

const statusConfig = {
  overdue:      { label: "Overdue",    className: "bg-red-500 text-white" },
  "almost due": { label: "Almost Due", className: "bg-orange-400 text-white" },
  "on-track":   { label: "On Track",   className: "bg-green-500 text-white" },
};

export default function FriendDetailClient({ friend }) {
  const { addEntry } = useTimeline();
  const status = statusConfig[friend.status] || statusConfig["on-track"];

  const handleCheckin = (type) => {
    addEntry(type, friend.name);
    const icons = { Call: "📞", Text: "💬", Video: "🎥" };
    toast(`${icons[type]} ${type} with ${friend.name} logged!`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-1 flex flex-col gap-4">

          {/* Friend Info Card */}
          <div className="bg-white rounded-2xl border border-base-300 p-6 flex flex-col items-center text-center gap-3">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h1 className="font-semibold text-lg text-base-content">{friend.name}</h1>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full mt-1 inline-block ${status.className}`}>
                {status.label}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 justify-center">
              {friend.tags.map((tag) => (
                <span key={tag} className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getTagStyle(tag)}`}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p className="text-xs text-gray-400 leading-relaxed italic">
              "{friend.bio}"
            </p>

            {/* Email */}
            <p className="text-xs text-gray-400">{friend.email}</p>
          </div>

          {/* Action Buttons */}
          <div className="bg-white rounded-2xl border border-base-300 p-4 flex flex-col gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-base-200 rounded-lg transition w-full">
              <Bell size={15} /> Snooze 2 Weeks
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-base-200 rounded-lg transition w-full">
              <Archive size={15} /> Archive
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition w-full">
              <Trash2 size={15} /> Delete
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 flex flex-col gap-4">

          {/* 3 Stat Cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Days Since Contact", value: friend.days_since_contact },
              { label: "Goal (Days)", value: friend.goal },
              { label: "Next Due", value: friend.next_due_date },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl border border-base-300 p-4 text-center">
                <div className="font-display text-2xl font-bold text-base-content">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-2xl border border-base-300 p-5">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-sm text-base-content">Relationship Goal</h2>
              <button className="text-xs text-gray-400 hover:text-primary transition">Edit</button>
            </div>
            <p className="text-sm text-gray-500">
              Connect every <strong>{friend.goal} days</strong>
            </p>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-2xl border border-base-300 p-5">
            <h2 className="font-semibold text-sm text-base-content mb-4">Quick Check-In</h2>
            <div className="grid grid-cols-3 gap-3">
              {[
                { type: "Call",  icon: Phone,          label: "Call" },
                { type: "Text",  icon: MessageSquare,  label: "Text" },
                { type: "Video", icon: Video,          label: "Video" },
              ].map(({ type, icon: Icon, label }) => (
                <button
                  key={type}
                  onClick={() => handleCheckin(type)}
                  className="flex flex-col items-center gap-2 py-4 rounded-xl border border-base-300 hover:bg-base-200 transition text-gray-600"
                >
                  <Icon size={22} />
                  <span className="text-xs font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}