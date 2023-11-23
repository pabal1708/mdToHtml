import Image from "next/image";
import { Inter } from "next/font/google";
import Conversor from "./conversor";
import Logo from "../components/img/logo";
import Dropdown from "../components/dropdown";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [markdownValue, setMarkdownValue] = useState("");

  return (
    <main className="p-20 bg-white">
      <div className="flex justify-center w-full mb-14">
        <Logo />
        <p className="pt-6 text-black text-md">MD Creator</p>
        <p className="pt-6 mt-2 ml-3 text-xs text-black">powered by Pol</p>
      </div>
      <div className="w-6/12 px-3">
        <Dropdown addValue={setMarkdownValue} />
      </div>
      <div className="items-center justify-between w-full font-mono text-sm lg:flex">
        <Conversor markdownValue={markdownValue} />
      </div>
    </main>
  );
}
