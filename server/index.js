import express from "express";
import cors from "cors";
import mongoose from "mongoose";


const { Schema } = mongoose

const proSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
})

const Pro = mongoose.model("proooshem", proSchema)

const app = express()

app.use(cors())
app.use(express.json())



app.post("/pro", async (req, res) => {
    try {
        const { title, image, price } = req.body
        const pros = await Pro.create({
            title,
            image,
            price: +price
        })
        await pros.save()
        res.status(200).send("Created")
    } catch (error) {
        res.status(500).send("Ewrroor")
    }
})

app.get("/pro", async (req, res) => {
    try {
        const pros = await Pro.find()
        res.status(200).send(pros)
    } catch (error) {
        res.status(500).send("Ewrroor")
    }
})

app.get("/pro/:id", async (req, res) => {
    try {
        const { id } = req.params
        const pros = await Pro.findById(id)
        res.status(200).send(pros)
    } catch (error) {
        res.status(500).send("Ewrroor")
    }
})

app.delete("/pro/:id", async (req, res) => {
    try {
        const { id } = req.params
        const pros = await Pro.findByIdAndDelete(id)
        res.status(200).send("Deleted")
    } catch (error) {
        res.status(500).send("Ewrroor")
    }
})


mongoose.connect('mongodb+srv://albinoni1423:xeshil@cluster0.wsbsjfu.mongodb.net/').catch(err => console.log(err))

app.listen(3000, () => {
    console.log("Server online!");
})
