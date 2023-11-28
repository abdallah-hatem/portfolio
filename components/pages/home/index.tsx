import IconComp from "@/components/ui/iconComp";
import { FaLinkedin, FaGithub, FaEnvelope, FaFacebook } from "react-icons/fa";

export default function HomePage() {
  const icons = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/abdallah-hatem-39a98018a",
    },
    { icon: <FaGithub />, url: "https://github.com/abdallah-hatem" },
    { icon: <FaEnvelope />, url: "" },
    { icon: <FaFacebook />, url: "" },
  ];
  return (
    <div
      id="home"
      className="text-center h-[calc(100vh-60px)] flex justify-center"
    >
      <div className="self-center">
        <p className="text-5xl text-homeHeader font-bold">
          Hi, Im <span className="text-secondary">Abdallah</span> <br />A
          Full-Stack Developer
        </p>
        <div className="flex justify-center mt-5 gap-5">
          {icons.map((el, index) => (
            <IconComp url={el.url} icon={el.icon} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
