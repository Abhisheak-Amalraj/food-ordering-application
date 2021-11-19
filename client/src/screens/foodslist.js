import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletefood, getAllfoods } from "../actions/foodActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
export default function Foodslist() {
  const dispatch = useDispatch();

  const foodsstate = useSelector((state) => state.getAllfoodsReducer);

  const { foods, error, loading } = foodsstate;
  useEffect(() => {
    dispatch(getAllfoods());
  }, []);
  return <div>
    <h2>foods List</h2>
    {loading && (<Loading/>)}
    {error && (<Error error='Something went wrong'/>)}

    <table  className='table table-bordered table-responsive-sm'>

        <thead className='thead-dark'>
            <tr>
                <th>Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {foods && foods.map(food=>{

            return <tr>
                <td>{food.name}</td>
                <td>
                   Normal : {food.prices[0]['normal']} <br/>
                   Premium : {food.prices[0]['premium']} <br/>
                   Elite : {food.prices[0]['elite']}             
                </td>
                <td>{food.category}</td>
                <td>
                    <i className='fa fa-trash m-1' onClick={()=>{dispatch(deletefood(food._id))}}></i>
                    <Link to={`/admin/editfood/${food._id}`}><i className='fa fa-edit m-1'></i></Link>
                </td>

            </tr>

        })}
        </tbody>

    </table>

   
  </div>
}