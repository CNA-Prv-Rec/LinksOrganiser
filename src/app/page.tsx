import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
   <div>
    <h1 className="heading">Online Resource Organiser</h1>
    <p />
      <Link href="./music/musicList"
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-green-200 p-3 text-sm font-medium hover:bg-green-400 hover:text-amber-100 text-green-900 md:flex-none md:justify-start md:p-2 md:px-3">
            <p className="hidden md:block">Music favourites</p>
          </Link>

             <p />
      <Link href="./developerLearning/developerResources"
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-green-200 p-3 text-sm font-medium hover:bg-green-400 hover:text-amber-100 text-green-900 md:flex-none md:justify-start md:p-2 md:px-3">
            <p className="hidden md:block">Developer Resources</p>
          </Link>
    </div>
  );
}
