"use client";
import Navbar from "@/components/layout/navbar";
import useTheme from "@/context/useTheme";

export default function App({ children }: any) {
  const { theme, setTheme } = useTheme();

  return (
    <html lang="en">
      <body className={`${theme}`}>
        <Navbar />
        <main className="w-[80%] m-auto">{children}</main>
      </body>
    </html>
  );
}
