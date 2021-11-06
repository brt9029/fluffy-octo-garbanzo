let dateToday = moment().format("MMM DD YYYY");
$('#currentDay').append(dateToday);

let currentTime = moment().format("H:m")

let schedule = [];

$('.btn').click(function() {
    let text = $("#event").text().trim();
    console.log(text);
    
    saveTasks();
});

function saveTasks() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
};

function loadTasks () {
    JSON.parse(localStorage.getItem("schedule"));

    $.each(schedule, function(index){
        console.log(index);
        console.log(schedule[index].time);
        console.log(schedule[index].task);
    });
};

function timeCheck() {
    let time = moment().format("hA");
    console.log(time);
};

setInterval(function(){
    if(time.isAfter($(".hour").text().trim())){
        $(".description").addClass("bg-danger");
    }
}, 1800000);

// load previously saved tasks on the schedule on page load
loadTasks();