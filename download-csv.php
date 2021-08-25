<?php 

  // 出力情報の設定
  header("Content-Dispositionntent-Type: application/octet-stream");
  header("Content-Disposition: attachment; filename=入庫実績データ.csv");
  header("Content-Transfer-Encoding: binary");

  // 変数の初期化
  $member = array();
  $csv = null;

  // 出力したいデータのサンプル
  $member = array(
      array(
          'ihp_id' => 'IHP-2105-001',
          'sequence' => 1,
          'product_code' => '4526112285341',
          'product_code_short' => 'PW-2',
          'cartons' => 40,
          'location_code' => 'A​-47-1-2'
          'created_at' => '2021-05-01 09:01:02'
      ),
      array(
          'ihp_id' => 'IHP-2105-001',
          'sequence' => 2,
          'product_code' => '4526112286683',
          'product_code_short' => 'PW-3',
          'cartons' => 25,
          'location_code' => 'K-7-85-3'
          'created_at' => '2021-05-01 09:12:13'
      ),
  );

  // 1行目のラベルを作成
  $csv = '"入庫指示id", "明細番号", "JANコード", "略番", "カートン数", "ロケコード", "登録日時",' . "\n";


  // 出力データを生成
  foreach ($member as $value) {
    $csv .= '"'.
      $value['ihp_id']             .'","'.
      $value['sequence']           .'","'.
      $value['product_code']       .'","'.
      $value['product_code_short'] .'","'.
      $value['cartons']            .'","'.
      $value['location_code']      .'","'.
      $value['created_at']         . '"' .
      "\n";
  }

  // CSVファイル出力
  echo $csv;
  return;