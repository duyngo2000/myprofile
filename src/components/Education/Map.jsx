import React, { useMemo } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import env from "react-dotenv"
import styled from "styled-components"
import { moblie } from "../Contants/sizeScreen"

const Container = styled.div`
  height: 70vh;

  @media screen and (max-width: ${moblie}) {
    height: 50vh;
  }
`
const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "8px",
}

const Map = () => {
  const center = useMemo(
    () => ({
      lat: 10.0079465,
      lng: 105.7206429,
    }),
    []
  )

  return (
    <Container>
      <LoadScript googleMapsApiKey={process.env.GG_MAP_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </Container>
  )
}

export default Map
