import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case(SET_AUTH_USER_DATA): {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: {
            return state;
        }
    }
}
export const setAuthThunkCreator = () => (dispatch) => {
    authAPI.auth().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email))
        }
    })
}
export const setAuthUserData = (id, login, email) => ({type: SET_AUTH_USER_DATA, data: {id, login, email}})
export default authReducer