import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

type Props = {
  center?: {
    lat?: number;
    lng?: number;
  };
  zoom?: number;
  height?: number;
};

const Map: React.FC<Props> = ({ center, zoom, height }) => {
  return (
    <div style={{ width: "100%", height: `${height}px`, maxWidth: 1920, marginLeft: "auto", marginRight: "auto"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={center}
        defaultZoom={zoom}
      />
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 50.049683,
    lng: 19.944544,
  },
  zoom: 11,
  height: 697,
};

export { Map };
