import React, {useState, useEffect} from 'react';
import GoalForm from './components/GoalForm'
import GoalsList from './components/GoalsList'
import './App.css';
import Typography from '@material-ui/core/Typography'

const LOCAL_STORAGE_KEY = "react-goals-list";

function App() {
  const[goals, setGoals]=useState([]);

  function addGoal(goal){
     setGoals([goal,...goals]);
  }

  useEffect(() => { 
    const storageGoals= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageGoals){
      setGoals(storageGoals);
    }
  },[]);

  useEffect( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals));
  },[goals]);

 function toggleComplete(id) {
   setGoals(
     goals.map(goal => {
      if(goal.id === id){
        return{
          ...goal,
          completed: !goal.completed
        };
      }
      return goal;
     })
   ); 
 }

  function removeGoal(id){
    setGoals(
      goals.filter(goal => goal.id !== id));
  }
  return (
   <div className="App">
     <Typography style={{padding:16 }} variant="h2">Goals Reminder</Typography>
     <GoalForm addGoal={addGoal} />
     <GoalsList goals={goals} toggleComplete={toggleComplete} removeGoal={removeGoal} />
   </div>
  );
}

export default App;
