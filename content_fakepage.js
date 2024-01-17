let thisTitle = document.querySelector(".titre");
let thisAuthor = document.querySelector(".auteur");
let thisImage = document.querySelector(".couverture");
let thisPrice = document.querySelector(".price");console.log("title :", thisTitle.innerText);
console.log("author :", thisAuthor.innerText);
console.log("image :", thisImage.src);
console.log("price :", thisPrice.innerText);const objectTest = {
  author: "Aristote",
  image: "https://m.media-amazon.com/images/I/41M2M2+AthL._SY445_SX342_.jpg",
  price: "70 €",
  title: "Oeuvres Complètes",
};thisTitle.innerText = `${objectTest.title}`;
thisAuthor.innerText = `${objectTest.author}`;
thisImage.src = `${objectTest.image}`;
thisPrice.innerText = `${objectTest.price}`;document
  .getElementById("header-cart-link")
  .addEventListener("click", function () {
    PTP = [thisTitle, thisImage, thisPrice];
    console.log(PTP);
    chrome.runtime.sendMessage({
      message: "cartClicked",
    });
    window.open("some.html", "win", "width=400,height=400");
  });
  
document.getElementById("header-cart-link").addEventListener("click", function() {
  // PTP = [thisTitle, thisImage, thisPrice]
  // console.log(PTP)
  // chrome.runtime.sendMessage({
  //   message: "cartClicked"
  // });
  window.open('some.html', 'win', 'width=700,height=600')
});

