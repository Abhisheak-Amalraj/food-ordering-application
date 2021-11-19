import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllfoods } from "../actions/foodActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Food from "../components/Food";

export default function Homescreen() {
  const dispatch = useDispatch();

  const foodsstate = useSelector((state) => state.getAllfoodsReducer);

  const { foods, error, loading } = foodsstate;

  useEffect(() => {
    dispatch(getAllfoods());
  }, []);

  return (
    <div>
      <Filter />
      <div className="row justify-content-center">
  
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error='Something went wrong' />
        ) : (
          foods.map((food) => {
            return (
              <div className="col-md-3 m-3" key={food._id}>
                <div >
                  <Food food={food} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
