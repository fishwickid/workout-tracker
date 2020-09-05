const router = require("express").Router();
const path = require("path")

// module.exports = function (app){
  // app.get('/', (req,res)=>{
  //   res.sendFile(path.join(__dirname, "../public/index.html"))
  // });
  // app.get('/exercise', (req,res)=>{
  //   res.sendFile(path.join(__dirname, "../public/excercise.html"))
  // });
  // app.get('/stats', (req,res)=>{
  //   res.sendFile(path.join(__dirname, "../public/stats.html"))
  // });
// }

router.get('/exercise', (req,res)=>{
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
});
router.get('/stats', (req,res)=>{
  res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;