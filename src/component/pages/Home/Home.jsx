import "./Home.css";
import React from "react"
import MyForm from "../My-Form/My-Form";
import { connect } from "react-redux/es/exports";

const mapStateToProps =(state)=>{
    return {users:state.users}
    }
function Home(props) {
  
  return (
   <MyForm users={props.users}/>
  );
};

export default  connect(mapStateToProps,null) (MyForm);
