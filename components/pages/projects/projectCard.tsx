import { Card } from "@/components/ui/card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import Link from "next/link";

interface Props {
  url?: string;
  title?: string;
  pic: string | StaticImport;
}

export default function ProjectCard({ url = "/", title, pic }: Props) {
  return (
    <Card className="h-[300px] w-[370px] shadow-lg">
      <Link target="_blank" href={url}>
        <Image src={pic} alt="pic" className="h-full rounded-sm" />
      </Link>
      <p className="text-lg font-[600]">{title}</p>
    </Card>
  );
}
