import AddAdmin from "../../components/AddAdmin";
import { newAdmin } from "../../Actions/adminActions";
import { addUser } from "../../Actions/userActions";

const addAdmins = () => {
  return <AddAdmin userAction={addUser}/>
};
export default addAdmins;