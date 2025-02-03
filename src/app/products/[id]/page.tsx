export const dynamicParams = false;
//default true..when it is false if id not present in generate static params return 404
export async function generateStaticParams() {
  return [{id:'1'}, {id:'2'}]
}

async function ProductId({params}: {params: Promise<{id:string}>}) {
  const { id } = await params;
  return (
    <div>Product {id} details rendered at {new Date().toLocaleTimeString()}</div>
  )
}

export default ProductId