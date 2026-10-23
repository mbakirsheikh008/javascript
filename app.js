//chap:1
//q:1
alert("Hello!!")
//q:2
alert("Error! please enter a valid password")
//q:3
alert("Hello coder\ngood day")
//q:4
alert("Welcome to js land")

alert("Happy Coding\nprevent this page from creating addtional dialog.")
//q:5
console.log("Hello... I can run js through my web browser console")

//chap:2
//q;1
var username = ""

//q:2
var myname = "muhammad Bakir"

//q:3

var message = "kia haal hai "
//q:4
var student ="html bhai" 
alert(student)

var age = "15 year old"
alert(age)

var result = "certified mobile and app dev course"
alert(result)

//q:5

var name = "bakir\n baki\n bak\n ba\n b"
alert(name)




var age = ("MY Age");
alert("I do not want to tell you");
console.log(age);

var visits = ("14");
alert("you have visited this site" + visits + "times");
console.log(visits);

var birthYear = 2026;
document.write("My birth year is " + birthYear);
document.write("<br>Data type of my declared variable is " + typeof birthYear + "<br>");

  var visitorName = "John Doe";
    var productTitle = "T-shirt";
    var quantity = 5;

    document.write( visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");
chap;4
q:1
var name, age, city;

q:2
// Legal variable names
var myName;
var age1;
var $price;
var _city;
var studentMarks;

// Illegal variable names
// var 1name;
// var my-name;
// var my name;
// var var;
// var @price;

chap;5
q:1
var num1 = 10;
var num2 = 20;
var result = num1 + num2;

document.write("Sum of 10 and 20 is: " + result);
q:2
var num1 = 20;
var num2 = 10;

var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

document.write("Subtraction: " + subtraction + "<br>");
document.write("Multiplication: " + multiplication + "<br>");
document.write("Division: " + division + "<br>");
document.write("Modulus: " + modulus);
q:3
var number;

document.write("Value after variable declaration is: " + number + "<br>");

number = 5;
document.write("Initial value: " + number + "<br>");

number++;
document.write("Value after increment is: " + number + "<br>");

number = number + 7;
document.write("Value after addition is: " + number + "<br>");

number--;
document.write("Value after decrement is: " + number + "<br>");

var remainder = number % 3;
document.write("The remainder is: " + remainder);

q:4
var ticketPrice = 600;
var ticketQuantity = 5;
var totalCost = ticketPrice * ticketQuantity;

document.write("Price of one ticket is: " + ticketPrice + " PKR<br>");
document.write("Number of tickets: " + ticketQuantity + "<br>");
document.write("Total cost is: " + totalCost + " PKR");
q:5
var number = 5;

document.write("<h2>Multiplication Table of " + number + "</h2>");

document.write(number + " x 1 = " + number * 1 + "<br>");
document.write(number + " x 2 = " + number * 2 + "<br>");
document.write(number + " x 3 = " + number * 3 + "<br>");
document.write(number + " x 4 = " + number * 4 + "<br>");
document.write(number + " x 5 = " + number * 5 + "<br>");
document.write(number + " x 6 = " + number * 6 + "<br>");
document.write(number + " x 7 = " + number * 7 + "<br>");
document.write(number + " x 8 = " + number * 8 + "<br>");
document.write(number + " x 9 = " + number * 9 + "<br>");
document.write(number + " x 10 = " + number * 10);
q:6
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheit2 = 77;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;

document.write(fahrenheit2 + "°F is " + celsius2 + "°C");
q:7
var priceItem1 = 500;
var priceItem2 = 1000;

var quantityItem1 = 2;
var quantityItem2 = 1;

var shippingCharges = 200;

var totalCost = (priceItem1 * quantityItem1) +
                (priceItem2 * quantityItem2) +
                shippingCharges;

document.write("<h2>Shopping Cart Receipt</h2>");
document.write("Price of item 1: " + priceItem1 + "<br>");
document.write("Quantity of item 1: " + quantityItem1 + "<br>");
document.write("Price of item 2: " + priceItem2 + "<br>");
document.write("Quantity of item 2: " + quantityItem2 + "<br>");
document.write("Shipping charges: " + shippingCharges + "<br>");
document.write("Total cost: " + totalCost + " PKR");
q:8
var totalMarks = 500;
var obtainedMarks = 425;

var percentage = (obtainedMarks / totalMarks) * 100;

document.write("Total marks: " + totalMarks + "<br>");
document.write("Obtained marks: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%");
q:9
var totalPKR = (10 * 104.80) + (25 * 28);

document.write("Total Currency in PKR: " + totalPKR);
q:9
var totalPKR = (10 * 104.80) + (25 * 28);

document.write("Total Currency in PKR: " + totalPKR);
q:10
var number = 10;

var result = ((number + 5) * 10) / 2;

document.write("Result: " + result);
q:11
var currentYear = 2026;
var birthYear = 2000;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write(
    "They are either " + age1 + " or " + age2 + " years old"
);

q:12
var radius = 5;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);
q:13
var favoriteSnack = "Chips";
var currentAge = 20;
var maximumAge = 80;
var amountPerDay = 2;

