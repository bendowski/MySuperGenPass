
$(document).ready(function() {
  var disable_TLD, generate, result;
  result = $('#Result');
  generate = function() {
    SGPLocal();
    if (!result.is(':hidden')) result.selectText();
    return false;
  };
  $('#GenerateLabel').click(generate);
  $('form').submit(generate);
  $('fieldset input').change(function() {
    return result.hide();
  });
  if (localStorage.MobileLen != null) $('#Len').val(localStorage.MobileLen);
  if (localStorage.MobileDisableTLD === "true") {
    disable_TLD = true;
    $('#DisableTLD').val(localStorage.MobileDisableTLD);
  } else {
    disable_TLD = false;
  }
  return chrome.tabs.query({
    active: true,
    windowId: chrome.windows.WINDOW_ID_CURRENT
  }, function(tabs) {
    var tab;
    tab = tabs[0];
    return $('#Domain').val(gp2_process_uri(tab.url, disable_TLD));
  });
});
