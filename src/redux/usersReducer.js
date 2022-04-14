import {followAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_FOLLOWING_IS_FETCHING = 'TOGGLE_FOLLOWING_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case(FOLLOW):
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case(UNFOLLOW): {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case(SET_USERS): {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case(SET_USERS_TOTAL_COUNT): {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case(SET_CURRENT_PAGE): {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case(TOGGLE_FETCHING): {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case(TOGGLE_FOLLOWING_IS_FETCHING): {
            return {
                ...state,
                followInProgress: action.isFetching ?
                    [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id != action.userId)
            }
        }
        default: {
            return state;
        }
    }
}
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const toggleFollowingIsFetching = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_IS_FETCHING,
    isFetching,
    userId
})

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {

    dispatch(toggleIsFetching(true))

    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))
    })
}

export const followSuccessThunkCreator = (userId) => (dispatch) => {
    dispatch(toggleFollowingIsFetching(true, userId))
    followAPI.follow(userId).then(data => {
        if (data.resultCode == 0) {
            dispatch(follow(userId))
        }
        dispatch(toggleFollowingIsFetching(false, userId))
    })
}
export const unfollowSuccessThunkCreator = (userId) => (dispatch) => {
    dispatch(toggleFollowingIsFetching(true, userId))
    followAPI.unfollow(userId).then(data => {
        if (data.resultCode == 0) {
            dispatch(unfollow(userId))
        }
        dispatch(toggleFollowingIsFetching(false, userId))
    })
}

export default usersReducer