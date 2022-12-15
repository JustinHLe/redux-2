import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getUserSaga } from "../redux";

const UserSagaContainer = (props) => {

    useEffect(() => {
        props.getUser()
    },[])
    console.log('props', props.user)
    return <>
    <h2>User List</h2>
    <ul>
        {props.user.map(user => {
            return (
                <li style={{listStyle: "none"}}>{user.name}</li>
            )
        })}
    </ul>
    </>

}

const mapStateToProps = (state) => {
    return {
        user: state.userSaga.usersSaga
    }
}
const mapDispatchToProps = (dispatch) => ({getUser: () => dispatch(getUserSaga())})
export default connect(mapStateToProps, mapDispatchToProps)(UserSagaContainer)