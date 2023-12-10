// src/components/NepalDestinations.js

const NepalDestinations = ({ destinations }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center">
        Destinations Covered in Nepal
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {destinations.map((destination, index) => (
          <div key={index} className="border p-2 rounded-md">
            {destination}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NepalDestinations;
