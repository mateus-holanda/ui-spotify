import Image from 'next/image';

interface RecommendationCardProps {
  name: string;
  image: string;
  description: string;
}

export function RecommendationCard({ name, image, description }: RecommendationCardProps) {
  return (
    <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      <Image src={`/${image}.png`} className="w-full" width={120} height={120} alt={name} />
      <strong className="font-semibold">{name}</strong>
      <span className="text-sm text-zinc-400">{description}</span>
    </a>
  )
}