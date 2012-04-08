$(document).ready () ->
  result = $('#Result')
  generate = ->
    SGPLocal()
    result.selectText() unless result.css('display') is 'none'
    false

  $('#GenerateLabel').click generate
  $('form').submit generate
  $('fieldset input').change -> result.hide()


  if localStorage.MobileLen?
    $('#Len').val localStorage.MobileLen

  if localStorage.MobileDisableTLD == "true"
    disable_TLD = true
    $('#DisableTLD').val localStorage.MobileDisableTLD
  else
    disable_TLD = false

  chrome.tabs.query
    active: true
    windowId: chrome.windows.WINDOW_ID_CURRENT,
    (tabs) ->
      [tab] = tabs
      $('#Domain').val gp2_process_uri tab.url, disable_TLD
