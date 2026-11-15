
                        //  exercise 2


// Declare a variable called username. 
ans; var username;

// Declare a variable called myName & assign to it a string that represents your Full Name. 
ans; var myName = "Mohsin Raza";

//  Write a script to  a. declare a JS variable, titled message
//    b. assign “Hello World” to the variable message c. display the message in alert box 
ans; var message;
message = "Hello World";
alert(message);

// Write a script to save student’s bio data in JS variables and show the data in alert boxes. Example: 
ans; var studentName = "Ali Khan";
var studentAge = "17 years old";
var studentCourse = "Mobile Application Development";
alert(studentName);
alert(studentAge);
alert(studentCourse);

// Write a script to display the following alert using one JS variable: 
ans; var list = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(list);


// Fortune Teller: Why pay a fortuneteller when you can just program your fortune yourself? Store the following into variables: number of children, partner’s name, geographic location, and job title.
ans; var numberOfChildren = 2;
var partnerName = "Sobia";
var geographicLocation = "japan";
var jobTitle = "Software Engineer";
var fortune = "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids.";
alert(fortune);

//  Declare a variable called email & assign to it a string that represents your Email Address (e.g. abc@xyz.com). Show the below mentioned message in an alert box. (Hint: use string concatenation) 
ans; var email = "mosinawan7@gmail.com";
alert("My email address is " + email);

//  Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box: 
ans; var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);


//  Use the variables, declared in exercise 4 & show the details giving meaning to data. Like “My name is Ali Khan”, “I am 17 years old”,  “I study in SSUET”, “I take Mobile & Cloud Computing, Module A classes” 
ans; var studentName = "Ali Khan";
var studentAge = 17;
var institute = "SSUET";
var course = "Mobile & Cloud Computing, Module A";
alert("My name is " + studentName + "\nI am " + studentAge + " years old\nI study in " + institute + "\nI take " + course + " classes");


// Write a script to display this in browser through JS 
ans; document.write("Yay! I can write HTML content through Javascript");

                            //   exercise 3

// Declare a variable called age & assign to it your age. Show your age in an alert box. 
ans; var age = 22; 
alert("I am " + age + " years old");

//  Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 
ans;var visitCount = 42; 
alert("You have visited this site " + visitCount + " times");

// Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
ans;var birthYear = 2001; 
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + birthYear);

//   A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:  a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.  
ans; var visitorName = "Gull bano";
var productTitle = "T-Shirt(s)";
var quantity = 5;
document.write(visitorName + " ordered " + quantity + " " + productTitle + " on engine Clothing store");

                        //    exercise 4

//  Declare 3 variables in one statement. 
ans; var mohsin, raza, akbar;

// Declare 5 legal & 5 illegal variable names. 
ans; 
// 5 Legal Variable 
var userName;
var _age;
var $price;
var student1;
var total_sum;

// 5 Illegal Variable 
var 123name;
var user-name;
var let;
var my name;
var @email; 

// Fill in the blanks

a. A heading stating “Rules for naming JS variables”
b. Variable names can only contain numbers, $ and _ . 
c. Variables must begin with a letter, $ or _. 
d. Variable names are case sensitive
e. Variable names should not be JS keywords


            //   exercise 5-7


// Write a program that take two numbers & add them in a new variable. Show the result in your browser. 
ans;var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

//  Repeat task1 for subtraction, multiplication, division & modulus. 
ans;var a = 10;
var b = 3;

// Subtraction
var sub = a - b;
document.write("Subtraction of " + a + " and " + b + " is " + sub + "<br>");

// Multiplication
var mul = a * b;
document.write("Multiplication of " + a + " and " + b + " is " + mul + "<br>");

// Division
var div = a / b;
document.write("Division of " + a + " and " + b + " is " + div + "<br>");

// Modulus
var mod = a % b;
document.write("Modulus of " + a + " and " + b + " is " + mod + "<br>");

