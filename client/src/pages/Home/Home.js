import Featured from "../../components/Features/featured";
import FeaturedProperties from "../../components/FeaturedProperties/featuredproperties";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/mailList";
import Navbar from "../../components/Navbar/Navbar";
import PropertyList from "../../components/propertyList/propertyList";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Property Type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes Guests</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;