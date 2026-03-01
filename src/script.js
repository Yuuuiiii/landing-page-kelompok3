/* =========================================
   SCROLL REVEAL
========================================= */

const reveals = document.querySelectorAll("section");

function revealSection(){
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(sec=>{
    const top = sec.getBoundingClientRect().top;

    if(top < trigger){
      sec.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSection);
revealSection();


/* =========================================
   PREVIEW FORM TAMBAH ANGGOTA
========================================= */

function updatePreview(){

  document.getElementById("previewName").textContent =
    document.getElementById("inputNama").value || "Nama Anggota";

  document.getElementById("previewNim").textContent =
    document.getElementById("inputNim").value || "NIM";

  document.getElementById("previewRole").textContent =
    document.getElementById("inputRole").value || "Role";
    
}


/* =========================================
   DATA STORAGE (menyimpan input data di localstorage)
========================================= */

let anggota =
JSON.parse(localStorage.getItem("anggota")) || [];

let fotoBase64 = "";
let sudahLoad = false;


/* =========================================
   HANDLE UPLOAD FOTO (mengubah foto menjadi string agar bisa disimpan)
========================================= */

function handleFoto(event){

  const file = event.target.files[0];
  if(!file) return;

  const reader = new FileReader();

  reader.onload = function(e){

    fotoBase64 = e.target.result;

    const img =
      document.getElementById("previewImg");

    img.src = fotoBase64;
    img.style.display = "block";

    document
      .getElementById("previewPlaceholder")
      .style.display = "none";
  };

  reader.readAsDataURL(file);
}


/* =========================================
   TAMBAH ANGGOTA
========================================= */

function tambahAnggota(){
  const nama =
    document.getElementById("inputNama").value;

  const nim =
    document.getElementById("inputNim").value;

  const role =
    document.getElementById("inputRole").value;

  const deskripsi =
    document.getElementById("inputDeskripsi").value;

  if(!nama || !nim || !role){
    alert("Data belum lengkap");
    return;
  }

  const anggotaBaru = {
    nama,
    nim,
    role,
    deskripsi,
    foto: fotoBase64
  };

  anggota.push(anggotaBaru);

  localStorage.setItem(
    "anggota",
    JSON.stringify(anggota)
  );


  // TAMBAH 1 CARD SAJA (ANTI DOUBLE)
  tambahCardKeGrid(anggotaBaru);
  resetForm();
  showToast("Anggota berhasil ditambahkan!");
}


/* =========================================
    MENAMPILKAN SEMUA DATA SEKALI SAJA
========================================= */

function tampilkanAnggota(){

  if(sudahLoad) return;
  sudahLoad = true;

  anggota.forEach(a=>{
    tambahCardKeGrid(a);
  });
}


/* =========================================
    TAMBAH CARD
========================================= */

function tambahCardKeGrid(a){

  const grid =
    document.getElementById("teamGrid");

  const card = document.createElement("div");
  card.className = "team-card";

card.innerHTML = `
  <div class="card-glow"></div>

  <div class="card-photo">
    ${
      a.foto
      ? `<img src="${a.foto}">`
      : `<div class="avatar-placeholder">
          ${a.nama[0]}
        </div>`
    }
  </div>

  <div class="card-body">
    <div class="card-nim">${a.nim}</div>
    <div class="card-name">${a.nama}</div>
    <span class="card-role">${a.role}</span>
    <p class="card-desc">${a.deskripsi || ""}</p>
  </div>
`;

  grid.appendChild(card);

  setTimeout(() => {
  card.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}, 100);
}


/* =========================================
   RESET FORM
========================================= */

function resetForm(){

  document.getElementById("inputNama").value="";
  document.getElementById("inputNim").value="";
  document.getElementById("inputRole").value="";
  document.getElementById("inputFoto").value="";
  document.getElementById("inputDeskripsi").value="";

  fotoBase64="";

  document.getElementById("previewName")
    .textContent="Nama Anggota";

  document.getElementById("previewNim")
    .textContent="NIM";

  document.getElementById("previewRole")
    .textContent="Role";

  document.getElementById("previewImg")
    .style.display="none";

  document.getElementById("previewPlaceholder")
    .style.display="flex";
}

/* =========================================
   LOAD SAAT WEBSITE DIBUKA 
========================================= */

tampilkanAnggota();

/* =========================================
   TOMBOL RESET (buat bug fixing)
========================================= */

function resetAplikasi(){

  // hapus semua data tersimpan
  localStorage.removeItem("anggota");

  // reload halaman
  location.reload();
}

/* =========================================
   TOAST NOTIFICATION
========================================= */

function showToast(message){

  const toast =
    document.getElementById("toast");

  toast.textContent = message;
  toast.classList.remove("show");
  void toast.offsetWidth;

  toast.classList.add("show");

  setTimeout(()=>{
    toast.classList.remove("show");
  },2000);
}