/* FLASKS - START */
import flask_json from "../assets/flask_with_substrings.json" assert {type: "json"}
// populate flask modlist
var flask_prefixes = [
    '# to Maximum Charges',
    '#% increased Charge Recovery',
    '#% increased Charge Recovery #% reduced effect',
    '#% chance to gain a Flask Charge when you deal a Critical Strike',
    'Gain # Charge when you are Hit by an Enemy',
    '#% reduced Duration #% increased effect',
    '#% increased Duration',
    '#% reduced Charges per use']

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
    '#% less Duration Immunity to Bleeding and Corrupted Blood during Flask Effect']

for (let i = 0; i < flask_prefixes.length; i++) {
    flask_json[flask_prefixes[i]].forEach(add_flask_mods, true)
}

for (let j = 0; j < flask_suffixes.length; j++) {
    flask_json[flask_suffixes[j]].forEach(add_flask_mods, false)
}

function add_flask_mods(elem) {
    var prefix = this.valueOf();
    if (prefix) {
        var flask_affixes = document.getElementById("flaskprefixes");
    } else {
        var flask_affixes = document.getElementById("flasksuffixes");
    }
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(elem[2]));
    flask_affixes.appendChild(entry);
}


/* FLASKS - END */