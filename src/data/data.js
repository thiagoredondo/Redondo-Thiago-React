const products = [
  {
    id: "Grt223",
    name: "Grabados láser perzonalizados sobre vidrio",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
    price: 400,
    stock: 10,
    image: "/img/laser4.jpg",
    category: "grabados"
  },
  {
    id: "Grt224",
    name: "Grabados láser perzonalizados sobre metal",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
    price: 420,
    stock: 4,
    image: "/img/laser3.jpg",
    category: "grabados"
  },
  {
    id: "Hff556",
    name: "Estampados personalizados sobre prendas",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
    price: 720,
    stock: 5,
    image: "/img/estampado3.jpg",
    category: "estampados"
  },
  {
    id: "Hff557",
    name: "Estampados personalizados sobre vidrio",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
    price: 620,
    stock: 17,
    image: "/img/estampado2.jpg",
    category: "estampados"
  },
  {
    id: "Wre442",
    name: "Etiquetas autoadhesivas personalizables",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
    price: 800,
    stock: 2,
    image: "/img/etiqueta2.jpg",
    category: "etiquetas"
  },
  {
    id: "Wre443",
    name: "Etiquetas corpóreas personalizadas",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
    price: 820,
    stock: 6,
    image: "/img/etiqueta3.jpg",
    category: "etiquetas"
  },
]

const getProducts = () => {
  return new Promise( (resolve, reject) => {
    //simulamos un retraso de red de 2 segundos
    setTimeout(()=>{
      resolve(products)
    }, 2000)
  })
}

export { getProducts }