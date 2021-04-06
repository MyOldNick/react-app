//actions
import { getUsers } from "../actions/usersActions";

export const fetchUsers = () => {
    
    return async (dispatch) => {

        const res = await fetch(`https://jsonplaceholder.typicode.com/users`)

        const users = await res.json()

        dispatch(getUsers(users))

    }
}