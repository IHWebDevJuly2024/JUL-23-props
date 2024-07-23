import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";

const users = ["Mica", "Valentina", "Laia", "Marina"];

function App() {
  return (
    <>
      {/* this is called FRAGMENT */}
      <Navbar />
      <Hero >
        <h1>Helloooooooo</h1>
      </Hero>
      <section className="card-container">
        <Card userName={users[0]} role="Teacher" />
        <Card userName={users[1]} role="Career advisor" />
        <Card userName={users[2]} role="Program Manager" />
        <Card userName={users[3]} role="Program Manager" />
      </section>
    </>
  );
}

export default App;
