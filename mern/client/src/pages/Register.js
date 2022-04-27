import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { Logo, FormRow, Alert } from '../components'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/RegisterPage'


const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)

  

  const {subscriber, isLoading, showAlert, displayAlert, registerSubscriber, loginSubscriber } = useAppContext()


  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    const currentSubscriber = { name, email, password }
    if (isMember) {
      loginSubscriber(currentSubscriber)
    } else {
      registerSubscriber(currentSubscriber)
    }
  }

  useEffect(() => {
    if (subscriber) {
      navigate('/')
    }
  }, [subscriber, navigate])



  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}


        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />

        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />

        <button type='submit' className='btn btn-block' disabled={isLoading}>Submit</button>

        <p>
          {values.isMember ? 'Not a member yet ?' : 'Already a member ?'}
          <button type='submit' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register