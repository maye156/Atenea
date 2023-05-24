import {useState} from 'react';
import { MealList } from './MealList';
import "./Styles.css"
import { useFetch } from './CustomHookFetch';

export const Home =()=>{//Privado

 const [cal, setCal] = useState(2000); 
 const [mealData, setMealData] = useState(null);
 const uri = process.env.REACT_APP_URL;
 const k=process.env.REACT_APP_KEY;

 const [data] = useFetch(`${uri}apiKey=${k}&timeFrame=day&targetCalories=${cal}`);
    

  function getMeals(){
       setMealData(data);
  }
    function handleChange(e){
        setCal(e.target.value);
    }
    return(
        <div class="p-5 text-center bg-light" id='divHeader'>
        <section>
        <h1 class="mb-3"> PLAN DE ALIMENTACIÓN DIARIA </h1>
        
        <input type='number'
        
               placeholder='Calorias'
               onChange={handleChange}/>
               
        <button  type="submit" 
                class="btn btn-primary mb-2"
                onClick={getMeals}>
                Mostrar </button>
        </section>
        {mealData && < MealList mealData={mealData}/>}
        </div>

    )
}

