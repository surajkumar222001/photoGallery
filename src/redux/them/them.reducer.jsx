import { THEM_CHANGE_FAILURE, THEM_CHANGE_SUCCESS } from "./them.action";

export const themFeatureKey = 'themColor'

const initialState = {
    themColor : '',
    error : {}
};

export const reducer = (state=initialState, action) => {
    let {type, payload} = action
    switch (type) {
        case THEM_CHANGE_SUCCESS :  
        localStorage.setItem("themColor" , `${payload}`) 
        return {
           
            ...state,
            themColor : payload
        };
        case THEM_CHANGE_FAILURE:return {
            ...state,
           error : payload

        }; 
        default : return state;
    }
};