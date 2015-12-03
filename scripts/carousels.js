var imageCounter = 1;
var container = document.querySelector('.carousel-container');
var imageTotal = container.id;

function slideLeft () {
	var image = document.querySelector('.carousel-img');
	var imageLink = document.querySelector('.img-link');

	if (imageCounter < 2) {
		imageCounter = imageTotal;
	}
	else {
		imageCounter = imageCounter -1;
	}

	image.src = "images/photo_" + imageCounter + ".jpg";
	imageLink.href = "images/photo_" + imageCounter + ".jpg"
}

function slideRight () {
	var image = document.querySelector('.carousel-img');
  var imageLink = document.querySelector('.img-link');

	if (imageCounter == imageTotal) {
		imageCounter = 1;
	}
	else {
		imageCounter = imageCounter + 1;
	}
	image.src = "images/photo_" + imageCounter + ".jpg";
  imageLink.href = "images/photo_" + imageCounter + ".jpg";
}

var leftNav = document.querySelector("#left-nav");
var rightNav = document.querySelector("#right-nav");
leftNav.addEventListener('click', slideLeft);
rightNav.addEventListener('click', slideRight);
