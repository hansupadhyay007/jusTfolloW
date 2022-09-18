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
	'Motivation is an essential factor that changes _ thoughts',
	'Negative',
	'Everyones',
	'Positive',
	'Undesired',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'positive thoughts into _ action',
	'instant',
	'superior',
	'element',
	'normal',
	1,
	0
);

// Question 3
var q3 = new CQuiz(
	'People sometimes have _ in themselves',
	'faith',
	'disbelief',
	'believe',
	'action',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'the timing is not _',
	'left',
	'correct',
	'right',
	'None of the mentioned',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'Being _ means living a life as a worn-out machine',
	'aimless',
	'demotivated;',
	'motivated',
	'selfless',
	2,
	0
);

// Question 6
var q6 = new CQuiz(
	'Being demotivated means living a life as a _ machine',
	'selfless',
	'tired',
	'worn-out',
	'dead',
	3,
	0
);

// Question 7
var q7 = new CQuiz(
	'Your life will become _ without any spark',
	'dull',
	'bright',
	'joyfull',
	'sad',
	1,
	0
);

// Question 8
var q8 = new CQuiz(
	'So, to gain inner _ and satisfaction in life',
	'peace',
	'motivation',
	'joy',
	'None of the above',
	1,
	0
);

// Question 9
var q9 = new CQuiz(
	'Your life will become dull without any _',
	'work',
	'satisfaction',
	'spark',
	'joy',
	3,
	0
);


// Question 10
var q10 = new CQuiz(
	'you must always stay _',
	'motivated',
	'happy',
	'motivation',
	'fit',
	1,
	0
);

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];