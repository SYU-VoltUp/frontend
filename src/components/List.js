import { useNavigate } from "react-router";
import axios from 'axios';
import { useState, useEffect } from 'react';

function List() {
  const navigate = useNavigate();
  const back = () => {
    navigate('/');
  }
  
  // axios
  const [stations, setStations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        setError(null);
        setStations(null);
        setLoading(true);
        
        const response = await axios.get('v1/stations/AH000004-02');

        setStations(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchStations();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!stations) return null;

  return(
    <div>
      <h2>{stations.data.name}</h2>
      <p><strong>주소:</strong> {stations.data.address}</p>

      <button onClick={back}>
        뒤로가기
      </button><br></br>
      검색완료!
    </div>
  )    
}
  
export default List;