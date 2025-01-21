import {connect } from "mongoose"

connect("mongodb+srv://rauffaaf206:rauf2005@cluster0.4wbui.mongodb.net/")
.then(()=>{
    console.log("connected")
})