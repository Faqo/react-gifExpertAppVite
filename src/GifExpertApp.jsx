import { useState } from "react"
import { AddCategory, GifGrid } from "./Components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // setCategories([...categories, 'Hunter x'])
    setCategories(cat => [newCategory, ...cat]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={onAddCategory}
      />

     
      {
        categories.map((category) => (
          <GifGrid 
            key={category}
            category={category}
          />
        ))
      }
    

    </>
  )
}
