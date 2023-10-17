import React from "react";
import { Home as HomeIcon, Search, Library } from "lucide-react";

export default function SideBar() {
  return (
    
        <aside className="w-60 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-700" />
            <div className="h-3 w-3 rounded-full bg-violet-800" />
            <div className="h-3 w-3 rounded-full bg-pink-500" />
          </div>
          <nav className="space-y-5 mt-10">
            <a href="#" className="flex items-center text-sm gap-3 font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="#" className="flex items-center text-sm gap-3 font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="#" className="flex items-center text-sm gap-3 font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="pt-6 mt-6 border-t border-zinc-800 gap-2 flex flex-col">
            <a href="" className="text-sm text-zinc-400">Praise & Worship Anthems</a>
            <a href="" className="text-sm text-zinc-400">Gospel Glory</a>
            <a href="" className="text-sm text-zinc-400">Christian Classics</a>
            <a href="" className="text-sm text-zinc-400">Gospel Groove Sanctuary</a>
            <a href="" className="text-sm text-zinc-400">Psalms & Praise</a>
            <a href="" className="text-sm text-zinc-400">Gospel Resonance</a>
            <a href="" className="text-sm text-zinc-400">Soulful Gospel Revival</a>
            <a href="" className="text-sm text-zinc-400">Hymns of Hope</a>
            <a href="" className="text-sm text-zinc-400">Worship in Spirit and Truth</a>
            <a href="" className="text-sm text-zinc-400">Uplifting Gospel Hymns</a>
            <a href="" className="text-sm text-zinc-400">Gospel Testimonies</a>
            <a href="" className="text-sm text-zinc-400">Heavenly Harmonies</a>
            <a href="" className="text-sm text-zinc-400">Inspirational Gospel Hits</a>
          </nav>
        </aside>
    
  );
}
