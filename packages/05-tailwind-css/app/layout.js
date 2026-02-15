import "./globals.css";

export const metadata = {
  title: "Rick & Morty Card",
  description: "Character card",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-sky-200 text-gray-900">
        {children}
      </body>
    </html>
  );
}
