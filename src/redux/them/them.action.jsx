

export const THEM_CHANGE_SUCCESS = 'THEM_CHANGE_SUCCESS'
export const THEM_CHANGE_FAILURE = 'THEM_CHANGE_FAILURE'




export const themChange = (themColor) => {
  return async(dispatch) => {
    try{
      dispatch({type : THEM_CHANGE_SUCCESS , payload : themColor})
    }
    catch(error){
     console.log(error);
     dispatch({type : THEM_CHANGE_FAILURE , payload : error})

    }
  }
}

