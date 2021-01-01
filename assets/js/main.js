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

// old attempt at skillgem searchbar
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
		var vendor = vendorTranslate(f.vendors);
        gemDict[name] = [lvl, vendor];
  });
});

function logVendor(vendors) {
	console.log(vendors[0]['name']);
}

function vendorTranslate(vendorData) {
	var retval = [];
	if (vendorData == []) {
		return;
	}
	var act;
	var name;
	var classes;
	for (elem in vendorData) {
		act = vendorData[elem]['act'];
		name = vendorData[elem]['name'];
		classes = vendorData[elem]['classes'];
		str = "Act " + act + ": " + vendorToReadable(name) + " (" + classes + ")";
		retval.push(str);
		retval.push("\n");
	}
	retval = retval.join('');

	return retval;
}

function gemAddRow(table, gemName) {
	var tableRef = document.getElementById(table);
	var newRow = tableRef.insertRow(-1);

	newCell = newRow.insertCell(0);
	newElem = document.createElement('A');
	newElem.innerText = "X";
	newElem.setAttribute("onclick", 'deleteRow(this)')
	newElem.setAttribute("style", "cursor:pointer; text-decoration: none;")
	newElem.setAttribute("class", "gemInfoAdded");
	newCell.appendChild(newElem);

	var newCell  = newRow.insertCell(1);
	var newElem = document.createElement("P");
	newElem.innerText = gemNameAddSpaces(gemName);
	newElem.setAttribute("class", "gemInfoAdded");
	newCell.appendChild(newElem);

	var newCell  = newRow.insertCell(2);
	var newElem = document.createElement("P");
	newElem.setAttribute("class", "gemInfoAdded");
	// look up level req from JSON
	newElem.innerText = getGemLvl(gemName);
	newCell.appendChild(newElem);

	var newCell  = newRow.insertCell(3);
	var newElem = document.createElement("P");
	newElem.setAttribute("class", "gemInfoAdded");
	newElem.innerText = getGemVendor(gemName);
	newCell.appendChild(newElem);

}  

function deleteRow(row) {
	var p=row.parentNode.parentNode;
	p.parentNode.removeChild(p);
}

function getGemLvl(gemName) {
	return gemDict[gemName][0];
}

function getGemVendor(gemName) {
	return gemDict[gemName][1];
}

function removeSpaces(string) {
	return string.replaceAll(" ", "");
}

function vendorToReadable(name) {
	var returnString = "";
	var firstLetter = name[0];
	returnString = returnString.concat(firstLetter.toUpperCase());
	var re = /_(.)/g;
	var rest = name.slice(1);
	rest = rest.replaceAll(re, function(match, capture) {
		return " " + capture.toUpperCase();
	});
	returnString = returnString.concat(rest);
	return returnString;
}

function gemNameAddSpaces(name) {
	var re = /(.)([A-Z])/;
	name = name.replace(re, "$1 $2");
	return name;
}

function fixAllClassesString(string) {
	return;
}