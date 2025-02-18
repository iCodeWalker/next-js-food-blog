import Link from "next/link";

// ######### Custom component "Header" is used here #########
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        {/* <a href="/about">About Us</a> */}
        <Link href="/about">About us</Link>
      </p>
    </main>
  );
}
