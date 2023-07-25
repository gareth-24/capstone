import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/Container";
import Billboard from "@/components/Billboard";

export const revalidate = 0; //clear cached data

const HomePage = async () => {
  const billboard = await getBillboard(`871631ff-b05c-47c8-892f-074dc3e5af69`);

  return (
    //This is the store
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}

export default HomePage;