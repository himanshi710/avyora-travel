import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import Luxury from "./pages/Luxury";
import CustomTrip from "./pages/CustomTrip";
import Hotels from "./pages/Hotels";
import TravelGuide from "./pages/TravelGuide";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Main Pages */}
        <Route path="/about" element={<About />} />

        <Route path="/tours" element={<Tours />} />

        <Route
          path="/tour-details"
          element={<TourDetails />}
        />

        <Route
          path="/destinations"
          element={<Destinations />}
        />

        <Route
          path="/experiences"
          element={<Experiences />}
        />

        <Route
          path="/luxury"
          element={<Luxury />}
        />

        <Route
          path="/custom-trip"
          element={<CustomTrip />}
        />

        <Route
          path="/hotels"
          element={<Hotels />}
        />

        <Route
          path="/travel-guide"
          element={<TravelGuide />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Fallback */}
        <Route
          path="*"
          element={<Home />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;