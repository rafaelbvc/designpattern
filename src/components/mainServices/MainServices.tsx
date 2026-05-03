import Airplane from "../../svgs/Airplane";
import Car from "../../svgs/Car";
import ClockLines from "../../svgs/ClockLines";
import ShieldCheck from "../../svgs/ShieldCheck";
import "./MainServices.css";

const MainServices = () => {
  return (
    <div className="main-services-container">
      <div className="main-services-card">
        <ClockLines svgWidth="40px" svgHeight="40px" svgFillColor="gold" />
        <span>24h</span>
      </div>
      <div className="main-services-card">
        <Car svgWidth="40px" svgHeight="40px" svgFillColor="gold" />
        <span>Viagens</span>
      </div>
      <div className="main-services-card">
        <Airplane svgWidth="40px" svgHeight="40px" svgFillColor="gold" />
        <span>Aeroportos</span>
      </div>
      <div className="main-services-card">
        <ShieldCheck svgWidth="40px" svgHeight="40px" svgFillColor="gold" />
        <span>Executivo</span>
      </div>
    </div>
  );
};

export default MainServices;
