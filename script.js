//your JS code here. If requiredconst intpuy=

let btn = document.getElementById("btn");
let num = document.getElementById("delay");
let text = document.getElementById("text");
let output = document.getElementById("output");

const pro1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text.value);
    }, num.value*1000);
  });
};
btn.addEventListener("click", () => {
  async function fun() {
    let val = await pro1();
  output.innerHTML = `
  <h3>${val}</h3>
  `
  }
  fun();
});
