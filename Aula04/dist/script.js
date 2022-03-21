var listaFilmes = [
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG",
  "https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg",
  "https://catalisecritica.files.wordpress.com/2011/02/o-conde-de-monte-cristo.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}