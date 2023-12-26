import AddAdmin from "../../components/AddAdmin";
import { newAdmin } from "../../Actions/adminActions";

const addAdmins = () => {
  return <AddAdmin adminActions={newAdmin}/>
};
export default addAdmins;