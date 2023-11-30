import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// Pages here
import Home from "./pages/Home";
// Components here
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  // Dashboard for All Pages
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  // Routes
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
