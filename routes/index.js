var express = require('express');
var router = express.Router();

let creating_room=[];
let booking_room=[];

router.get('/rooms_with', function(req, res, next) {
res.json({
   statusCode:200,
    data:creating_room,
  })
});

router.post('/creating',(req,res)=>{
  creating_room.push(req.body)
  res.send({
    statusCode:200,
    message:"Data saved successfully creating room",
    data:creating_room
  })
})
router.post('/booking',(req,res)=>{
  console.log(req.body);
  booking_room.push(req.body)
  res.send({
    statusCode:200,
    message:"Data saved successfully for booking room "
  })
})
// getting details for booked data
router.get('/:id',(req,res)=>{
 if(req.params.id=booking_room.length)
  {
  res.json({
    statusCode:200,
    message:"This is the time allocated to this customer",
  })
}
else{
  res.json({
    statusCode:400,
    message:"Already booked"
  })
}
})

module.exports = router;
