lightbox.option({
      	'resizeDuration': 200,
      	'wrapAround': true,
      	'albumLabel': "Image %1 of %2",
      	'fadeDuration': 600,
      	'maxHeight': 500,
    	});

function getInfo() {

	for (i = 1; i <= 12; i++) {

		let url = 'http://swapi.co/api/people/' + i;
		let tile = document.createElement("a");

		$.getJSON(url, function(data){

			var caption = "<strong>" + data.name + "</strong><br>";
			caption += " Height: "+ (data.height/30.48).toFixed(1) + " feet<br>";
			caption += " Weight: " + data.mass*(2.2).toFixed(0) + " lbs<br>";
			caption += " Skin: " + data.skin_color.charAt(0).toUpperCase() + data.skin_color.slice(1) + "<br>";
			caption += " Birth Year: " + data.birth_year;

			tile.setAttribute("data-title", caption);
			tile.innerHTML = '<div><h3>' + data.name;
			tile.innerHTML += '</h3></div>';

		});

		tile.setAttribute("href", "images/" + i + ".jpg");
		tile.setAttribute("data-lightbox", "group");

		tile.setAttribute("class", "info-container");
		document.body.appendChild(tile);

	}
}

getInfo();