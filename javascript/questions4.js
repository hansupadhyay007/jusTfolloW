// Quiz Creator;
function CQuiz(que, o1, o2, o3, o4, ans, d) {
	this.question = que;
	this.opt1 = o1;
	this.opt2 = o2;
	this.opt3 = o3;
	this.opt4 = o4;
	this.answer = ans;
	this.asked = d;
}



/*
const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});


<input type="file" id="image-input" accept="image/jpeg, image/png, image/jpg">

						<div id="display-image"></div>




*/


// Question 1
var q1 = new CQuiz(
	'https://www.rd.com/wp-content/uploads/2017/11/01_leopard_Can-You-Spot-the-Animals-Camouflaged-in-These-Photos_5475207a_J%C3%B6rn-Friederic__imageBROKER_REX_Shutterstock.jpg?resize=760,506',
	'Cheetah',
	'Leopard',
	'Snow leopard',
	'Lion',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'https://www.rd.com/wp-content/uploads/2017/11/02_kangaroo_Can-You-Spot-the-Animals-Camouflaged-in-These-Photos_577784125_Chris-Watson.jpg?resize=760,506',
	'kangaroo',
	'Cheetah',
	'Pig',
	'Tiger',
	1,
	0
);

// Question 3
var q3 = new CQuiz(
	'https://www.rd.com/wp-content/uploads/2017/11/03_duck_Can-You-Spot-the-Animals-Camouflaged-in-These-Photos_154283843_TCreativeMedia.jpg?resize=760,506',
	'Ostrich',
	'Just Ducky',
	'Peacock',
	'None of the above',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'https://www.rd.com/wp-content/uploads/2017/11/07_deer_Can-You-Spot-the-Animals-Camouflaged-in-These-Photos_243497080_critterbiz.jpg?resize=760,506',
	'Goat',
	'Cheetah',
	'Deer',
	'Leopard',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'https://www.rd.com/wp-content/uploads/2017/11/10_owl_Can-You-Spot-the-Animals-Camouflaged-in-These-Photos_568268650_Manaswi-Patil.jpg?resize=760,506',
	'Crow',
	'Owl',
	'Parrot',
	'Eagle',
	2,
	0
);

// Question 6
var q6 = new CQuiz(
	'https://www.rd.com/wp-content/uploads/2018/09/GettyImages-575057595-resized.jpg?resize=700,467',
	'Illusion',
	'Buildings',
	'Computer Motherboard',
	'None of the above',
	3,
	0
);

// Question 7
var q7 = new CQuiz(
	'https://www.rd.com/wp-content/uploads/2018/09/GettyImages-534978044-resized.jpg?resize=700,467',
	'Blue Clay',
	'Snow',
	'Icebergs',
	'None of the above',
	1,
	0
);

// Question 8
var q8 = new CQuiz(
	'https://www.rd.com/wp-content/uploads/2018/09/GettyImages-514652894-resized.jpg?resize=700,467',
	'Two Headed Zebra',
	'Two Zebras',
	'One Zebra',
	'Illusion',
	1,
	0
);

// Question 9
var q9 = new CQuiz(
	'https://www.rd.com/wp-content/uploads/2018/09/GettyImages-1049490352-resized.jpg?resize=700,467',
	'Walking in the snow',
	'Just Standing',
	'Tightrope Walkers in the snow',
	'Illusion',
	3,
	0
);

// Question 10
var q10 = new CQuiz(
	'https://www.rd.com/wp-content/uploads/2018/09/GettyImages-535906047-resized.jpg?resize=700,467',
	'Giants Bathtub ',
	'Seawater',
	'Water Well',
	'None but Illusion',
	1,
	0
);

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];