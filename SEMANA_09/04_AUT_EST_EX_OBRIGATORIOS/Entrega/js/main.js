function exercise1() {
    let choice = $('input[name=valType]:checked').val();
    let usrNum = $('#usrValue1').val();
    let i = $('#interest1').val()/100;
    let t = $('#time1').val()
    let result;
    switch(choice){
        case 'pv':
            result = usrNum*Math.pow((1+i), t);
            $('#result1').val(`FV = ${result}`)
            break;
        case 'fv':
            result = usrNum/Math.pow((1+i), t);
            $('#result1').val(`PV = ${result}`)
            break;
    }
}

function exercise2() {
    let usrNum = $('#usrValue2').val();
    let i = $('#interest2').val()/100;
    let t = $('#time2').val()
    let result = usrNum*(1+(i*t));
    $('#result2').val(`FV = ${result}`)
}

function exercise3() {
    let usrNum = $('#usrValue3').val();
    let str = '';
    for(let i = 0; i < usrNum.length; i++) {
        for (let j = 0; j < i; j++) {
            str += " "
        }
        str += `${usrNum[i]}\r\n`
    }
    $("#result3").text(str);
}

function exercise4() {
    let usrNum = $('#usrValue4').val();
    let bin = '';
    let counter = 1;
    if (usrNum != 1) {
        while (counter*2 <= usrNum) {
            counter *= 2;
        }
    }
    console.log(counter)
    
}



$('#calc1').click(function (e) { 
    e.preventDefault();
    exercise1();
});
$('#calc2').click(function (e) { 
    e.preventDefault();
    exercise2();
});
$('#calc3').click(function (e) { 
    e.preventDefault();
    exercise3();
});
$('#calc4').click(function (e) { 
    e.preventDefault();
    exercise4();
});
