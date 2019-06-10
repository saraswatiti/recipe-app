import React from "react";
import { Link } from "react-router-dom";
const Recipes = props => (
  <div className="container">
    <div className="recipe-box-wrap">
      {props.recipes.map(recipe => {
        return (
          <div className="recipe-box" key={recipe.title}>
            <div className="recipe-detail">
              <div className="img-wrap">
                <img src={recipe.image_url} alt={recipe.title} />
              </div>
              <div className="content-wrap">
                <p className="author">
                  <Link to={{ pathname: `${recipe.publisher_url}` }}>
                    <i className="fa fa-user-circle-o" aria-hidden="true" />
                    {recipe.publisher}
                  </Link>
                </p>
                <p className="recipe-title-wrap">
                  {recipe.title.lenght > 20
                    ? `${recipe.title}`
                    : `${recipe.title.substring(0, 25)}...`}
                </p>
                <p className="btn">
                  <Link
                    to={{
                      pathname: `/Recipe/${recipe.recipe_id}`,
                      state: { recipe: recipe.title }
                    }}
                  >
                    View Recipe
                    <i
                      className="fa fa-arrow-circle-o-right"
                      aria-hidden="true"
                    />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
export default Recipes;
