
import express from 'express'



const router = express.Router()


router.get("/about", (req,res)=>{
    res.status(200).json({msg: "get requst"})
})
router.post("/", (req,res)=>{

    console.log(req.body)
    res.status(200).json({msg: "post request"})
})

export {router as postsRoutes}