window.addEventListener('load', () => {
  const button1 = document.getElementById('button1');
  button1.addEventListener('click', button1_clicked);
});

function button1_clicked(evt) {
  evt.preventDefault();

  const lines_csv = [
    ["this, is, CSV, file, sample", "\n"],
    ["this, is, CSV, file, sample", "\n"]
  ];
  const blob = new Blob(lines_csv, {type: 'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.download = 'blob_sample_csv.txt';
  a.href = url;
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
