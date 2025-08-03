document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          entry.target.classList.remove("hidden");
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold:0.6, 
    }
  );

  document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
});
document.getElementById("btn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "resume.pdf"; 
  link.download = "Manish_Kundu_Resume.pdf"; 
  document.body.appendChild(link); 
  link.click();
  document.body.removeChild(link);
});
document.getElementById("githubBtn").addEventListener("click", function () {
  window.open("https://github.com/ManishKundu102", "_blank");
});

