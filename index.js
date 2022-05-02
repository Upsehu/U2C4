// write js code here corresponding to index.html
// You should add submit event on the form
document.getElementById('masaiForm').addEventListener('submit', addDetails);

function addDetails(){
    event.preventDefault();

    let data = {
        matchNum : masaiForm.matchNum.value,
        teamA : masaiForm.teamA.value,
        teamB : masaiForm.teamB.value,
        date: masaiForm.date.value,
        venue: masaiForm.venue.value
    }

    let schedule = JSON.parse(localStorage.getItem('schedule')) || [];
    
    schedule.push(data);
    console.log(schedule);
    localStorage.setItem('schedule', JSON.stringify(schedule));
}