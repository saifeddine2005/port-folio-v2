import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const skillsNew = [
  {
    name: "ReactJs",
    img: <FaReact size={"70%"} />,
  },
  {
    name: "Sass",
    img: <FaSass size={"70%"} />,
  },
  {
    name: "Javascript",
    img: <IoLogoJavascript size={"70%"} />,
  },
  {
    name: "Html",
    img: <FaHtml5 size={"70%"} />,
  },
  {
    name: "Css",
    img: <FaCss3Alt size={"70%"} />,
  },
  {
    name: "Nodejs",
    img: <FaNodeJs size={"70%"} />,
  },
  {
    name: "Express js",
    img: <SiExpress size={"70%"} />,
  },
  {
    name: "MongoDb",
    img: <DiMongodb size={"70%"} />,
  },
  {
    name: "Postgresql",
    img: <SiPostgresql size={"70%"} />,
  },
  {
    name: "Bootstrap",
    img: <FaBootstrap size={"70%"} />,
  },
  {
    name: "Github",
    img: <FaGithub size={"70%"} />,
  },
  {
    name: "Socket Io",
    img: <SiSocketdotio size={"70%"} />,
  },
];

export const projectData = [
  {
    num: "01",
    title: "Application Goutte de Vie",
    desc: "Développement d’une application facilitant la mise en relation rapide entre donneurs de sang et patients, basée sur le groupe sanguin et la localisation. Intégration d’un tableau de bord dédié pour l’organisation et la gestion des campagnes de don.",
    img: "../ecommerce.png", // Mets ton image réelle ici
    isReverced: true,
    gitUrl: "https://github.com/toncompte/site-ecommerce", // Mets ton lien GitHub ici
  },
  {
    num: "02",
    title: "MadeInFez",
    desc: "Participation à la création d’une plateforme e-commerce visant à promouvoir et vendre les produits locaux de la ville de Fès. Contribution à l’amélioration de l’expérience utilisateur, ainsi qu’à la gestion efficace des produits et commandes.",
    img: "../livraison.png", // Mets ton image réelle ici
    isReverced: false,
    gitUrl: "https://github.com/toncompte/application-livraison", // Mets ton lien GitHub ici
  },
  {
    num: "03",
    title: "Application de suivi et gestion des commandes et livraisons",
    desc: "Conception d’une application permettant aux utilisateurs de passer des commandes, choisir des produits et suivre en temps réel l’état de leurs livraisons via une interface intuitive.",
    img: "../fasila_dm.png", // Mets ton image réelle ici
    isReverced: true,
    gitUrl: "https://github.com/toncompte/fasila-dm-recherche", // Mets ton lien GitHub ici
  },
  {
    num: "04",
    title: "Application de suivi et gestion des commandes et livraisons",
    desc: "Conception d’une application permettant aux utilisateurs de passer des commandes, choisir des produits et suivre en temps réel l’état de leurs livraisons via une interface intuitive.",
    img: "../fasila_dm.png", // Mets ton image réelle ici
    isReverced: true,
    gitUrl: "https://github.com/toncompte/fasila-dm-recherche", // Mets ton lien GitHub ici
  },
  {
    num: "05",
    title: "Application de suivi et gestion des commandes et livraisons",
    desc: "Conception d’une application permettant aux utilisateurs de passer des commandes, choisir des produits et suivre en temps réel l’état de leurs livraisons via une interface intuitive.",
    img: "../fasila_dm.png", // Mets ton image réelle ici
    isReverced: true,
    gitUrl: "https://github.com/toncompte/fasila-dm-recherche", // Mets ton lien GitHub ici
  },
];

export const social = [
  {
    icon: <GitHubIcon fontSize="large" />,
    link: "https://github.com/azdinserhani",
  },
  {
    icon: <FacebookOutlinedIcon fontSize="large" />,
    link: "https://www.facebook.com/azdine.azdine.52438174",
  },
  {
    icon: <InstagramIcon fontSize="large" />,
    link: "https://www.instagram.com/azedine.dev/",
  },
  {
    icon: <LinkedInIcon fontSize="large" />,
    link: "https://www.linkedin.com/in/az-eddine-serhani-32033a288/",
  },
];
