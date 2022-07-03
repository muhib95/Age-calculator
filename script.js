let m1 = 0;;
let y1 = 0;
let m2 = 0;
let today = new Date();
console.log(today);
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


let day = today.getDate();
let month = (today.getMonth() + 1);
let year = today.getFullYear();
console.log(date);
console.log(day);
let m = month;
let y = year;
let d = 0;

function dmy() {
    let inputDay = +document.getElementById("b-date").value;
    let inputMonth = +document.getElementById("b-month").value;
    let inputYear = +document.getElementById("b-year").value;
    if (inputDay == 0 || inputMonth == 0 || inputYear == 0) {
        alert("Wrong Input");
    } else {

        if (day >= inputDay) {
            d = day - inputDay;
            // data()
            console.log(d);
            document.querySelector(".days").innerHTML = d;

        } else {
            d = ((day + 30) - inputDay + 1);
            m = month - 1;
            console.log(d);
            console.log(m);
            document.querySelector(".days").innerHTML = d;

        }


        if (m >= inputMonth) {
            m1 = m - inputMonth;

            document.querySelector(".months").innerHTML = (m1);
        } else {
            m2 = ((m + 12) - inputMonth);
            y = year - 1;
            console.log("Prob" + m);
            document.querySelector(".months").innerHTML = (m2);
        }
        y1 = y - inputYear;

        document.querySelector(".years").innerHTML = y1;
    }




}






function reset() {
    d = 0;
    m1 = 0;
    y1 = 0;
    inputDay = 0;
    inputMonth = 0;
    inputYear = 0;
    console.log(m1);
    console.log(d);
    console.log(y1);
    document.querySelector(".days").innerHTML = (d);
    document.querySelector(".months").innerHTML = (m1);
    document.querySelector(".years").innerHTML = (y1);


}