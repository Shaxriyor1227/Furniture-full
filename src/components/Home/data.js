
import product1 from "../../assets/p1.png"
import product2 from "../../assets/p2.png"
import product3 from "../../assets/p3.png"
import product4 from "../../assets/p4.png"
import product5 from "../../assets/p5.png"
import product6 from "../../assets/p6.png"
import product7 from "../../assets/p7.png"
import product8 from "../../assets/p8.png"


const products = [
  {
    id: 1,
    name: "Syltherine",
    category: "Stylish cafe chair",
    price: 2500000,
    oldPrice: 3500000,
    discount: 30,
    isNew: false,
    image: product1
  },
  {
    id: 2,
    name: "Leviosa",
    category: "Stylish cafe chair",
    price: 2500000,
    oldPrice: null,
    discount: null,
    isNew: false,
    image: product2
  },
  {
    id: 3,
    name: "Lolito",
    category: "Luxury big sofa",
    price: 7000000,
    oldPrice: 14000000,
    discount: 50,
    isNew: false,
    image: product3
  },
  {
    id: 4,
    name: "Respira",
    category: "Outdoor bar table and stool",
    price: 500000,
    oldPrice: null,
    discount: null,
    isNew: true,
    image: product4
  },
  {
    id: 5,
    name: "Grifo",
    category: "Night lamp",
    price: 1500000,
    oldPrice: null,
    discount: null,
    isNew: false,
    image: product5
  },
  {
    id: 6,
    name: "Muggo",
    category: "Small mug",
    price: 150000,
    oldPrice: null,
    discount: null,
    isNew: true,
    image: product6
  },
  {
    id: 7,
    name: "Pingky",
    category: "Cute bed set",
    price: 7000000,
    oldPrice: 14000000,
    discount: 50,
    isNew: false,
    image: product7
  },
  {
    id: 8,
    name: "Potty",
    category: "Minimalist flower pot",
    price: 500000,
    oldPrice: null,
    discount: null,
    isNew: true,
    image: product8
  }
];

export { products };