import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/About-Us/AboutUs";
import AddNewItems from "./components/AddNewItems/AddNewItems";
import Contact from "./components/content/Contact";
import Explores from "./components/Explores/Explores";
import Home from "./components/Home/Home/Home";
import Services from "./components/Home/Home/services/Services";
import Login from "./components/Login/Login/Login";
import Registration from "./components/Login/Registration/Registration";
import ManageOrder from "./components/ManageOrder/ManageOrder";
import Order from "./components/Order/Order";
import Purchase from "./components/Purchase/Purchase";
import PrivateRoutes from "./components/Router/PrivateRouts/PrivateRoutes";
import Footer from "./components/Shared/Footer/Footer";

import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/addNewItems" element={<AddNewItems />}></Route>
        <Route path="/manageOrders" element={<ManageOrder />}></Route>
        <Route path="/explores" element={<Explores />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route
          path="/order/:id"
          element={
            <PrivateRoutes>
              <Order />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/purchase/:id"
          element={<Purchase />}
          loader={({ params }) =>
            fetch(`http://localhost:5000/services/${params.id}`)
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
