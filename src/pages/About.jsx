import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        <p className="mb-6">
          Fast Track Travel & Tours was established in 2008. In March 2023, a
          new travel partner has joined the management team, and our company now
          has a branch office at the core of the city Jhochhen. We have become
          one of the best Tour Operating Agencies in Nepal. To meet the needs of
          various markets, we have introduced a series of colorful and salable
          tourist products, many of them being initiative and classic products
          in Nepal's Tourist Trade. Our new management team is capable of
          organizing tours in Nepal and overseas with additional energy and
          enthusiasm.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-center">Vision</h2>
        <p className="mb-6 text-center">
          Our Vision is to be the Number One Tour Operator in Nepal with
          Complete Travel Solutions.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-center">Mission</h2>
        <p className="mb-6 text-center ">
          Our Mission is to provide Complete Travel solutions to guests or
          agents. We are dedicated to each guest's utmost satisfaction and
          comfort, ensuring that their visit to Nepal will be among the most
          memorable, at all times. We strive to provide unmatched creativity in
          conception and planning, reliability in execution, and flawless
          performance in every detail. We not only take our travelers to those
          famous sites in our country but also take them to places that
          travelers don't typically go. Our customers have been our ambassadors.
          Our mission is to make every single tourist fully satisfied by
          providing world-class services to make their tours memorable and
          enjoyable.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-center">Quality</h2>
        <p className="mb-6 text-center">
          Quality is fundamental in our work as it is the ultimate requirement
          of any tour operator. With due importance to this fact, our team
          governs the overall quality policy which is imbibed and implemented by
          all, starting from top management to the bottom level.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Our Core Product
        </h2>
        <p className="text-center">
          Domestic and International Ticketing. We are handling individuals and
          groups. We are operating Hotel Reservation, Family packages, Honeymoon
          packages, Adventure Tourism, Pilgrimage Tours, Wildlife Tours, Golf
          packages, and Village Tours packages in Nepal and abroad. The company
          has dealt with many large companies and taken a great number of Tours
          within Nepal. We have recently expanded our area to Vehicle Rental,
          Trekking, and Rafting.
        </p>
      </div>
      <Footer />
    </>
  );
}
