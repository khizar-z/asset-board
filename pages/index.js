import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import instagram from "../public/instagram.svg";
import linkedin from "../public/linkedin.svg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ASSET - Home</title>
      </Head>

      <div className="flex justify-center mt-10">
        <Image src={logo} alt="logo" width="239px" height="250px"/>
        <div className="flex flex-row">
          <div className="flex flex-col justify-items-start ml-5">
            <h1 className="font-poppins text-9xl m-5 ml-7">A.S.S.E.T.</h1>
            <div className="flex flex-row ml-5">
              <Link href="/"> 
                <a className="font-poppins text-3xl m-2">Philosophy & Readings</a> 
              </Link>
              <p className="text-3xl m-2">|</p>
              <Link href="/board/"> 
                <a className="font-poppins text-3xl m-2">Political Board</a> 
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/4 mt-20 mb-20 flex justify-center">
        <div className="flex flex-col items-start">
          <div className="flex items-end m-2">
            <p className="font-grotesk text-8xl">A</p>
            <p className="font-grotesk text-6xl mb-1">ssociation of</p>
          </div>
          <div className="flex items-end m-2">
            <p className="font-grotesk text-8xl">S</p>
            <p className="font-grotesk text-6xl mb-1">ocial and</p>
          </div>
          <div className="flex items-end m-2">
            <p className="font-grotesk text-8xl">S</p>
            <p className="font-grotesk text-6xl mb-1">cientifically</p>
          </div>
          <div className="flex items-end m-2">
            <p className="font-grotesk text-8xl">E</p>
            <p className="font-grotesk text-6xl mb-1">nigmatic</p>
          </div>
          <div className="flex items-end m-2">
            <p className="font-grotesk text-8xl">T</p>
            <p className="font-grotesk text-6xl mb-1">hinkers</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-48">
        <div className="w-2/4">
          <p className="font-avenirlight text-3xl leading-10">​ASSET&apos;s (Association of Social and Scientifically Enigmatic Thinkers) goal is to promote literacy in philosophy and politics, by providing resources and simplifying concepts—while maintaining the meaning—for youth.<br/><br/>We aspire to better the world as a whole, through learning about different viewpoints and ideas, and developing understanding and acceptance for all.</p>
        </div>
      </div>

      <div className="flex justify-center mt-48">
        <div className="flex flex-col">
          <h2 className="font-grotesk text-5xl text-center">RESOURCES</h2>
          <div className="flex mt-20">
            <Link href="/"> 
              <a className="text-center text-5xl font-avenirlight mx-24">PHILOSOPHY<br/>& RESOURCES</a>
            </Link>
            <div className="divider"></div>
            <Link href="/board/">
              <a className="text-center text-5xl font-avenirlight mx-32">POLITICAL<br/>BOARD</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-48">
        <div className="w-2/4">
          <div className="flex flex-col">
            <h2 className="font-grotesk text-5xl text-center">OUR GOAL</h2>
            <p className="font-avenirlight text-3xl leading-10 mt-16">There&apos;s a huge problem with how unreadable many philosophical and political texts are; there is so much jargon that the actual message becomes lost. While one might argue that complex words are needed to explain complex ideas, there is no reason why there shouldn&apos;t be an effort to help more people learn about these subjects, regardless of language comprehension.<br/><br/>With more people becoming more literate and knowledgeable in such subjects, it becomes easier for opposing views to have discourse rather than discord. By seeing the larger picture of different views and ideologies, people will be less polarized and have compassion for one another.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-24">
          <div className="flex flex-col">
            <p className="font-questrial text-2xl mt-16 text-center">Association of Social and Scientifically<br/>Enigmatic Thinkers</p>
            <div className="flex justify-center mt-5">
              <div className="mr-5">
                <Link href="https://instagram.com/association_of_sset/">
                  <Image src={instagram} alt="logo" width="35px" height="35px"/>
                </Link>
              </div>
              <div className="mr-5">
                <Link href="https://www.linkedin.com/company/association-of-social-and-scientifically-enigmatic-thinkers/">
                  <Image src={linkedin} alt="logo" width="35px" height="35px"/>
                </Link>
              </div>
            </div>
            <p className="font-questrial text-xl mt-3 mb-8 text-center">associationofsset@gmail.com</p>
          </div>
      </div>
    </div>
  )
}