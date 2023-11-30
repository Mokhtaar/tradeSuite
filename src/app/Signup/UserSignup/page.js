// @react-server-runtime react


import UserForm from '../../components/UserForm';
import { addUser } from '../../Actions/userActions';



const UserRegistrationForm = ()=> {


  return (
    <UserForm onSubmit={addUser}/>
   
  );
}
export default UserRegistrationForm;
