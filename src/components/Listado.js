import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Listado = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');    
        if(!token){
            navigate("/");
        }
        // eslint-disable-next-line
    }, [])
    
    
  return (
    <h2>Listado</h2>
  )
}

export default Listado