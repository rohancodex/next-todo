import Image from "next/image";
import { Atkinson_Hyperlegible } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const inter = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly px-12">
      <div className="flex flex-col justify-center items-center">
        <Image src={"check.svg"} alt="check-logo" width={100} height={100} />
        <div className="text-3xl text-zinc-800 mt-7">
          <h1>Welcome to</h1>
          <strong className="flex justify-center">Todo</strong>
        </div>
        <h2 className="mt-7 text-center text-gray-600">
          Todo helps you stay organized and perform your tasks much faster.
        </h2>
      </div>
      <div className="flex flex-col gap-5 text-blue-600 text-2xl font-bold">
        <Button size={"lg"}>
          <Link href="/todo">Jump Todo</Link>
        </Button>
        <Button variant={"link"} size={"lg"}>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            No thanks
          </Link>
        </Button>
      </div>
    </main>
  );
}
