const CityCard = ({ image, city, country, description }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row 
                  hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300">
    <img src={image} alt={city} className="h-64 sm:h-auto sm:w-64 object-cover" />
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">{city.toUpperCase()}</h2>
      <p className="text-sm text-gray-500">{country}</p>
      <p className="text-gray-700 text-sm mt-2">{description}</p>
    </div>
  </div>
);
export default CityCard;