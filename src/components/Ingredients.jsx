import { Fragment } from "react"
import axios from "axios";

export default function Ingredients(props){
    const deleteElement = (key)=>{
        props.onDeleteIngredient(key);
    }
    const getRecipe = async() => {
        if(props.ingredients.length===0)return;
        try {
            // Extract just the ingredient names into an array
            const ingredientsList = props.ingredients.map(ing => ing.name);
            
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_KEY}`,
                {
                    contents: [{
                        parts: [{
                            text: `Give me a recipe for these ingredients: ${ingredientsList.join(', ')},return them in json format . For ex: {
  "recipe_name": "Spicy Garlic Noodles",
  "description": "A quick and delicious noodle dish packed with garlic and a spicy kick. Perfect for lunch or dinner.",
  "ingredients": [
    {
      "item": "Noodles",
      "quantity": "200",
      "unit": "grams",
      "notes": "Any type of noodles — instant, ramen, or spaghetti"
    },
    {
      "item": "Garlic",
      "quantity": "5",
      "unit": "cloves",
      "notes": "Finely chopped"
    },
    {
      "item": "Chili Flakes",
      "quantity": "1",
      "unit": "teaspoon",
      "notes": "Adjust based on heat preference"
    },
    {
      "item": "Soy Sauce",
      "quantity": "2",
      "unit": "tablespoons",
      "notes": "Use low sodium if preferred"
    },
    {
      "item": "Sesame Oil",
      "quantity": "1",
      "unit": "tablespoon",
      "notes": "For added flavor"
    },
    {
      "item": "Green Onions",
      "quantity": "2",
      "unit": "tablespoons",
      "notes": "Chopped, for garnish"
    }
  ],
  "instructions": [
    {
      "step": 1,
      "description": "Cook the noodles according to package instructions. Drain and set aside."
    },
    {
      "step": 2,
      "description": "Heat sesame oil in a pan and sauté the garlic until fragrant."
    },
    {
      "step": 3,
      "description": "Add chili flakes and soy sauce to the pan. Stir well."
    },
    {
      "step": 4,
      "description": "Toss the noodles in the sauce until evenly coated."
    },
    {
      "step": 5,
      "description": "Garnish with chopped green onions and serve hot."
    }
  ],
  "notes": [
    "You can add vegetables like bell peppers or carrots for a healthier version.",
    "Add a soft-boiled egg or tofu for extra protein.",
    "Drizzle with lime juice for a tangy twist."
  ],
  "yield": "2 servings"
}
`
                        }]
                    }]
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            let input = response.data.candidates?.[0].content?.parts?.[0].text;
            const cleaned = input.replace(/```json\n?|```/g, '');

            // Step 3: Parse the JSON
            const recipe = JSON.parse(cleaned);
            props.onAddRecipe(recipe);
        } catch (error) {
            console.error("Error fetching recipe:", error);
        }
    };
   
          




    if(props.ingredients.length>0)return (
        <Fragment>
            <h2>Ingredients List:</h2>
            <div className="ingredient-section">
                <ul>
                    {props.ingredients.map(element=>
                        <li key={element.key}>
                            <div>{element.name}</div>
                            <img  onClick={()=>deleteElement(element.key)}  src="https://res.cloudinary.com/dfjeotqie/image/upload/v1744386588/us4x13ztfzadr6pgll8b.png" alt="close-button" />
                        </li>
                    )}
                </ul>
                <div>
                    <div>
                        <h4>Ready for a recipe?</h4>
                        <h6>Generate a recipe from your list of ingredients.</h6>
                    </div>
                    <button onClick={getRecipe}>Get a recipe</button>

                </div>
            </div>

        </Fragment>
    )
    return (
        <></>
    )
}