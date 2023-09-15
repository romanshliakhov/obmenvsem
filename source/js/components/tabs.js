// tabs

function tabsInit() {
  const tabsParrents = [...document.querySelectorAll('.tabs')];

  tabsParrents.map(function(tabsParr) {
    if (tabsParr) {
      document.addEventListener('DOMContentLoaded', () => {
        const tabsBtn = tabsParr.querySelectorAll('.tabs__links');
        const tabsContent = tabsParr.querySelectorAll('.tabs__content');

        tabsParr.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabs__links')) {
              const tabsPath = e.target.getAttribute('tabs-btn');

              tabsBtn.forEach(el => {el.classList.remove('active')});
              tabsParr.querySelector(`[tabs-btn="${tabsPath}"]`).classList.add('active');

              tabsHandler(tabsPath);
            }
        });

        const tabsHandler = (path) => {
          tabsContent.forEach(el => {el.classList.remove('active')});
          tabsParr.querySelector(`[tabs-content="${path}"]`).classList.add('active');
        };
      });
    }}
  );
}

tabsInit();
