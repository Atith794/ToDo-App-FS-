import React, { useState } from 'react';
import axios from 'axios';

const List = () => {
    const URL = 'http://localhost:3000';

    const[task,setTask] = useState('');

    function handleClick(){
        axios.post(`${URL}/add`,{task:task})
        .then(result => location.reload())
        .catch(e => console.error(e))
    }

    return (
        <div>
            <input type='text' onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleClick}>Add</button>
        </div>
  )
}

export default List