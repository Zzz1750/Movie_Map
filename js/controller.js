var main_page = document.getElementById("main_page");
var intro_container = document.getElementById('intro_thing');
var error_text = document.getElementById('error_text');
var page_num = 0;
var forteaser ='null';


var movie_name = document.getElementById('movie_name');
var movie_poster = document.getElementById('movie_poster');
var movie_rated = document.getElementById('movie_rated');
var movie_released = document.getElementById('movie_released');
var movie_runtime = document.getElementById('movie_runtime');
var movie_genre = document.getElementById('movie_genre');
var movie_director = document.getElementById('movie_director');
var movie_writer = document.getElementById('movie_writer');
var movie_actors = document.getElementById('movie_actors');
var movie_plot = document.getElementById('movie_plot');
var movie_language = document.getElementById('movie_language');
var movie_country = document.getElementById('movie_country');
var movie_awards = document.getElementById('movie_awards');
var back_home = document.getElementById('back_home');
var trailer = document.getElementById('trailer');

document.addEventListener('keypress', function (event) {
    if (page_num == 0) {
        if (event.key === 'Enter') {
            submitted();
        }
    }
});

setTimeout(intro_hider, 5500);

function intro_hider() {
    intro_container.style.display = 'none';
    main_page.style.display = 'block';
}

function submitted() {
    page_num = 1;
    var input_text = document.getElementById('movieTitle').value;

    if (input_text.trim() === "") {
        error_text.style.display = 'block';
        error_text.innerHTML = "Field cannot be Empty!";
        void error_text.offsetWidth;
        error_text.style.animationName = 'none';
        setTimeout(() => { error_text.style.animationName = 'error_animation'; }, 10)
        setTimeout(error_vanisher, 5000);
    } else {
        searchMovie()
    }

}

function error_vanisher() {
    error_text.innerHTML = "";
    error_text.style.display = 'none';
}

async function searchMovie() {
    const apiKey = 'b4636334';
    const movieTitle = document.getElementById('movieTitle').value;
    var apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;

    const response = await fetch(proxyUrl);
    const data = await response.json();
    const movieData = JSON.parse(data.contents);

    if (movieData.Response === 'True') {
        if(movieData.Poster === 'N/A' || movieData.Rated === 'N/A' || movieData.Actors ==='N/A'){
            movie_not_found();
        }
        else{
            intro_container.style.display = "block";
            main_page.style.display = "none";
            setTimeout(loader_killer_detailpage, 5500)
        }
        }
    else {
       movie_not_found(); 
    }

    function movie_not_found(){
        error_text.style.display = 'block';
        error_text.innerHTML = "Movie not Found!";
        void error_text.offsetWidth;
        error_text.style.animationName = 'none';
        setTimeout(() => { error_text.style.animationName = 'error_animation'; }, 10)
        setTimeout(error_vanisher, 5000);
    }

    function print_detail() {
        forteaser = movieData.Title;
        movie_name.innerHTML = movieData.Title;
        movie_poster.src = movieData.Poster;
        movie_poster.alt = "no image";
        movie_rated.innerHTML = "<strong>Rated</strong>: " + movieData.Rated;
        movie_released.innerHTML = "<strong>Released:</strong> " + movieData.Released;
        movie_runtime.innerHTML = "<strong>Runtime:</strong> " + movieData.Runtime;
        movie_genre.innerHTML = "<strong>Genre:</strong> " + movieData.Genre;
        movie_director.innerHTML = "<strong>Director:</strong> " + movieData.Director;
        movie_writer.innerHTML = "<strong>Writer:</strong> " + movieData.Writer;
        movie_actors.innerHTML = "<strong>Actors:</strong> " + movieData.Actors;
        movie_plot.innerHTML = "<strong>Plot:</strong> " + movieData.Plot;
        movie_language.innerHTML = "<strong>Language:</strong> " + movieData.Language;
        movie_country.innerHTML = "<strong>Country:</strong> " + movieData.Country;
        movie_awards.innerHTML = "<strong>Awards:</strong> " + movieData.Awards;
    }

    function loader_killer_detailpage() {
        intro_container.style.display = "none";
        print_detail();
        setTimeout(movie_name_displayer, 1);
    }
}

function movie_name_displayer() {
    movie_name.style.display = "block";
    setTimeout(opacity_player, 50);

}

function opacity_player() {
    movie_name.style.opacity = 1;
    setTimeout(movie_name_goup, 300);
}

function movie_name_goup() {
    movie_name.style.top = '5%';
    movie_name.style.transition = '1s';
    setTimeout(movie_data_goup, 250);
}

