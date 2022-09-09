import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ASSET - Home</title>
      </Head>

      <div className="">
        <Image src={logo} alt="logo" width="239px" height="250px" />
        <h1 className="font-poppins text-9xl">A.S.S.E.T.</h1>
      </div>
    </div>
  )
}