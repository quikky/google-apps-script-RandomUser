# google-apps-script-RandomUser

Google Apps Script + Google Apps Script Trigger + Google Spreadsheet + Slack Api => RandomUser  
Business day only run : base jpn

## How to Use
1. [file](https://github.com/quikky/google-apps-script-RandomUser/blob/master/RandomUser.gs) upload to Google Apps Script
2. create spreadsheet to Google Drive (Sample Format : [file](https://docs.google.com/spreadsheets/d/14axA0nsQ7VxLiM4TfCjdfCPsZcHYPCF0V3gMVJKa3Zs/edit?usp=sharing))
3. Run Script Time Setting in file [L5 - L6](https://github.com/quikky/google-apps-script-RandomUser/blob/master/RandomUser.gs#L5-L6)
4. Slack Token Setting in file [L34 - L39](https://github.com/quikky/google-apps-script-RandomUser/blob/master/RandomUser.gs#L34-L39) (unknow slack token ? => [Slack Lagacy Token](https://api.slack.com/custom-integrations/legacy-tokens))
5. Spreadsheets Setting in file [L43](https://github.com/quikky/google-apps-script-RandomUser/blob/master/RandomUser.gs#L43)
6. Google Apps Script Trigger Set , method : createTrigger + Time Base : Everyday
