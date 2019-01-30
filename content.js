$(document).ready(function(){

	let dropdown = $('.product-list-option').find('.positioner').children('ul');

	if (dropdown === undefined) {
		return;
	}

	let el = dropdown.find('li').first().clone();
	el.find('a').attr('href', 'javascript:void(0)').attr('onclick', 'sortByCostEfficiency()').text('Nejvýhodnější');
	dropdown.prepend(el);
});

function sortByCostEfficiency() {

	let container = $('#snippet-productList-productListArea');
	let products = [];

	container.children().each(function() {
		products.push({
			'price': parseFloat($(this).find('.product-item-unit').children('.price').text().replace(/\s/g,'').replace(',', '.')),
			'obj': $(this).detach()
		});
	})

	products.sort(function(a, b){return a.price === NaN ? -1 : b.price === NaN ? 1 : a.price - b.price});

	products.forEach(function(el) {
		container.append(el.obj);
	});

	swapDropdownButtons();
}

function swapDropdownButtons() {

	let dropdown = $('.product-list-option').find('.positioner').children('ul');
	let prevName = $('.product-list-option').find('span').text().split(' ')[0];

	dropdown.find('li').first().detach()
	let el = dropdown.find('li').first().clone();
	el.find('a').attr('href', window.location.href).text(prevName);
	dropdown.prepend(el);
	$('.product-list-option').find('span').first().text('Nejvýhodnější');
}
