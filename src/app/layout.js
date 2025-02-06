import "./globals.css";

export const metadata = {
  title: "JakeGlow - Luxury Salon Experience",
  description: "Discover premium salon services with JakeGlow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream text-dark">{children}</body>
    </html>
  );
}

