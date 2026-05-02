import "./WhatsappBtn.css";
import Whatsapp from "../../svgs/Whatsapp";

const WhatsappBtn = () => {
  return (
    <div className="whatsapp-btn-container">
      <span>Chamar no Whatsapp</span>
      <Whatsapp svgWidth="30px" svgHeight="30px" />
    </div>
  );
};

export default WhatsappBtn;
