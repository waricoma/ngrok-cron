var page = HtmlService.createTemplateFromFile('page');
var sheet = SpreadsheetApp.getActiveSheet();

function doGet(e) {
  if ('ngrok' in e.parameter) {
    page['msg'] = 'received the value!';
    sheet.getRange('A1').setValue(e.parameter.ngrok);
  } else {
    page['msg'] = '';
  }
  return page.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
