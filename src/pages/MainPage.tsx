import ClientsTable from "../components/clientsTable/ClientsTable";
import CoverArea from "../components/coverArea/CoverArea";
import Footer from "../components/footer/Footer";
import MainBanner from "../components/mainBanner/MainBanner";
import MainDifferentials from "../components/mainDifferentials/MainDifferentials";
import MainServices from "../components/mainServices/MainServices";
import Navbar from "../components/navbar/Navbar";
import SubServices from "../components/subServices/SubServices";
import WhatsAppSection from "../components/whatsAppSection/WhatsAppSection";
import Airplane from "../svgs/airplane";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <MainServices />
      <SubServices />
      <MainDifferentials />
      <ClientsTable />
      <CoverArea />
      <WhatsAppSection />
      <Footer />
      <Airplane svgWidth="50px" svgHeight="50px" svgFillColor="#fff" />
    </>
  );
};

export default MainPage;
