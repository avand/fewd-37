var imageCounter = 1;
var container = document.querySelector('.carousel-container');
var imageTotal = container.id;

function slideLeft () {
	var image = document.querySelector('.carousel-img');
	var imageLink = document.querySelector('.img-link');

	//if left button is clicked and carosel is on the first image
	//go back to last image (greatest number)
	if (imageCounter < 2) {
		imageCounter = imageTotal;
	}
	//otherwise go to the previous image in the order
	else {
		imageCounter = imageCounter -1;
	}
	//change the image source to the previous image in the order
	image.src = "images/photo_" + imageCounter + ".jpg";
	imageLink.href = "images/photo_" + imageCounter + ".jpg";
}

function slideRight () {
	var image = document.querySelector('.carousel-img');
  var imageLink = document.querySelector('.img-link');

	//if right button is clicked and carosel is on the last image
	//go back to first image (smallest number)
	if (imageCounter == imageTotal) {
		imageCounter = 1;
	}
	//otherwise go to the previous image in the order
	else {
		imageCounter = imageCounter + 1;
	}
	//change the image source to the previous image in the order
	image.src = "images/photo_" + imageCounter + ".jpg";
  imageLink.href = "images/photo_" + imageCounter + ".jpg";
}

//carosel will automatically slide right (every 8000 miliseconds)
window.setInterval(slideRight, 8000);

//on click of nav buttons, user can move the carosel
var leftNav = document.querySelector("#left-nav");
var rightNav = document.querySelector("#right-nav");
leftNav.addEventListener('click', slideLeft);
rightNav.addEventListener('click', slideRight);
