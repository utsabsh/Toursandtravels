// src/components/Services.js

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 md:px-0 py-5 my-8">
        <h2 className=" font-bold mb-4 text-center text-4xl">
          Services That We Offer:
        </h2>

        {/* Hotel Booking */}
        <div className="mb-6 text-center">
          <h3 className="text-lg font-bold mb-2 text-center">Hotel Booking</h3>
          <p className="text-sm w-[50%] ml-[25%]">
            For individuals and groups, we can book any kind of hotel in Nepal
            and abroad. Due to our excellent connection with hotels, we are
            always able to get rooms even in peak season and, of course, with
            the best-discounted rates. Our great team will get back to you
            within 24 hours for any kind of inquiry.
          </p>
        </div>

        {/* Vehicle Rental in Nepal */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 text-center">
            Vehicle Rental in Nepal
          </h3>
          <p className="text-sm text-center">
            We have our own fleet of vehicles such as Scorpio (SUV), SKODA
            (Sedan Car), Hi-Ace, and Sutlej Bus.
          </p>
        </div>

        {/* Domestic and International Air Ticket */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 text-center">
            Domestic and International Air Ticket
          </h3>
          <p className="text-sm text-center">
            We provide booking services for both domestic and international air
            tickets.
          </p>
        </div>

        {/* Visa Services */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 text-center">Visa Services</h3>
          <p className="text-sm text-center">
            We assist in visa services for your international travels.
          </p>
        </div>

        {/* Planned Itinerary and Tailor-Made Package */}
        <div className="mb-6 text-center">
          <h3 className="text-lg font-bold mb-2 text-center">
            Planned Itinerary and Tailor-Made Package
          </h3>
          <p className="text-sm  md:w-[50%] md:ml-[25%] text-center">
            To make your experience easier to achieve, our focus has been on how
            to help people travel well, especially in Nepal. We have showcased a
            long list of tour packages to choose from. If you are into adventure
            or culture, our staff, being routine travelers with proven track
            records, can assist you with travel itineraries, booking, or travel
            advice. Contact us, and we'll be more than happy to help.
          </p>
        </div>

        {/* Mixture of Packages/Tours */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 text-center">
            A Mixture of Packages/Tours
          </h3>
          <p className="text-sm text-center">
            <strong>Tours:</strong> Cultural Tours, Pilgrimage Tours, Honeymoon
            Packages, Family Tours, Village Tours, Wildlife Safari Tours,
            Festival Tours, Special Interest Tours, and much more.
          </p>
          <p className="text-sm text-center">
            <strong>Adventure Activities:</strong> Golf Package, Hiking Tours,
            Biking Tours, Heli-tour, Rafting, Paragliding, Trekking and
            Expeditions, Bungy, and much more.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
