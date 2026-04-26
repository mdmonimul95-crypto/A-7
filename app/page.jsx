import friends from "@/data/friends.json";
import FriendCard from "@/components/FriendCard";
import { Users, AlertCircle, Clock, CheckCircle, Plus } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const overdue = friends.filter((f) => f.status === "overdue").length;
  const almostDue = friends.filter((f) => f.status === "almost due").length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;

  const summaryCards = [
    { label: "Total Friends", value: friends.length, icon: Users, color: "text-primary", bg: "bg-primary/10" },
    { label: "Overdue", value: overdue, icon: AlertCircle, color: "text-error", bg: "bg-error/10" },
    { label: "Almost Due", value: almostDue, icon: Clock, color: "text-warning", bg: "bg-warning/10" },
    { label: "On Track", value: onTrack, icon: CheckCircle, color: "text-success", bg: "bg-success/10" },
  ];

  return (
    <div>
      {/* Banner */}
      <section className="bg-gradient-to-br from-primary to-neutral py-20 px-4 text-center">
        <h1 className="font-display text-4xl sm:text-5xl text-white font-bold mb-3">
          Friends to keep close in your life
        </h1>
        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
          Stay intentional. Track your friendships and never lose touch with the
          people who matter most.
        </p>
        <button className="btn btn-secondary gap-2 text-white font-semibold px-6">
          <Plus size={18} />
          Add a Friend
        </button>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
          {summaryCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="bg-white/95 rounded-2xl p-4 flex flex-col items-center gap-1 shadow-md"
              >
                <div className={`w-10 h-10 rounded-full ${card.bg} flex items-center justify-center mb-1`}>
                  <Icon size={20} className={card.color} />
                </div>
                <span className={`text-3xl font-bold font-display ${card.color}`}>
                  {card.value}
                </span>
                <span className="text-xs text-gray-500 font-medium">{card.label}</span>
              </div>
            );
          })}
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
