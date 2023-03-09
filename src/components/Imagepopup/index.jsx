import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import "./style.scss";
import * as photoReducer from '../../redux/photo/photo.reducer'


export default function Imagepopup(props) {

  let selectedImage = useSelector(state => state[photoReducer.searchPhotosFeatureKeys]);

  let { selectedData } = selectedImage;
  let galleryData = useSelector((state) => {
    return state[photoReducer.searchPhotosFeatureKeys];
  });
  let { data } = galleryData;
  let { results } = data;


  return (
    <div className="image-popup-wrapper">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="body-wrapper">
          <div className="image-wrapper">
            <img src={selectedData.urls?.full} alt="" />
          </div>
          <div className="utility-btns">
            <div className="left-set">
              <div className="utility-btn mr-7">
                <button>
                  <div>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.97649 3.80001C9.86339 3.80001 10.5824 3.08103 10.5824 2.19412C10.5824 1.30722 9.86339 0.588242 8.97649 0.588242C8.08958 0.588242 7.37061 1.30722 7.37061 2.19412C7.37061 3.08103 8.08958 3.80001 8.97649 3.80001Z"
                        stroke="#ECECEC"
                        stroke-width="0.988235"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.5529 7.54706C3.43981 7.54706 4.15879 6.82808 4.15879 5.94118C4.15879 5.05427 3.43981 4.3353 2.5529 4.3353C1.666 4.3353 0.947021 5.05427 0.947021 5.94118C0.947021 6.82808 1.666 7.54706 2.5529 7.54706Z"
                        stroke="#ECECEC"
                        stroke-width="0.988235"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.97649 11.2941C9.86339 11.2941 10.5824 10.5751 10.5824 9.68823C10.5824 8.80133 9.86339 8.08235 8.97649 8.08235C8.08958 8.08235 7.37061 8.80133 7.37061 9.68823C7.37061 10.5751 8.08958 11.2941 8.97649 11.2941Z"
                        stroke="#ECECEC"
                        stroke-width="0.988235"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.93921 6.74947L7.59527 8.87994"
                        stroke="#ECECEC"
                        stroke-width="0.988235"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.58991 3.00241L3.93921 5.13288"
                        stroke="#ECECEC"
                        stroke-width="0.988235"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text">share</div>
                </button>
              </div>
              <div className="utility-btn">
                <button>
                  <div>
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.58829 11.2941C9.54464 11.2941 11.9412 8.89753 11.9412 5.94118C11.9412 2.98483 9.54464 0.588242 6.58829 0.588242C3.63194 0.588242 1.23535 2.98483 1.23535 5.94118C1.23535 8.89753 3.63194 11.2941 6.58829 11.2941Z"
                        stroke="#ECECEC"
                        stroke-width="1.07059"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.58813 8.08235V5.94118"
                        stroke="#ECECEC"
                        stroke-width="1.07059"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.58813 3.79999H6.59398"
                        stroke="#ECECEC"
                        stroke-width="1.07059"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text">share</div>
                </button>
              </div>
            </div>
            <div className="right-set">
              <div className="download-btn">
                <button>
                  Download image
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="image-detail-wrapper">
            <div className="left-content">
              <div className="author-image">
                <img src={selectedData.user?.profile_image.small} alt="" />
              </div>
              <div className="author-details">
                <div className="name">skncoasn</div>
                <div className="username">
                  @{selectedData.user?.username}
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="downloads">
                1.2K downloads
              </div>
              <div className="likes-wrapper">
                <div className="icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.36331 10.7042L6.17165 12.1042C6.40498 12.3375 6.92998 12.4542 7.27998 12.4542H9.49665C10.1966 12.4542 10.955 11.9292 11.13 11.2292L12.53 6.97084C12.8216 6.15417 12.2966 5.45417 11.4216 5.45417H9.08831C8.73831 5.45417 8.44664 5.16251 8.50498 4.75417L8.79665 2.88751C8.91331 2.36251 8.56331 1.77917 8.03831 1.60417C7.57164 1.42917 6.98831 1.66251 6.75498 2.01251L4.36331 5.57084"
                      stroke="#4F4F4F"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M1.38837 10.7042V4.9875C1.38837 4.17083 1.73837 3.87917 2.55503 3.87917H3.13837C3.95503 3.87917 4.30503 4.17083 4.30503 4.9875V10.7042C4.30503 11.5208 3.95503 11.8125 3.13837 11.8125H2.55503C1.73837 11.8125 1.38837 11.5208 1.38837 10.7042Z"
                      stroke="#4F4F4F"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="downloads">
                  {
                    (selectedData.likes >= 1000) ?
                      (selectedData.likes / 1000).toFixed(1) : selectedData.likes

                  }k
                </div>
              </div>


            </div>

          </div>
         
        </Modal.Footer>
      </Modal>
    </div>
  );
}
