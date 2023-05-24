import "./Styles.css"
import {useEffect, useState} from 'react'
import { useFetch } from "./CustomHookFetch";
export function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");
    const k=process.env.REACT_APP_KEY;
    const [data] = useFetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${k}&includeNutrition=false`);

    const [id,setId] = useState();
    useEffect(()=>{
       setId( meal.id);
       setImageUrl(data.image);
    
       
    }, [id]);        

    
    return (
        
            <div class="card" id="divCard" >
                <img src={imageUrl} alt="receta" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">{meal.title}</h5>
                    <ul class="list-group">
                        <li class="list-group-item">Tiempo de preparación: {meal.readyInMinutes} minutos</li>
                        <li class="list-group-item">Porciones: {meal.servings}</li>
                    </ul>
                    <a href={meal.sourceUrl} class="btn btn-primary"> Ir a la receta </a>
                </div>
            </div>
       
    )
}