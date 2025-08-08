import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import CityCard from './components/CityCard';
import Footer from './components/Footer';

function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'cities'));
        const cityList = snapshot.docs.map(doc => doc.data());
        setCities(cityList);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      <main className="flex-grow px-6 py-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Cities to Visit in Europe</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {cities.map((city) => (
            <CityCard key={city.city} {...city} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
