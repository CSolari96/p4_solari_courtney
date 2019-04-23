var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });

  // Toggle button
  document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
  });

var image = document.getElementById("banner-img");
var instance = new simpleParallax(image, {
	scale: 1.25,
	overflow: true,
	orientation: 'down',
	delay: 0.8
});