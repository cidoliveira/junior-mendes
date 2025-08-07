import Lettering from "./Lettering";
import Paragraph from "./Paragraph";
import image2 from "../assets/reuniao-grupo-de-apoio-a-terapia-psicologica.jpg";
import logo from "../assets/ChatGPT Image 7 de ago. de 2025, 14_50_33.png";
import ButtonContact from "./ButtonContact";

export default function Home() {
  return (
    <div className="bg-[#FEF5CB] w-[100vw] h-[100vh] flex items-center">
      <div className="flex flex-col md:flex-row justify-start items-center w-full gap-10">
        <div className="flex flex-col px-10 md:w-1/2 md:px-20 lg:px-30 xl:px-40 2xl:px-50">
          <img className="w-50 mb-10" src={logo} alt="" />
          <Lettering text="Você não precisa enfrentar tudo sozinho." />
          <Paragraph text="A terapia é um espaço seguro para cuidar da sua saúde emocional com acolhimento e propósito." />
          <ButtonContact />
        </div>
        <div className="flex justify-end w-full md:w-1/2">
          <img
            className="object-cover md:h-[100vh] w-200 md:w-100 xl:w-150 2xl:w-200"
            src={image2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
