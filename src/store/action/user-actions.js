import { ADD_USER,GET_USER_BY_ID,UPDATE_USER,DELETE_USER } from "../Type/user-types";


const addUserAction=(newUser)=>{
    return {type:ADD_USER ,payload:newUser}
}
const getUserByIdAction =(useObj)=>{
    return{type:GET_USER_BY_ID, payload:useObj}
}
const upDateUserAction =()=>{
    return{type:UPDATE_USER}
}
const deleteUserAction=(id)=>{
    return{type:DELETE_USER ,payload:id }
}

export{
    addUserAction,
    getUserByIdAction,
    upDateUserAction,
    deleteUserAction
}