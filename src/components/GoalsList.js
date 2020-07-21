import React from 'react'
import Goal from './Goal'
import {List} from '@material-ui/core'
const GoalsList = ({goals, toggleComplete, removeGoal}) => {
    return (
        <List>
            {goals.map((goal) =>(
                <Goal 
                key={goal.id} 
                goal={goal}
                toggleComplete={toggleComplete}
                removeGoal={removeGoal}
                />
            ))}
        </List>
    )
}

export default GoalsList
