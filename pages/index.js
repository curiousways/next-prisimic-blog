import { client } from "../prismic-configuration";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

import Layout from "../components/Layout";

export async function getStaticProps() {
  const home = await client.getSingle("home_page");
  return {
    props: {
      home,
    },
  };
}

export default function Home({ home }) {
  const { hero_image, headline, cta_link, cta_label } = home.data;
  return (
    <div>
      <main>
        <Layout>
          <h1 className="mb-4 text-4xl font-bold">
            {RichText.asText(headline)}
          </h1>
          <img
            src={hero_image.url}
            alt={hero_image.alt}
            className="w-full block"
          />
          <Link href={cta_link.url}>
            <a className="bg-red-400 p-3 mt-7 block w-1/4 text-center">
              {RichText.asText(cta_label)}
            </a>
          </Link>
        </Layout>
      </main>
    </div>
  );
}
