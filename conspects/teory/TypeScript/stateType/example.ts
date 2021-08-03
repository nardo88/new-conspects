import userReduser from 'redusers'
import dialogReduser from 'redusers'
import profileReduser from 'redusers'
import {combineReducers, createStore} from 'redux'

const rootReduser = combineReducers({
    profile: profileReduser,
    user: userReduser,
    dialogs: profileReduser,
})

// здесь мы говорим typeScript создать тип на основе объекта rootReduser
type RootReducerType = typeof rootReduser
// здесь мы с помощью метод ftypeScript ReturnType создаем тип на основе типа RootReducerType
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReduser)

export default store

