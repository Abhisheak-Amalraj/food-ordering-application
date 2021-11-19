import axios from "axios";
export const getAllfoods=()=> async dispatch=>{

    dispatch({type:'GET_foodS_REQUEST'})

    try{
        const response = await axios.get('/api/foods/getallfoods');
        console.log(response);
        dispatch({type:'GET_foodS_SUCCESS' , payload: response.data})
    } catch (error){
        dispatch({type:'GET_foodS_FAILED' , payload: error})
    }
}

export const filterfoods=(searchkey , category)=>async dispatch=>{

  
    dispatch({type:'GET_foodS_REQUEST'})

    try {
        var filteredfoods ;
        const response = await axios.get('/api/foods/getallfoods')
        filteredfoods = response.data.filter(food=>food.name.toLowerCase().includes(searchkey))
         
        if(category!='all')
        {
            filteredfoods = response.data.filter(food=>food.category.toLowerCase()==category)

        }
        dispatch({type:'GET_foodS_SUCCESS' , payload : filteredfoods})
    } catch (error) {
        dispatch({type:'GET_foodS_FAILED' , payload : error})
    }

}

export const addfood=(food)=>async dispatch=>{
    dispatch({type:'ADD_food_REQUEST'})
    try {
        const response= await axios.post('/api/foods/addfood' , {food})
        console.log(response);
        dispatch({type:'ADD_food_SUCCESS'})
    } catch (error) {
        dispatch({type:'ADD_food_FAILED' , payload : error})
    }
}

export const getfoodById=(foodid)=>async dispatch=>{

    dispatch({type:'GET_foodBYID_REQUEST'})

    try {
        const response = await axios.post('/api/foods/getfoodbyid' , {foodid})
        console.log(response);
        dispatch({type:'GET_foodBYID_SUCCESS' , payload : response.data})
    } catch (error) {
        dispatch({type:'GET_foodBYID_FAILED' , payload : error})
    }

}

export const editfood=(editedfood)=>async dispatch=>{
    dispatch({type:'EDIT_food_REQUEST'})
    try {
        const response= await axios.post('/api/foods/editfood' , {editedfood})
        console.log(response);
        dispatch({type:'EDIT_food_SUCCESS'})
        window.location.href='/admin/foodslist'
    } catch (error) {
        dispatch({type:'EDIT_food_FAILED' , payload : error})
    }
}

export const deletefood=(foodid)=>async dispatch=>{

    try {
        const response =await axios.post('/api/foods/deletefood' , {foodid})
        alert('food Deleted Successfully')
        console.log(response);
        window.location.reload()
    } catch (error) {
        alert('Something went wrong')
        console.log(error);
    }
           
    
    }