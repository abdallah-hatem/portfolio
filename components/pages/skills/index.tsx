import Image from "next/image";
import htmlPic from "../../../pics/pngegg.png";
import cssPic from "../../../pics/csspic.png";
import jsPic from "../../../pics/jspic.png";
import reactPic from "../../../pics/reactpic.png";
import dockerPic from "../../../pics/dockerpic.png";
import nodePic from "../../../pics/nodepic.png";
import githubPic from "../../../pics/githubpic.png";
import mongoDbPic from "../../../pics/mongodbpic.png";
import postgreSQLPic from "../../../pics/postgresqlpic.png";
import expressPic from "../../../pics/expresspic.png";
import RestApiPic from "../../../pics/RestApi pic.png";
import tailwind from "../../../pics/tailwindcss.png";
import nest from "../../../pics/nestjs.png";
import nextjs from "../../../pics/nextjs-icon.png";
import redux from "../../../pics/redux.png";

export default function Skills() {
  const skills = [
    { name: "HTML", pic: htmlPic },
    { name: "CSS", pic: cssPic },
    { name: "JavaScript", pic: jsPic },
    { name: "React", pic: reactPic },
    { name: "Next", pic: nextjs },
    { name: "Tailwind css", pic: tailwind },
    { name: "Docker", pic: dockerPic },
    { name: "Node", pic: nodePic },
    { name: "Express", pic: expressPic },
    { name: "Nest", pic: nest },
    { name: "Github", pic: githubPic },
    { name: "MongoDb", pic: mongoDbPic },
    { name: "PostgreSQL", pic: postgreSQLPic },
    { name: "RestApi", pic: RestApiPic },
    { name: "Redux", pic: redux },
  ];

  return (
    <div id="skills" className="md:h-[calc(100vh-60px)]">
      <header className="titles">Skills</header>
      <div className="flex gap-4 flex-wrap justify-center">
        {skills.map((el, index) => (
          <div
            className="flex-1 flex justify-between items-center px-8 py-4 shadow-xl rounded-md min-w-[230px] max-w-[230px] hover:scale-[0.9] ease-in-out duration-300"
            key={index}
          >
            <Image src={el.pic} className="h-[60px] w-[60px]" alt="pic" />
            <p className="text-lg font-semibold">{el.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
