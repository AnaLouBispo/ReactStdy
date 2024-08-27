import Header from "./Components/Header";
import "./App.css";
import Card from "./Components/Card";
import Banner from "./Components/Banner";
import BannerCard from "./Components/BannerCard.jsx";
import Form from "./Components/Form.jsx";
function App() {
  return (
    <>
      <Header />

     x
     
      <BannerCard titulo="Venha ser PinkMokey" subTitulo="Lorem Ipsum New" />
      <BannerCard titulo="Gaby..." subTitulo="boca torta" />
      <Banner />
      <Card />
      <Form />

    </>
  );
}

export default App;
