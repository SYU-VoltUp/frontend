import { useNavigate } from "react-router";
function List() {
  const navigate = useNavigate();
  const back = () => {
    navigate('/');
  }
  return(
    <div>
      <button onClick={back}>
        뒤로가기
      </button><br/>
      검색완료!
    </div>
  )    
}
  
export default List;