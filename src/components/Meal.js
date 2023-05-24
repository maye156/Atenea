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
        
            <div className="card" id="divCard" >
                <img src={imageUrl} alt="receta" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{meal.title}</h5>
                    <ul className="list-group">
                        <li className="list-group-item">Tiempo de preparación: {meal.readyInMinutes} minutos</li>
                        <li className="list-group-item">Porciones: {meal.servings}</li>
                    </ul>
                    <a href={meal.sourceUrl} className="btn btn-primary"> Ir a la receta </a>
                </div>
            </div>
       
    )
}