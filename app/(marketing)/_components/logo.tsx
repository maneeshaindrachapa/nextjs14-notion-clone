import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const Logo = () => {
  return (
    <div className="hidden items-center gap-x-2 md:flex">
      <Image
        src="/logo/logo.svg"
        height={30}
        width={30}
        alt="logo"
        className="dark:invert"
      />
      <p className={cn("font-semibold", poppins.className)}>Notion</p>
    </div>
  );
};