// Do the following using JS Mathematic Expressions a. Declare a variable.  b. Show the value of variable in your browser like “Value after variable declaration is: ??”. Page 2 of 11 MATH EXPRESSIONS | JAVASCRIPT c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 3”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 4”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value after addition is: 11”.  i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 10”. k. Show the remainder after dividing the variable’s value by 3. Output : “The remainder is : 1” 
ans;
var num;
document.write("Value after variable declaration is: " + num + "<br>");

num = 3;
document.write("Initial value: " + num + "<br>");

num++;
document.write("Value after increment is: " + num + "<br>");

num = num + 7;
document.write("Value after addition is: " + num + "<br>");

num--;
document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;
document.write("The remainder is : " + remainder);

// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: 
ans;var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR");

//  Write a script to display multiplication table of any number in your browser. E.g.
ans;var tableNum = 4; 
document.write("Table of " + tableNum + "<br>");
document.write(tableNum + " x 1 = " + (tableNum * 1) + "<br>");
document.write(tableNum + " x 2 = " + (tableNum * 2) + "<br>");
document.write(tableNum + " x 3 = " + (tableNum * 3) + "<br>");
document.write(tableNum + " x 4 = " + (tableNum * 4) + "<br>");
document.write(tableNum + " x 5 = " + (tableNum * 5) + "<br>");
document.write(tableNum + " x 6 = " + (tableNum * 6) + "<br>");
document.write(tableNum + " x 7 = " + (tableNum * 7) + "<br>");
document.write(tableNum + " x 8 = " + (tableNum * 8) + "<br>");
document.write(tableNum + " x 9 = " + (tableNum * 9) + "<br>");
document.write(tableNum + " x 10 = " + (tableNum * 10) + "<br>");

//  The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a. Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. MATH EXPRESSIONS | JAVASCRIPT c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. Conversion Formulae: 
ans;
var celsiusTemp = 25;
var fahrenheitFromC = (celsiusTemp * 9 / 5) + 32;
document.write(celsiusTemp + "°C is " + fahrenheitFromC + "°F<br>");

var fahrenheitTemp = 70;
var celsiusFromF = (fahrenheitTemp - 32) * 5 / 9;
document.write(fahrenheitTemp + "°F is " + celsiusFromF + "°C");

// Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables a.  Price of item 1 b. Price of item 2 c. Ordered quantity of item 1  d. Ordered Quantity of item 2 e. Shipping charges 
ans;var priceItem1 = 650;
var priceItem2 = 100;
var quanItem1 = 3;
var quanItem2 = 7;
var shippingCharges = 100;
var totalCost = (priceItem1 * quanItem1) + (priceItem2 * quanItem2) + shippingCharges;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quanItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quanItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost);

// Write a script to take total marks & marks obtained by a student. Compute the percentage & show the result in your browser. 
ans;var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates :  1 US Dollar  = 104 Pakistani Rupee  and  1 Saudi Riyal = 28 Pakistani Rupee) 
ans;var totalPKR = (10 * 104) + (25 * 28);

document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: " + totalPKR);

//  Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2  Perform all calculations in a single expression. 
ans;var num = 10;
var result = ((num + 5) * 10) / 2;
document.write("Final Result: " + result);

// The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. Output them to the screen like so: “They are either NN or NN years old”.   
ans;var currentYear = 2026;
var birthYear = 2001;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h1>Age Calculator</h1>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old");

// The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. b. Calculate the circumference based on the radius, and output “The circumference is NN”.  (Hint : Circumference of a circle = 2 π r ,   π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2,  π = 3.142) 
ans;var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * (radius * radius);

document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);

// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 
ans; var a = 10;

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write("..................................................<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a);

// The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. Page 10 of 11 MATH EXPRESSIONS | JAVASCRIPT  Page 11 of 11  Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 
ans;var favoriteSnack = "Biryani";
var currentAge = 25;
var maxAge = 85;
var amountPerDay = 2;
var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1><br>");
document.write("Favorite Snack : " + favoriteSnack + "<br>");
document.write("Current Age : " + currentAge + "<br>");
document.write("Estimated Maximum Age : " + maxAge + "<br>");
document.write("Amount of snacks per day : " + amountPerDay + "<br><br>");
document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);


                                //   exercise 8-11

                        
