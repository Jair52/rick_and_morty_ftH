import React from "react";

export default function SearchBar(props) {

   const [id, setId] = React.useState("");
   const handleChange = event =>{
      const value = event.target.value;
      // console.log(value);
      setId(value);
   }

   const handleClick = event =>{
      event.preventDefault();
      props.onSearch(id);
      setId('');
   }

   const handleRandom = event =>{
      event.preventDefault();
      const randomId = Math.floor(Math.random() * 826) + 1;
      props.onSearch(randomId.toString());
      setId("");
   }

   return (
      <div>
         <input 
            type='text' 
            name='search'
            id="search"
            onChange={handleChange}
            value={id}
         />
         <button onClick={handleClick}>Agregar</button>
         <button onClick={handleRandom}>Random</button>
      </div>
   );
}
