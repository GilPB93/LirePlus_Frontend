import Route from "./Route.js";

//Définir ici les routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/legal", "Mentions légales", "/pages/legal.html"),
    new Route("/inscription", "Inscription", "/pages/signup.html"),
    new Route("/connexion", "Connexion", "/pages/signin.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/about", "À propos", "/pages/about.html"),

];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "LirePlus";
