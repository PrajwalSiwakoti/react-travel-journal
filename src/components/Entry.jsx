import marker from '../images/marker.png';

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.mainImage.imgSrc} 
                    alt={props.mainImage.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={marker} 
                    alt="map marker icon"
                />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.description}</p>
            </div>
            
        </article>
    )
}