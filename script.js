const API_KEY = 'api_key=c800206ebd27d3b6b6e7b19c646c4928';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
fetch(API_URL)
    .then(data => data.json())
    .then(data =>{
        console.log(data)
        console.log(data["results"][0]["title"])
        for (let x = 0; x < data["results"].length; x++){
            document.body.innerHTML += data["results"][x]["title"]
        }
    })

const coursCard = document.getElementById('cours')
fetch(API_URL).then(data => data.json()).then(data =>  {

    data["results"].forEach(e => {
    console.log(e)
        coursCard.innerHTML += `
        <div class="card">
            <img src=" ${e.title} " alt="Cours Image">
            <div class="title">
                <h2> data["results"][x]["title"] </h2>
                <div class="subtitle">
                    <p> ${e.programme} </p>
                    <p> - </p>
                    <p>${e.year} </p>
                </div>
            </div>
            <hr>
            <div class="content">
                <p class="desc"> ${e.description}</p>
                <div class="date">
                    <p> ${e.date_debut} </p>
                    <p> -> </p>
                    <p> ${e.date_fin} </p>
                </div>
            </div>
        </div>
        `
    })
})
    .catch(function(error) {
        console.log(error);
    })

