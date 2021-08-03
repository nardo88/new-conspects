import React from 'react'
import connect from 'react-redux'
import addUserAC from 'reducer'
import changePhoto from 'reducer'

type UserType = {
    id: number
    name: string
}
type Profile = {
    id: number
    name: string
}


const Compomemt = () => {
    return (
        <>
        
        </>
    )
}

type MapStateType = {
    users: Array<UserType>
    profile: Profile
}

type MapDispatchType = {
    changePhoto: () => void
    addUserAC: (user: UserType) => void
}

type OwnPropsType = {
    title: string
}

type PropsType = MapStateType & MapDispatchType & OwnPropsType

const mapStateToProps = (state) => {
    return {
        users: state.users,
        profile: state.profile
    }
}


const ContainerComponent = connect<PropsType>(mapStateToProps, {changePhoto, addUserAC})(Compomemt)




