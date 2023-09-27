const container = document.getElementById("container");
container.style.gap = "10px";

const fetchProducts = async () => {
  const resp = await fetch("https://dummyjson.com/products");
  const { products } = await resp.json();
  // console.log(products);
  for (let product of products) {
    // console.log(product);
    const card = document.createElement("div");
    card.style.width = "25%";
    card.style.height = "500px";
    card.style.textAlign = "center";

    container.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header h-50";

    card.appendChild(cardHeader);

    const image = document.createElement("img");
    image.src = product.thumbnail;
    image.className = "card-img h-100";
    image.classList = "w-100";

    cardHeader.appendChild(image);

    const heading2 = document.createElement("h2");
    heading2.innerText = product.title;

    card.appendChild(heading2);

    const p = document.createElement("p");
    p.innerText = product.description;

    card.appendChild(p);

    const button = document.createElement("button");
    button.innerText = "view More";
    button.className = "btn btn-outline-info";

    card.appendChild(button);
  }
};
fetchProducts();

function addProduct() {
  const imageURL = document.querySelector("#imageURL").value;
  const title = document.querySelector("#title").value;
  const price = document.querySelector("#price").value;
  const category = document.querySelector("#category").value;
  const description = document.querySelector("#description").value;

  //console.log({ imageURL, title, price, category, description });

  const div = document.createElement("div");

  const card = document.createElement("div");
  card.style.width = "25%";
  card.style.height = "500px";
  card.style.textAlign = "center";

  container.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header h-50";

  card.appendChild(cardHeader);

  const image = document.createElement("img");
  image.src = imageURL;
  image.className = "card-img";
  image.classList = "w-100 h-100";

  cardHeader.appendChild(image);

  const heading2 = document.createElement("h2");
  heading2.innerText = title;

  card.appendChild(heading2);

  const p = document.createElement("p");
  p.innerText = description;

  card.appendChild(p);

  const button = document.createElement("button");
  button.innerText = "view More";
  button.className = "btn btn-outline-info";

  card.appendChild(button);
}
