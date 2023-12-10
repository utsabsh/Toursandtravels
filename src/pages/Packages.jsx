import Footer from "../components/Footer";
import PackageItems from "../components/PackageItems";
import Navbar from "../components/Navbar";

export default function Package() {
  const places = [
    {
      name: "Place 1",
      description: "Description for Place 1",
      image: "src/image/bouddha.jpg", // Assuming you have image files in your project
      money: "$20",
    },
    {
      name: "Place 2",
      description: "Description for Place 2",
      image: "src/image/macchpuchree.jpg",
      money: "$35",
    },
    // Add more places as needed
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-8 h-screen">
        <h2 className="text-3xl font-bold mb-4 text-center">Packages</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <PackageItems place={place} index={index} key={index} />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
