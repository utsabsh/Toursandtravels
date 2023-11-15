import Footer from "../components/Footer";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-500 to-purple-700 text-white py-16  h-screen ">
        <div className="container mx-auto text-center flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-6 mt-[20%]">About Us</h2>
          <p className="text-lg mb-10">
            Welcome to our world of travel! At our core, we are explorers,
            storytellers, and dreamers. We believe in creating unforgettable
            experiences that go beyond the ordinary. Our passion for travel
            fuels our commitment to curate extraordinary journeys for you.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
