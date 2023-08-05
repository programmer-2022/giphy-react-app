import { useState } from "react";
import { PropTypes } from "prop-types";
import "./AddCategory.css";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          placeholder="Buscar Gifs"
        />
      </div>
    </form>
  );
};

export default AddCategory;
