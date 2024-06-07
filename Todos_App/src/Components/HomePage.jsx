import React, { useEffect, useState } from "react";
import List from "./List";
import axios from "axios";

const HomePage = () => {
    const[todos,setTodos] = useState([]);
    const URL = 'http://localhost:3000';

    useEffect(()=>{
        axios.get(`${URL}/get`)
        .then((result) => setTodos(result.data))
        .catch((err) => console.error(err))
    },[])

    const handleDelete = (id) => {
        axios.delete(`${URL}/delete/${id}`)
        .then(() => location.reload())
        .catch((err) => console.error(err))
    }

    return(
        <div>
            <h1>ToDo List</h1>
            <List />
            {
                todos.length === 0 
                ?
                <h1>No Records Available</h1>
                :
                <div>
                    <ol>
                        {todos.map((item) => (
                            <li key={item._id}>{item.task}<span><button onClick={() => handleDelete(item._id)}>Delete</button></span></li>
                        ))}
                    </ol>
                </div>    
            }
        </div>
    )
}

export default HomePage;