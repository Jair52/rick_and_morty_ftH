import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import NotFound from './components/notFound/NotFound.jsx';

//https://rym2.up.railway.app/api/character/10?key=henrystaff

const URL = "https://rym2.up.railway.app/api/character";
const API_key = "henrystaff";

function App() {

   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   
   function onSearch(id) {
      const characterId = characters.filter(
         char => char.id === Number(id)
      )
      if(characterId.length){
         return alert(`${characterId[0].name} ya existe!`);
      }
      axios(`${URL}/${id}?key=${API_key}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters([...characters, data]);
            } else {
               window.alert('¡El id debe ser un numero entre 1 y 826!');
            }
         }
      );
      navigate("/home");
   }

   //* characters [ {id:1}]

   const onClose = id => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route 
               path='/home' 
               element={<Cards characters={characters}
               onClose={onClose}/>} 
            />
            <Route
               path='/about'
               element={<About/>}
            />
            <Route
               path='/detail/:id'
               element={<Detail />}
            />
            <Route 
               path='*' 
               element={<NotFound />}
               />
         </Routes>
         <hr />
      </div>
   );
}

export default App;
