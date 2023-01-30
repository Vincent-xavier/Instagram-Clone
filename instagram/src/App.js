import { Button, List, ListItem, ThemeProvider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fakeApi } from "./theme/themeSlice";
import Theme from "./theme/theme";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state);
  return (
    <>
      <ThemeProvider theme={(Theme) => Theme}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => dispatch(fakeApi())}
        >
          Api Call!
        </Button>

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
