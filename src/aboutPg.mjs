export function loadAbout(container) {
  container.innerHTML = "";

  const infoCont = document.createElement("div");
  infoCont.classList.add("infoCont");

  const contact = document.createElement("div");
  contact.id = "contact-info";
  const contactPng = document.createElement("div");
  contactPng.id = "contactPng";
  //add image
  const contactNo = document.createElement("div");
  contactNo.textContent = "7694201278";
  contact.appendChild(contactPng);
  contact.appendChild(contactNo);
  infoCont.appendChild(contact);

  const social = document.createElement("div");
  social.id = "social-info";
  const socialPng = document.createElement("a");
  socialPng.id = "socialPng";
  socialPng.src = "./assets/instagram-logo.png";
  socialPng.href =
    "https://www.instagram.com/art.shrey?igsh=MWlkcDJiM2w1NHFqZQ==";
  socialPng.target = "blank";
  const socailId = document.createElement("div");
  socailId.textContent = "Follow us Instagram";
  social.appendChild(socialPng);
  social.appendChild(socailId);
  infoCont.appendChild(social);

  const location = document.createElement("div");
  location.id = "location-info";
  const locationPng = document.createElement("div");
  locationPng.id = "locationPng";
  //add image
  const locationNo = document.createElement("div");
  locationNo.textContent =
    "Kailash Mess, infront of Garnet-B hostel, NIT Trichy, Tamil Nadu";
  location.appendChild(locationPng);
  location.appendChild(locationNo);
  infoCont.appendChild(location);

  const mapImg = document.createElement("div");
  mapImg.id = "mapImg";
  infoCont.appendChild(mapImg);

  container.appendChild(infoCont);
}
