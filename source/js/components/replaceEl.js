let replaceSettings = {
  beforebegin: 'beforebegin', // перед самим элементом targetElement
  afterbegin: 'afterbegin', // внутри элемента targetElement, перед его первым потомком
  beforeend: 'beforeend', //  внутри элемента targetElement, после его последнего потомка
  afterend: 'afterend', // после самого элемента targetElement
  mobile: 576,
  smallTablet: 768,
  tablet: 992,
}

let elementName = {
  asideMenu: '.block__aside',
  asideMenuDesktop: '.block__wrapp',
  asideMenuMobile: '.mobile',

  recommendationAside: '.recommendation',
  recommendationAsideDesktop: '.navigation',
  recommendationAsideMobile: '.block__wrapp',


  feedbackAside: '.feedback',
  feedbackAsideDesktop: '.block__aside',
  feedbackAsideMobile: '.block__wrapp',
}

let items = [...document.querySelectorAll('.wrapper')];

const replaceElements = (elements, elementClass, desktopClass, mobileClass, mobileSetting, desktopSetting, breakpointSetting) => {
  let containerWidth = document.documentElement.clientWidth;

  elements.map(function (item) {
    const myElement = item.querySelector(elementClass);
    const myDesktop = item.querySelector(desktopClass);
    const myMobile = item.querySelector(mobileClass);

    (function() {
      if (myDesktop && myElement && myMobile) {
        containerWidth <= breakpointSetting ?
        myMobile.insertAdjacentElement(mobileSetting, myElement) :
        myDesktop.insertAdjacentElement(desktopSetting, myElement);
      }
    }());
  });
}

window.addEventListener('resize', () => {
  replaceElements(items, elementName.asideMenu, elementName.asideMenuDesktop, elementName.asideMenuMobile, replaceSettings.beforeend, replaceSettings.afterbegin, replaceSettings.tablet);

  replaceElements(items, elementName.recommendationAside, elementName.recommendationAsideDesktop, elementName.recommendationAsideMobile, replaceSettings.beforeend, replaceSettings.afterend, replaceSettings.tablet);

  replaceElements(items, elementName.feedbackAside, elementName.feedbackAsideDesktop, elementName.feedbackAsideMobile, replaceSettings.beforeend, replaceSettings.beforeend, replaceSettings.tablet);
});

window.addEventListener('DOMContentLoaded', () => {
  replaceElements(items, elementName.asideMenu, elementName.asideMenuDesktop, elementName.asideMenuMobile, replaceSettings.beforeend, replaceSettings.afterbegin, replaceSettings.tablet);

  replaceElements(items, elementName.recommendationAside, elementName.recommendationAsideDesktop, elementName.recommendationAsideMobile, replaceSettings.beforeend, replaceSettings.afterend, replaceSettings.tablet);

  replaceElements(items, elementName.feedbackAside, elementName.feedbackAsideDesktop, elementName.feedbackAsideMobile, replaceSettings.beforeend, replaceSettings.beforeend, replaceSettings.tablet);
});
