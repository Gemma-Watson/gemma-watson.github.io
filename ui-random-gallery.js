document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector("#random-gallery");
  if (!gallery) return;

  const images = Array.from(gallery.querySelectorAll("img"));

  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  gallery.replaceChildren(...images);
});
