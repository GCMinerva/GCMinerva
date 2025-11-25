import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minerva Stickers",
  description: "Official Minerva#24809 Gen3 LINE sticker collection. Express your robotics passion with our unique team-themed stickers.",
  openGraph: {
    title: "Minerva Stickers | Minerva#24809 Gen3",
    description: "Discover our official LINE sticker collection featuring the Minerva team spirit!",
    images: ["/assets/images/common/index/bnr.png"],
  },
};

export default function StickersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
