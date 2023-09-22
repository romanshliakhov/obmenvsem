const socialsParrent = document.querySelectorAll('.socials__more');

socialsParrent.forEach(item => {
  const socialsBtn = item.querySelector('.socials__more-trigger');
  const socialsExtend = item.querySelector('.socials__more-links');

  socialsBtn.addEventListener('click', function(e) {
    socialsExtend.classList.toggle('active');
  });

  document.addEventListener("click", function (event) {
    if (!item.contains(event.target)) {
      socialsExtend.classList.remove("active");
    }
  });
});




