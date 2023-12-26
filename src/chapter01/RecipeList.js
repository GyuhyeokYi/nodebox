const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

function Ingredient({ingredients}) {
  return (
    <ul>
        {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
      </ul>
  )
}

function Recipe(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <Ingredient ingredients={props.ingredients} />
    </>
  )
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => <Recipe key={recipe.id} {...recipe}/>)}
    </div>
  )
}