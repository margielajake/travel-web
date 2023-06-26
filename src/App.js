import Navbar from "./Components/Navbar";
import Card from "./Components/card";
import { data } from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.title} item={item} />;
  });

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
