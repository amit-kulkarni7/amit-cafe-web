import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",
  description: "Request a table at Amit Cafe in Portland. Demo reservation form for testing our concept experience.",
};

export default function ReservationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
