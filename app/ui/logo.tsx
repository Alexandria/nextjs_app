import Image from "next/image";
import { roboto } from "./fonts";

export default function Logo() {
  return (
    <div
      className={`${roboto.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/logo-white.png"
        width={300}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}
