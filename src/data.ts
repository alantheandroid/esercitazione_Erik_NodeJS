import { Product, Category } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Pizza Margherita",
    price: 6,
    img: "https://thumbs.dreamstime.com/b/pizza-58914487.jpg",
    category_id: 1,
  },
  {
    id: 2,
    name: "Hamburger",
    price: 9,
    img: "https://media-assets.lacucinaitaliana.it/photos/61fae7f75f740bfb879f54e8/3:2/w_1500,h_1000,c_limit/iStock-636305290.jpg",
    category_id: 1,
  },
  {
    id: 3,
    name: "Caprese",
    price: 7,
    img: "https://media-assets.lacucinaitaliana.it/photos/62a99392745318cb493d342e/16:9/w_2560%2Cc_limit/1371874164",
    category_id: 2,
  },
  {
    id: 4,
    name: "Prosciutto e melone",
    price: 8,
    img: "https://blog.giallozafferano.it/ricettepanedolci/wp-content/uploads/2017/08/prosciutto-e-melone.jpg",
    category_id: 2,
  },
  {
    id: 5,
    name: "Gin Tonic",
    price: 8,
    img: "https://static.cookist.it/wp-content/uploads/sites/21/2018/08/gin-tonic.jpg",
    category_id: 3,
  },
  {
    id: 6,
    name: "Campari",
    price: 4,
    img: "https://www.gustissimo.it/articoli/drink/cocktail-pre-dinner/spritz-campari.jpg",
    category_id: 3,
  },
  {
    id: 7,
    name: "Acqua Naturale",
    price: 1.5,
    img: "https://www.comunicaffe.it/wp-content/uploads/2018/12/bicchiere-dacqua.jpg",
    category_id: 3,
  },
  {
    id: 8,
    name: "Acqua Frizzante",
    price: 1.5,
    img: "https://www.informazioneoggi.it/wp-content/uploads/2022/08/acqua-frizzante.jpg",
    category_id: 3,
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Piatti caldi",
  },
  {
    id: 2,
    name: "Piatti freddi",
  },
  {
    id: 3,
    name: "Bevande",
  },
  {
    name: "Test",
    id: 4,
  },
];
