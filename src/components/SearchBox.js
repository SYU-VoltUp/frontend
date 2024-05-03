import searchImg from '../images/searchImg.png';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function SearchBox() {
    const [search, setSearch] = useState('');
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };
    const navigate = useNavigate();

    const handleSearchSubmit = (event) => {
        // event.preventDefault();  폼 제출과 페이지 새로고침 방지
        console.log(search); // 검색어와 무언가를 수행할 수 있습니다. 예를 들어, 백엔드 서버로 보낼 수 있습니다.
        navigate('/list');
    };

    return(
        <div>
            <form onSubmit={handleSearchSubmit}>
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