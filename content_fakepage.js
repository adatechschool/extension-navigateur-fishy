browser.runtime.onMessage.addListener((request)=> {
  if(request.message === "newPTP" && request.data){
      let thisTitle = document.getElementsByClassName("titre");
      let thisAuthor = document.querySelector("auteur");
      let thisImage = document.querySelector("image");
      let thisPrice = document.querySelector("price");
  }
})

console.log("title :", thisTitle);
console.log("author :", thisAuthor);
console.log("image :", thisImage);
console.log("price :", thisPrice);
thisTitle.innerText = `${title}`
thisAuthor.innerText = `${author}`
thisImage.src = `${url}`
thisPrice.innerText = `${price}`

const objectTest = {
  author: "Aristote",
  image: "https://m.media-amazon.com/images/I/41M2M2+AthL._SY445_SX342_.jpg",
  price: "70 €",
  title: "Oeuvres Complètes",
};

document.getElementById("header-cart-link").addEventListener("click", function() {
  PTP = [thisTitle, thisImage, thisPrice]
  console.log(PTP)
  chrome.runtime.sendMessage({
    message: "cartClicked"
  });
  window.open('some.html', 'win', 'width=400,height=400')
});

