import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

function Theme() {
    const { appMode } = useSelector((state) => state);
  console.log(appMode);
  return createTheme({
    palette: {
      mode: appMode,
      primary: {
        main: "#C7C9C7",
      },
      secondary: {
        main: "#F6C18C",
      },
    },
    typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
    },
  });
}

// const Theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#C7C9C7",
//     },
//     secondary: {
//       main: "#F6C18C",
//     },
//   },
//   typography: {
//     fontFamily: "Quicksand",
//     fontWeightLight: 300,
//     fontWeightRegular: 400,
//     fontWeightMedium: 500,
//     fontWeightBold: 600,
//   },
// });

export default Theme;
