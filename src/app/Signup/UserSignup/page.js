import UserForm from "../../Components/Registration/UserForm";
import AddUsers from "../../Components/User/addUsers";
import { addUser } from "../../Actions/userActions";
import prisma from "../../../../lib/prisma";

const UserRegistrationForm = () => {
  return <UserForm userAction={addUser} />;
};
export default UserRegistrationForm;
