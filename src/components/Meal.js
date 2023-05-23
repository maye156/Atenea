import "./Styles.css"
import {useEffect, useState} from 'react'

export function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");
    

      
    useEffect(()=>{
        const k=process.env.REACT_APP_KEY;
       
       fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${k}&includeNutrition=false`)
        .then((response)=> response.json())
        .then((data)=>{
            setImageUrl(data.image);
            console.log(data.image);
        })
        .catch(()=>{
            console.log("error")
        })
    }, [meal.id]);        

    
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