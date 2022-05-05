import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setUserProfileThunkCreator, updateStatus} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let pathname = window.location.pathname;
        let userId = pathname.substring(9)
        if (!userId) userId = 2;
        this.props.setUserProfileThunkCreator(userId);
        this.props.getStatus(userId);
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }

}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {setUserProfileThunkCreator, getStatus, updateStatus}),
    withAuthRedirect
)(ProfileContainer)

