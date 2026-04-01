import Image from "next/image";

export function AboutImage() {
  return (
    <div className="flex justify-center">
      <div className="relative inline-block">

        {/* Glow */}
        <div className="absolute inset-0 -z-10 rounded-3xl bg-violet-600/20 blur-[80px] scale-110" />

        <Image
          src="/about.png"
          alt="Agustina Romer"
          width={320}
          height={320}
          priority
          className="rounded-3xl object-contain drop-shadow-[0_0_24px_rgba(139,92,246,0.5)]"
        />

        {/* Decorative dots */}
        <span className="absolute -top-3 -right-3 text-violet-400 text-lg select-none">✕</span>
        <span className="absolute top-6 -right-6 text-violet-600 text-sm select-none">○</span>
        <span className="absolute -bottom-3 -left-3 text-violet-500 text-base select-none">○</span>
        <span className="absolute bottom-6 -left-6 text-violet-400 text-sm select-none">✕</span>
      </div>
    </div>
  );
}
