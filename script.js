function setupShareToggle() {
  const shareMenu = document.getElementById("shareMenu");
  const shareBubble = document.getElementById("shareBubble");
  const shareOpenBtn = document.getElementById("shareOpenBtn");
  const userInfo = document.getElementById("userInfo");
  const shareCloseBtn = document.getElementById("shareCloseBtn")

  function toggleShareMenu() {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      shareMenu.classList.toggle("hidden");
      userInfo.classList.toggle("hidden");
    } else {
      shareBubble.classList.toggle("hidden");
    }
  }

  function resetVisibility() {
    const isMobile = window.innerWidth < 768;

    shareMenu.classList.add("hidden")
    shareBubble.classList.add("hidden")
    userInfo.classList.remove("hidden")
  }

  shareOpenBtn?.addEventListener("click", toggleShareMenu);
  shareCloseBtn?.addEventListener("click", toggleShareMenu);
  window.addEventListener("resize", resetVisibility);
}

// Panggil setup saat halaman siap
setupShareToggle();
