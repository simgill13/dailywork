//Exercise-1
// console.log ("my name is chris and I'm 29 years old");

//Exercise-2
// function whoAmI ( name, age ) {
	
// 	console.log ( "hi my name is " + name + "and I am " + age + "years old");
// } 

// comments here
// function yearOfBirth(age){
  
// }


//Exercise-3
// function whoAmI( name, age ) {
	
// 	var yearOfBirth= (2016-age);
	

// 	console.log ( "hi my name is " + name + "and I am " + age + "years old");
// 	console.log ( "I was born in the year of " + yearOfBirth );

// }


// whoAmI("jo", 23); 

// Exercise-5
// function yearOfBirth(age){
//   return age;
// }

// function whoAmI(name, age){
//     var yearOfBirth= yearOfBirth(age);
//     console.log ( "hi my name is " + name + "and I am " + age + "years old");
// 	console.log ( "I was born in the year of " + yob );

// }
// whoAmI("Joe",20);


//Exercise-6
// function yearOfBirth(age){
//   if(age<0) {
//   	throw "Age can not be negative"
//   }

//   return 2016 - age;
// }
// unction whoAmI(name, age){

// 	try { 
// 		var yob = yearOfBirth(age);
// 	    console.log ( "hi my name is " + name + "and I am " + age + "years old");
//  		console.log ( "I was born in the year of " + yob );
// 	} catch(err){
// 		console.error('Error Message' +err);
// 	}
 
//  }

// whoAmI("Chris", -5);

// exercise7

// function whoAmI(name, age){

//     if(name == null || age == null ){
    
//      console.error("Arguments not valid");
//     } else{
//     	console.log ( "hi my name is " + name + "and I am " + age + "years old");
//     }
     
 	

// }
//  whoAmI("Joe",23);




// // exercise 8
// function whoAmI(name, age){

//    if ( typeof name =='string' && typeof age='123' ){

//    	console.log (name);
//    	console.log(age);
//    }
 		
//  		else{
//  			console.log ("Not valid");
//  		}

// }
//  whoAmI("Joe","gh");




// SET 2


// function jediName (firstName, lastName) {
// var firstName = firstName.slice (0,2);
// var lastName = lastName.slice (0,4);
// console.log ( lastName + firstName);

// }


// jediName("hello", "world");





// Exercise 2 - SET 2





// function beyond(num){
//  if ( num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY ) {
//  	console.log('And beyond...');
//  } else if ( Number.isFinite(num) && num > 0) {
//  	console.log('To Infinity...')
//  } 
//  else if ( Number.isFinite(num) && num < 0 )  {
//  	console.log ('to negative infinity');
//  }
//  else if(num === 0 )
//  	console.log('Staying home');
// }




// beyond(0);
// console.log( beyond(Math.log(0)) );
// console.log( beyond(13) );

// function test(arg) {
// 	if( Number.isFinite(arg) && arg > 0) {
// 		console.log('Yes');
// 	} else {
// 		console.log('No');
// 	}
// }

// test(13);
// beyond(-13);


// if (block[0] ===  'b')
// 	return (block[2]);

// if (word[0] ===  'a')
// 	return (word[3]);

// if (word[0] ===  'm')
// 	return (word[4]);



// function decode (word){

// if (word[0] ===  'c')
// 	return (word[3]);


// if (word[0] ===  'b')
// 	return (word[2]);

// if (word[0] ===  'a')
// 	return (word[1]);

// if (word[0] ===  'm')
// 	return ('');

// if (word[0] ===  'b')
// 	return (word[2]);

// if (word[0] ===  'b')
// 	return (word[2]);

// if (word[0] ===  'c')
// 	return (word[3]);

// if (word[0] ===  'd')
// 	return (word[4]);


// }

// console.log(decode("craft"));
// console.log(decode("block"));
// console.log(decode("argon"));
// console.log(decode("meter"));
// console.log(decode("bells"));
// console.log(decode("brown"));
// console.log(decode("croon"));
// console.log(decode("droop"));


// Tuesday's work 


//HighorderFunction FIRST EXERCISE
// function repeat (fn, n) {
// 	for (var i=0; i<n; i++) {
// 		fn();
// 	}
// }

// function hello() {
// 	console.log('Hello world');
// }
// function goodbye() {
// 	console.log('Goodbyeworld')

// }
// repeat(hello, 5);
// repeat(goodbye,5);


// FUNCTIONS AS RETURN VALUES

// function createGreeter(greeting) {
// 	function fnc (name){
// 		console.log(greeting + name)
// 	}
// 	return fnc;
// }

// createGreeter('hello');
// createGreeter('Bonjour');
// var greeter = createGreeter("Bonjour" + ' ');

// greeter('Sofia');


// var greeter2 = createGreeter("hello" + ' ');

// greeter2('Anna');







//	FOR EAC,FILTER AND MAP

var turmov = [ [0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4],[3, 2]];

document.write (turmov [0][3]);

