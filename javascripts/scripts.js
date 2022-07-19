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

var className;
var gems = [];
function decode() {
  var b64Data = document.getElementById('test').value;
  var strData = atob(b64Data);
  var charData = Array.from(strData, x => x.charCodeAt(0));
  var binData = new Uint8Array(charData);
  var data = pako.inflate(binData);
  var decoded_text = String.fromCharCode.apply(null, new Uint16Array(data));
  document.getElementById("decoded").textContent = decoded_text;

  parser = new DOMParser();
  xml = parser.parseFromString(decoded_text, "text/xml");
  className = xml.getElementsByTagName("Build")[0].getAttribute("className");
  var xml_gems = xml.getElementsByTagName("Gem");
  for (i = 0; i < xml_gems.length; i++) {
    gem_name = xml_gems[i].getAttribute("nameSpec");
    gems += gem_name;
  }
  document.getElementById('className').textContent = className;
  document.getElementById('gemlist').textContent = gems;
}

var red_gems_json = {'absolution': 'abs',
'ancestral warchief': 'arc',
'anger': 'ger',
'animate guardian': 'ani',
'battlemages cry': 'bat',
'berserk': 'ber',
'bladestorm': 'bla',
'boneshatter': 'nes',
'chain hook': 'hai',
'cleave': 'cle',
'consecrated path': 'con',
'corrupting fever': 'cor',
'decoy totem': 'dec',
'defiance banner': 'def',
'determination': 'det',
'devouring totem': 'dev',
'dominating blow': 'dom',
'dread banner': 'dre',
'earthquake': 'thq',
'earthshatter': 'ths',
'exsanguinate': 'exs',
'flesh and stone': 'fle',
'generals cry': 'als',
'glacial hammer': 'gla',
'ground slam': 'gro',
'heavy strike': 'avy',
'holy flame totem': 'hol',
'ice crash': 'ice',
'immortal call': 'imm',
'intimidating cry': 'int',
'molten shell': 'she',
'perforate': 'per',
'petrified blood': 'pet',
'pride': 'pri',
'protective link': 'cti',
'punishment': 'pun',
'rage vortex': 'vor',
'rallying cry': 'lly',
'reckoning': 'rec',
'rejuvenation totem': 'rej',
'searing bond': 'sea',
'seismic cry': 'sei',
'shield crush': 'rus',
'smite': 'mit',
'static strike': 'tat',
'steelskin': 'ste',
'sunder': 'sun',
'sweep': 'swe',
'tectonic slam': 'nic',
'vengeance': 'eng',
'vigilant strike': 'vig',
'vitality': 'vit',
'vulnerability': 'vul',
'warlords mark': 'arl',
'added fire damage support': 'add',
'arrogance support': 'arr',
'ballista totem support': 'bal',
'behead support': 'beh',
'bloodlust support': 'odl',
'bloodthirst support': 'odt',
'brutality support': 'bru',
'burning damage support': 'bur',
'cast on melee kill support': 'kil',
'cast when damage taken support': 'whe',
'chance to bleed support': 'han',
'cold to fire support': 'col',
'cruelty support': 'rue',
'damage on full life support': 'ful',
'divine blessing support': 'div',
'earthbreaker support': 'thb',
'elemental damage with attacks support': 'eme',
'empower support': 'emp',
'endurance charge on melee stun support': 'ran',
'fire penetration support': 'pen',
'fist of war support': 'fis',
'generosity support': 'ero',
'increased duration support': 'inc',
'inspiration support': 'ins',
'iron grip support': 'gri',
'iron will support': 'wil',
'knockback support': 'kno',
'life gain on hit support': 'gai',
'life leech support': 'eec',
'lifetap support': 'fet',
'maim support': 'mai',
'melee physical damage support': 'phy',
'melee splash support': 'spl',
'multiple totems support': 'tip',
'multistrike support': 'tis',
'pulverise support': 'pul',
'ruthless support': 'uth',
'spell totem support': 'spe',
'urgent orders support': 'urg',
'ancestral protector': 'al p',
'blood and sand': 'ood ',
'enduring cry': 'duri',
'flame link': 'me l',
'herald of ash': 'of a',
'herald of purity': 'of p',
'leap slam': 'leap',
'purity of fire': 'ty o',
'reap': 'reap',
'shield charge': 'd ch',
'shockwave totem': 've t',
'summon flame golem': 'n fl',
'summon stone golem': 'one ',
'war banner': 'ar b',
'ancestral call support': 'all ',
'eternal blessing support': 'tern',
'fortify support': 'fort',
'less duration support': 'ss d',
'shockwave support': 've s',
'infernal blow': 'l blo',
'infernal cry': 'nal c',
'molten strike': 'en st',
'ancestral cry': 'ral cr',
'rage support': 'rage s',
'stun support': '^stun'} ;
var green_gems_json = {'ambush': 'amb',
'animate weapon': 'nim',
'arctic armour': 'rct',
'artillery ballista': 'rti',
'blade flurry': 'flu',
'blade vortex': 'vor',
'bladefall': 'def',
'blood rage': 'loo',
'burning arrow': 'bur',
'caustic arrow': 'cau',
'cobra lash': 'cob',
'cremation': 'cre',
'cyclone': 'cyc',
'desecrate': 'ese',
'detonate dead': 'det',
'double strike': 'dou',
'dual strike': 'dua',
'elemental hit': 'ele',
'ensnaring arrow': 'ens',
'ethereal knives': 'ere',
'fire trap': 'fir',
'flamethrower trap': 'fla',
'flicker strike': 'ick',
'frenzy': 'fre',
'frost blades': 'fro',
'galvanic arrow': 'gal',
'grace': 'gra',
'hatred': 'atr',
'herald of agony': 'ago',
'intuitive link': 'ntu',
'lacerate': 'lac',
'lancing steel': 'nci',
'mirror arrow': 'irr',
'pestilent strike': 'pes',
'phase run': 'pha',
'plague bearer': 'pla',
'poachers mark': 'poa',
'poisonous concoction': 'ono',
'precision': 'pre',
'puncture': 'pun',
'purity of ice': 'pur',
'rain of arrows': 'ows',
'reave': 'eav',
'riposte': 'rip',
'scourge arrow': 'sco',
'seismic trap': 'sei',
'shattering steel': 'sha',
'shrapnel ballista': 'shr',
'siege ballista': 'sie',
'smoke mine': 'smo',
'snipers mark': 'sni',
'spectral helix': 'hel',
'spectral shield throw': 'shi',
'splitting steel': 'itt',
'storm rain': 'sto',
'summon ice golem': 'sum',
'temporal rift': 'rif',
'toxic rain': 'xic',
'unearth': 'une',
'vampiric link': 'vam',
'venom gyre': 'ven',
'viper strike': 'vip',
'volatile dead': 'ola',
'whirling blades': 'whi',
'wild strike': 'wil',
'withering step': 'tep',
'added cold damage support': 'dde',
'additional accuracy support': 'ddi',
'advanced traps support': 'adv',
'arrow nova support': 'nov',
'block chance reduction support': 'loc',
'cast on death support': 'ath',
'chance to flee support': 'fle',
'close combat support': 'ose',
'cluster traps support': 'clu',
'cold penetration support': 'pen',
'culling strike support': 'cul',
'deadly ailments support': 'adl',
'enhance support': 'enh',
'faster attacks support': 'tta',
'focused ballista support': 'foc',
'fork support': 'for',
'hypothermia support': 'hyp',
'ice bite support': 'bit',
'impale support': 'imp',
'lesser multiple projectiles support': 'ess',
'mana leech support': 'ana',
'mirage archer support': 'ira',
'nightblade support': 'nig',
'onslaught support': 'ons',
'pierce support': 'pie',
'point blank support': 'oin',
'second wind support': 'eco',
'slower projectiles support': 'slo',
'swift assembly support': 'ass',
'trap and mine damage support': 'and',
'vicious projectiles support': 'vic',
'vile toxins support': 'vil',
'void manipulation support': 'voi',
'withering touch support': 'tou',
'bear trap': 'ear ',
'blade blast': 'de b',
'blade trap': 'de t',
'blast rain': 'st r',
'blink arrow': 'ink ',
'charged dash': 'ed d',
'explosive arrow': 've a',
'explosive concoction': 've c',
'explosive trap': 've t',
'haste': 'hast',
'ice shot': 'e sh',
'spectral throw': 'al t',
'split arrow': 'lit ',
'temporal chains': 'al c',
'tornado shot': 'ado ',
'blind support': 'lind',
'cast on critical strike support': 'on c',
'chain support': 'in s',
'chance to poison support': 'to p',
'critical strike affliction support': 'ke a',
'greater volley support': 'er v',
'mark on hit support': 'ark ',
'swift affliction support': 't af',
'trap support': 'ap s',
'ice trap': 'ice t',
'charged traps support': 'ged t',
'faster projectiles support': 'ter p',
'greater multiple projectiles support': 'ter m',
'multiple traps support': 'ple t',
'herald of ice': 'd of i',
'lightning strike': 'ning s',
'barrage support': 'rrage ',
'lightning arrow': 'tning a',
'barrage': 'barrage',
'tornado': 'tornado',
'dash': '^dash',
'volley support': '^vol'} ;
var blue_gems_json = {'arcane cloak': 'clo',
'arcanist brand': 'ani',
'armageddon brand': 'rma',
'assassins mark': 'ass',
'bane': 'ban',
'blazing salvo': 'laz',
'bodyswap': 'bod',
'brand recall': 'rec',
'clarity': 'lar',
'cold snap': 'col',
'conductivity': 'ndu',
'contagion': 'tag',
'conversion trap': 'nve',
'convocation': 'nvo',
'crackling lance': 'cra',
'creeping frost': 'eep',
'dark pact': 'dar',
'despair': 'esp',
'destructive link': 'ive',
'discharge': 'sch',
'discipline': 'sci',
'divine ire': 'div',
'elemental weakness': 'wea',
'energy blade': 'lad',
'enfeeble': 'enf',
'essence drain': 'sse',
'eye of winter': 'eye',
'fireball': 'reb',
'firestorm': 'res',
'flame dash': 'das',
'flameblast': 'meb',
'flammability': 'amm',
'flesh offering': 'fle',
'forbidden rite': 'for',
'freezing pulse': 'eez',
'frost bomb': 'bom',
'frostbite': 'tbi',
'frostblink': 'tbl',
'frostbolt': 'tbo',
'glacial cascade': 'gla',
'herald of thunder': 'ral',
'hexblast': 'exb',
'hydrosphere': 'hyd',
'ice spear': 'pea',
'icicle mine': 'ici',
'incinerate': 'nci',
'lightning tendrils': 'ndr',
'lightning warp': 'war',
'malevolence': 'mal',
'manabond': 'man',
'orb of storms': 'rms',
'penance brand': 'ena',
'purifying flame': 'rif',
'pyroclast mine': 'pyr',
'raise spectre': 'pec',
'raise zombie': 'zom',
'righteous fire': 'rig',
'rolling magma': 'agm',
'scorching ray': 'sco',
'shock nova': 'sho',
'sigil of power': 'sig',
'siphoning trap': 'oni',
'soulrend': 'ulr',
'spark': 'par',
'spellslinger': 'lls',
'stormbind': 'bin',
'stormblast mine': 'mbl',
'summon carrion golem': 'car',
'summon holy relic': 'hol',
'summon raging spirit': 'rag',
'summon reaper': 'eap',
'summon skeletons': 'ske',
'summon skitterbots': 'ski',
'tempest shield': 'emp',
'void sphere': 'voi',
'voltaxic burst': 'lta',
'vortex': '^vor',
'wave of conviction': 'wav',
'wintertide brand': 'ert',
'wither': 'wither$',
'wrath': 'wra',
'zealotry': 'zea',
'archmage support': 'chm',
'blasphemy support': 'asp',
'blastchain mine support': 'stc',
'bonechill support': 'nec',
'cast when stunned support': 'whe',
'cast while channelling support': 'whi',
'combustion support': 'com',
'concentrated effect support': 'onc',
'controlled destruction support': 'tro',
'decay support': 'dec',
'efficacy support': 'ffi',
'elemental army support': 'rmy',
'elemental focus support': 'foc',
'energy leech support': 'lee',
'enlighten support': 'enl',
'faster casting support': 'fas',
'feeding frenzy support': 'edi',
'hextouch support': 'ext',
'high-impact mine support': 'hig',
'ignite proliferation support': 'ign',
'immolate support': 'imm',
'impending doom support': 'ndi',
'increased area of effect support': 'are',
'increased critical strikes support': 'rik',
'infernal legion support': 'ern',
'infused channelling support': 'nfu',
'innervate support': 'inn',
'intensify support': 'ens',
'item rarity support': 'rar',
'meat shield support': 'mea',
'minefield support': 'nef',
'minion speed support': 'pee',
'physical to lightning support': 'phy',
'pinpoint support': 'inp',
'predator support': 'pre',
'spell echo support': 'cho',
'summon phantasm support': 'pha',
'swiftbrand support': 'swi',
'unbound ailments support': 'unb',
'unleash support': 'unl',
'arc': 'arc$',
'ball lightning': 'all ',
'blight': 'blig',
'bone offering': 'one ',
'flame surge': 'me s',
'flame wall': 'me w',
'frost wall': 't wa',
'ice nova': 'ce n',
'kinetic blast': 'c bl',
'kinetic bolt': 'c bo',
'lightning spire trap': 'pire',
'power siphon': 'er s',
'purity of elements': 'f el',
'purity of lightning': 'of l',
'soul link': 'oul ',
'spirit offering': 'rit ',
'storm brand': 'm br',
'storm burst': 'm bu',
'storm call': 'rm c',
'summon chaos golem': 'n ch',
'summon lightning golem': 'ng g',
'winter orb': 'er o',
'added chaos damage support': 'os d',
'added lightning damage support': 'ed l',
'charged mines support': 'rged',
'elemental penetration support': 'l pe',
'elemental proliferation support': 'l pr',
'increased critical damage support': 'al d',
'lightning penetration support': 'g pe',
'minion damage support': 'on d',
'minion life support': ' lif',
'power charge on critical support': 'r ch',
'spell cascade support': 'll c',
'trinity support': 'trin'};