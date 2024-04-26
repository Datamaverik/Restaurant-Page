export function loadHome(body) {
  console.log(body);
  body.innerHTML = "";
  //Creaing the body
  const article = document.createElement("div");
  article.classList.add("article");
  const para1 = document.createElement("p");
  para1.classList.add("para");
  const para2 = document.createElement("p");
  para2.classList.add("para");

  para1.textContent =
    "Indulge in the rich vibrant flavors of North India at our restaurant, where authenticity meets affordability.";
  para2.textContent =
    "We take pride in serving up traditional North Indian cuisine bursting with aromatic spices and mouthwatering dishes, all at prices that won't break the bank.";
  article.appendChild(para1);
  article.appendChild(para2);

  const centerImg = document.createElement("div");
  centerImg.classList.add('centerImg');
  article.appendChild(centerImg);
  const entTxt = document.createElement("div");
  entTxt.id = "endTxt";
  entTxt.textContent = "Order online or visit us";
  article.appendChild(entTxt);
  body.appendChild(article);
}
