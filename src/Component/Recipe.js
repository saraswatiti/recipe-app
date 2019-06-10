import React, { Component } from "react";
import { Link } from "react-router-dom";
const API_KEY = "27d4eeb6f26a9996337ede4957172550";
class Recipe extends Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const id = this.props.match.params.id;
    const req = await fetch(
      `http://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/get?key=${API_KEY}&q=${title}&rId=${id}`
    );
    const res = await req.json();
    console.log(typeof res.recipe); //to check the typeof any value;
    this.setState({ activeRecipe: res.recipe });
  };
  render() {
    const recipes = this.state.activeRecipe;
    console.log(this.state.activeRecipe);
    return (
      <div>
        <div className="container">
          <div className="img-wraper">
            <p className="author">
              publisher:
              <i className="fa fa-user-circle-o" aria-hidden="true" />
              {recipes.publisher}
            </p>
            <p className="recipe-title-wrap">{recipes.title}</p>
            <div className="col-break">
              <img src={recipes.image_url} alt={recipes.title} />
              <div className="detail-wrap">
                <h3>Ingredients</h3>
                <ul className="list-group">
                  {recipes.ingredients && recipes.ingredients.length > 0
                    ? recipes.ingredients.map((item, index) => {
                        return (
                          <li key={index} className="list-item-group">
                            {item}
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
            </div>
            <p className="btn">
              <Link
                to={{
                  pathname: "/"
                }}
              >
                Go back to Home
                <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Recipe;
