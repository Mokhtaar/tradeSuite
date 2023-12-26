import AddAdmin from "../../Components/Admin/AddAdmin";
import { addUser } from "../../Actions/userActions";


const addAdmins = () => {
  return <AddAdmin userAction={addUser}/>
};
export default addAdmins;