// Write a program that takes input a name from user & greet the user like this: 
ans;var userName = prompt("Please enter your name");
alert("Hi, " + userName);

// .  Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 
ans;var num = prompt("Enter a number for multiplication table:", "5");

if (num === "" || num === null) {
    num = 5;
}

document.write("<h2>Multiplication Table of " + num + "</h2>");
document.write(num + " x 1 = " + (num * 1) + "<br>");
document.write(num + " x 2 = " + (num * 2) + "<br>");
document.write(num + " x 3 = " + (num * 3) + "<br>");
document.write(num + " x 4 = " + (num * 4) + "<br>");
document.write(num + " x 5 = " + (num * 5) + "<br>");
document.write(num + " x 6 = " + (num * 6) + "<br>");
document.write(num + " x 7 = " + (num * 7) + "<br>");
document.write(num + " x 8 = " + (num * 8) + "<br>");
document.write(num + " x 9 = " + (num * 9) + "<br>");
document.write(num + " x 10 = " + (num * 10) + "<br>");

// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 
ans;var city = prompt("Enter your city name:");

if (city === "Karachi") {
    alert("Welcome to city of lights");
}

// Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 
ans;var gender = prompt("Enter your gender (male/female):");

if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    alert("Good Morning Ma’am.");
}

// Write a program to take input color of road traffic signal from the user & show the message according to this table: 
ans;var color = prompt("Enter the color of the road traffic signal (Red, Yellow, Green):");

if (color === "Red" || color === "red") {
    alert("Must Stop");
} 
else if (color === "Yellow" || color === "yellow") {
    alert("Ready to move");
} 
else if (color === "Green" || color === "green") {
    alert("Move now");
} 
else {
    alert("Please enter a valid traffic signal color (Red, Yellow, or Green).");
}

// Write a program to take input max age & current age from user. If the current age is less than or equal to max age,the message “You are welcome”
ans;var maxAge = prompt("Enter your maximum age:");
var currentAge = prompt("Enter your current age:");

if (currentAge <= maxAge) {
    alert("You are welcome");
}

var maxAge = prompt("Enter your maximum age:");
var currentAge = prompt("Enter your current age:");

if (currentAge <= maxAge) {
    alert("You are welcome");
}

// Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” 
ans;var fuel = Number(prompt("Enter remaining fuel in car (in litres):"));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

//  Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:  
ans;var sub1 = Number(prompt("Enter marks obtained in Subject 1:"));
var sub2 = Number(prompt("Enter marks obtained in Subject 2:"));
var sub3 = Number(prompt("Enter marks obtained in Subject 3:"));
var totalMarks = Number(prompt("Enter total marks (for all three subjects):"));
var marksObtained = sub1 + sub2 + sub3;
var percentage = (marksObtained / totalMarks) * 100;
var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1><br>");
document.write("Total marks : " + totalMarks + "<br>");
document.write("Marks obtained : " + marksObtained + "<br>");
document.write("Percentage : " + percentage.toFixed(2) + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks);


// Write a program to implement checkout process of a shopping cart system for an e-commerce website. Take input from users, the following:  a. Name of item1  b. Name of item2 c. Price of item 1 d. Price of item 2 e. Ordered quantity of item 1  f. Ordered Quantity of item 2 g. Shipping charges Compute the total cost. If the total cost is above 2000 PKR , offer them 10% discount & show the receipt in your browser. 
ans;
var item1 = prompt("Enter name of item 1:");
var item2 = prompt("Enter name of item 2:");
var priceItem1 = Number(prompt("Enter price of " + item1 + ":"));
var priceItem2 = Number(prompt("Enter price of " + item2 + ":"));
var quanItem1 = Number(prompt("Enter ordered quantity of " + item1 + ":"));
var quanItem2 = Number(prompt("Enter ordered quantity of " + item2 + ":"));
var shippingCharges = Number(prompt("Enter shipping charges:"));
var totalCost = (priceItem1 * quanItem1) + (priceItem2 * quanItem2) + shippingCharges;
var finalCost = totalCost;
var discountApplied = 0;

