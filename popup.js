document.getElementById("search").addEventListener("click", () => {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
            chrome.tabs.update(tabs[0].id, {url: "https://mail.google.com/mail/u/0/#inbox"});
        }
    )
})

// Fonction pour désactiver le popup





  