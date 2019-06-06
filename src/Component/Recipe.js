import React, { Component } from "react";
import { Link } from "react-router-dom";
const API_KEY = "27d4eeb6f26a9996337ede4957172550";
class Recipe extends Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `http://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  };
  render() {
    const recipes = this.state.activeRecipe;
    return (
      <div>
        <div className="container">
          <div className="img-wraper">
            <p className="author">
              publisher:
              <i class="fa fa-user-circle-o" aria-hidden="true" />
              {recipes.publisher}
            </p>
            <p className="recipe-title-wrap">{recipes.title}</p>
            <img src={recipes.image_url} alt={recipes.title} />
            <p className="btn">
              <Link
                to={{
                  pathname: "/"
                }}
              >
                Go back to Home
                <i class="fa fa-arrow-circle-o-right" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Recipe;