if (totalCost > 2000) {
    discountApplied = totalCost * 0.10;
    finalCost = totalCost - discountApplied;
}
document.write("<h1>Shopping Cart Receipt</h1>");
document.write("Price of " + item1 + " is " + priceItem1 + " PKR<br>");
document.write("Quantity of " + item1 + " is " + quanItem1 + "<br>");
document.write("Price of " + item2 + " is " + priceItem2 + " PKR<br>");
document.write("Quantity of " + item2 + " is " + quanItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + " PKR<br><hr>");

document.write("Total Amount: " + totalCost + " PKR<br>");

if (totalCost > 2000) {
    document.write("Discount (10%): -" + discountApplied.toFixed(2) + " PKR<br>");
    document.write("<b>Discounted Price: " + finalCost.toFixed(2) + " PKR</b>");
} else {
    document.write("<b>Total Cost: " + finalCost + " PKR</b>");
}


//  Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. 
ans;var num = Number(prompt("Enter a number:"));

if (num % 3 === 0) {
    alert("The number " + num + " is divisible by 3.");
} else {
    alert("The number " + num + " is not divisible by 3.");
}


// Names & Total scores of two teams are taken as input. Write a program that shows which team has won the game or show if there is a tie. (Team A or Team B) 
ans;
var teamAName = prompt("Enter Name of Team A:");
var teamAScore = Number(prompt("Enter Total Score of " + teamAName + ":"));
var teamBName = prompt("Enter Name of Team B:");
var teamBScore = Number(prompt("Enter Total Score of " + teamBName + ":"));

if (teamAScore > teamBScore) {
    alert(teamAName + " has won the game!");
} 
else if (teamBScore > teamAScore) {
    alert(teamBName + " has won the game!");
} 
else {
    alert("It's a tie! Both teams have the same score.");
}

// Take a string, a number and a Boolean in three variables. Write a program that checks the type of variables & responds accordingly. Like : 
ans;
var myString = "JavaScript Learning";
var myNumber = 100;
var myBoolean = true;

document.write("Value: '" + myString + "' --> Type is: " + typeof myString + "<br>");
document.write("Value: " + myNumber + " --> Type is: " + typeof myNumber + "<br>");
document.write("Value: " + myBoolean + " --> Type is: " + typeof myBoolean + "<br>");


// Write a program that checks whether the given input is an even number or an odd number. 
ans;var num = Number(prompt("Enter a number:"));

if (num % 2 === 0) {
    alert("The number " + num + " is Even.");
} else {
    alert("The number " + num + " is Odd.");
}

// Weather in Karachi nowadays is too cool, write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.” 
ans;var temp = Number(prompt("Enter the current temperature:"));

if (temp > 40) {
    alert("It is too hot outside.");
} 
else if (temp > 30) {
    alert("The Weather today is Normal.");
} 
else if (temp > 20) {
    alert("Today’s Weather is cool.");
} 
else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
} 
else {
    alert("It is freezing cold outside!");
}

// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user. 
ans;
var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));
var operation = prompt("Enter operation (+, -, *, /, %):");
var result;

if (operation === "+") {
    result = num1 + num2;
    alert("Result: " + num1 + " + " + num2 + " = " + result);
} 
else if (operation === "-") {
    result = num1 - num2;
    alert("Result: " + num1 + " - " + num2 + " = " + result);
} 
else if (operation === "*") {
    result = num1 * num2;
    alert("Result: " + num1 + " * " + num2 + " = " + result);
} 
else if (operation === "/") {
    if (num2 === 0) {
        alert("Error! Division by zero is not allowed.");
    } else {
        result = num1 / num2;
        alert("Result: " + num1 + " / " + num2 + " = " + result);
    }
} 
else if (operation === "%") {
    if (num2 === 0) {
        alert("Error! Modulus by zero is not allowed.");
    } else {
        result = num1 % num2;
        alert("Result: " + num1 + " % " + num2 + " = " + result);
    }
} 
else {
    alert("Invalid operator entered! Please use +, -, *, /, or %");
}

