import "./globals.css";

export const metadata = {
  title: "NWA OpenClaw Meetup",
  description:
    "A Northwest Arkansas meetup for builders, operators, owners, and technicians exploring agentic autonomous systems and agent harnesses."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
