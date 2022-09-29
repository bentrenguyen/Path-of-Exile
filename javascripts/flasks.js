/* FLASKS - START */
import flask_json from "../assets/flask_with_substrings.json" assert {type: "json"};
import submod_shortest_substring from "../assets/submod_shortest_substring.json" assert {type: "json"};
// populate flask modlist
var flask_prefixes = [
    '# to Maximum Charges',
    '#% increased Charge Recovery',
    '#% increased Charge Recovery #% reduced effect',
    '#% chance to gain a Flask Charge when you deal a Critical Strike',
    'Gain # Charge when you are Hit by an Enemy',
    '#% reduced Duration #% increased effect',
    '#% increased Duration',
    '#% reduced Charges per use'
]

var flask_suffixes = [
    '#% increased Armour during Flask effect',
    '#% increased Evasion Rating during Flask effect',
    '#% increased Movement Speed during Flask effect',
    '#% increased Block and Stun Recovery during Flask effect',
    '#% additional Elemental Resistances during Flask effect',
    '#% of Attack Damage Leeched as Life during Flask effect',
    '#% of Spell Damage Leeched as Energy Shield during Flask effect',
    '#% increased Attack Speed during Flask effect',
    '#% increased Cast Speed during Flask effect',
    '#% increased Critical Strike Chance during Flask Effect',
    '#% chance to Freeze, Shock and Ignite during Flask effect',
    '#% Chance to Avoid being Stunned during Flask Effect',
    '#% reduced Effect of Chill on you during Flask Effect #% reduced Freeze Duration on you during Flask Effect',
    '#% reduced Effect of Shock on you during Flask Effect',
    '#% reduced Effect of Curses on you during Flask Effect',
    '#% chance to Avoid being Chilled during Flask Effect #% chance to Avoid being Frozen during Flask Effect',
    '#% chance to Avoid being Ignited during Flask Effect',
    '#% chance to Avoid being Shocked during Flask Effect',
    '#% less Duration Immunity to Poison during Flask Effect',
    '#% less Duration Immunity to Shock during Flask Effect',
    '#% less Duration Immunity to Freeze and Chill during Flask Effect',
    '#% less Duration Immunity to Ignite during Flask effect Removes Burning on use',
    '#% less Duration Immunity to Bleeding and Corrupted Blood during Flask Effect'
]

flask_prefixes.forEach(add_flask_title, true);
flask_suffixes.forEach(add_flask_title, false);

function add_flask_title(elem) {
    var prefix = this.valueOf();
    if (prefix) {
        var flask_affixes = document.getElementById("flaskprefixes");
    } else {
        var flask_affixes = document.getElementById("flasksuffixes");
    }
    var entry = document.createElement('p');
    
    entry.classList.add("collapsible");
    entry.appendChild(document.createTextNode(elem));
    flask_affixes.appendChild(entry);
    var entryList = document.createElement('ol');
    entryList.id = elem;
    entryList.classList.add("collapse");
    entry.parentNode.insertBefore(entryList, entry.nextSibling);
}


for (let i = 0; i < flask_prefixes.length; i++) {
    flask_json[flask_prefixes[i]].forEach(add_flask_mods, flask_prefixes[i])
}

for (let j = 0; j < flask_suffixes.length; j++) {
    flask_json[flask_suffixes[j]].forEach(add_flask_mods, flask_suffixes[j])
}

function add_flask_mods(elem) {
    var list_id = this.valueOf();
    var flask_affixes = document.getElementById(list_id);
    var entry = document.createElement('li');
    entry.classList.add('flaskmod');
    entry.appendChild(document.createTextNode(elem[2]));
    flask_affixes.appendChild(entry);
}

// collapse 

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    

  });
}

var flask_mods = document.getElementsByClassName('flaskmod');
// TODO: will need to implement prefix vs suffix
var j;
for (j = 0; j < flask_mods.length; j++) {
    flask_mods[j].addEventListener("click", function() {
        // add substring to substringbox

        function remove_substring(substring) {
            if (document.getElementById("substringbox").textContent.includes('|'+substring)) {
                document.getElementById("substringbox").textContent = document.getElementById("substringbox").textContent.replace('|' + substring, '');
            } else if (document.getElementById("substringbox").textContent.includes(substring+'|')) {
                document.getElementById("substringbox").textContent = document.getElementById("substringbox").textContent.replace(substring+ '|', '');
            } else {
                document.getElementById("substringbox").textContent = document.getElementById("substringbox").textContent.replace(substring, '');
            }
        }
        var substring = submod_shortest_substring[this.textContent];
        var add_substring_end = true;

        // if already checked, then remove
        if (this.classList.contains("checked")) {
            this.classList.toggle("checked");
            this.parentElement.previousElementSibling.classList.remove('checked');

            remove_substring(substring);
            add_substring_end = false;
        } else {
            // remove any other checked elements in this list
            var modlist = document.getElementById(this.parentElement.id).children;
            for (var k= 0; k < modlist.length; k++) {
                if (modlist[k].classList.contains("checked")) {
                    modlist[k].classList.remove("checked");
                    // if different tier is selected, remove previous tier
                    var prev_substring = submod_shortest_substring[modlist[k].textContent];
                    remove_substring(prev_substring);
                }
            }
            // then add checked
            this.classList.toggle("checked");
            this.parentElement.previousElementSibling.classList.add('checked');
        }

        if (add_substring_end) {
            // if substringbox empty, add substring
            if (document.getElementById("substringbox").textContent == "" || document.getElementById("substringbox").textContent == '""') {
                document.getElementById("substringbox").textContent = `"${substring}"`;
            }
            // adding substring 
            else {
                document.getElementById("substringbox").textContent = document.getElementById("substringbox").textContent.slice(0, -1)+ '|' + substring + '"';
            }
        }

        // clean up empty substring
        if (document.getElementById("substringbox").textContent == '""') {
            document.getElementById("substringbox").textContent = "";
        }
    })
}
/*

substring = substring_json[ev.target.textContent.toLowerCase()]
if (document.getElementById("substringbox").textContent == '') {
  document.getElementById("substringbox").textContent = '"!' + substring + '"';
}
else if (ev.target.classList.contains('checked')) {
  if (document.getElementById("substringbox").textContent.includes('|'+substring)) {
    document.getElementById("substringbox").textContent = document.getElementById("substringbox").textContent.replace('|' + substring, '');
  }
  else if (document.getElementById("substringbox").textContent.includes(substring+'|')) {
    document.getElementById("substringbox").textContent = document.getElementById("substringbox").textContent.replace(substring+ '|', '');
  }
  else {
    document.getElementById("substringbox").textContent = '';
  }
} else {
  document.getElementById("substringbox").textContent = document.getElementById("substringbox").textContent.slice(0, -1)+ '|' + substring + '"';
}

/* FLASKS - END */