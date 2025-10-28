document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".unit-item .unit-header");

  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const content = item.querySelector(".unit-content");

      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".unit-item").forEach(other => {
        other.classList.remove("open");
        const body = other.querySelector(".unit-content");
        if (body) body.style.display = "none";
      });

      if (!isOpen) {
        item.classList.add("open");
        content.style.display = "block";
      }
    });
  });
});
