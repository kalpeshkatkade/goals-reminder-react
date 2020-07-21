import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Button, TextField } from '@material-ui/core'

const GoalForm = ({addGoal}) => {
    const [goal,setGoal]=useState({
        id:"",
        task:"",
        completed:false
    });

    function handelTaskInputChange(e) {
        setGoal({...goal, task:e.target.value });
    }

    function handelSubmit(e) {
        e.preventDefault(); 
        if (goal.task.trim()) {
            addGoal({...goal, id: uuidv4() });
            setGoal({...goal, task:""});
        }
    }

    return (
        <form className="todo-form" onSubmit={handelSubmit}>
            <TextField
            label="Goal"
            type="text"
            placeholder="Type your Goal"
            onChange={handelTaskInputChange}
            value={goal.task}
            />
            <Button type="submit">Add Goal</Button>
        </form>
    )
}

export default GoalForm
