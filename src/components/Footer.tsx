import React from "react";
import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-zinc-700 border-t px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="/foto4.jpg" height={56} width={56} alt="Foto de capa" />
        <div className="flex flex-col">
          <strong className="font-normal">Julia Vitória</strong>
          <span className="text-zinc-400 text-xs">Me Deixa Aqui</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="h-10 w-10 flex items-center justify-center pl-1 rounded-full bg-zinc-200 ml-auto mr-8 text-black">
            <Play />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-200">01:34</span>
          <div className="rounded-full w-96 h-1 bg-zinc-400">
            <div className="bg-zinc-200 rounded-full w-48 h-1"></div>
          </div>
          <span className="text-xs text-zinc-200">05:34</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="rounded-full w-24 h-1 bg-zinc-400">
            <div className="bg-zinc-200 rounded-full w-10 h-1"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
