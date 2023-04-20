import Map from "./components/Map/Map";
function App() {
  const key = "	AIzaSyDaOulQACiJzBfqumbsqg_-vKha8fCnL-s";

  return (
    <div className="App">
      <header>Map Demo</header>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            style={{
              height: `90vh`,
              margin: `auto`,
              border: "2px solid black",
            }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
