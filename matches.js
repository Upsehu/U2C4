// write js code here corresponding to matches.html

let schedule = JSON.parse(localStorage.getItem('schedule'));


function display(arr){

    document.querySelector('tbody').innerHTML = null;
    
    if(arr != null){
        arr.forEach(function(elem){

            let tr = document.createElement('tr');
            
            let td1 = document.createElement('td');
            td1.innerText = elem.matchNum;

            let td2 = document.createElement('td');
            td2.innerText = elem.teamA;

            let td3 = document.createElement('td');
            td3.innerText = elem.teamB;

            let td4 = document.createElement('td');
            td4.innerText = elem.date;

            let td5 = document.createElement('td');
            td5.innerText = elem.venue;

            let td6 = document.createElement('td');
            td6.innerText = 'favourite'
            td6.addEventListener('click', function(){
                addToFavourite(elem);
            })


            tr.append(td1, td2, td3,td4 ,td5, td6);

            document.querySelector('tbody').append(tr);
            
        })
    }
    
}

display(schedule);

function addToFavourite(elem){
    let favourites = JSON.parse(localStorage.getItem('favourites')) || [];

    favourites.push(elem);
    console.log(favourites);

    localStorage.setItem('favourites', JSON.stringify(favourites));
}


document.getElementById('filterVenue').addEventListener('change', filterByVenueFunc);

function filterByVenueFunc(){

    let filterVenue = document.getElementById('filterVenue').value;

    if(filterVenue === 'none'){
        display(schedule);
    }

    else{
            
        let filteredArr = schedule.filter(function(elem){
            return elem.venue === filterVenue;
        });

        display(filteredArr);
    }



}