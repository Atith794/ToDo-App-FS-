const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const MONGOURI = `mongodb+srv://atith:12345@cluster0.6hengam.mongodb.net/todos`;

const TodoModel = require('./Models/Todo');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = '3000';

mongoose.connect(MONGOURI)
.then(() => {
    console.log('DB Connected successfully')
})
.catch((err)=>{
    console.log(err);
});

app.post('/add',(req,res) => {
    const task = req.body.task;
    TodoModel.create({
        task:task
    })
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

app.get('/get',(req,res) => {
    TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

app.delete('/delete/:id',(req,res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

app.listen(PORT,() => {
    console.log("Server is running");
})