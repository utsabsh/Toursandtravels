import React from "react";

export default function PackageItems({ place, index }) {
  return (
    <li key={index} className="mb-8">
      <div className="max-w-md bg-white rounded overflow-hidden shadow-lg m-4">
        <img
          className="w-full h-48 object-cover"
          src={place.image}
          alt={place.name}
        />
        <div className="px-4 py-3 md:px-6 md:py-4">
          <div className="font-bold text-xl mb-2">{place.name}</div>
          <p className="text-gray-700 text-base">{place.description}</p>
          <div className="mt-2 md:mt-4">
            <span className="text-gray-500">Price:</span>
            <span className="block md:inline-block md:ml-2 font-bold text-purple-600">
              {place.money}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
{
  /* <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
      <p className="text-gray-600">{place.description}</p>
      <img
        src={place.image}
        alt={`Image for ${place.name}`}
        className="mt-4 rounded-lg shadow-md"
      /> */
}
