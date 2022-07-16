var gemDict = {};

$.getJSON('assets/data.json', function(data) {
    $.each(data.gem, function(i, f) {
        var name = f.name;
        var lvl = f.level;
        var quest = f.quests;
        gemDict[name] = [lvl, quest];

  });
  var tblRow = "<tr>" + "<td>" + gemDict["Empower Support"][0] + "</td>" +
  "<td>" + gemDict["Added Chaos Damage Support"][0] + "</td>" + "<td>" + gemDict["Added Chaos Damage Support"][0] + "</td>" + "<td>" + gemDict["Added Chaos Damage Support"][0] + "</td>" + "</tr>"
  $(tblRow).appendTo("#userdata tbody");

});
