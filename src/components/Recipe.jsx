import { Fragment } from 'react';

export default function Recipe({ recipe,ref }) {
    console.log(recipe);
    if(recipe===null)return;
    
    return (
        <Fragment>
            <div className="recipe-container" ref={ref}>
                <div className="recipe-card">
                    <h2>{recipe.recipe_name}</h2>
                    <p className="description">{recipe.description}</p>
                    
                    <div className="recipe-yield">
                        <span>🍽️ {recipe.yield}</span>
                    </div>

                    <div className="recipe-section">
                        <h3>Ingredients</h3>
                        <ul className="ingredients-list">
                            {recipe.ingredients.map((ing, index) => (
                                <li key={index}>
                                    <span className="ingredient-amount">
                                        {ing.quantity==='to taste'?"According to taste":ing.quantity} {ing.unit}
                                    </span>
                                    <span className="ingredient-name">
                                        {ing.item}
                                    </span>
                                    {ing.notes && (
                                        <span className="ingredient-notes">
                                            ({ing.notes})
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="recipe-section">
                        <h3>Instructions</h3>
                        <ol className="instructions-list">
                            {recipe.instructions.map((inst) => (
                                <li key={inst.step}>
                                    {inst.description}
                                </li>
                            ))}
                        </ol>
                    </div>

                    {recipe.notes && recipe.notes.length > 0 && (
                        <div className="recipe-section">
                            <h3>Chef's Notes</h3>
                            <ul className="notes-list">
                                {recipe.notes.map((note, index) => (
                                    <li key={index}>{note}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
}