import { useNavigate } from "react-router-dom";

function List() {
  const navigate = useNavigate();
  const back = () => {
    navigate('/');
  }
  return(
    <div>
      <button onClick={back}>
              뒤로가기
          </button>
      hi
    </div>
  )
}
  
export default List;