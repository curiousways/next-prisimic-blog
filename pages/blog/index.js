import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { client } from "../../prismic-configuration";

import Layout from "../../components/Layout";
import BlogListItem from "../../components/BlogListItem";

export async function getStaticProps() {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "blogpost")
  );

  return {
    props: { results },
  };
}

export default function Blog({ results }) {
  return (
    <Layout>
      <div className="capitalize text-5xl mb-16">all blog posts created</div>
      <div className="grid gap-12 auto-rows-min md:grid-cols-2 lg:grid-cols-3">
        {results.map((result) => (
          <BlogListItem key={result.id} item={result} />
        ))}
      </div>
    </Layout>
  );
}
