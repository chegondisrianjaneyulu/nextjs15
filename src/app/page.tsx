// import SearchFunction from "@/components/search";
import Counter from "@/components/counter";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Counter/>
      <Link href='/dashboard'>Dashboard</Link>
      {/* <SearchFunction/> */}
      <br/>
      <Link href='/blog'>Blog</Link>
      <Link href='/products'>Products</Link>
      <Link href='/products-review'>Product Reviews</Link>
      <Link href='/products-db'>Product DB</Link>
      <Link href='/new-dashboard'>New Dashboard</Link>
    </div>
  );
}
