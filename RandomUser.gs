/** --- DAY TRIGGER --- **/
/** DAY TRIGGER Create - Google Trigger **/
function createTrigger() {
    var triggerDay = new Date();
    triggerDay.setHours(13);
    triggerDay.setMinutes(29);
    if (isBusinessDay(new Date())) {
        ScriptApp.newTrigger("RandomUser").timeBased().at(triggerDay).create();
    }
}
/** DAY TRIGGER Delete - RandomUser() **/
function deleteTrigger() {
    var triggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < triggers.length; i++) {
        if (triggers[i].getHandlerFunction() == "RandomUser") {
            ScriptApp.deleteTrigger(triggers[i]);
        }
    }
}
/** Business Day Check **/
function isBusinessDay(date) {
    if (date.getDay() == 0 || date.getDay() == 6) {
        return false;
    }
    var calendar = CalendarApp.getCalendarById('ja.japanese#holiday@group.v.calendar.google.com');
    if (calendar.getEventsForDay(date).length > 0) {
        return false;
    }
    return true;
}
/** --- **/

/** --- SETTING - SLACK TOKEN --- **/
var slack = {
    postUrl: 'https://slack.com/api/chat.postMessage',
    token: 'xoxp-***', // Slack token
    ChannelId: "#random", // ChannelID
    userName: "RandomUserBot", // UserName
}
/** --- **/

/** get SpreadSheet Data **/
var url = "https://docs.google.com/spreadsheets/***"
var sheet = SpreadsheetApp.openByUrl(url);
var startrow = 1;
var startcol = 1;
var lastrow = sheet.getLastRow();
var lastcol = sheet.getLastColumn();
var sheetdata = sheet.getSheetValues(startrow, startcol, lastrow, lastcol); // all get

/** Slack Post **/
function RandomUser() {
    deleteTrigger();
    var Name;
    var NewName;
    var LastName = new String(sheetdata[1][3]);
    Logger.log("前回 : " + LastName);
    do {
        Name = RandomName();
        NewName = new String(Name);
        Logger.log("PICK : " + Name);
    } while (Name == LastName);
    Logger.log("今回 : " + Name);
    sheet.getRange("D2").setValue(NewName);
    var row2 = Math.floor(Math.random() * (lastrow + 1 - startrow)) + startrow;
    if (row2 > (lastrow - startrow)) row2 = (lastrow - startrow);
    var Joke = sheetdata[row2][2];
    var slackApp = SlackApp.create(slack["token"]);
    var Msg = "今日は「<@" + Name + ">」" + Joke
    var Message = slackApp.postMessage(slack["ChannelId"], Msg, {
        username: slack["userName"],
        link_names: 1
    });
    Logger.log(Message);
}

function RandomName() {
    var row = Math.floor(Math.random() * (lastrow + 1 - startrow)) + startrow;
    if (row > (lastrow - startrow)) row = (lastrow - startrow);
    Logger.log(row);
    return Name = sheetdata[row][1];
}
