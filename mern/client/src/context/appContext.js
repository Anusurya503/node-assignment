import React, { useReducer, useContext } from 'react'
import reducer from './reducer'
import axios from 'axios'
import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    REGISTER_SUBSCRIBER_BEGIN,
    REGISTER_SUBSCRIBER_SUCCESS,
    REGISTER_SUBSCRIBER_ERROR,
    LOGIN_SUBSCRIBER_BEGIN,
    LOGIN_SUBSCRIBER_SUCCESS,
    LOGIN_SUBSCRIBER_ERROR,
} from './actions'

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    subscriber: null,
    token: '',
    subscriberLocation: '',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT })
        clearAlert()
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT })
        }, 3000)
    }

    const registerSubscriber = async (currentSubscriber) => {
        dispatch({ type: REGISTER_SUBSCRIBER_BEGIN })
        try {
            const response = await axios.post('/subscribers/signup', currentSubscriber)
            // console.log(response);
            const { subscriber, token, location } = response.data
            dispatch({
                type: REGISTER_SUBSCRIBER_SUCCESS,
                payload: { subscriber, token, location },
            })

        } catch (error) {
            //   console.log(error.response)  
            dispatch({
                type: REGISTER_SUBSCRIBER_ERROR,
                payload: { msg: error.response.data.msg }
            })
        }
        clearAlert()
    }

    const loginSubscriber = async(currentSubscriber) => {
        dispatch({ type: LOGIN_SUBSCRIBER_BEGIN })
        try {
            const { data } = await axios.post('/subscribers/signin', currentSubscriber)
            // console.log(response);
            const { subscriber, token, location } = data
            dispatch({
                type: LOGIN_SUBSCRIBER_SUCCESS,
                payload: { subscriber, token, location },
            })

        } catch (error) {
            //   console.log(error.response)  
            dispatch({
                type: LOGIN_SUBSCRIBER_ERROR,
                payload: { msg: error.response.data.msg }
            })
        }
        clearAlert()
        
    }



    return (<AppContext.Provider value={{ ...state, displayAlert, registerSubscriber, loginSubscriber }}>
        {children}
    </AppContext.Provider>)
}

const useAppContext = () => {
    return useContext(AppContext)
}



export { AppProvider, initialState, useAppContext }