// Write a program that takes user input day name. If the day is Monday, Tuesday, Wednesday, Thursday or Friday, then show “It’s a week day”. If the day is Saturday then show “It’s weekend”. If the day is Sunday then show “Yay! It’s a holiday”. 
ans;var day = prompt("Enter the day name:");

day = day.toLowerCase();

if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    alert("It’s a week day");
} 
else if (day === "saturday") {
    alert("It’s weekend");
} 
else if (day === "sunday") {
    alert("Yay! It’s a holiday");
} 
else {
    alert("Please enter a valid day name.");
}

// Write a program that takes input user’s score, if it’s greater than 50, say “You are passed”. Otherwise, show “Try again!” 
ans;var score = Number(prompt("Enter your score:"));

if (score > 50) {
    alert("You are passed");
} else {
    alert("Try again!");
}


// Write a program that: a. takes 2 numbers. b. tells whichever number is the greater (higher) number. c. tells if they are equal Show the output to make sure it works (e.g. "The greater number of 5 and 10 is 10."). 
ans;var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));

if (num1 > num2) {
    alert("The greater number of " + num1 + " and " + num2 + " is " + num1 + ".");
} 
else if (num2 > num1) {
    alert("The greater number of " + num1 + " and " + num2 + " is " + num2 + ".");
} 
else {
    alert("Both numbers are equal (" + num1 + " and " + num2 + ").");
}


// The Translator:  Write a program that: a. takes 1 input, a language code (e.g. "es", "de", "en") b. tells "Hello, World" for the given language, for atleast 3 languages. It should default to returning English. (Hint: use translate.google.com to check the translation of hello world in different languages) 
ans;var langCode = prompt("Enter a language code (e.g., 'es', 'de', 'fr', 'en'):");

if (langCode) {
    langCode = langCode.toLowerCase();
}

if (langCode === "es") {
    alert("Hola, Mundo"); 
} 
else if (langCode === "de") {
    alert("Hallo, Welt"); /
} 
else if (langCode === "fr") {
    alert("Bonjour le monde"); 
} 
else {
    alert("Hello, World"); 
}

// Write a program to take input a number & tell whether it’s a positive or negative number. 
ans;var num = Number(prompt("Enter a number:"));

if (num > 0) {
    alert("The number " + num + " is Positive.");
} 
else if (num < 0) {
    alert("The number " + num + " is Negative.");
} 
else {
    alert("The number is Zero.");
}

// The Pluralizer: Write a program that: a. takes 2 inputs, a noun and a number. b. tells the number and pluralized form, like "5 cats" or "1 dog". Run the program for a few different inputs and show the result to make sure it works. 
ans;var noun = prompt("Enter a noun (e.g., cat, dog, apple):");
var number = Number(prompt("Enter a number:"));

var result;

if (number === 1) {
    result = number + " " + noun;
} else {
    result = number + " " + noun + "s";
}

alert(result);

                    //    exercise 12-13


// Write a program to check whether the given input number is divisible by 3 or else show a message “Number is not divisible by 3”. 
ans;var num = Number(prompt("Enter a number:"));

if (num % 3 === 0) {
    alert("The number is divisible by 3");
} else {
    alert("Number is not divisible by 3");
}

// Write a program that checks whether the given input is an even number or an odd number.
ans;var num = Number(prompt("Enter a number:"));

if (num % 2 === 0) {
    alert("The number " + num + " is Even.");
} else {
    alert("The number " + num + " is Odd.");
}

