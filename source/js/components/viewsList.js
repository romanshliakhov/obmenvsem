let gridBtn = document.querySelector(".grid-button");
let listBtn = document.querySelector(".list-button");
let catalogBox = document.querySelectorAll(".videos");

if (gridBtn && listBtn) {
  gridBtn.addEventListener("click", toggleGridView);
  listBtn.addEventListener("click", toggleListView);
}

function toggleGridView(e) {
  e.preventDefault();
  gridBtn.classList.add("active");
  listBtn.classList.remove("active");

  catalogBox.forEach(video => {
    video.classList.remove("column");
  })
}

function toggleListView(e) {
  e.preventDefault();
  listBtn.classList.add("active");
  gridBtn.classList.remove("active");

  catalogBox.forEach(video => {
    video.classList.add("column");
  })
}



