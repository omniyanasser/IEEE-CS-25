import { useEffect, useState } from "react";
function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => { const res= await fetch("https://dummyjson.com/products?limit=30");
      const data = await res.json();
      setCards(data.products);
    };
    fetchData();
  }, []);

  return (
    <>

    <div className="container mx-auto py-8 bg-[#0f172a]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cards.map((card: any) => (
          <div
            key={card.id}
            className="bg-[#1d2839] rounded-xl p-4 shadow-lg flex flex-col "
          >
            <img
              src={card.images[0]} className="w-28 h-28 mx-auto object-cover mb-4"
             
            />
            <h5 className="text-white text-xl font-bold mb-2">{card.title}</h5>
            <p className="text-gray-400 mb-4 text-sm">
              {(() => {
                const words = card.description.split(" ");
                return words.length > 10 ? words.slice(0, 10).join(" ") + " ..." : card.description;
              })()}
            </p>
            <div className="flex items-center w-full justify-between mt-auto">
              <span className="text-green-500 font-semibold text-lg">${card.price}</span>
              <button className="bg-[#9810fa] text-white rounded-md px-4 py-1 font-medium hover:bg-[#7a0dc7] transition">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
   
       
  );
}

export default App