function movie_data_goup() {
    movie_poster.style.display = 'block';
    movie_rated.style.display = "block";
    movie_released.style.display = "block";
    movie_runtime.style.display = "block";
    movie_genre.style.display = "block";
    movie_language.style.display = "block";
    movie_country.style.display = "block";
    movie_awards.style.display = "block";
    movie_director.style.display = 'block';
    movie_writer.style.display = 'block';
    movie_actors.style.display = 'block';
    movie_plot.style.display = 'block';
    back_home.style.display='block';
    trailer.style.display='block';
    setTimeout(movie_data_goup2, 30)
}
function movie_data_goup2() {
    movie_poster.style.opacity = '1';
    movie_poster.style.transition = ' 1s';
    movie_poster.style.top = '19%'

    movie_rated.style.opacity = '0.8';
    movie_rated.style.transition = ' 1s';
    movie_rated.style.top = '18.5%';

    movie_released.style.opacity = '0.8';
    movie_released.style.transition = ' 1s';
    movie_released.style.top = '25%';

    movie_runtime.style.opacity = '0.8';
    movie_runtime.style.transition = ' 1s';
    movie_runtime.style.top = '31.5%';

    movie_genre.style.opacity = '0.8';
    movie_genre.style.transition = ' 1s';
    movie_genre.style.top = '38%';

    movie_language.style.opacity = '0.8';
    movie_language.style.transition = ' 1s';
    movie_language.style.top = '44.5%';

    movie_country.style.opacity = '0.8';
    movie_country.style.transition = ' 1s';
    movie_country.style.top = '51%';

    movie_awards.style.opacity = '0.8';
    movie_awards.style.transition = ' 1s';
    movie_awards.style.top = '57.5%';

    movie_director.style.opacity = '0.8';
    movie_director.style.transition = ' 1s';
    movie_director.style.top = '20.5%';

    movie_writer.style.opacity = '0.8';
    movie_writer.style.transition = ' 1s';
    movie_writer.style.top = '27%';

    movie_actors.style.opacity = '0.8';
    movie_actors.style.transition = ' 1s';
    movie_actors.style.top = '33.5%';

    movie_plot.style.opacity = '0.8';
    movie_plot.style.transition = ' 1s';
    movie_plot.style.top = '42%';

    back_home.style.opacity='1';
    back_home.style.transition='1s';
    back_home.style.top='80%';

    trailer.style.opacity='1';
    trailer.style.transition='1s';
    trailer.style.top='80%';

}
function searchTeaser() {
    const searcher = forteaser + ' trailer';
    const url = `https://www.youtube.com/results?search_query=${searcher}`;
    window.open(url, '_blank');
}



//loading_control
document.addEventListener("DOMContentLoaded", () => {
    const test = new Letterize({
        targets: ".animate-me"
    });

    const animation = anime.timeline({
        targets: test.listAll,
        delay: anime.stagger(100, {
            grid: [test.list[0].length, test.list.length],
            from: "center"
        }),
        loop: true
    });

    animation
        .add({
            scale: 0.5
        })
        .add({
            letterSpacing: "10px"
        })
        .add({
            scale: 1
        })
        .add({
            letterSpacing: "6px"
        });
});






//input_control
document.addEventListener('DOMContentLoaded', function () {
    const placeholder = document.getElementById('movieTitle');
    const texts = ["Titanic ","Little Women ", "La La Land ", "Brain on Fire ", "The Conjuring ","Annabelle ","The Maze ","Finding Nemo ", "Ratatouille ", "Social Network ","Before Sunrise ","Charlie's Angles ","Coraline "];
    let charIndex = 0;
    let deleting = false;
    let textIndex = 0;
    textIndex=randomiser(textIndex);


    //random suggestions
    function typeEffect() {
        randomIndex = Math.floor(Math.random() * texts.length);
        const currentText = texts[textIndex];
        placeholder.placeholder = deleting? currentText.substring(0, charIndex--): currentText.substring(0, charIndex++);

        if (!deleting && charIndex === currentText.length) {
            deleting = true;
            setTimeout(typeEffect, 1000);
        } else if (deleting && charIndex === 0) {
            deleting = false;
            textIndex = randomiser(textIndex);
            setTimeout(typeEffect, 500); 
        } else {
            setTimeout(typeEffect, 150);
        }
    }

    function randomiser(textIndex){
        new_random = Math.floor(Math.random() * texts.length);
        if(new_random == textIndex){
            return randomiser(textIndex);
        }
        else{
            return new_random;
        }
    }

    setTimeout(typeEffect,5500);
});

document.getElementById('movieTitle').addEventListener('input', function(event) {
    let value = event.target.value;
    if (value.length > 0) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
        event.target.value = value;
    }
});