import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import axios from "axios";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let pathname = window.location.pathname;
        let userId = pathname.substring(9)
        if (!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)