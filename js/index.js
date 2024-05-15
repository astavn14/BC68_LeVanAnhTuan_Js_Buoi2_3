document.getElementById("tinhLuong").onclick = function () {
  let tienLuong = document.getElementById("tienLuong").value * 1;
  let ngayLam = document.getElementById("ngayLam").value * 1;
  tinhLuong = tienLuong * ngayLam;
  document.querySelector(".ket-qua").innerHTML =
    '<i class="fa-solid fa-right-long"></i> ' +
    tinhLuong.toLocaleString("vi", { currency: "VND", style: "currency" });
};

document.getElementById("tinhTrungBinh").onclick = function () {
  let so1 = document.getElementById("so1").value * 1;
  let so2 = document.getElementById("so2").value * 1;
  let so3 = document.getElementById("so3").value * 1;
  let so4 = document.getElementById("so4").value * 1;
  let so5 = document.getElementById("so5").value * 1;
  tinhTB = (so1 + so2 + so3 + so4 + so5) / 5;
  document.querySelector(".ket-qua-2").innerHTML =
    '<i class="fa-solid fa-right-long"></i> ' + tinhTB;
};

document.getElementById("quyDoi").onclick = function () {
  let tienUSD = document.getElementById("tienUSD").value * 1;
  quyDoi = tienUSD * 23500;
  document.querySelector(".ket-qua-3").innerHTML =
    '<i class="fa-solid fa-right-long"></i> ' +
    quyDoi.toLocaleString("vi", { currency: "VND", style: "currency" });
};

document.getElementById("tinh").onclick = function () {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;
  let chuVi = (chieuDai + chieuRong) * 2;
  let dienTich = chieuDai * chieuRong;
  document.querySelector(".ket-qua-4").innerHTML =
    '<i class="fa-solid fa-right-long"></i> ' +
    " Diện tích: " +
    dienTich +
    "; Chu vi: " +
    chuVi;
};

document.getElementById("tinhTong").onclick = function () {
  let haiSo = document.getElementById("haiSo").value * 1;
  let donVi = haiSo % 10;
  let hangChuc = Math.floor(haiSo / 10);
  // console.log(hangChuc);
  // console.log(donVi);
  let tong = donVi + hangChuc;
  document.querySelector(".ket-qua-5").innerHTML =
    '<i class="fa-solid fa-right-long"></i> ' + tong;
};
