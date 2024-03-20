import React from "react";
import { RouterProvider } from "react-router-dom";
import { ProjectRoutes } from "./routes/ProjectRoutes";
const App = () => {
  return (
    <RouterProvider router={ProjectRoutes} >
      
    </RouterProvider>
  );
};

export default App;
