import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  const categoriesList = ["First Category", "second"];

  const [categories, setCategories] = useState(categoriesList);

  const onAddCategory = () => {
    setCategories(["Categoria", ...categories]);
  };

  return (
    <div>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
