import searchImg from '../images/searchImg.png';

function SearchBox({ value, onChange, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit} style={{ position: 'fixed', zIndex: '2' }}>
        <input
          type='search'
          id="searchInput"
          className="Search"
          placeholder="근처 충전소 검색하기"
          value={value}
          onChange={onChange}
        />
        <button
          className='SearchBtn'
          type='submit'
          style={{ backgroundImage: `url(${searchImg})` }}
        >
        </button>
      </form>
    </div>
  );
}

export default SearchBox;