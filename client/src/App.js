import { GlobalStyles } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  const globalStyles = {
    a: {
      color: "unset",
      textDecoration: "none",
    },
  };

  return (
    <>
      <GlobalStyles styles={globalStyles} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
