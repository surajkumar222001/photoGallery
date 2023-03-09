import React,{useState} from "react";
import { useDispatch } from "react-redux";
import "./style.scss";
import * as photoAction from '../../redux/photo/photo.action'
export default function Banner({setData}) {
  return (
    <div className="banner-wrapper">
      <div class="main-content-wrapper">
        <h1 className="section-heading">
          Download High Quality Images by creators
        </h1>
        <p className="para">
          Over 2.4 million+ stock Images by our talented community
        </p>
        <div className="search-box-wrapper border">
            <SearchBox setData={setData}/>
        </div>
      </div>
    </div>
  );
}

function SearchBox({setData}) {

  let [searchImg, setSearchImage] = useState({
    textSearch: 'random'
  });

  let dispatch = useDispatch()

  let handleSearchBox = (event) => {
    setSearchImage({
      ...searchImg,
      textSearch: event.target.value
    })
    
  }

  let onSearch = (event) => {
    if(event.key === 'Enter'){
      dispatch(photoAction.photoAction(searchImg.textSearch));
      setData(true)
      dispatch(photoAction.bannerHide());
    }
  }

  return (
    <div className="searchbox-wrapper">
      <div className="search-icon">
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 13L17 18"
            stroke="#C4C4C4"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <circle
            cx="7.5"
            cy="7.5"
            r="6.75"
            stroke="#C4C4C4"
            stroke-width="1.5"
          />
        </svg>
      </div>
      <div className="search-input-box">
        <input
          placeholder="Search high resolution Images, categories, wallpapers"
          className="search-input"
          type="text"
          onChange={handleSearchBox}
          onKeyDown={onSearch}
          
        />
      </div>
    </div>
  );
}
