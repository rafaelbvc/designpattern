import OrcamentoBtn from "../orcamentoBtn/OrcamentoBtn";
import WhatsappBtn from "../whatsappBtn/WhatsappBtn";
import "./MainBanner.css";

const MainBanner = () => {
  return (
    <div className="main-banner-container">
      <div className="main-banner-img-background">
        <div className="main-banner-sub-container">
          <span className="main-banner-conforto">
            CONFORTO • SEGURANÇA • PONTUALIDADE
          </span>
          <span className="main-banner-destino">Seu destino,</span>
          <span className="main-banner-prioridade">nossa prioridade!</span>
          <span className="main-banner-motorista">
            Motorista particular com conforto,
          </span>
          <span className="main-banner-motorista">
            Segurança e pontualidade para
          </span>
          <span className="main-banner-motorista">você e sua família.</span>
          <WhatsappBtn />
          <OrcamentoBtn />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
