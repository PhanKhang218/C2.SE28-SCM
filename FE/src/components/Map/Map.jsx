import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

const options = { closeBoxURL: "", enableEventPropagation: true };

const Map = () => {
  return (
    <div>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 16.0746646, lng: 108.2203005 }}
      >
        <Marker
          icon={{
            url: "https://insulationpads.co.uk/wp-content/uploads/2017/10/Home.png",
            scaledSize: new window.google.maps.Size(40, 40),
          }}
          position={{ lat: 16.0746646, lng: 108.2203005 }}
        >
          <InfoBox options={options}>
            <>
              <div
                style={{
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "1em",
                  padding: "0.2em",
                }}
              >
                Trường Đại Học Duy Tân
              </div>
            </>
          </InfoBox>
        </Marker>
      </GoogleMap>
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));
