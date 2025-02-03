import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href='/dashboard'>Dashboard</Link>
      <br/>
      <Link href='/blog'>Blog</Link>
      <Link href='/products'>Products</Link>
      <Link href='/products-review'>Product Reviews</Link>
    </div>
  );
}
