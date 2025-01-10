function CategoryFilter({ onCategoryChange }) {
    const handleCategoryChange = (event) => {
      onCategoryChange(event.target.value); // Pass selected category to parent
    };
  
    return (
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="category">Filter by Category: </label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Computers">Computers</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Accessories">Accessories</option>
          <option value="Photography">Photography</option>
        </select>
      </div>
    );
  }
  
  export default CategoryFilter;