const viewsList = document.querySelectorAll('.sorting__directions-trigger');
const videosList = document.querySelectorAll('.videos');

// if(viewsList) {
//   viewsList.forEach(item => {
//     let listType = item.getAttribute('data-view');

//     // if(item.classList.contains('active')) {
//     //   console.log('here')
//     // }

//     if (listType == 'list-view') {
//       console.log('list');

//       videosList.forEach(videos => {
//         videos.classList.add('column');
//       })
//     }

//     if (listType == 'grid-view') {
//       console.log('grid')
//       console.log(item)
//     }

//   })
// }

let gridBtn = document.querySelector(".grid-button");
let listBtn = document.querySelector(".list-button");
let catalogBox = document.querySelectorAll(".videos");

if (catalogBox) {
  gridBtn.onclick = function (e) {
    e.preventDefault();
    this.classList.add("active");
    listBtn.classList.remove("active");

    catalogBox.forEach(videos => {
      videos.classList.remove("column");
    })
  };

  listBtn.onclick = function (e) {
    e.preventDefault();
    this.classList.add("active");
    gridBtn.classList.remove("active");

    catalogBox.forEach(videos => {
      videos.classList.add("column");
    })
  };
}
