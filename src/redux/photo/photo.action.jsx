import axios from "axios"

export const PHOTO_DATA_REQUEST = 'PHOTO_DATA_REQUEST'
export const PHOTO_DATA_SUCCESS = 'PHOTO_DATA_SUCCESS'
export const PHOTO_DATA_FAILURE = 'PHOTO_DATA_FAILURE'



export const SELECTED_DATA_SUCCESS = 'SELECTED_DATA_SUCCESS'
export const SELECTED_DATA_FAILURE = 'SELECTED_DATA_FAILURE'


export const BANNER_HIDE_SUCCESS = 'BANNER_HIDE_SUCCESS'

export let photoAction = (searchText) =>{
    return async(dispatch) => {
      try{
        
         dispatch({type : PHOTO_DATA_REQUEST})
         let url =`https://api.unsplash.com/search/photos?query=${searchText}&client_id=vLwtzTAun2OoeHMo_SMNmccnmNP_cTHPqdOgCfvEBMc`;
         let response = await axios.get(url);
         dispatch({type:PHOTO_DATA_SUCCESS , payload : response.data});
      }
      catch(error){
          dispatch({type : PHOTO_DATA_FAILURE , payload : error.response.data})
      }
    }
};


export let selectedData = (selectedData) =>{
  return async(dispatch) => {
    try{
       dispatch({type:SELECTED_DATA_SUCCESS , payload : selectedData});
    }
    catch(error){
        dispatch({type : SELECTED_DATA_FAILURE , payload : error})
    }
  }
};



export const bannerHide = () => {
  return async(dispatch) => {
    try{
      dispatch({type : BANNER_HIDE_SUCCESS })
    }
    catch(error){
     console.log(error);
    }
  }
}