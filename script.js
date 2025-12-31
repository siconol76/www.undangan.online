function openInvitation() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("main").style.display = "flex";

  const music = document.getElementById("bgMusic");
  music.play();
}
function copyRek() {
  navigator.clipboard.writeText("1234567890");
  alert("Nomor rekening disalin");
}
function kirim() {
  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;

  if (!nama || !pesan) return;

  const li = document.createElement("li");
  li.innerHTML = `<strong>${nama}</strong><br>${pesan}`;
  document.getElementById("list").prepend(li);

  document.getElementById("nama").value = "";
  document.getElementById("pesan").value = "";
}
const params = new URLSearchParams(window.location.search);
const namaTamu = params.get("to");

if (namaTamu) {
  document.getElementById("nama-tamu").innerText = namaTamu;
}
