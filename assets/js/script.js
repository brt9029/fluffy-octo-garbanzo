let dateToday = moment().format("MMM DD YYYY");
$('#currentDay').append(dateToday);

let currentTime = moment().format("HHmm");

let oldSchedule = [{
        time: "900",
        task: ""
    },
    {
        time: "1000",
        task: ""
    },
    {
        time: "1100",
        task: ""
    },
    {
        time: "1200",
        task: ""
    },
    {
        time: "1300",
        task: ""
    },
    {
        time: "1400",
        task: ""
    },
    {
        time: "1500",
        task: ""
    },
    {
        time: "1600",
        task: ""
    },
    {
        time: "1700",
        task: ""
    },
];

$('.btn').on("click",function() {
    let time = $(this).attr("id");
    let task = $(this).siblings("input").val();

    updateTask(time, task);
    saveTasks();
});

function updateTask(time, task) {
    for(let i = 0; i < schedule.length; i++){
        if(time === schedule[i].time){
            schedule[i].task = task;
        }
    }
};

function saveTasks() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
};

function loadTasks () {
    schedule = JSON.parse(localStorage.getItem("schedule"));

    for(let i = 0; i < schedule.length; i++){
        if(schedule[i].task.length > 0){
            $(`#${schedule[i].time}`).val(schedule[i].task);
        }
    }
};

setInterval(function(){
    for(let i = 0; i < oldSchedule.length; i++){
        if(moment(currentTime).isBefore(oldSchedule[i].time)){
            $(`#${oldSchedule[i].time}`).addClass("bg-success");
        } if(moment(currentTime).isAfter(parseInt(oldSchedule[i].time) + 100)){
            $(`#${oldSchedule[i].time}`).removeClass("bg-danger");
            console.log(oldSchedule[i].time)
        } if(moment(currentTime).isBetween(oldSchedule[i].time, (parseInt(oldSchedule[i].time) + 100).toString())){
            $(`#${oldSchedule[i].time}`).addClass("bg-danger");
        }
    }
}, 1800000);


setTimeout(function(){
    for(let i = 0; i < oldSchedule.length; i++){
        if(moment(currentTime).isBefore(oldSchedule[i].time)){
            $(`#${oldSchedule[i].time}`).addClass("bg-success");
        } if(moment(currentTime).isAfter(parseInt(oldSchedule[i].time) + 100)){
            $(`#${oldSchedule[i].time}`).removeClass("bg-danger");
            console.log(oldSchedule[i].time)
        } if(moment(currentTime).isBetween(oldSchedule[i].time, (parseInt(oldSchedule[i].time) + 100).toString())){
            $(`#${oldSchedule[i].time}`).addClass("bg-danger");
        }
    }
}, 1);
// load previously saved tasks on the schedule on page load 
loadTasks();