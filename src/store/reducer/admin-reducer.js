import { GET_ADMIN_BY_ID,DELETE_ADMIN,UPDATE_ADMIN,ADD_ADMIN } from "../Type/admin-type";
export default function adminReducer({users=[]},action){
    switch (action.type) {
        case GET_ADMIN_BY_ID:
            return action.payload
        case ADD_ADMIN:
            return {users:[...users,action.payload]} 
        case UPDATE_ADMIN :
            let newArray= users.filter((userItem)=>{
                userItem.id== action.payload.id
            })
            users[users.indexof(newArray[0])]=action.payload
            return [...users]
        case DELETE_ADMIN :
       let newArray1=users.filter((userItem)=>{
            userItem.id !== action.payload
        })
        return { users:[...newArray1]}
        default:
            return {users};
    }
    
    }