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
};

function getTagStyle(tag) {
  return tagStyles[tag.toLowerCase()] || "bg-base-200 text-base-content/70";
}

const statusConfig = {
  overdue: { label: "Overdue", className: "status-overdue" },
  "almost due": { label: "Almost Due", className: "status-almost-due" },
  "on-track": { label: "On Track", className: "status-on-track" },
};

export default function FriendDetailClient({ friend }) {
  const { addEntry } = useTimeline();
  const status = statusConfig[friend.status] || statusConfig["on-track"];

  const handleCheckin = (type) => {
    addEntry(type, friend.name);
    const icons = { Call: "📞", Text: "💬", Video: "🎥" };
    toast(`${icons[type]} ${type} with ${friend.name} logged!`);
  };

  const checkinButtons = [
    { type: "Call", icon: Phone, label: "Call" },
    { type: "Text", icon: MessageSquare, label: "Text" },
    { type: "Video", icon: Video, label: "Video" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-base-300 p-6 flex flex-col items-center text-center gap-4">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-28 h-28 rounded-full bg-base-200 object-cover"
            />
            <div>
              <h1 className="font-display text-2xl font-bold text-base-content">
                {friend.name}
              </h1>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full mt-2 inline-block ${status.className}`}>
                {status.label}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {friend.tags.map((tag) => (
                <span key={tag} className={`text-xs font-medium px-3 py-1 rounded-full ${getTagStyle(tag)}`}>
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">{friend.bio}</p>

            <a href={`mailto:${friend.email}`} className="text-sm text-primary underline">
              {friend.email}
            </a>

            <div className="w-full flex flex-col gap-2 mt-2">
              <button className="btn btn-outline btn-sm gap-2 w-full">
                <Bell size={14} /> Snooze 2 Weeks
              </button>
              <button className="btn btn-outline btn-sm gap-2 w-full">
                <Archive size={14} /> Archive
              </button>
              <button className="btn btn-outline btn-error btn-sm gap-2 w-full">
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Days Since Contact", value: friend.days_since_contact, icon: Clock, color: "text-error" },
              { label: "Goal (days)", value: friend.goal, icon: Target, color: "text-primary" },
              { label: "Next Due Date", value: friend.next_due_date, icon: Calendar, color: "text-warning" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white rounded-2xl border border-base-300 p-4 text-center">
                  <Icon size={20} className={`${stat.color} mx-auto mb-2`} />
                  <div className={`font-display text-xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl border border-base-300 p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-base-content">Relationship Goal</h2>
              <button className="btn btn-outline btn-xs gap-1">
                <Edit2 size={12} /> Edit
              </button>
            </div>
            <p className="text-sm text-gray-500">
              You aim to connect with <strong>{friend.name}</strong> at least every{" "}
              <strong>{friend.goal} days</strong>.
            </p>
            <div className="mt-3 w-full bg-base-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  friend.status === "overdue" ? "bg-error"
                  : friend.status === "almost due" ? "bg-warning"
                  : "bg-success"
                }`}
                style={{ width: `${Math.min((friend.days_since_contact / friend.goal) * 100, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0 days</span>
              <span>{friend.goal} days goal</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-base-300 p-5">
            <h2 className="font-semibold text-base-content mb-4">Quick Check-In</h2>
            <div className="grid grid-cols-3 gap-3">
              {checkinButtons.map(({ type, icon: Icon, label }) => (
                <button
                  key={type}
                  onClick={() => handleCheckin(type)}
                  className="btn btn-primary gap-2 text-white"
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}