import { getPokemon } from "./generics/get-pokemon";

getPokemon()
    .then( resp => console.log( resp ) )
    .catch( err => console.log( err ) )
    .finally( () => console.log( "Petición terminada" ) );