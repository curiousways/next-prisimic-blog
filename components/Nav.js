import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex mb-12">
      <Link href="/">
        <a className="mr-4 font-semibold text-xl">Home</a>
      </Link>
      <Link href="/blog">
        <a className="font-semibold text-xl">Blog Posts</a>
      </Link>
    </div>
  );
}
