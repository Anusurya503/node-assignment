import { Navigate } from "react-router-dom"
import { useAppContext } from "../context/appContext"

const ProtectedRoute = ({children}) => {     //children is SharedLayout
    const { subscriber } = useAppContext()
    if(!subscriber){
        return <Navigate to='/landing' />
    }
  
}

export default ProtectedRoute
