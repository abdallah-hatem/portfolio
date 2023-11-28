import ProjectCard from "./projectCard";
import gymPic from "../../../pics/Screenshot Gym.png";
import booking from "../../../pics/bookin.compic.png";
import techStore from "../../../pics/tech store.png";
import ERP from "../../../pics/eERP website.png";
import FoodPic from "../../../pics/food webapp pic.png";
import adminPanel from "../../../pics/angular admin panel.png";

export default function Projects() {
  const projects = [
    {
      title: "Gym landing page",
      url: "https://effortless-monstera-25bb38.netlify.app",
      pic: gymPic,
    },
    {
      title: "Food website",
      url: "https://cerulean-gelato-6ebef3.netlify.app",
      pic: FoodPic,
    },
    {
      title: "Booking.com landing page clone",
      url: "https://sparkling-narwhal-055ca4.netlify.app",
      pic: booking,
    },
    {
      title: "Admin panel for E-comerce webApp (Angular)",
      url: "https://angular-admin-panel-ecommerce.vercel.app",
      pic: adminPanel,
    },
    {
      title: "Full ERP website",
      url: "https://vermillion-lamington-c4e457.netlify.app",
      pic: ERP,
    },
    {
      title: "Unfinished tech store",
      url: "https://harmonious-seahorse-bf4531.netlify.app",
      pic: techStore,
    },
  ];
  return (
    <div id="projects" className="mt-[100px]">
      <header className="titles">My Projects</header>

      <div className="flex items-center justify-between flex-wrap gap-12">
        {projects.map((el, index) => (
          <ProjectCard pic={el.pic} title={el.title} url={el.url} key={index} />
        ))}
      </div>
    </div>
  );
}
