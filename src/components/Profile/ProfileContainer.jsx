import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, setUserProfileThunkCreator} from "../../redux/profileReducer";
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let pathname = window.location.pathname;
        let userId = pathname.substring(9)
        if (!userId) userId = 2;
        this.props.setUserProfileThunkCreator(userId);
    }


    render() {
        if(!this.props.isAuth)return <Navigate to="/login"/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth
})


export default connect(mapStateToProps, {setUserProfileThunkCreator, setUserProfile})(ProfileContainer)