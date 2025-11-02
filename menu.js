document.addEventListener("DOMContentLoaded", () => {
  const pathFile = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const hash = location.hash.toLowerCase();
  document.querySelectorAll(".navbar a").forEach(a=>{
    const href=(a.getAttribute("href")||"").toLowerCase();
    const isIndex=(pathFile===""||pathFile==="index.html");
    const matchFile = href===pathFile || (href==="index.html" && isIndex);
    const matchHash = href.startsWith("#/") && href===hash;
    if(matchFile||matchHash) a.classList.add("active");
  });
});
