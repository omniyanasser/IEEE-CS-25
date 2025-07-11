import Card from "./Card"
import Navbar from "./Navbar"

import { members } from "./data/members";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
       {members.map((m)=>(
       <Card key={m.id} m={m}/>
    ))}
      </div>
    </>
  );
}

export default App;



