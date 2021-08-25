window.addEventListener('load', () => {
  const button1 = document.getElementById('button1');
  button1.addEventListener('click', button1_clicked);
});

function button1_clicked(evt) {
  evt.preventDefault();

  const lines_csv = [
    [
      'IHP-2105-001',
      1,
      '4526112285341',
      'PW-2',
      40,
      'A​-47-1-2',
      '2021-05-01 09:01:02',
      "\n"
    ],
    [
      'IHP-2105-001',
      2,
      '4526112286683',
      'PW-3',
      25,
      'K-7-85-3',
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
