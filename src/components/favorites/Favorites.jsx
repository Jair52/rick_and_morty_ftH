import { useSelector } from 'react-redux';
import Card from '../card/Card';

export default function Favorites({onClose}) {

   const myFavorites = useSelector(state => state.myFavorites);

   return (
      <div
         style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
      }}
      >
         {
            myFavorites.map(myFavorite => (
               <Card 
                  //* key={props.myFavorite.id}
                  key={myFavorite.id}
                  id={myFavorite.id}
                  name={myFavorite.name}
                  status={myFavorite.status}
                  species={myFavorite.species}
                  gender={myFavorite.gender}
                  origin={myFavorite.origin.name}
                  image={myFavorite.image}
                  onClose={onClose}
               />
            ))
         }
      </div>
   );
}
