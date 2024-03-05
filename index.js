let next = document.querySelector("#next")
let prev = document.querySelector("#prev")


// next.addEventListener("click", function(){
// 	showSlides(slideIndex);
// 	slideIndex = slideIndex + 1;
// })

let slideIndex = 2;
function imgController(x){
	slideIndex = slideIndex + x;
	showSlides(slideIndex);
	
}
	showSlides(slideIndex);

function showSlides(indexNum){
	let slideContainer = document.querySelectorAll('.scroll-container');
	// console.log(slideContainer[0]);
	
	for(let y of slideContainer){
		y.style.display="none"
	}

	if(indexNum == slideContainer.length){
		slideIndex = 0;
		indexNum = 0;
	}

	if (indexNum < 0) {
		slideIndex = slideContainer.length-1;
		indexNum = slideContainer.length-1;
		
	}


	slideContainer[indexNum].style.display="flex"; 



}

// showSlides(slideIndex);







