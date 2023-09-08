import ImageCard from "../components/image-card/ImageCard";
import "./PokemonList.css";

export default function PokemonList() {
    let pokeList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div>
            <h4>Hello, Welcome to see your favorite Pokemons</h4>
            <div className="poke-list">
                {
                    pokeList.map(pokemon => <ImageCard pokemonData={pokemon} />)
                }
            </div>
        </div>

    )
}