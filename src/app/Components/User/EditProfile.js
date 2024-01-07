"use client"
import React,{ useEffect, useState }  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getUsers } from "../../Actions/userActions";
import { useSession } from "next-auth/react";
import "../../styles/edit.css"
export default function EditProfile() {

    // const [users, setUsers] = useState();
    const { data, update } = useSession();
  
    const EditUsers = async () => {
      const result = await EditProfile(data?.user.companyID);
      setUsers(result?.users);
      
    };
    useEffect(() => {
      console.log(data);
    }, [data]);


    const handleFormSubmit = async (e) => {
      e.preventDefault();
      EditUsers();
    }  
  
    return(
      <div>
			<div class="container bootstrap snippets bootdey">
    <h1 class="text-primary">Edit Profile</h1>
      <hr/>
	<div class="row">
      
      <div class="col-md-3">
        <div class="text-center">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="avatar img-circle img-thumbnail" alt="avatar"/>
          <h6>Upload your photo</h6>
          
          <input type="file" class="form-control"/>
        </div>
      </div>
      
      
      <div class="col-md-9 personal-info">
        <div class="alert alert-info alert-dismissable">
          <a class="panel-close close" data-dismiss="alert">×</a> 
          <i class="fa fa-coffee"></i>
          This is an <strong>.alert</strong>. Use this to show important messages to the user.
        </div>
        <h3>Personal info</h3>
        
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-lg-3 control-label">user name </label>
            <div class="col-lg-8">
              <input class="form-control" type="text" placeholder={data?.user.name} />
            </div>
          </div>
        
      
          <div class="form-group">
            <label class="col-lg-3 control-label">Email:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" placeholder={data?.user.email}/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Change Password</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value=""/>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-10 col-sm-offset-2">
              <button type="submit" class="btn btn-primary">Submit</button>
              <button type="reset" class="btn btn-default">Cancel</button>
            </div>
          </div>
        </form>
      </div>
  </div>
</div>
<hr/>
		</div>
	
    );
}