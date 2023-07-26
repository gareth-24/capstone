import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/Container";
import Billboard from "@/components/Billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/Product-list";

export const revalidate = 0; //clear cached data

const HomePage = async () => {
  const products = await getProducts({isFeatured: true});
  const billboard = await getBillboard(`871631ff-b05c-47c8-892f-074dc3e5af69`);

  return (
    //This is the store
    <Container>
      <div className="space-y-10 pb-10 bg-slate-100">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;