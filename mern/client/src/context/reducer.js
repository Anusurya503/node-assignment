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


const reducer = (state, action) => {

  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!'
    }
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }

  if (action.type === REGISTER_SUBSCRIBER_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === REGISTER_SUBSCRIBER_SUCCESS) {
    return {
      ...state, isLoading: false,
      token: action.payload.token,
      subscriber: action.payload.subscriber,
      subscriberLocation: action.payload.subscriberLocation,
      showAlert: true,
      alertType: 'success',
      alertText: 'user created! Redirecting...',
    }
  }

  if (action.type === REGISTER_SUBSCRIBER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg
    }
  }

  if (action.type === LOGIN_SUBSCRIBER_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === LOGIN_SUBSCRIBER_SUCCESS) {
    return {
      ...state, isLoading: false,
      token: action.payload.token,
      subscriber: action.payload.subscriber,
      subscriberLocation: action.payload.subscriberLocation,
      showAlert: true,
      alertType: 'success',
      alertText: 'LOGIN Successful! Redirecting...',
    }
  }

  if (action.type === LOGIN_SUBSCRIBER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg
    }
  }

  throw new Error(`no such action :${action.type}`)
}

export default reducer