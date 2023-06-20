
function numberOneTriangle(num) 
{
  if (num < 1 || num > 10) {
    console.log("Số không hợp lệ. Vui lòng nhập số trong khoảng từ 1 đến 10.");
    return;
  }
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "1 ";
    }
    console.log(row);
  }
}