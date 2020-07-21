import React from 'react'
import {Checkbox, ListItem, IconButton, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
const Goal = ({goal, toggleComplete, removeGoal}) => {
    function handelCheckboxClick(){
        toggleComplete(goal.id);
    }
    function handelButtonClick(){
        removeGoal(goal.id)
    }
    return (
        <ListItem style={{display:"flex" }}>
            <Checkbox type="checkbox" onClick={handelCheckboxClick}/>
            <Typography variant="body1" 
            style = {{color:"black", 
            textDecoration: goal.completed ? "line-through" :null}}
            > {goal.task}
            </Typography> 
            <IconButton onClick={handelButtonClick}><CloseIcon/></IconButton>
        </ListItem>
    )
}

export default Goal
