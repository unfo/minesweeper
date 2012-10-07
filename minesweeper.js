// minesweeper.js

$(function() {
	var KORKEUS = 9;
	var LEVEYS = 9;
	var MIINA_KPL = 9;
	var MIINOJA_PER_RIVI = 2;

	var pelilauta = $("<table></table>");

	for (var rivinumero = 1; rivinumero <= KORKEUS; rivinumero++) {
		var rivi = $("<tr></tr>");
		var miinojarivilla = 0;
		for (var sarake = 1; sarake <= LEVEYS; sarake++) {
			var ruutu = $("<td></td>");
			ruutu.text('-');
			ruutu.addClass('rivi_' + rivinumero);
			ruutu.addClass('ruutu_' + sarake);
			rivi.append(ruutu);
		}
		pelilauta.append(rivi);
	}

	$("body").append(pelilauta);


	while (MIINA_KPL > 0) {
		var miinarivi = satunnainen(KORKEUS);
		var miinaruutu = satunnainen(LEVEYS);
		var ruutu = $("td.ruutu_" + miinaruutu + ".rivi_" + miinarivi);
		console.log(ruutu);
		if (ruutu.hasClass('miina')) { 
			// Ei voida pistaa toista miinaa
		} else {
			ruutu.text('M');
			ruutu.addClass('miina');
			MIINA_KPL--;
		}

	}

	function satunnainen(maksimi) { 
		return Math.ceil(Math.random() * maksimi);
	}
});