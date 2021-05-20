
var randomNum = 0;
var win = 0;
var loss = 0;

$(document).ready(function () {

    //generating random number and assingning it to var randomNum
    randomNum = (Math.floor(Math.random() * (121 - 12 + 1)) + 12);//range from 12-120
    //display the randomNum to the dom for user
    $("#compChoice").text(randomNum);

    var totalCount = 0;
    var firstNum = (Math.floor(Math.random() * (12)) + 1);
    var cryOne = 0;
    var secondNum = (Math.floor(Math.random() * (12)) + 1);
    var crySecond = 0;
    var thirdNum = (Math.floor(Math.random() * (12)) + 1);
    var cryThird = 0;
    var fourthNum = (Math.floor(Math.random() * (12)) + 1);
    var cryFourth = 0;

    //function to get and add value of the first crystal being clicked
    $("#firstC").on("click", function () {
        cryOne += firstNum;
        console.log(cryOne);
        totalCount += firstNum;
        $("#score").text(totalCount);
    })

    //function to get and add value of the second crystal being clicked
    $("#secondC").on("click", function () {
        crySecond += secondNum;
        console.log(crySecond);
        totalCount += secondNum;
        // console.log("Total: " + totalCount);
        $("#score").text(totalCount);
    })

    //function to get and add value of the third crystal being clicked
    $("#thirdC").on("click", function () {
        cryThird += thirdNum;
        console.log(cryThird);
        totalCount += thirdNum;
        // console.log("Total: " + totalCount);
        $("#score").text(totalCount);
    })

    //function to get and add value of the fourth crystal being clicked
    $("#fourthC").on("click", function () {
        cryFourth += fourthNum;
        console.log(cryFourth);
        totalCount += fourthNum;
        // console.log("Total: " + totalCount);
        $("#score").text(totalCount);
    })

    
})