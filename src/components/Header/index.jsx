import React, { useState } from "react";
import "./style.scss";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as photoAction from "../../redux/photo/photo.action"
import { useDispatch } from "react-redux";
import { themChange } from "../../redux/them/them.action";

export default function Header() {

  let [searchImg, setSearchImage] = useState({
    textSearch: 'random'
  });

  let [them, setThem] = useState(true);

  let dispatch = useDispatch()

  let handleSearchBox = (event) => {
    setSearchImage({
      ...searchImg,
      textSearch: event.target.value
    })
    
  }
  let handlThem = (event) => {
    setThem(!them)
    dispatch(themChange(them))
  }

  let onSearch = (event) => {
    if(event.key === 'Enter'){
      dispatch(photoAction.photoAction(searchImg.textSearch));
      dispatch(photoAction.bannerHide());
    }
  }

  return (
    <Navbar className="header-wrapper-parent" expand="xl">
      <div className="logo-wrapper">
        <span>Image Gallery</span>

      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
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
                placeholder="Search Images here"
                className="search-input"
                type="search"
                onChange={handleSearchBox}
                onKeyDown={onSearch}
              />
            </div>
          </div>
          
          <div className="routes-wrapper">
            <Nav className="route" href="#Explore">
              <span>Explore</span>
            </Nav>
            <Nav className="route mx-36" href="#Collection">
              <span>Collection</span>
            </Nav>
            <Nav className="route" href="#Community">
              <span>Community</span>
            </Nav>
            <Form className="switch-wrapper ">
              <div className="route">
                <span>{!them ? "Light Mode" : "Dark Mode"}</span>
              </div>
              <Form.Check onChange={handlThem}
                type="switch"
                id="custom-switch"
                reverse="true"
              />
            </Form>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
