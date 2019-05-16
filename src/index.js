import { createExcelFile } from './excel_core.js';

console.log('in index.js') ;

btn3.addEventListener("click", () =>
{
  console.log('btn3 click');
  createExcelFile();
});

window.onload = () =>
{
  console.log('index.js onload.') ;

  btn3.addEventListener("click", () =>
  {
    console.log('btn3 click') ;
    createExcelFile();
  });
}
