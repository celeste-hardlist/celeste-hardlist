function columnToLetter(column) {
  var temp,
    letter = "";
  while (column > 0) {
    temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }
  return letter;
}

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var clear = sheet.getSheetByName("Clears");
  var data = [];
  var values = clear.getDataRange().getValues();

  for (var i = 2; i < 41; i++) {
    if (i == 8 || i == 20) {
      continue;
    }
    var map = {};
    map["mapName"] = values[i][0];
    m = [];
    for (var j = 3; j < values[i].length; j++) {
      if (values[i][j] != "") {
        var person = {};
        person["name"] = values[0][j];
        person["type"] = values[i][j];
        var col = columnToLetter(j + 1);
        var letter = i + 1;
        const range = clear.getRange(col + letter);
        const RichTextValue = range.getRichTextValue().getRuns();
        const res = RichTextValue.reduce((ar, e) => {
          const url = e.getLinkUrl();
          if (url) ar.push(url);
          return ar;
        }, []);
        person["link"] = res;
        m.push(person);
        //map[values[0][j]] = values[i][j];
      }
    }
    map["completions"] = m;
    data.push(map);
    console.log(map);
    delete row;
  }
  return ContentService.createTextOutput(
    JSON.stringify({ data: data }, null, 2)
  ).setMimeType(ContentService.MimeType.JSON);
}
