import React, { Component } from "react";
import "./App.css";
import Titile from "./Component/Titile";
import Form from "./Component/Form";
import Recipes from "./Component/Recipes";

const API_KEY = "27d4eeb6f26a9996337ede4957172550";
class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`
    );
    const data = await api_call.json();
    this.setState({
      recipes: data.recipes
    });
    console.log(this.state.recipes);
  };
  render() {
    const recipes = this.state.recipes;
    console.log(recipes);
    return (
      <div className="App">
        <Titile />
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={recipes} />
      </div>
    );
  }
}
export default App;
