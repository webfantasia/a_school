// ハンバーガーリンクからメニューを消す 

$(function() {
    $('.drawer-item>a').click(function() {
      $('#drawer_input').removeAttr('checked').prop('checked', false).change();
    });
  });
