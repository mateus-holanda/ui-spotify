import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from 'next/image';

import { AlbumCard } from "./AlbumCard";
import { RecommendationCard } from "./RecommendationCard";

export function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <AlbumCard name="Jazz & Blues" image="jazz" />
        <AlbumCard name="Brazil's Greatest Hits" image="brazilian-flag" />
        <AlbumCard name="Sabaton" image="sabaton" />
        <AlbumCard name="Powerwolf" image="powerwolf" />
        <AlbumCard name="French songs" image="french-flag" />
        <AlbumCard name="Gym" image="gym" />
      </div>

      <h2 className="font-semibold text-2xl mt-10" >Made for Mateus</h2>

      <div className="grid grid-cols-5 gap-4 mt-4">
        <RecommendationCard name="Daily Mix 1" image="daily-mix-1" description="The Score, Zayde Wolf, Oh The Larceny and more" />
        <RecommendationCard name="Daily Mix 4" image="daily-mix-4" description=" Dan Romer, Clamavi de Profundis, Sonya Fuller and more" />
        <RecommendationCard name="Daily Mix 5" image="daily-mix-5" description=" TobyMac, Citizen Way, Group 1 Crew and more" />
        <RecommendationCard name="Discover Weekly" image="discover-weekly" description="Lady Gaga, Kygo, Bruno Mars and more" />
        <RecommendationCard name="On Repeat" image="on-repeat" description="Songs you love right now" />
      </div>
    </main>
  )
}