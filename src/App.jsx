import { useState } from 'react'
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'
import Ingredients from './components/Ingredients.jsx'
import Recipe from './components/Recipe.jsx';
import Footer from './components/Footer.jsx';
import Intro from './components/Intro.jsx';
function App() {

  const [ingredients, setIngredients] = useState([
          
        ]);
  const [recipe,setRecipe] = useState(null);
  
  

  const addIngredient = (newIngredient) => {
    setIngredients(prevIngredients => [...prevIngredients, {
      key: Date.now(),
      name: newIngredient
    }]);
  };
  const deleteIngredient = (key) => {
    setIngredients(prevIngredients => prevIngredients.filter(element=>element.key!==key));
  };

  const addRecipe  = (newRecipe)=>{
    setRecipe(newRecipe);
  }
  return (
    <>
      <Header></Header>
      <Intro></Intro>
      <Form  onAddIngredient={addIngredient}></Form>
      <Ingredients 
        ingredients={ingredients}
        onDeleteIngredient={deleteIngredient}
        onAddRecipe = {addRecipe}/>
      {recipe && <Recipe recipe={recipe}></Recipe>}
      <Footer></Footer>
    </>
  )
}

export default App;