//  Write an if/else statement with the following condition: If the variable age is greater than 18, output "Old enough", otherwise output "Too young". 
ans;
var age = Number(prompt("Enter your age:"));

if (age > 18) {
    alert("Old enough");
} else {
    alert("Too young");
}

//  Write a program that prompts the user for their name, and then displays a special greeting to that person if their name is the same as yours. If the name entered by the user is anything other than your name, your code should not produce any output. 
ans;var myName = "Mohsin"; 
var userName = prompt("Enter your name:");

if (userName === myName) {
    alert("Hello " + userName + "! Welcome back, special greeting for you!");
}


// Write a program to check whether the given input number is divisible by 3 or not by using Switch Case statements. Show a message “Number is not divisible by 3” or “Number is divisible by 3”. 
ans;var num = Number(prompt("Enter a number:"));

switch (num % 3) {
    case 0:
        alert("Number is divisible by 3");
        break;
    default:
        alert("Number is not divisible by 3");
        break;
}

// Write a program that takes a character(number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122) 
ans;var input = prompt("Enter a character (number, uppercase, or lowercase letter):");

if (input) {
    var asciiCode = input.charCodeAt(0);

    if (asciiCode >= 48 && asciiCode <= 57) {
        alert("The given input '" + input + "' is a Number.");
    } 
    else if (asciiCode >= 65 && asciiCode <= 90) {
        alert("The given input '" + input + "' is an Uppercase Letter.");
    } 
    else if (asciiCode >= 97 && asciiCode <= 122) {
        alert("The given input '" + input + "' is a Lowercase Letter.");
    } 
    else {
        alert("The given input is a special character or symbol.");
    }
} else {
    alert("Please enter a valid character!");
}

// Write a program to create a calculator for +, -, *, /, % using switch case statements. (number1, number2 and operator will be input) 
ans;
var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));
var operation = prompt("Enter operation (+, -, *, /, %):");
var result;

switch (operation) {
    case "+":
        result = num1 + num2;
        alert("Result: " + num1 + " + " + num2 + " = " + result);
        break;

    case "-":
        result = num1 - num2;
        alert("Result: " + num1 + " - " + num2 + " = " + result);
        break;

    case "*":
        result = num1 * num2;
        alert("Result: " + num1 + " * " + num2 + " = " + result);
        break;

    case "/":
        if (num2 === 0) {
            alert("Error! Division by zero is not allowed.");
        } else {
            result = num1 / num2;
            alert("Result: " + num1 + " / " + num2 + " = " + result);
        }
        break;

    case "%":
        if (num2 === 0) {
            alert("Error! Modulus by zero is not allowed.");
        } else {
            result = num1 % num2;
            alert("Result: " + num1 + " % " + num2 + " = " + result);
        }
        break;

    default:
        alert("Invalid operator entered! Please use +, -, *, /, or %");
        break;
}



// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements 
ans;var time = Number(prompt("Enter time in 24 hours clock format (e.g., 1900 = 7pm):"));

if (time >= 0 && time < 1200) {
    alert("Good morning!");
} 
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} 
else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} 
else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
} 
else {
    alert("Invalid time entered! Please enter a valid 24-hour format (0000 to 2359).");
}



// Write a program that takes a calendar year in YYYY format in a variable. Check & notify the user whether it is a leap year or not. 
ans;var year = Number(prompt("Enter a year in YYYY format (e.g., 2024):"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    alert(year + " is a leap year.");
} else {
    alert(year + " is not a leap year.");
}



//  Write a program that  a. Store correct password in a JS variable. b. Asks user to enter his/her password c. Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise. 
ans;
var correctPassword = "mySecretPassword123";

var userPassword = prompt("Enter your password:");

if (userPassword === "" || userPassword === null) {
    alert("Please enter your password");
} 
else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} 
else {
    alert("Incorrect password");
}



//  Write a program that adds an else statement to the following script to display “You are not Fahad” var firstName = "Ali"; if (firstName === "Fahad") { document.write("Hello Fahad!"); } 
ans;var firstName = "Ali"; 

