
const SET_INITIALIZED = ''
const SET_USER = 'SET_USER'


type SetInitializedActionType = {
    type: typeof SET_INITIALIZED
}

type SetUserActionType = {
    type: typeof SET_USER
}

type ActionType = SetInitializedActionType | SetUserActionType

type InitialStateType = {
    users: Array<string>
}

const initialState = {
    users: []
}


const reducer = (state = initialState, action:ActionType): InitialStateType => {

    switch (action.type) {
        case SET_INITIALIZED:
            return state
        default:
            return state

    }
}