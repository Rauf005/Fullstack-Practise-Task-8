import { Schema, model } from "mongoose"


let ProductSchema = new Schema({
    name:String,
    profession:String,
    salary:Number,
    image:String
})

export let ProductModel= model("team",ProductSchema)