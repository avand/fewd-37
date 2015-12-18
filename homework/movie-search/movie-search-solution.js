// In jQuery terms:

var form = document.querySelector("#movie-search-form");     // $("#movie-search-form").on("submit", formSubmitted)
form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
event.preventDefault();
var query = document.querySelector("#query").value;        // $("#query").val()
var url = "http://omdbapi.com/?s=" + query;
$.get(url, resultsReceived);
}

function resultsReceived(results) {
results["Search"].forEach(displayMovie);
}

function displayMovie(movie) {
// Create new elements (x4)                                // In jQuery terms:
var item = document.createElement("li");                   // $("<li>")
var link = document.createElement("a");                    // $("<a>")
var title = document.createElement("div");                 // $("<div>")
var release = document.createElement("div");

// Set element text content (x2)
link.textContent = movie["Title"];                         // item.text(movie["Title"])
release.textContent = movie["Year"];

// Set element attributes (x2)
var url = "http://www.imdb.com/title/" + movie["imdbID"];
link.setAttribute("href", url);                            // link.attr("href", url)
link.setAttribute("target", "_blank");

// Add CSS classes to elements (x3)
item.classList.add("movie");                               // item.addClass("movie")
title.classList.add("movie-title");
release.classList.add("movie-release-date");

// Append elements (x4)
title.appendChild(link);                                   // title.append(link)
item.appendChild(title);
item.appendChild(release);
document.querySelector("#movies").appendChild(item);       // item.appendTo("#movies")

// Full jQuery version of this function:
//
// var item = $("<li>").addClass("movie").appendTo("#movies");
// var title = $("<div>").addClass("movie-title").appendTo(item);
//
// var url = "http://www.imdb.com/title/" + movie["imdbID"];
//
// $("<a>").attr("href", url).attr("target", "_blank").text(movie["Title"]).appendTo(title);
//
// $("<div>").text(movie["Year"]).addClass("movie-release-date").appendTo(item);
}
