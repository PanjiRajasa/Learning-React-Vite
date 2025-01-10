// import { useState } from 'react'
// import './App.css'
import React, {useState} from "react";
import  { Challenge1 } from "./learning folder/learn";
import {Learn} from "./learning folder/learn";
import {Challenge2} from "./learning folder/learn";
import {Challenge3} from "./learning folder/learn";
import {Challenge4} from "./learning folder/learn";
import {Challenge5} from "./learning folder/learn"; 
import {Challenge6} from "./learning folder/learn";
import {Opening, PropsExample, NestedComponents} from "./learning folder/learn";
import GetStarted from "./learning folder/Learn2";
import CategoryFilter from "./learning folder/simpleElectronicsChallenge/CategoryFilter";
import ProductList from "./learning folder/simpleElectronicsChallenge/ProductList";
import ProductCard from "./learning folder/simpleElectronicsChallenge/ProductCard";

// start from here
import AlertWhenClicked from "./learning folder/displayAlert/alertJSX";
import DynamicAlert from "./learning folder/displayAlert/DynamicAlert";
import Conditional from "./learning folder/conditional/Conditional.JSX";
import ConditionalRender from "./learning folder/conditional/ConditionalRendering";
import ShoppingList from "./learning folder/conditional/ShoppingList";
import Count from "./learning folder/useState/Counter";

function App() {
  {/*
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { id: 1, name: "Laptop", price: 15000000, category: "Computers", isAvailable: true },
    { id: 2, name: "Smartphone", price: 8000000, category: "Mobiles", isAvailable: false },
    { id: 3, name: "Headphones", price: 2000000, category: "Accessories", isAvailable: true },
    { id: 4, name: "Camera", price: 10000000, category: "Photography", isAvailable: true },
  ];

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory); */}

  return (
    <div>
      {/*  
        <h1>Product Catalog</h1>
        <CategoryFilter onCategoryChange={setSelectedCategory} />
        <ProductList products={filteredProducts} />
      */}
      
      <NestedComponents name="Panji" alias="Mr. X."/>

      {/* start here */}
      <AlertWhenClicked/>
      <DynamicAlert/>

      {/* JSX conditional */}
      {/* <Conditional isGoal={true} /> */}

      {/* Learn from 0 again */}
      <InlineComponent/>
      <ConditionalRender/>
      <ShoppingList/>

      {/* Counter button */}
      <Count/>
    </div>
  );
};

const imageData = {
  name: "Hedy Lamarr",
  url: "https://i.imgur.com/yXOvdOSs.jpg",
  size: 90,
}

function InlineComponent() {
  return (
    <>
      <button>Hello!</button>
      <div className="imageEx">
        <h1>{imageData.name}</h1>
        <img
          src={imageData.url}
          alt={imageData.name}
          title={imageData.name}
          style={{
            width: imageData.size,
            height: imageData.size
          }}
          
        />
      </div>
    </>
    
  )
};

export default App;