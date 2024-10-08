import Image from "next/image";
import Next from "./next.svg"

export default function Home() {
  return (
    <div>
      <Image src="https://nextjs.org/icons/next.svg" alt="Next.js logo" width={180} height={38} />

      <Image src={Next} alt="Next" width={180} />
    </div>
  );
}
