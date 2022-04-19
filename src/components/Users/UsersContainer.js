import {connect} from "react-redux";
import {
    follow,
    followSuccessThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleFollowingIsFetching,
    toggleIsFetching,
    unfollow,
    unfollowSuccessThunkCreator
} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setUsersTotalCount: (totalUsersCount) => {
            dispatch(setUsersTotalCountAC(totalUsersCount))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        toggleIsFetching:(isFetching)=>{
            dispatch(toggleFetchingAC(isFetching))
        }
    }
}*/


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

    }

    render() {

        return <>
            <Preloader isFetching={this.props.isFetching}/>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollowSuccessThunkCreator={this.props.unfollowSuccessThunkCreator}
                   followSuccessThunkCreator={this.props.followSuccessThunkCreator}
                   toggleFollowingIsFetching={this.props.toggleFollowingIsFetching}
                   followInProgress={this.props.followInProgress}
            />
        </>
    }
}


export default compose(
    connect(mapStateToProps, {
        follow,
        setCurrentPage,
        setUsers,
        setUsersTotalCount,
        toggleIsFetching,
        unfollow,
        toggleFollowingIsFetching,
        getUsersThunkCreator,
        followSuccessThunkCreator,
        unfollowSuccessThunkCreator
    }),
    withAuthRedirect
)(UsersContainer)