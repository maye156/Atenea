import { Meal } from "./Meal";


export function MealList({ mealData }) {
    const nutrients = mealData.nutrients;

    return (
        <main role="main" className="container my-auto">
            <section >
                <h1> Información nutricional </h1>
                <ul className="list-group">
                    <li className="list-group-item">Calorias: {nutrients.calories.toFixed(0)}</li>
                    <li className="list-group-item">Carbohidratos: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li className="list-group-item">Grasas: {nutrients.fat.toFixed(0)}</li>
                    <li className="list-group-item">Proteina:{nutrients.protein.toFixed(0)} </li>
                </ul>
            </section>
            <section>
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal}/>
                })}
            </section>

        </main>
    )
}