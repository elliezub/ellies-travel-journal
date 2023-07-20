import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Data from "./Data";

function App() {
  const cards = Data.map((place) => {
    return <Card key={place.id} {...place} />;
  });

  return (
    <>
      <Header />
      <section className="cardcontainer">{cards}</section>
      <Footer />
    </>
  );
}

export default App;
