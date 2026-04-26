import Link from "next/link";

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
  "on-track":   { label: "On Track",  className: "bg-green-500 text-white" },
};

export default function FriendCard({ friend }) {
  const status = statusConfig[friend.status] || statusConfig["on-track"];

  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="friend-card bg-white rounded-2xl p-5 border border-base-300 cursor-pointer flex flex-col items-center text-center gap-2">
        
        {/* Avatar */}
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full object-cover"
        />

        {/* Name */}
        <h3 className="font-semibold text-base-content text-base mt-1">
          {friend.name}
        </h3>

        {/* Days since contact */}
        <p className="text-sm text-gray-400">
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 justify-center">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${getTagStyle(tag)}`}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Status badge */}
        <span className={`text-xs font-semibold px-4 py-1 rounded-full mt-1 ${status.className}`}>
          {status.label}
        </span>

      </div>
    </Link>
  );
}