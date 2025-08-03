import Route from "./Route.js";

//Définir ici les routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/legal", "Mentions légales", "/pages/legal.html"),

];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "LirePlus";
