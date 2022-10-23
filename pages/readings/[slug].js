import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import instagram from '../../public/instagram.svg';
import linkedin from '../../public/linkedin.svg';

export default function PostPage({ frontmatter, content }) {
  return (
    <div>
      <Head>
        <title>ASSET - { frontmatter.metaTitle }</title>
      </Head>
      <div className='prose mx-auto'>
        <h1 className='text-center font-grotesk font-bold mt-10'>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>

      <div className="flex justify-center mt-16">
        <div className="flex flex-col">
          <Link href="/readings/">
            <a className='text-center font-questrial font-bold mt-10 text-2xl underline'>Back to readings</a>
          </Link>
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

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}