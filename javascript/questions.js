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

// Question 1
var q1 = new CQuiz(
	'India is the biggest producer of ?',
	'Tobacco',
	'Oilseeds',
	'coffee',
	'Wheat',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'Ozone gas is found in which layer ?',
	'Stratosphere',
	'Troposphere',
	'Mesosphere',
	'Exosphere',
	1,
	0
);

// Question 3
var q3 = new CQuiz(
	'Sundari is a well known species of trees in forests after which Sunderbans have been named',
	'Deciduous',
	'Mangrove',
	'Evergreen',
	'Temperate',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'The Council of Ministers at the centre is responsible to ',
	'The Rajya Sabha',
	'The Prime Minister',
	'The Lok Sabha',
	'The President',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'The judges of the Supreme Court can be removed on the ground of',
	'Proven indiscipline',
	'Both (c) and (d)',
	'Proven corruption charge',
	'Proven incapacity',
	2,
	0
);

// Question 6
var q6 = new CQuiz(
	'Information Technology , Wellness , Hospitality and Knowledge fall under which category of industries ?',
	'Heavy Industries',
	'Private Sector Industries',
	'Sunrise Industries',
	'Joint Sector Industries',
	3,
	0
);

// Question 7
var q7 = new CQuiz(
	'What is the correct syntax for referring to an external script called "script.js"?',
	'&lt;script src="script.js"&gt;',
	'&lt;script href="script.js"&gt;',
	'&lt;script name="script.js"&gt;',
	'&lt;script link="script.js"&gt;',
	1,
	0
);

// Question 8
var q8 = new CQuiz(
	'How do you write "Hello World" in an alert box?',
	'alert("Hello World");',
	'msgBox("Hello World");',
	'prompt("Hello World");',
	'alertBox("Hello World");',
	1,
	0
);

// Question 9
var q9 = new CQuiz(
	'Golden Fibre refers to ?',
	'Tea',
	'Cotton',
	'Jute',
	'Coffee',
	3,
	0
);

// Question 10
var q10 = new CQuiz(
	'The pressure on earth will be less when the person is ?',
	'Lying',
	'Sitting',
	'Standing on one foot',
	'None of the above',
	1,
	0
);

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];