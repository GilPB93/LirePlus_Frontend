import Route from "./Route.js";

//Définir ici les routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", "/pages/home.js"),
    new Route("/legal", "Mentions légales", "/pages/legal.html"),
    new Route("/cookies", "Utilisation des cookies", "/pages/cookies.html"),
    new Route("/inscription", "Inscription", "/pages/signup.html"),
    new Route("/connexion", "Connexion", "/pages/signin.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/about", "À propos", "/pages/about.html"),
    new Route("/howto", "Comment ça marche ?", "/pages/howto.html"),
    new Route("/account", "Mon Compte", "/pages/user/account.html"),
    new Route("/userhome", "Page d'accueil", "/pages/user/user_home.html"),
    new Route("/userlibrary", "Ma Bibliothèque", "/pages/user/user_library.html"),
    new Route("/userbookdone", "Mes livres lus", "/pages/user/user_bookdone.html"),
    new Route("/userbooktoread", "Mes livres à lire", "/pages/user/user_booktoread.html"),
    

];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "LirePlus";
