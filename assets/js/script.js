/* update is a function that defines a variable "date" type "moment"
/*to update then contain of #datetime every second*/
var update = function () {
    date = moment();
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

/*Main function to read local storage and update Tracker*/
function initTracker() {
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);


    /*Variable declaration to upload any prevoius data from local storage*/
    $("#time8 .description").val(localStorage.getItem("time8"));
    $("#time9 .description").val(localStorage.getItem("time9"));
    $("#time10 .description").val(localStorage.getItem("time10"));
    $("#time11 .description").val(localStorage.getItem("time11"));
    $("#time12 .description").val(localStorage.getItem("time12"));
    $("#time13 .description").val(localStorage.getItem("time13"));
    $("#time14 .description").val(localStorage.getItem("time14"));
    $("#time15 .description").val(localStorage.getItem("time15"));
    $("#time16 .description").val(localStorage.getItem("time16"));
    $("#time17 .description").val(localStorage.getItem("time17"));

    /*set in local storage...*/
    $(".btn").click(function () {
        var timeBlock = $(this).parent(".time-block").attr("id");
        var activity = $(this).siblings(".description").val();

        localStorage.setItem(timeBlock, activity);

    });

    /*Loop through the timeblocks to set correspondent color based on current time*/
    function adjustTracker() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var myTimeBlockId = $(this).attr("id").split('time');
            console.log(myTimeBlockId[1]);
            console.log(currentTime);

            if (myTimeBlockId[1] < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");

            } else if (myTimeBlockId[1] > currentTime) {

                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");

            } else {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");

            }


        })
    }

    adjustTracker()

};

/*Once the HTML is loaded update content of currentDay with "date"*/
$(document).ready(initTracker);