import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({ ing, children }) => {
    if (!ing) {
        console.log("El usuario no esta autenticado");
        return <Navigate to={"/"}/>

    }
    return children;
}

export default ProtectedRoute;