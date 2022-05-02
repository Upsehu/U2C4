// write js code here corresponding to favourites.html

let favourites = JSON.parse(localStorage.getItem('favourites'));

function display(arr){

    document.querySelector('tbody').innerHTML = null;
    
    if(arr != null){
        arr.forEach(function(elem, index){

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
            td6.innerText = 'Delete'
            td6.addEventListener('click', function(){
                deleteRow(elem, index);
            })


            tr.append(td1, td2, td3,td4 ,td5, td6);

            document.querySelector('tbody').append(tr);
            
        })
    }
    
}

display(favourites);

function deleteRow(elem, index){
    
    favourites.splice(index, 1);
    display(favourites);

    console.log(favourites);

    localStorage.setItem('favourites', JSON.stringify(favourites));
}
