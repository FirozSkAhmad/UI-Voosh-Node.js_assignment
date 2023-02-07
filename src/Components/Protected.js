import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedR(props) {
  const Component = props.cmp
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem('token');
    console.log(token)
    token ? navigate('/') : navigate('/login')
  }, []);
  return (
    <Component />
  )
}

export default ProtectedR;