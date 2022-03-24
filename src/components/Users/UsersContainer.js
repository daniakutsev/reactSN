import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleFetching,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            <Preloader isFetching={this.props.isFetching}/>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}/>
        </>
    }
}

export default connect(mapStateToProps, {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleFetching,
    unfollow
} )(UsersContainer)