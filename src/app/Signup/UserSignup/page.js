import UserForm from "../../components/UserForm";
import { addUser } from "../../Actions/userActions";
import prisma from "../../../../lib/prisma";

const UserRegistrationForm = () => {
  return <UserForm onSubmit={addUser} />;
};
export default UserRegistrationForm;
