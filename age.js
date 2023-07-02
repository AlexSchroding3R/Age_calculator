const year = document.getElementById("years_display");
const month = document.getElementById("months_display");
const day = document.getElementById("days_display");

const input_day = document.getElementById("days");
const input_month = document.getElementById("months");
const input_years = document.getElementById("years");

const lab = document.querySelectorAll("label");
const empty_error = document.querySelectorAll(".empty-error");
const date = new Date();

const Months_array = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let current_day = date.getDate();
let current_month = date.getMonth() + 1;
let current_year = date.getFullYear();

let check = true;

function calculation() {
    if (input_day.value > 31 || input_day.value < 0) {
        empty_error[0].innerHTML = "Must be a Valid Day";
        lab[0].style.color = "red";
        check = false;
    }
    if (input_month.value > 12 || input_month.value < 0) {
        empty_error[1].innerHTML = "Must be a Valid month";
        lab[1].style.color = "red";
        check = false;
    }
    if (input_years.value > date.getFullYear() || input_years.value< 0) {
        empty_error[2].innerHTML = "Must be in the past";
        lab[2].style.color = "red";
        check = false;
    }
    if (input_day.value == "") {
        lab[0].style.color = "red";
        empty_error[0].innerHTML = "Ther field in required";
        check = false;
    }
    if (input_month.value == "") {
        lab[1].style.color = "red";
        empty_error[1].innerHTML = "Ther field in required";
        check = false;
    }

    if (input_years.value == "") {
        lab[2].style.color = "red";
        empty_error[2].innerHTML = "Ther field in required";
        check = false;
    }
    if(check === false)
    {
        setTimeout(() => {
        location.reload();
        }, 2000);
    }
   
    if (check) {
        if (input_day.value > current_day) {
            current_day = current_day + Months_array[current_month + 1];
            current_month = current_month - 1;
        }
        if (input_month.value > current_month) {
            current_month = current_month + 12;
            current_year = current_year - 1;
        }

        day.innerHTML = Math.abs(current_day - input_day.value);
        month.innerHTML = Math.abs(current_month - input_month.value);
        year.innerHTML = Math.abs(current_year - input_years.value);
    }
}
