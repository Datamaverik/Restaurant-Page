import { makeMenuCard } from "./utilityFunctions.mjs";

const MenuList = [
  {
    dish: "Palak Paneer",
    price: 259,
    desc: " A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.",
  },
  {
    dish: "Palak Paneer",
    price: 259,
    desc: " A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.",
  },
  {
    dish: "Palak Paneer",
    price: 259,
    desc: " A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.",
  },
  {
    dish: "Palak Paneer",
    price: 259,
    desc: " A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.",
  },
  {
    dish: "Palak Paneer",
    price: 259,
    desc: " A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.",
  },
  {
    dish: "Palak Paneer",
    price: 259,
    desc: " A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.",
  },
  {
    dish: "Palak Paneer",
    price: 259,
    desc: " A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.",
  },
  {
    dish: "Palak Paneer",
    price: 259,
    desc: " A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.",
  },
  {
    dish: "Palak Paneer",
    price: 259,
    desc: " A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.",
  },
];

export function loadMenu(body) {
  body.innerHTML = "";
  //Making the menu card container
  const cardCont = document.createElement("div");
  cardCont.classList.add("cardCont");

  MenuList.forEach((menu) => {
    makeMenuCard(
      cardCont,
      menu.dish,
      menu.price,
      menu.desc,
      "/src/assets/palak-paneer.jpg"
    );
  });

  body.appendChild(cardCont);
}
