import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

function BoxList() {
  return (
    <>
      <h2>Box list</h2>
      <NewBoxForm />
      <Box backgroundColor={"red"} width={"140px"} height={"150px"} />
    </>
  );
}

export default BoxList;
