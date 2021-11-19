const express = require('express');
const router = express.Router();
const Food = require('../models/foodModel');

router.get('/getallfoods', async (req, res) => {
try{
    const foods =await Food.find({})
    res.send(foods)
} catch (error) {
    return res.status(400).json({ message: error});
}
});

router.post("/addfood", async (req, res) => {

    const food =  req.body.food

   try{
    const newfood = new Food({
        name: food.name,
        image: food.image,
        varients :['normal', 'premium', 'elite'],
        description: food.description,
        category: food.category,
        prices: [food.prices]
    })
    await newfood.save();
    res.send('New food Added Successfully')
   } catch (error) {
    return res.status(400).json({message: error})
   }
})

router.post("/getfoodbyid", async(req, res) => {

    const foodid = req.body.foodid
   
    try {
        const food = await Food.findOne({_id : foodid})
        res.send(food)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
     
   });

   router.post("/editfood", async(req, res) => {

    const editedfood = req.body.editedfood

    try {
        const food = await Food.findOne({_id : editedfood._id})
        
        food.name= editedfood.name,
        food.description= editedfood.description,
        food.image= editedfood.image,
        food.category=editedfood.category,
        food.prices = [editedfood.prices]

        await food.save()

        res.send('food Details Edited successfully')

    } catch (error) {
        return res.status(400).json({ message: error });
    }
  
});

router.post("/deletefood", async(req, res) => {

    const foodid = req.body.foodid

  try {
    await food.findOneAndDelete({_id : foodid})
    res.send('food Deleted successfully')
  } catch (error) {
      return res.status(400).json({ message: error });
  }
  
});

module.exports = router;