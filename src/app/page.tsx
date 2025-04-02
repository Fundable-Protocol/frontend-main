//  <Image
//    className="dark:invert"
//    src="/next.svg"
//    alt="Next.js logo"
//    width={180}
//    height={38}
//    priority
//  />;

import Navbar from "@/components/organisms/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="text-white bg-fundable-deep-purple-light h-dvh">
        hello
      </div>
    </main>
  );
}
