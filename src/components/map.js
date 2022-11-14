import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import crimeData from "../data/crimeData.json";

export default function Map() {
  return (
    <Container style={{ marginTop: 80 }} maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <MapContainer
            center={[39.2904, -76.6122]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {crimeData.features.slice(0, 100).map((crime) =>
              crime.properties.Latitude != null &&
              crime.properties.Longitude != null ? (
                <Marker
                  key={crime.properties.RowID}
                  position={[
                    crime.properties.Latitude,
                    crime.properties.Longitude,
                  ]}
                >
                  <Popup>
                    Crime Description: {crime.properties.Description} <br />
                    Location: {crime.properties.Location} <br />
                    Time: {crime.properties.CrimeDateTime} <br />
                    Weapon: {crime.properties.Weapon} <br />
                    Race: {crime.properties.Race} <br />
                    Gender: {crime.properties.Gender} <br />
                    Age: {crime.properties.Age} <br />
                  </Popup>
                </Marker>
              ) : (
                <p></p>
              ),
            )}
          </MapContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
