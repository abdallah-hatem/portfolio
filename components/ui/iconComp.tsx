import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  url: string;
}
export default function IconComp({ icon, url }: Props) {
  return (
    <Link href={url} target="_blank">
      <div className="bg-[white] w-12 h-12 text-xl text-secondary rounded-3xl flex justify-center items-center shadow-lg cursor-pointer hover:scale-[1.3] duration-300 ease-in-out">
        {icon}
      </div>
    </Link>
  );
}
