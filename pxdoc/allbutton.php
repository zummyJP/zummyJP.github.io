<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>PHPTest1</title>
<script src="./js/px3.js"></script>
<script type="text/javascript">
<!--
function sendMode(data){
 document.getElementById("editmode").value=data;
}
-->
</script>
</head>
<body>
<h1>全てのボタンが印刷ボタン</h1>
<form id="printForm" method="POST" action="printall.php">
<table>
  <tr>
    <td width='120'>印刷される文字</td>
    <td width='200'><input type="text" name="txt" /></td>
  </tr>
  <tr>
    <td colspan='2'>
    <input type="submit" name="print" value="印刷ボタン1" onclick="sendMode(1)" />
    <input type="submit" name="print" value="印刷ボタン2" onclick="sendMode(2)" />
    </td>
  </tr>
</table>
<input type="hidden" id="editmode" name="editmode" value="0">
</form>
<script type="text/javascript">
<!--
//submitボタンより後に置く
    pxd.printoutForm('#printForm');
-->
</script>
</body>
</html>