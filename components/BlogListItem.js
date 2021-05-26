import Link from "next/link";
import { RichText } from "prismic-reactjs";

export default function BlogListItem({ item }) {
  const { image, title } = item.data;
  return (
    <div className="shadow-md">
      <img className="w-full block" src={image.url} alt="" />
      <div className="px-4 py-8">
        <h3 className="font-semibold text-2xl">{RichText.asText(title)}</h3>
        <Link href="/blog/[id]" as={`/blog/${item.uid}`}>
          <a className="block mt-6 text-xl">View post &#8594;</a>
        </Link>
      </div>
    </div>
  );
}