if (firstName === "Fahad") { 
    document.write("Hello Fahad!"); 
} 
else {
    document.write("You are not Fahad");
}




// This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; }  
ans;var greeting; 
var hour = 13; 

if (hour < 18) { 
    greeting = "Good day"; 
} else { 
    greeting = "Good evening"; 
}



// Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 

ans;var num1 = Number(prompt("Enter first integer:"));
var num2 = Number(prompt("Enter second integer:"));

if (num1 > num2) {
    alert("The larger number is " + num1 + " (First number is greater)");
} 
else if (num2 > num1) {
    alert("The larger number is " + num2 + " (Second number is greater)");
} 
else {
    alert("Both integers are equal (" + num1 + " = " + num2 + ")");
}



// Write a program that takes input a number from user & state whether the number is positive, negative or zero. 
ans;var num = Number(prompt("Enter a number:"));

if (num > 0) {
    alert("The number " + num + " is Positive.");
} 
else if (num < 0) {
    alert("The number " + num + " is Negative.");
} 
else {
    alert("The number is Zero.");
}



// Ask the user what the current hour is. If the hour is between 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If the hour is between 5 and 8 p.m., tell the user, "It's dinner time." For any other hours, tell the user, "Sorry, you'll have to wait, or go get a snack." (Hint: Store the hour in 24 hours clock format i.e. 14 for 2pm , 15 for 3pm) 
ans;var hour = Number(prompt("Enter the current hour in 24-hour format (e.g., 8 for 8am, 14 for 2pm):"));

if (hour >= 6 && hour <= 9) {
    alert("Breakfast is served.");
} 

else if (hour >= 11 && hour <= 13) {
    alert("Time for lunch.");
} 

else if (hour >= 17 && hour <= 20) {
    alert("It's dinner time.");
} 

else {
    alert("Sorry, you'll have to wait, or go get a snack.");
}


// Write a program that stores value in a variable & tell whether the type of that variable is a "number", "string", "boolean" or “undefined
ans;
var sampleValue = 25;
var dataType = typeof sampleValue;

alert("The type of the variable is: " + dataType);



// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise. 
ans;var char = prompt("Enter a single character:");

if (char && char.length === 1) {

    var lowerChar = char.toLowerCase();

    if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
        alert(true);
    } else {
        alert(false);
    }
} else {
    alert("Please enter exactly one single character!");
}

// Choose the correct comparison operator to display "true", when: 10 is NOT equal to 8.
ans;var num1 = 10;
var num2 = 8;

if (num1 !== num2) {
    alert(true);
} else {
    alert(false);
}


// Use a switch statement to rewrite the following JavaScript code. Prompt the user for the number of a month rather than setting it to 8: 
ans;
var month = Number(prompt("Enter the month number (1 to 12):"));

if (month === 1) {
    alert("January");
} 
else if (month === 2) {
    alert("February");
} 
else if (month === 3) {
    alert("March");
} 
else if (month === 4) {
    alert("April");
} 
else if (month === 5) {
    alert("May");
} 
else if (month === 6) {
    alert("June");
} 
else if (month === 7) {
    alert("July");
} 
else if (month === 8) {
    alert("August");
} 
else if (month === 9) {
    alert("September");
} 
else if (month === 10) {
    alert("October");
} 
else if (month === 11) {
    alert("November");
} 
else if (month === 12) {
    alert("December");
} 
else {
    alert("Please enter a valid month number between 1 and 12.");
}


//  Use a conditional (ternary) operator for this exercise: If the variable age is a value below 18, the value of the variable IF…ELSE & ELSE IF STATEMENTS, TESTING SET OF CONDITIONS & SWITCH STATEMENTS | JAVASCRIPT voteable should be "Too young",  otherwise the value of voteable should be "Old enough".
ans;var age = 16; 
var voteable = (age < 18) ? "Too young" : "Old enough";

alert(voteable);