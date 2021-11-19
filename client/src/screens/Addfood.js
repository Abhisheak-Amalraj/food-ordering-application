import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from 'react-redux'
import { addfood } from "../actions/foodActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'
export default function Addfood() {
  const [name, setname] = useState("");
  const [normalprice, setnormalprice] = useState();
  const [premiumprice, setpremiumprice] = useState();
  const [eliteprice, seteliteprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  
  const dispatch = useDispatch()

  const addfoodstate = useSelector(state=>state.addfoodReducer)
  const {success , error , loading} = addfoodstate
  function formHandler(e){

    e.preventDefault();

    const food ={
        name ,
        image,
        description,
        category,
        prices:{
            normal : normalprice,
            premium : premiumprice,
            elite : eliteprice
        }
    }

    console.log(food);
    dispatch(addfood(food));

  }

  return (
    <div>
      <div className='text-left shadow-lg p-3 mb-5 bg-white rounded'>
        <h1>Add food</h1>

        {loading && (<Loading/>)}
        {error && (<Error error='Something went wrong'/>)}
        {success && (<Success success='New food added successfully'/>)}

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
          <button className='btn mt-3' type='submit'>Add food</button>
        </form>
      </div>
    </div>
  );
}