import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import places from "./data.js";

function App() {
  const heroes = ["superman", "batman", "spiderman"];
  const entryElements = places.map((place) => {
    return (
      <Entry
        key={place.id}
        mainImage={{ imgSrc: place.img.src, alt: place.alt }}
        country={place.country}
        googleMapsUrl={place.googleMapsLink}
        title={place.title}
        dates={place.dates}
        description={place.description}
      />
    );
  });

  return (
    <>
      <Header />
      {entryElements}
      {/* this is the same as the code below, but using a variable is cleaner and good practice */}
      {places.map((place) => {
        return (
          <Entry
            key={place.id}
            mainImage={{ imgSrc: place.img.src, alt: place.title }}
            country={place.country}
            googleMapsUrl={place.googleMapsLink}
            title={place.title}
            dates={place.dates}
            description={place.description}
          />
        );
      })}
      {heroes.map((hero) => (
        <h1>{hero}</h1>
      ))}
    </>
  );
}

export default App;
