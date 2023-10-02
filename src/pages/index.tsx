import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen min-w-full flex-col justify-center items-center bg-hero bg-cover ${inter.className}`}>
      <div className="font-serif text-white">
        <h6 className="text-4xl ml-3">Get to know</h6>
        <h1 className="text-9xl">Prashant Arya</h1>
        <span className="text-lg mr-0 ml-3">- Your friendly remote full-stack web developer</span>
      </div>
    </main>
  );
}
