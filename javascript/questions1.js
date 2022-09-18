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
	'A : X :: B : _?',
	'Y',
	'W',
	'V',
	'Z',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'KLM : PON :: NOP : _?',
	'MLK',
	'LMK',
	'NML',
	'KLN',
	1,
	0
);

// Question 3
var q3 = new CQuiz(
	'In a certain code, VARIETY is written as UCQKDVX. How is CARRIER codded in that ?',
	'BBQTHGQ',
	'BCQTHGQ',
	'BCQTHKP',
	'BCQQHGQ',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'How many times in a day, the two hands of a clock coincide ?',
	'11',
	'12',
	'22',
	'24',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'Six persons P,Q,R,S,T and U are sitting in two rows, three in each as T is not at the end, S is second to the left of U, R is the neighbour of T is sitting diagonally opposite to S, and Q is the neighbour of U. Which of the following are sitting diagonally opposite to each other. ?',
	'P and R',
	'P and U',
	'S and P',
	'None of the above',
	2,
	0
);

// Question 6
var q6 = new CQuiz(
	'In each of these four alternatives are given. Three of them are alike in some way. Select the one that is different. ?',
	'Carpenter : Saw',
	'Barber : Scissors',
	'Goldsmith : Ornaments',
	'Blacksmith : Anvil',
	3,
	0
);

// Question 7
var q7 = new CQuiz(
	'In each of these four alternatives are given. Three of them are alike in some way. Select the one that is different. (1,2,3,5,7,10,13,17) ?',
	'21',
	'19',
	'20',
	'22',
	1,
	0
);

// Question 8
var q8 = new CQuiz(
	'Forest : Trees :: _ : _ ?',
	'Sky : Clouds',
	'Egg : Omelette',
	'Petrol : Car',
	'Rain : Climate',
	1,
	0
);

// Question 9
var q9 = new CQuiz(
	'Two numbers are in the ratio 2 : 3. If 4 is added to both their ratio becomes 4 : 5. The smaller number is ?',
	'2',
	'4',
	'6',
	'8',
	3,
	0
);

// Question 10
var q10 = new CQuiz(
	'If the mid-points of the sides of a triangle are joined, the total number of triangles so formed in the resulting figure will be ??',
	'5',
	'3',
	'4',
	'6',
	1,
	0
);

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];