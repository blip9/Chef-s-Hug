
import React from "react";

export default function Form(props){

    const handleForm = (formData)=>{
        event.preventDefault();
        
        const newIngredient = formData.get('ingredient'); // Changed to match input name
        if (!newIngredient.trim()) return; // Prevent empty submissions
        // Update state immutably
        props.onAddIngredient(newIngredient);
        event.target.reset();
        
    }
    
    return (
        <form action={handleForm}>
            
            <label htmlFor="ingredient">
                <input name="ingredient" className="inputIngredients" type="text" placeholder="e.g. oregano" />
            </label>
            
            <button type="submit" className="submit-button" aria-label="Add to ingredients">
                <img src="src\assets\add-button.png" alt="add-button" />
                <span>Add ingredient</span>
            </button>
            
        </form>
    )
}
