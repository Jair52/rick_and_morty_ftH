import Card from '../card/Card';

// export default function Cards(props) {
export default function Cards({characters, onClose}) {

   const cardsContainer = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
   }
   // console.log(characters)
   //* props = {characters: [ --- ]}
   //* characters = [ {R}, {M}, {B}, {S} ]
   return (
      <div style={cardsContainer}>
         {
            !characters.length ? <h2>Por favor ingrese un id </h2> : //Condicion para ver si no hay card
            characters.map(character => (
               <Card 
                  //* key={props.character.id}
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={onClose}
               />
            ))
         }
      </div>
   );
}
