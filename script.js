document.addEventListener("DOMContentLoaded", (event) => {
  const carousel = document.querySelector(".carousel");
  const images = document.querySelectorAll(".carousel img");
  let index = 0;
  let alertShown = false;

  document.querySelector(".prev").addEventListener("click", prevImage);
  document.querySelector(".next").addEventListener("click", nextImage);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    }
  });

  for (let i = 1; i < images.length; i++) {
    images[i].classList.add("fade");
  }

  function prevImage() {
    if (index > 0) {
      index--;
    } else {
      index = images.length - 1;
    }
    updateCarousel();
    showAlert();
  }

  function nextImage() {
    if (index < images.length - 1) {
      index++;
    } else {
      index = 0;
    }
    updateCarousel();
    showAlert();
  }

  function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    images.forEach((img) => {
      img.classList.add("fade");
    });
    images[index].classList.remove("fade");
  }

  function showAlert() {
    if (!alertShown) {
      alertShown = true;
      let alertBox = document.createElement("div");
      alertBox.style.position = "fixed";
      alertBox.style.height = "120px";
      alertBox.style.width = "240px";
      alertBox.style.display = "flex";
      alertBox.style.justifyContent = "center";
      alertBox.style.alignItems = "center";
      alertBox.style.textAlign = "center";
      alertBox.style.backgroundColor = "rgba(255,255,255,.3)";
      alertBox.style.color = "black";
      alertBox.style.fontSize = "24px";
      alertBox.style.borderRadius = "10px";
      alertBox.innerText = "USE THE KEYS TOO!\n(left & right arrow)";
      document.body.appendChild(alertBox);
      setTimeout(() => {
        alertBox.remove();
      }, 4000);
    }
  }
});
