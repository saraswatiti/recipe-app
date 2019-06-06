import React from "react";

const Form = props => {
  return (
    <div>
      <form onSubmit={props.getRecipe} className="search-form">
        <input type="text" name="recipeName" />
        <button>Get start</button>
      </form>
    </div>
  );
};

export default Form;
