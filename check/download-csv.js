window.addEventListener('load', () => {
  const button1 = document.getElementById('button1');
  button1.addEventListener('click', button1_clicked);
});

function button1_clicked(evt) {
  evt.preventDefault();

  const lines_csv = [
    [
      '入庫指示番号',
      '明細番号',
      '略番',
      'JANコード',
      '品目名',
      '大箱入数',
      'カートン数',
      '倉庫',
      '種別',
      '積み方',
      '登録日時',
    ],
    [
      'IHP-2105-001',
      1,
      'HH-0',
      '4571111051510',
      'カラフルピンチ４０Ｐ',
      120,
      40,
      'A​-47-1-2',
      '電動',
      '棒6 x 3段', 
      '2021-05-01 09:01:02',
      "\n"
    ],
    [
      'IHP-2105-001',
      2,
      'HH-1',
      '4560112584363',
      'HHランドリーハンガー角型ピンチ24個付',
      80,
      30,
      'K-7-85-3',
      'ラック',
      '5回し x 3段', 
      '2021-05-01 09:12:13',
      "\n"
    ]
  ];
  const blob = new Blob(lines_csv, {type: 'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.download = 'ihr-csv.txt';
  a.href = url;
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
