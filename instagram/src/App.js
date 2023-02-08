import { Button, List, ListItem, ThemeProvider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fakeApi } from "./theme/themeSlice";
import Theme from "./theme/theme";
import "./App.css";
import GoogleMapReact from "google-map-react";

function App() {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state);

  var defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 2,
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => dispatch(fakeApi())}
        >
          Api Call!
        </Button>

        <div
          className="d-flex justify-content-center "
          style={{ height: "100vh", width: "100%" }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            center={defaultProps.center}
          >
          </GoogleMapReact>
        </div>

        {isLoading && <h3>Loading ...</h3>}
        <List>
          {data &&
            data.map((value, index) => (
              <ListItem key={index}>{value.title}</ListItem>
            ))}
        </List>
      </ThemeProvider>
    </>
  );
}

export default App;
