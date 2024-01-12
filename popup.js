// document.getElementById("search").addEventListener("click", () => {
//     document.getElementById("title").style.display = "block"
//     document.getElementById("price").style.display = "block"
//     document.getElementById("image").style.display = "block"
// })



document.getElementById("go").addEventListener("click", ()=> {
    document.getElementById("overlay4").style.display = "block";
    document.getElementById("popup").style.display = "block";
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        chrome.tabs.update(tabs[0].id, {url: "https://blog.ippon.fr/2018/02/08/developper-une-extension-pour-navigateur/"});
    })
})


// Demande au background.js de lui envoyer PTP
document.getElementById("search").addEventListener("click", () => {
    chrome.runtime.sendMessage({
      message: "givePTP",
    });
  });
  // Reçoit la réponse de background.js, afficher l'overlay 1.1 et dans cet overlay display les élements de PTP (Titre, Image et Prix)
  chrome.runtime.onMessage.addListener((request) => {
    if (request.message === "sendPTP" && request.data) {
      console.log("Trop facile :", request.data);
      let object = request.data
      let image = object.image
      let title = object.title
      let price = object.price 


      document.getElementById("title").style.display = "block"
      document.getElementById("price").style.display = "block"
      document.getElementById("image").style.display = "block"

      // overlay 1.1 lunched
      
    }
  });

// Fonction pour désactiver le popup

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.greeting === "RNGinitOK") {
      console.log("Trop facile");
    }
  });





  