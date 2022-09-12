import { ADD_USER,GET_USER_BY_ID,UPDATE_USER,DELETE_USER } from "../Type/user-types";

export default function userReducer({users=[]},action){
switch (action.type) {
    case GET_USER_BY_ID:
        return action.payload
    case ADD_USER:
        return {users:[...users,action.payload]} 
    case UPDATE_USER :
        let newArray= users.filter((userItem)=>{
            userItem.id== action.payload.id
        })
        users[users.indexof(newArray[0])]=action.payload
        return [...users]
    case DELETE_USER :
   let newArray1=users.filter((userItem)=>{
        userItem.id !== action.payload
    })
    return { users:[...newArray1]}
    default:
        return {users};
}

}