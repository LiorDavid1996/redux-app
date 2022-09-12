import "./My-Form.css";
import React, { useState } from "react";
import { connect } from "react-redux/es/exports";
import { addUserAction,deleteUserAction,getUserByIdAction,upDateUserAction, } from "../../../store/action/user-actions";


const mapDispatchToProps = (dispatch)=>({
  addNewUser : (useObj)=>dispatch(addUserAction(useObj)),
  deleteUser: ()=>dispatch(deleteUserAction())
})

function myFrom(props) {
  const [user,setUser] = useState(props.users[0])
  const changeInput =(e)=>{
    setUser({...user,[e.target.name] :e.target.value}) 
  }
  const userDetils = () =>{
    return(
     <h1>{props.users[1]? props.users[1].fName:""}</h1> 
      
    )
  }
console.log(props);
  return (
    <div>
    <from className="my-form">
      <h1>My-Form</h1>
      <label>first name</label>
      <input value={user.fName}  name="fName" onChange={changeInput}/>
      <label>last name</label>
      <input value={user.lName} name="lName" onChange={changeInput}/>
      <label>AGE</label>
      <input value={user.age} name="age" onChange={changeInput}/>
      <label>email</label>
      <input value={user.email} name="email" onChange={changeInput}/>
      <label>ID</label>
      <input value={user.id} name="id" onChange={changeInput}/>
      <button onClick={()=>props.addNewUser(user)}>add</button>
      </from>
      <table>
        <thead>
          <th>first name</th>
          <th>last name</th>
          <th>age</th>
          <th>email</th>
          <th>id</th>
        </thead>
        <tbody>
         { props.users.map((item)=><tr><td>{item.fName}</td><td>{item.lName}</td><td>{item.age}</td><td>{item.email}</td><td>{item.id}</td>
         <button onClick={(item)=>props.deleteUser(item.id)}>delete</button></tr>) } 
        </tbody>
      </table>
      </div>
    
  );
};

export default connect(null,mapDispatchToProps) (myFrom);
