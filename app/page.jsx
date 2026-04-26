import friends from "@/data/friends.json";
import FriendCard from "@/components/FriendCard";
import { Plus } from "lucide-react";

export default function HomePage() {
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const needAttention = friends.filter((f) => f.status !== "on-track").length;

  const summaryCards = [
    { label: "Total Friends", value: friends.length },
    { label: "On Track", value: onTrack },
    { label: "Need Attention", value: needAttention },
    { label: "Interactions This Month", value: 12 },
  ];

  return (
    <div>
      {/* Banner */}
      <section className="bg-white py-16 px-4 text-center border-b border-base-300">
        <h1 className="font-display text-4xl sm:text-5xl text-base-content font-bold mb-3">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-400 text-base mb-8 max-w-md mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>
        <button className="btn bg-neutral text-white hover:bg-primary gap-2 px-6">
          <Plus size={16} />
          Add a Friend
        </button>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10">
          {summaryCards.map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-xl border border-base-300 p-5 flex flex-col items-center gap-1 shadow-sm"
            >
              <span className="text-3xl font-bold font-display text-base-content">
                {card.value}
              </span>
              <span className="text-xs text-gray-400 font-medium">{card.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Friends Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-display text-2xl font-bold text-base-content mb-6">
          Your Friends
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </div>
  );
}