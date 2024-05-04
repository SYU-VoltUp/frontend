import { useNavigate } from 'react-router-dom';

function FilterBtn({style}) {
    const navigate = useNavigate();
    const handleFilterClick = () => {
        navigate('/filter');    
    }

    return(
        <div>
            <button onClick={handleFilterClick} className="Button" style={style}><div style={{marginLeft:'21px'}}>필터</div></button>
        </div>
    )
}

export default FilterBtn;