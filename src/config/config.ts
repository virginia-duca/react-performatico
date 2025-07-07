// Eu sei que nao se deve colocar a chave da API no codigo,
// mas como nao tenho um backend , e este projeto é puramente
// demonstrativo eu vou colocar a chave aqui.
const NASA_API_KEY = "6YHjTz5cjmd99vFzpho0CcIKubv76jMYDZdjXO8o";
export const CONNECTION = {
  NASA_URL: "https://api.nasa.gov",
  ASTEROIDS_URL: "https://api.nasa.gov/neo/rest/v1/feed",
  APOD_URL: `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`,
  MARS_ROVER_URL:
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
  EXOPLANET_URL:
    "https://exoplanetarchive.ipac.caltech.edu/docs/program_interfaces.html",
  LAUNCH_LIBRARY_URL: "https://ll.thespacedevs.com/2.3.0/launches/?mode=list&limit=50",
};

export const PALLETE = {
    spaceBlue: "#0a1452", // azul bem escuro, quase espacial
    deepBlue: "#003d82", // azul profundo
    oceanBlue: "#0066a7", // azul oceano
    skyBlue: "#0090bb", // azul céu
    aqua: "#00b9bf", // azul água/água-marinha
    neonGreen: "#00e2b8", // verde neon/azul esverdeado
    deepPurple: '#7116BB',
    grey: '#424242',
    lightGrey: '#303030',
    darkGrey: '#212121',
    dark: '#121212',
    black: '#000',
    white: '#fff'
};
