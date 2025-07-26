const shareOpenBtn = document.getElementById("shareOpenBtn");
const userInfo = document.getElementById("userInfo");
const shareMenu = document.getElementById("shareMenu");
const shareCloseBtn = document.getElementById("shareCloseBtn")

shareOpenBtn.addEventListener("click", () => {

  shareMenu.classList.remove("hidden");
  userInfo.classList.add("hidden");
});

shareCloseBtn.addEventListener("click", () => {

    shareMenu.classList.add("hidden");
    userInfo.classList.remove('hidden')
})

