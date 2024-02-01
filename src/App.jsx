import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Exchanges from "./components/Exchanges";
import News from "./components/News";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: '/', element: <Homepage />},
      { path: '/cryptocurrencies', element: <Cryptocurrencies />},
      { path: '/exchanges', element: <Exchanges />},
      { path: '/news', element: <News />}
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
