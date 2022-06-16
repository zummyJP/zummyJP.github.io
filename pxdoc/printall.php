<?php
header('Content-type: application/xpxd; charset=UTF-8');
?>
<?xml version='1.0' encoding='utf-8'?>
<pxd paper-type='A4'>
  <page>
    <svg width='21cm' height='29.7cm' viewBox='0 0 2100 2970'>
      <text x='100' y='400' font-size='100'>
        <?php
if (isset($_POST['editmode'])) {
    echo '印刷ボタン'.$_POST['editmode'].'が押されました';
}?>
      </text>
      <text x='100' y='500' font-size='80'>
フォームで入力された文字：
        <?php
    echo($_POST['txt']);
?>
      </text>
    </svg>
  </page>
</pxd>