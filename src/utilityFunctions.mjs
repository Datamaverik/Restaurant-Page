export function makeMenuCard(container, dish, price, description, url) {
  const cardBody = document.createElement("div");
  cardBody.classList.add("cardBody");

  const imgCont = document.createElement("div");
  imgCont.classList.add("imgCont");
  imgCont.style.backgroundImage = `url(${url})`;

  const titleCont = document.createElement("div");
  titleCont.classList.add("dishTitle");
  const dishName = document.createElement("h1");
  dishName.textContent = dish;
  const pricetag = document.createElement("h1");
  pricetag.textContent = price;
  const desc = document.createElement("p");
  desc.textContent = description;

  titleCont.appendChild(dishName);
  titleCont.appendChild(pricetag);

  cardBody.appendChild(imgCont);
  cardBody.appendChild(titleCont);
  cardBody.appendChild(desc);

  container.appendChild(cardBody);
}
