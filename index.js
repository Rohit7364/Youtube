var menuIcon = document.querySelector(".menu");
var sidebar= document.querySelector(".side-bar");
var quickLink = document.querySelector(".quick-links");
var container = document.querySelector(".Container");
menuIcon.onclick = function()
{
  sidebar.classList.toggle("small");
  quickLink.classList.toggle("collapse");
  container.classList.toggle("large-container");
};
