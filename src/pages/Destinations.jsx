// src/components/TravelAgency.js

import Footer from "../components/Footer";
import NepalDestinations from "../components/NepalDestinations";
import AbroadDestinations from "../components/AbroadDestinations";
import Navbar from "../components/Navbar";

const Destinations = () => {
  const nepalDestinations = [
    "Kathmandu Durbar Square",
    "Patan",
    "Bhaktapur",
    "Pashupatinath",
    "Boudha Stupa",
    "Nagarkot",
    "Dhulikhel",
    "Pokhara",
    "Chitwan",
    "Lumbini",
    "Tansen",
    "Bandipur",
    "Bhudhanilkantha",
    "Manang",
    "Mustang",
    "Jomsom",
    "Muktinath",
    "Annapurna Base Camp",
    "Everest Base Camp",
    "Balthali Village",
    "Bardia National Park",
    "Kalinchowk",
    "and many more",
  ];

  const abroadDestinations = [
    "Thailand",
    "Dubai",
    "Malaysia",
    "Singapore",
    "Sri Lanka",
    "Maldives",
    "Myanmar",
    "Mauritius",
    "India",
    "Indonesia",
    "Cambodia",
    "Europe Package",
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 h-screen mb-5">
        {/* Render Nepal Destinations Component */}
        <NepalDestinations destinations={nepalDestinations} />

        {/* Render Abroad Destinations Component */}
        <AbroadDestinations destinations={abroadDestinations} />

        {/* ... (other sections) */}
      </div>
      <Footer />
    </>
  );
};

export default Destinations;
