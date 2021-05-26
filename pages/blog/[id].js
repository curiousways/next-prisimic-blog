import { client } from "../../prismic-configuration";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

import Layout from "../../components/Layout";

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "blogpost")
  );

  const paths = results.map((post) => {
    return {
      params: { id: post.uid },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const { data } = await client.getByUID("blogpost", id);
  return {
    props: { data },
  };
}

export default function BlopPage({ data }) {
  const { title, image, excerpt, content } = data;
  return (
    <Layout>
      <h1 className="text-5xl mb-8">{RichText.asText(title)}</h1>
      <div className="mb-6">
        <img className="block" src={image.url} alt="" />
      </div>
      <p className="text-gray-500 mb-8">{RichText.asText(excerpt)}</p>
      <div>{RichText.asText(content)}</div>
    </Layout>
  );
}
