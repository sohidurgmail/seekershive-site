// Say Hello button
document.getElementById("clickMe").addEventListener("click", () => {
  const msg = document.getElementById("message");
  msg.innerText = "👋 Hello from Seekers Hive!";
  msg.style.fontWeight = "bold";
  msg.style.color = "#ff4e50";
});

// Toggle owner info
document.getElementById("showOwner").addEventListener("click", () => {
  const owner = document.getElementById("ownerInfo");
  const button = document.getElementById("showOwner");

  if (owner.classList.contains("hidden")) {
    owner.classList.remove("hidden");   // ✅ FIXED: removed stray quote
    button.innerText = "Hide Page Owner";
  } else {
    owner.classList.add("hidden");
    button.innerText = "Show Page Owner";
  }
});
