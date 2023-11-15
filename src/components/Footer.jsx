import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="contact" className="bg- py-16 text-white">
      <div className="flex flex-col gap-3 p-3 font-mono font-bold  tracking-widest text-stone-800 md:flex-row md:justify-around ">
        <div
          className="flex flex-col items-center justify-center gap-4 md:flex
        "
        >
          <div>
            <h1 className="text-center text-2xl font-bold uppercase">
              contact
            </h1>
          </div>
          <div>
            <p>
              <span className=" uppercase">email:</span>📧
              ToursandTravels@gmail.com
            </p>
            <p>
              <span className=" uppercase">phone: ☎️ +977-984123456</span>{" "}
            </p>
            <p>
              <span className=" uppercase">address:</span>
              <span className="capitalize">
                📍 putalisadak, Kathmandu, Nepal
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex md:items-end md:justify-start">
          <h1 className="text-center text-2xl font-bold uppercase">social</h1>
          <div className="flex items-center justify-center gap-5">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <AiFillInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook size={20} />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
