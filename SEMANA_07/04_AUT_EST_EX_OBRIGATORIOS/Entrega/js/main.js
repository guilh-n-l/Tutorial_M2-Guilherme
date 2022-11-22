// Document Ready
$(document).ready(function () {
    /* --- Exercise 1 --- */
    // Clear matrix
    function clear(){
        for(i=0; i<=10; i++){
            $(`#col1-${i}`).text('');
            $(`#col2-${i}`).text('');
        }
    };

    // Insert values to matrix
    function create(rows, first, usr){
        $('#x').text('X');
        $('#col-usr').text(usr);
        for(i=0; i<=rows; i++){
            $(`#col1-${i}`).text(first+i);
            $(`#col2-${i}`).text((first+i)*usr);
        }
    };

    // Click button to run functions
    $("#calc1").click(function (e) { 
        e.preventDefault();
        let firstNum = parseInt($('#table-start').val());
        let lastNum = parseInt($('#table-end').val());
        let usrNum = parseInt($('#table-usr').val())
        let length = lastNum-firstNum;
        clear();
        create(length, firstNum, usrNum);
    });



    /* --- Exercise 2 --- */
    // Check if palindrome
    function CheckPalindrome(num){
        let array = Array.from(String(num));
        let newArray = [];
        for(i=(array.length-1); i>=0; i--){
            newArray.push(array[i])
        }
        let palindrome = newArray.join('');
        if(palindrome == num){
            $('#palindrome-output').text('This number is a palindrome!');
        }
        else{
            $('#palindrome-output').text('This number is not a palindrome!');
        }
    };
    // Click to run functions
    $('#calc2').click(function (e) { 
        e.preventDefault();
        let number = $('#num-usr').val();
        CheckPalindrome(number);
        
    });


    
    /* --- Exercise 3 --- */
    function pi(cap){
        let string = ''
        for(i=1; i<cap; i++){
            if(i%3 == 0){
                string += `${i}, pi!, `;
            }
            else{
                string += `${i}, `;
            }
        }
        string += ` ${cap}.`
        console.log(string);
        $('#pi-output').text(string);
    };

    // Click to run function
    $('#calc3').click(function (e) { 
        e.preventDefault();
        let usrNum = $('#num-cap').val();
        pi(usrNum);

    });

    /* --- Exercise 4 --- */
    function calcNeed(tArea, wArea){
        let result = wArea/tArea;
        result = Math.ceil(result * 1.05);
        $('#tile-output').text(`You will need at least ${result} tiles.`);
    };
    $("#calc4").click(function (e) { 
        e.preventDefault();
        let tileArea = $('#tile-height').val()*$('#tile-length').val();
        let wallArea = $('#wall-height').val()*$('#wall-length').val();
        calcNeed(tileArea, wallArea);
    });
});