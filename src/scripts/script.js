
var slideshow = document.getElementById("slideshowImg");

var slideshowSrc = ["./images/barber.jpg", "./images/shave.jpg", "./images/skateboard.jpg", "./images/graff.jpg", "./images/bape.jpg"]
var curIndex = 0;

function slideShow() {
    slideshow.src = slideshowSrc[curIndex];
    curIndex++;
    if (curIndex == slideshowSrc.length) { curIndex = 0; }
    setTimeout("slideShow()", 1000);
}
slideShow();


function dropD(){ 
    var dropdown = document.getElementById("service_choice");
    var total = document.getElementById("total-price");

    switch(dropdown.value){
        case '1':
        total.innerHTML = "Total: &pound10";
        break;
        case '2':
            total.innerHTML = "Total: &pound15";
            break;
        case '3':
            total.innerHTML = "Total: &pound20";
            break;
        case "":
            total.innerHTML = "please select a service!";
            break;
    }
}


mobiscroll.datepicker('#demo-booking-multiple', {
    controls: ['calendar', 'timegrid'],
    min: '2022-07-17T00:00',
    max: '2023-01-17T00:00',
    minTime: '08:00',
    maxTime: '19:59',
    stepMinute: 60,
    // example for today's labels and invalids
    labels: [{
        start: '2022-07-16',
        textColor: '#e1528f',
        title: '2 SPOTS'
    }],
    invalid: [{
        start: '2022-07-17T08:00',
        end: '2022-07-17T13:00'
    }, {
        start: '2022-07-17T15:00',
        end: '2022-07-17T17:00'
    }, {
        start: '2022-07-17T19:00',
        end: '2022-07-17T20:00'
    }]
});

