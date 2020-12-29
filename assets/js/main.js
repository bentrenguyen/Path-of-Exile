/*
	Spatial by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Off-Canvas Navigation.

			// Navigation Panel Toggle.
				$('<a href="#navPanel" class="navPanelToggle"></a>')
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						$('#nav').html() +
						'<a href="#navPanel" class="close"></a>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'right'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navPanel')
						.css('transition', 'none');


	});

})(jQuery);


// User added below

$(document).ready(function() {
	// leveling guide
	$("#actDropdown").change(function() {
	  var act = $(this).val();
	  $(".actsDiv").not(act).hide();
	  $(act).show();
	});  
	// watchstone guide
	$("#watchstoneDropdown").change(function() {
		var step = $(this).val();
		$(".watchstoneDiv").not(step).hide();
		$(step).show();
	  });  
  });

  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function() {
	check();
});

function check() {
	$("#contentDiv").load('generic.html #notesImg');
}

/*
document.getElementById("skillGemInput").addEventListener('keyup', event => {
	if (event.code == "Enter") {
		var gemInputText = document.getElementById("skillGemInput").value;
		var gemInputText = gemInputText.replace(" ", "");
		$(".gemItem").each(function() {
			if ($(this).attr("id") == gemInputText) {
				window.find(gemInputText);
				var myElement = document.getElementById(gemInputText);
				var topPos = myElement.offsetTop;
				alert(topPos);
				document.getElementById(gemInputText).scrollTop = topPos;
				/*
			   $(".gemItem").animate({
				   scrollTop: $(this).offset().top
			   });
			   
			}
		});
	}
});
*/

var gemDict = {};
$.getJSON('assets/gemData.json', function(data) {
    $.each(data.gem, function(i, f) {
        var name = removeSpaces(f.name);
        var lvl = f.level;
        var quest = f.quests;
        gemDict[name] = [lvl, quest];
  });
});

function gemAddRow(table, gemName) {
	console.log(gemName);
	console.log(removeSpaces(gemName));

	var tableRef = document.getElementById(table);
	var newRow = tableRef.insertRow(-1);

	var newCell  = newRow.insertCell(0);
	var newElem = document.createElement("P");
	newElem.innerText = gemName;
	newCell.appendChild(newElem);

	var newCell  = newRow.insertCell(1);
	var newElem = document.createElement("P");
	// look up level req from JSON
	newElem.innerText = getGemLvl(gemName);
	newCell.appendChild(newElem);

	var newCell  = newRow.insertCell(2);
	var newElem = document.createElement("P");
	// look up quest reward from JSON
	newElem.innerText = getGemQuest(gemName);
	newCell.appendChild(newElem);

	newCell = newRow.insertCell(3);
	newElem = document.createElement('A');
	newElem.innerText = "X";
	newElem.setAttribute("onclick", 'deleteRow(this)')
	newElem.setAttribute("style", "cursor:pointer; text-decoration: none;")
	newCell.appendChild(newElem);
}  

function deleteRow(row) {
	var p=row.parentNode.parentNode;
	p.parentNode.removeChild(p);
}


function getGemLvl(gemName) {
	var gemLvl = -1;
	gemLvl = gemDict[gemName][0];
	return gemLvl;
}

function getGemQuest(gemName) {
	return "The Brine King";
}


function removeSpaces(string) {
	return string.replaceAll(" ", "");
}