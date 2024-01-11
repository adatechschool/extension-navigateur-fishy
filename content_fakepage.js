// background need to send me the data object with title, img and price.

let thisTitle = document.getElementsByClassName("titre");
let thisImage = document.querySelector("img.couverture");
let thisPrice = document.querySelector(`[itemprop="offers"]`);
console.log("title :", thisTitle[0].innerText);
console.log("image :", thisImage.src);
console.log("price :", thisPrice.innerText);

//this works only if the fake page information is organize as in amazon.com
thisTitle.innerText = thisTitle[0].innerText;
thisImage.src = thisImage.src;
thisPrice.innerHTML = thisPrice.innerText;
