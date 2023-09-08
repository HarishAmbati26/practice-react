import "./ImageCard.css";

export default function ImageCard({pokemonData}) {
    return (
        <div className="ImageCard">
            <div className="ImageCard-image"><h3>Image</h3></div>
            <div className="ImageCard-name">Name</div>
            <div className="ImageCard-type">Type</div>
        </div>
    )
}