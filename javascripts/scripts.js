var substring_json = {"players cannot regenerate life, mana or energy shield": "reg", "cannot leech from monsters": "eec", "players are cursed with temporal chains": "emp", "monsters are hexproof": "hex", "players have x% reduced effect of non-curse auras from skills": "non", "players are cursed with enfeeble": "enf", "monsters deal x% extra physical damage as cold": "col", "monsters deal x% extra physical damage as lightning": "htn", "area has patches of shocked ground which increase damage taken by x%": "sho", "all monster damage from hits always ignites": "all", "monsters cannot be stunned": "stu", "x% increased monster movement speed x% increased monster attack speed x% increased monster cast speed": "mov", "monsters have a x% chance to cause elemental ailments on hit": "cau", "monsters' action speed cannot be modified to below base value monsters cannot be taunted": "ied", "area has patches of consecrated ground": "nse", "players cannot inflict exposure": "fli", "+x% monster physical damage reduction": "uct", "+x% monster chaos resistance +x% monster elemental resistance": "hao", "players have x% reduced chance to block players have x% less armour": "loc", "players have -x% to amount of suppressed spell damage prevented monsters have x% increased accuracy rating": "rev", "monsters take x% reduced extra damage from critical strikes": "kes", "buffs on players expire x% faster": "buf", "players gain x% reduced flask charges": "fla", "players have x% less cooldown recovery rate": "coo", "players are cursed with vulnerability": "vul", "players are cursed with elemental weakness": "wea", "monsters' skills chain 2 additional times": "tim", "monsters fire 2 additional projectiles": "roj", "monsters have a x% chance to avoid poison, impale, and bleeding": "on,", "monsters maim on hit with attacks": "mai", "monsters hinder on hit with spells": "hin", "monsters steal power, frenzy and endurance charges on hit": "tea", "area has patches of burning ground": "bur", "area has patches of chilled ground": "chi", "area has patches of desecrated ground": "des", "area is inhabited by abominations": "abo", "area is inhabited by animals": "ani", "area is inhabited by demons": "dem", "area is inhabited by ghosts": "gho", "area is inhabited by goatmen": "goa", "area is inhabited by humanoids": "hum", "area is inhabited by cultists of kitava": "cul", "area is inhabited by lunaris fanatics": "lun", "area is inhabited by ranged monsters": "ang", "area is inhabited by skeletons": "ske", "area is inhabited by solaris fanatics": "sol", "area is inhabited by sea witches and their spawn": "sea", "area is inhabited by undead": "ead", "area has increased monster variety": "var", "area contains many totems": "any", "rare monsters each have a nemesis mod x% more rare monsters": "rar", "area contains two unique bosses": "two", "magic monster packs each have a bloodline mod x% more magic monsters": "agi", "slaying enemies close together has a x% chance to attract monsters from beyond": "sla", "map boss is surrounded by tormented spirits": "urr", "map has a vaal side area": "sid", "does not consume sextant uses": "doe", "map has an additional random modifier from kirac's crafting bench": "ndo", "delirium reward type: players in area are 20% delirious": "del", "area contains an additional smuggler's cache": "smu", "areas contain ritual altars": "itu", "area contains 3 additional harbingers": "arb", "area contains an additional legion encounter": "leg", "area is haunted by 5 additional tormented spirits": "hau", "area contains the sacred grove": "sac", "area contains 2 additional abysses": "aby", "area contains 3 additional breaches": "bre", "area contains 3 additional essences": "sen", "area contains 4 additional strongboxes": "tro", "area contains metamorph monsters": "met", "contains an additional expedition encounter": "xpe", "area contains 10 additional guarded vaal vessels": "gua", "area contains 5 additional shrines": "shr", "area is influenced by the shaper": "sha", "area is influenced by the elder": "lde", "monsters reflect x% of elemental damage": "f el", "monsters reflect x% of physical damage": "of p", "-x% maximum player resistances": "% ma", "players have x% less recovery rate of life and energy shield": "ss r", "unique bosses are possessed": "re p", "monsters have x% increased critical strike chance": "d cr", "unique boss deals x% increased damage": "ss d", "monsters poison on hit": "rs p", "monsters have x% chance to impale with attacks": "to i", "monsters gain x% of maximum life as extra maximum energy shield": "of m", "unique boss has x% increased life unique boss has x% increased area of effect": "ss h", "x% more monster life": "er l", "x% less effect of curses on monsters": "ss e", "monsters have +x% chance to suppress spell damage": "ve +", "monsters have x% chance to avoid elemental ailments": "id e", "players have x% less accuracy rating": "s ac", "monsters gain an endurance charge on hit": "n an", "monsters gain a frenzy charge on hit": " a f", "monsters gain a power charge on hit": " a p", "monsters blind on hit": "rs b", "area is inhabited by 2 additional rogue exiles": "by 2", "area contains a blight encounter": "blig", "area is inhabited by 10 additional rogue exiles": "by 1", "monsters deal x% extra physical damage as fire": " as f", "players have x% less area of effect": "ss are", "x% increased monster damage": "d monster d", "monsters have x% increased area of effect": "e \\d+% increased ar"};

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('.mapmods');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
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
    ev.target.classList.toggle('checked');
    document.getElementById("substringbox").classList.remove("copied");
    document.getElementById("copybutton").textContent = "Copy"
    update_length();
  }
}, false);

