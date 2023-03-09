import * as photoaction from "./photo.action"
export const searchPhotosFeatureKeys = 'searchPhotos'
const initialState = {
    loading : false,
    data : {},
    banner : true,
    selectedData : {},
    error : {}
};

export const reducer = (state=initialState, action) => {
    let {type, payload} = action
    switch (type) {
        case photoaction.PHOTO_DATA_REQUEST :return {
            ...state,
            loading: true
        };
        case photoaction.PHOTO_DATA_SUCCESS:return {
            ...state,
            loading : false,
            data : payload

        };
        case photoaction.PHOTO_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                errorMeerrorssage: payload
            };


        case photoaction.SELECTED_DATA_SUCCESS:return {
                ...state,
                loading : false,
               selectedData : payload
    
            };
        case photoaction.SELECTED_DATA_FAILURE:
                return {
                    ...state,
                    loading: false,
                   error : payload
                };
                
                
        case photoaction.BANNER_HIDE_SUCCESS:
                return {
                 ...state,
                    banner : false             
                };  
                      
        default : return state;
    }
};