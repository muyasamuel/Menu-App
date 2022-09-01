import React from "react";
import classes from "./Categories.module.css";

function Categories({ categories, filterItems }) {
  return (
    <div className={classes.category}>
     
      {
        categories.map( (category, index) => {
          return <button className={classes.btn} key={index}  onClick={() => filterItems(category)}>{category}</button>
        })
      }
    </div>
  );
}

export default Categories;
