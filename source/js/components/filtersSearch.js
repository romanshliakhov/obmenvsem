const inputId = 'filterInput';
const itemsData = '.categories__option';
const dataName = 'data-name'
let displaySet = false;
let displayArr = [];

function getDisplayType(element) {
	var elementStyle = element.currentStyle || window.getComputedStyle(element, "");
	return elementStyle.display;
}

document.getElementById(inputId).onkeyup = function() {
	var searchVal = this.value.toLowerCase();
	var filterItems = document.querySelectorAll(itemsData);

	for(var i = 0; i < filterItems.length; i++) {
		if (!displaySet) {
			displayArr.push(getDisplayType(filterItems[i]));
		}

		filterItems[i].style.display = 'none';

    const innerData = filterItems[i].querySelector(`[${dataName}]`);

		if(innerData.getAttribute(dataName).indexOf(searchVal) >= 0) {
			filterItems[i].style.display = displayArr[i];
		}
	}

	displaySet = true;
}
