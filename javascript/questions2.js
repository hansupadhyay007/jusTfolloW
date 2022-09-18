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
	'Number series given in the question follows a set pattern. Determine the pattern and find the correct answer in place of the question mark : 57, 74, 93, ?, 137',
	'102',
	'113',
	'114',
	'137',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'The edge of a cube is 20cm. How many small cubes of 5cm edge can be formed from this cube ?',
	'64',
	'100',
	'32',
	'4',
	1,
	0
);

// Question 3
var q3 = new CQuiz(
	'The smallest number which when multiplied by 2916 makes it a perfect cube, is ?',
	'3',
	'2',
	'4',
	'5',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'Motorcycle is related to Petrol in the same way as Man is related to ?',
	'Shoes',
	'Clothes',
	'Food',
	'Shelter',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'Decimal equivalent of 16/25 is ?',
	'0.7',
	'0.64',
	'0.14',
	'1.4',
	2,
	0
);

// Question 6
var q6 = new CQuiz(
	'A can do piece of work in 10 days and B can do it in 16 days. Number of days to complete the work, if they work together is ? ',
	'7',
	'5',
	'6',
	'8',
	3,
	0
);

// Question 7
var q7 = new CQuiz(
	'If 40% of the number exceeds the 25% of it by 54. The number is ?',
	'360',
	'350',
	'240',
	'260',
	1,
	0
);

// Question 8
var q8 = new CQuiz(
	'What percent of an hour is 2 min ?',
	'3.33%',
	'3.2%',
	'3.66%',
	'None of the above',
	1,
	0
);

// Question 9
var q9 = new CQuiz(
	'By selling a cooler for Rs 630, a man gain 5% at what price he must sell it to gain 20% ?',
	'Rs 780',
	'Rs 670',
	'Rs 720',
	'Rs 800',
	3,
	0
);

// Question 10
var q10 = new CQuiz(
	'The number of faces in a cube is ?',
	'6',
	'10',
	'8',
	'4',
	1,
	0
);

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];