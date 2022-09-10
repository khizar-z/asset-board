import matter from 'gray-matter';
import fs from 'fs';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import instagram from "../../public/instagram.svg";
import linkedin from "../../public/linkedin.svg";

export default function ReadingsHome({ posts }) {
  return (
    <div className='flex flex-col justify-center items-center w-screen'>
      <Head>
        <title>ASSET - Readings</title>
      </Head>
      <h1 className="font-grotesk text-5xl text-center mt-10">Philosophy & Readings</h1>
      <div className='flex'>
        <Link href='/'>
          <a className="underline font-questrial text-3xl text-center mt-5 mb-10 mx-16">Home</a>
        </Link>
        <Link href='/board/'>
          <a className="underline font-questrial text-3xl text-center mt-5 mb-10 mx-16">Board</a>
        </Link>
      </div>
      {posts.map(({ slug, frontmatter }) => (
        <div key={slug} className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col w-1/5 mt-5'>
          <Link href={`/readings/${slug}`}>
            <a>
              <h1 className='p-4 font-questrial text-3xl text-center'>{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
      <div className="flex justify-center mt-24">
          <div className="flex flex-col">
            <p className="font-questrial text-2xl mt-16 text-center">Association of Social and Scientifically<br/>Enigmatic Thinkers</p>
            <div className="flex justify-center mt-5">
              <div className="mr-5">
                <Link href="https://instagram.com/association_of_sset/">
                  <a>
                    <Image src={instagram} alt="logo" width="35px" height="35px"/>
                  </a>
                </Link>
              </div>
              <div className="mr-5">
                <Link href="https://www.linkedin.com/company/association-of-social-and-scientifically-enigmatic-thinkers/">
                  <a>
                    <Image src={linkedin} alt="logo" width="35px" height="35px"/>
                  </a>
                </Link>
              </div>
            </div>
            <p className="font-questrial text-xl mt-3 mb-8 text-center">associationofsset@gmail.com</p>
          </div>
      </div>
    </div>
  );
}

export async function getStaticProps() { 
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  }
}