import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editfood, getfoodById } from "../actions/foodActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
export default function Editfood({ match }) {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [normalprice, setnormalprice] = useState();
  const [premiumprice, setpremiumprice] = useState();
  const [eliteprice, seteliteprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const getfoodbyidstate = useSelector((state) => state.getfoodByIdReducer);

  const { food, error, loading } = getfoodbyidstate;

  const editfoodstate = useSelector((state) => state.editfoodReducer)
  const {editloading , editerror , editsuccess} = editfoodstate;

  useEffect(() => {

    if(food)
    {
        if(food._id==match.params.foodid)
        {
            setname(food.name)
            setdescription(food.description)
            setcategory(food.category)
            setnormalprice(food.prices[0]['normal'])
            setpremiumprice(food.prices[0]['premium'])
            seteliteprice(food.prices[0]['elite'])
            setimage(food.image)
        }
        else{
            dispatch(getfoodById(match.params.foodid));
        }
        
    }
    else{
        dispatch(getfoodById(match.params.foodid));
    }



  }, [food , dispatch]);

  function formHandler(e) {
    e.preventDefault();

    const editedfood = {
      _id : match.params.foodid,
      name,
      image,
      description,
      category,
      prices: {
        normal: normalprice,
        premium: premiumprice,
        elite: eliteprice,
      },
    };

    dispatch(editfood(editedfood))
  }

  return (
    <div>
    
     

      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
      <h1>Edit food</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && (<Success success='food details edited successfully'/>)}
        {editloading && (<Loading />)}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="normal varient price"
            value={normalprice}
            onChange={(e) => {
              setnormalprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="premium varient price"
            value={premiumprice}
            onChange={(e) => {
              setpremiumprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="elite varient price"
            value={eliteprice}
            onChange={(e) => {
              seteliteprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            Edit food
          </button>
        </form>
      </div>
    </div>
  );
}