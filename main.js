// head
const getQuery = (query = "") => document.querySelector(query);
const arrNumber = [];

getQuery("#btnThemso").onclick = () => {
  arrNumber.push(parseInt(getQuery("#nhapSo").value));
  getQuery("#infoThemSo").innerHTML = arrNumber?.toString();
};

// 1
getQuery("#btnTongDuong").onclick = () => {
  const listNumber = arrNumber?.filter((e) => e>0);
  const total = listNumber?.reduce((sum, x) => sum + x);
  getQuery("#infoTongDuong").innerHTML = total;
};

//2
getQuery("#btnDemSoDuong").onclick = () => {
  const total = arrNumber?.filter((e) => e > 0);
  getQuery("#infoDemSoDuong").innerHTML = total.length;
};

//3
getQuery("#btnNhoNhat").onclick = () => {
  const total = arrNumber?.sort((a, b) => a - b);
  getQuery("#infoNhoNhat").innerHTML = total?.[0];
};

//4
getQuery("#btnSoDuongNhoNhat").onclick = () => {
  const total = arrNumber?.sort((a, b) => a - b)?.find((e) => e > 0);
  getQuery("#infoSoDuongNhoNhat").innerHTML = total;
};

//5
getQuery("#btnTimSoChan").onclick = () => {
  const total = arrNumber?.reverse()?.find((e) => e % 2 === 0);
  getQuery("#infoTimSoChan").innerHTML = total;
};

//6
getQuery("#btnDoiCho").onclick = () => {
  const index1 = parseInt(getQuery("#Vitri1").value);
  const index2 = parseInt(getQuery("#Vitri2").value);
  arrNumber[index1] = arrNumber?.splice(index2, 1, arrNumber[index1])[0];
  getQuery("#infoDoiCho").innerHTML = arrNumber?.toString();
};

//7
getQuery("#btnSapXep").onclick = () => {
  getQuery("#infoSapXep").innerHTML = arrNumber?.sort()?.toString();
};

//8
const checkSNT = (number) => {
  if (number < 2) {
    return false;
  } else {
    for (let i = 2; i < number - 1; i++) {
      if (number % i == 0) {
        return false;
      }
    }
  }
  return true;
};

getQuery("#btnNguyenTo").onclick = () => {
  const snt = arrNumber?.find((e) => checkSNT(e));
  getQuery("#infoNguyenTo").innerHTML = snt;
};

//9
const arrNumber2 = [];
getQuery("#btnSoNguyen1").onclick = () => {
  arrNumber2.push(getQuery("#SoNguyen1").value);
  getQuery("#listArrNumber2").innerHTML = arrNumber2?.toString();
};
getQuery("#btnSoNguyen2").onclick = () => {
  const number = arrNumber2.filter((e) => Number.isInteger(parseFloat(e)));
  getQuery("#infoDemSoNguyen").innerHTML = number?.length;
};

//10
getQuery("#btnSoSanh").onclick = () => {
  const even = arrNumber?.filter((e) => e >= 0);
  console.log({ a: arrNumber?.length - even > arrNumber?.length / 2 });
  getQuery("#infoSoSanh").innerHTML =
    arrNumber?.length / 2 === even?.length
      ? "số dương và số âm bằng nhau"
      : arrNumber?.length - even?.length > arrNumber?.length / 2
        ? "số dương < số âm"
        : "số dương > số âm";
};
