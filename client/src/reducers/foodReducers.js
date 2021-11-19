export const getAllfoodsReducer=(state={foods: []}, action)=>{

    switch(action.type) {
        case 'GET_foodS_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_foodS_SUCCESS' : return{
            loading : false,
            foods: action.payload
        }
        case 'GET_foodS_FAILED' : return{
            foods: action.payload,
            loading : false
        }
        default : return state
    }
}

export const addfoodReducer=(state={ } , action)=>{

    switch(action.type)
    {
        case 'ADD_food_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'ADD_food_SUCCESS' : return{
            loading : false ,
            success : true,
        }
        case 'ADD_food_FAILED' : return{
            error : action.payload ,
            loading : false
        }
        default : return state
    }

}

export const getfoodByIdReducer=(state={ } , action)=>{

    switch(action.type)
    {
        case 'GET_foodBYID_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_foodBYID_SUCCESS' : return{
            loading : false ,
            food : action.payload
        }
        case 'GET_foodBYID_FAILED' : return{
            error : action.payload ,
            loading : false
        }
        default : return state
    }

}


export const editfoodReducer=(state={ } , action)=>{

    switch(action.type)
    {
        case 'EDIT_food_REQUEST' : return{
            editloading : true,
            ...state
        }
        case 'EDIT_food_SUCCESS' : return{
            editloading : false ,
            editsuccess : true,
        }
        case 'EDIT_food_FAILED' : return{
            editerror : action.payload ,
            editloading : false
        }
        default : return state
    }

}