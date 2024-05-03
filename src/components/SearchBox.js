import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import searchImg from '../images/searchImg.png';

// 검색버튼 누르면 충전소 목록 띄워야함 그 페이지는 라우터로 링크설정해서 넘어가게 
// -> 내가 목록 만들어야겠음
function SearchBox() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        // event.preventDefault();  폼 제출과 페이지 새로고침 방지
        console.log(search); 
        navigate('/list');
    };

    return(
        <div>
            <form onSubmit={handleSearchSubmit}>  {/* 제출시 search값이 state로 넘어가고 */}
                <input
                    type='search' 
                    id="searchInput" 
                    className="Search" 
                    placeholder="근처 충전소 검색하기"
                    value={search}
                    onChange={handleSearchChange}
                />
                <button 
                    className='SearchBtn' 
                    type='submit' 
                    style={{backgroundImage: `url(${searchImg})`}}>
                </button>  
            </form>
        </div>
    )
}

export default SearchBox;