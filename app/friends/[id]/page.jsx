import friends from "@/data/friends.json";
import FriendDetailClient from "./FriendDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return friends.map((f) => ({ id: String(f.id) }));
}

export default async function FriendDetailPage({ params }) {
  const { id } = await params;
  const friend = friends.find((f) => f.id === parseInt(id));
  if (!friend) notFound();

  return <FriendDetailClient friend={friend} />;
}