var totalAmount = (maximumAge - currentAge) * 365 * amountPerDay;

document.write(
    "You will need " + totalAmount + " " + favoriteSnack +
    " to last you until the ripe old age of " + maximumAge
);
chap;6
q:1
  var a = 10;

    document.write("The value of a is: " + a + "<br><br>");

    document.write("The value of ++a is: " + (++a) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    a = 10;
    document.write("The value of a++ is: " + (a++) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    a = 11;
    document.write("The value of --a is: " + (--a) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    a = 11;
    document.write("The value of a-- is: " + (a--) + "<br>");
    document.write("Now the value of a is: " + a);
    q:2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
q:3
var userName = prompt("Enter your name");

alert("Hello " + userName + "! Welcome to our website.");
q:3
var userName = prompt("Enter your name");

alert("Hello " + userName + "! Welcome to our website.");
q:4
//hai nhi assignment mein

q:5
var number = prompt("Enter a number");

if (number === null || number === "") {
    number = 5;
} else {
    number = Number(number);
}

document.write("<h2>Multiplication Table of " + number + "</h2>");

document.write(number + " x 1 = " + number * 1 + "<br>");
document.write(number + " x 2 = " + number * 2 + "<br>");
document.write(number + " x 3 = " + number * 3 + "<br>");
document.write(number + " x 4 = " + number * 4 + "<br>");
document.write(number + " x 5 = " + number * 5 + "<br>");
document.write(number + " x 6 = " + number * 6 + "<br>");
document.write(number + " x 7 = " + number * 7 + "<br>");
document.write(number + " x 8 = " + number * 8 + "<br>");
document.write(number + " x 9 = " + number * 9 + "<br>");
document.write(number + " x 10 = " + number * 10);

q:6

  var subject1 = prompt("Enter first subject name");
    var subject2 = prompt("Enter second subject name");
    var subject3 = prompt("Enter third subject name");

    var totalMarks = 100;

    var marks1 = Number(prompt("Enter marks for " + subject1));
    var marks2 = Number(prompt("Enter marks for " + subject2));
    var marks3 = Number(prompt("Enter marks for " + subject3));

    var percentage1 = (marks1 / totalMarks) * 100;
    var percentage2 = (marks2 / totalMarks) * 100;
    var percentage3 = (marks3 / totalMarks) * 100;

    var totalObtained = marks1 + marks2 + marks3;
    var total = totalMarks * 3;
    var percentage = (totalObtained / total) * 100;

    document.write("<table border='1' cellpadding='8'>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

    document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td><td>" + percentage1 + "%</td></tr>");

    document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td><td>" + percentage2 + "%</td></tr>");

    document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td><td>" + percentage3 + "%</td></tr>");

    document.write("<tr><th>Total</th><th>" + total + "</th><th>" + totalObtained + "</th><th>" + percentage + "%</th></tr>");

    document.write("</table>");
q:7
//hai nhi assignment mein














