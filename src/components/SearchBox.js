import searchImg from '../images/searchImg.png'
import React, {useState} from 'react';

// 검색할때 화면모양
// 검색버튼 누르면 어느 화면으로 넘어가게 해야함? 충전소 목록 띄워야함? 그럼 그것도 페이지 따로 만들어야함? 그 페이지는 라우터로 링크설정해서 넘어가게
function SearchBox() {
    const [search, setSearch] = useState('');
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault(); // 폼 제출과 페이지 새로고침 방지
        console.log(search); // 검색어와 무언가를 수행할 수 있습니다. 예를 들어, 백엔드 서버로 보낼 수 있습니다.
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