function reset() {
  document.querySelectorAll('.mapmod').forEach(function(element) {
    element.classList.remove('checked');
  })
  document.getElementById("substringbox").textContent = '';
  document.getElementById("quantselect").value = "Select"
  document.getElementById("packsizeselect").value = "Select"
  document.getElementById("substringbox").classList.remove("copied");
  document.getElementById("copybutton").textContent = "Copy"
  update_length();
}

function copy() {
  var copyText = document.getElementById("substringbox").textContent;
  document.getElementById("substringbox").classList.add("copied");
  document.getElementById("copybutton").textContent = "Copied!"
  navigator.clipboard.writeText(copyText);
}

function searchbox() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchbox");
  filter = input.value.toUpperCase();
  ul = document.getElementById("mapmod_ul");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i]
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function select_dropdown(select_type) {
  var select_list, regex, selected_value;
  if (select_type == "quant") {
    select_list = document.getElementById("quantselect");
    regex = {
      60: "Q.*([6-9]\\d|\\d{3})",
      70: "Q.*([7-9]\\d|\\d{3})",
      80: "Q.*([89]\\d|\\d{3})",
      90: "Q.*(9\\d|\\d{3})",
      100: "Q.*(\\d{3})",
      "Select": ""
    }
  } else if (select_type == "packsize") {
    select_list = document.getElementById("packsizeselect");
    regex = {
      20: "S.*([2-9]\\d)", 
      30: "S.*([3-9]\\d)", 
      40: "S.*([4-9]\\d)", 
      50: "S.*([5-9]\\d)", 
      60: "S.*([6-9]\\d)",
      "Select": ""
    }
  }
  selected_value = select_list.options[select_list.selectedIndex].text;
  
  for (var key in regex) {
    var elem = regex[key]
    if (key == "Select") {
      break;
    }
    var to_break = false;
    if (document.getElementById("substringbox").textContent.indexOf("|"+elem) !== -1) {
      document.getElementById("substringbox").textContent = document.getElementById("substringbox").textContent.replace('|'+elem, '');
      to_break = true;
    } else if (document.getElementById("substringbox").textContent.indexOf(elem+"|") !== -1) {
      document.getElementById("substringbox").textContent = document.getElementById("substringbox").textContent.replace(elem+"|", '');
      to_break = true;
    } else if (document.getElementById("substringbox").textContent.indexOf(elem) !== -1) {
      document.getElementById("substringbox").textContent = document.getElementById("substringbox").textContent.replace(elem, '');
      to_break = true;
    }
    if (document.getElementById("substringbox").textContent == '""') {
      document.getElementById("substringbox").textContent = '';
    }
    if (to_break) {
      break;
    }
  }
  if (selected_value != "Select") {
    if (document.getElementById("substringbox").textContent == "") {
      document.getElementById("substringbox").textContent += '"' + regex[selected_value] + '"'
    } else {
      document.getElementById("substringbox").textContent = document.getElementById("substringbox").textContent.slice(0, -1) +'|' + regex[selected_value] + '"'
    }
  }
  document.getElementById("substringbox").classList.remove("copied");
  document.getElementById("copybutton").textContent = "Copy"
  update_length();
}

/* TODO: length tracker + error on 50+ */
function update_length() {
  var substring_length = document.getElementById("substringbox").textContent.length;
  document.getElementById("lengthtracker").textContent = substring_length;
  if (substring_length > 50) {
    document.getElementById("lengthbox").classList.add("length_error");
    document.getElementById("lengthtrackererror").textContent = " - Error: string is too long";
  } else {
    document.getElementById("lengthbox").classList.remove("length_error");
    document.getElementById("lengthtrackererror").textContent = "";
  }
}
