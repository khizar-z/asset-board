import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center h-screen justify-center">
        <h1 className="font-grotesk font-bold text-7xl">404 - Page Not Found</h1>
        <div className="flex mt-10">
          <Link href="/">
            <a className="text-4xl underline mx-10 font-questrial">Home</a>
          </Link>
          <Link href="/board/">
            <a className="text-4xl underline mx-10 font-questrial">Board</a>
          </Link>
          <Link href="/readings/">
            <a className="text-4xl underline mx-10 font-questrial">Readings</a>
          </Link>
        </div>
      </div>
    </div>
  )
}