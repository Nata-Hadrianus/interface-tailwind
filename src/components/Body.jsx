import React from "react";
import Image from "next/image";
import {  ChevronLeft, ChevronRight, Play } from "lucide-react";
export default function Body() {
  return (
    <main className="flex-1 p-6">
    <div className="flex items-center gap-4">
      <button className="bg-black/40 rounded-full p-1">
        <ChevronLeft />
      </button>
      <button className="bg-black/40 rounded-full p-1">
        <ChevronRight />
      </button>
    </div>

    <h1 className="mt-12 font-semibold text-3xl">Welcome Nata!</h1>

     <div className="grid grid-cols-3 mt-4 gap-3">
      <div className="bg-zinc-700 group rounded overflow-hidden gap-4 items-center flex hover:bg-stone-500 transition-all duration-300">
         <Image src="/foto5.jpg" height={104} width={104} alt="Foto de capa" />
          <strong>The Only One I Need</strong>

           <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-emerald-600 ml-auto mr-8 text-black invisible group-hover:visible">
              <Play/>
           </button>
      </div>

      <div className="bg-zinc-700 group rounded overflow-hidden gap-4 items-center flex hover:bg-stone-500 transition-all duration-300">
        <Image src="/download.jpg" height={104} width={104} alt="Foto de capa" />
        <strong>Jesus, My Choice</strong>
           <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-emerald-500 ml-auto mr-8 text-black invisible group-hover:visible">
              <Play/>
           </button>
      </div>
      <div className="bg-zinc-700 group rounded overflow-hidden gap-4 items-center flex hover:bg-stone-500 transition-all duration-300">
        <Image src="/download (1).jpg" height={104} width={104} alt="Foto de capa" />
        <strong>Eternal Victory</strong>
        <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-emerald-500 ml-auto mr-8 text-black invisible group-hover:visible">
              <Play/>
           </button>
      </div>
      <div className="bg-zinc-700 group rounded overflow-hidden gap-4 items-center flex hover:bg-stone-500 transition-all duration-300">
        <Image src="/foto6.jpg" height={104} width={104} alt="Foto de capa" />
        <strong>Spiritual Reflections</strong>
         <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-emerald-600 ml-auto mr-8 text-black invisible group-hover:visible">
              <Play/>
           </button>
      </div>
      <div className="bg-zinc-700 group rounded overflow-hidden gap-4 items-center flex hover:bg-stone-500 transition-all duration-300">
        <Image src="/foto2.jpg" height={104} width={104} alt="Foto de capa" />
        <strong>Peace in the Valley</strong>
      </div>
      <div className="bg-zinc-700 group rounded overflow-hidden gap-4 items-center flex hover:bg-stone-500 transition-all duration-300">
        <Image src="/foto4.jpg" height={104} width={104} alt="Foto de capa" />
        <strong>Unshakable Praise</strong>
         <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-emerald-600 ml-auto mr-8 text-black invisible group-hover:visible">
              <Play/>
           </button>
      </div>
    </div>

    <h2 className="mt-10 font-semibold text-3xl">As músicas que mais gosto</h2>
     <div className="grid grid-cols-8 gap-4 mt-4">
        <div className="rounded-md p-3 bg-white/10 houver:bg-white/10 flex flex-col gap-2 ">
          <Image src="/foto7.jpg" className="w-full" height={120} width={120} alt="Foto de capa" />
          <strong className="font-semibold">Alma</strong>
          <span className="text-xl text-slate-800">Anderson freire</span>
        </div>
        
        <div className="rounded-md p-3 bg-white/5 houver:bg-white/10 flex flex-col gap-2">
          <Image src="/foto11.jpg" className="w-full" height={200} width={200} alt="Foto de capa" />
          <strong className="font-semibold">Vitorioso</strong>
          <span className="text-xl text-slate-800">Gabriel Guedes</span>
        </div>

        <div className="rounded-md p-3 grid-flow-col bg-white/5 houver:bg-white/10 flex flex-col gap-2">
          <Image src="/foto10.jpg" className="w-full" height={120} width={120} alt="Foto de capa" />
          <strong className="semibold">Me atraiu</strong>
          <span className="text-xl text-slate-800">Gabriela Rocha</span>
        </div>

        <div className="rounded-md p-3 bg-white/5 houver:bg-white/20 flex flex-col gap-2">
          <Image src="/foto12.jpg" className="w-full" height={120} width={120} alt="Foto de capa" />
          <strong className="font-semibold">O Criador</strong>
          <span className="text-xl text-slate-800">Eli Soares</span>
        </div>

        <div className="rounded-md p-3 bg-white/5 houver:bg-white/10 flex flex-col gap-2">
          <Image src="/foto8.jpg" className="w-full" height={120} width={120} alt="Foto de capa" />
          <strong className="font-semibold">A Reposta</strong>
          <span className="text-xl text-slate-800">André e Felipe</span>
        </div>
     </div>
  </main>
  );
}
