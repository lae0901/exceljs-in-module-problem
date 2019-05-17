// src/excel-module.js

function excel_newWorkbook( )
{
  const wb = new ExcelJS.Workbook();
  return wb ;
}

function excel_createExcelFile( wb )
{
  let ws = wb.addWorksheet('Export');

  ws.getColumn(1).width = 15;
  ws.getColumn(2).width = 15;

  const font = { name: 'Bookman Old Style', size: 10, bold: true };
  ws.getCell('A1').value = 'product code';
  ws.getCell('A1').font = font;
  ws.getCell('B1').value = 'product desc';
  ws.getCell('B1').font = font;
}

// --------------------------- excel_writeFile -------------------------
function excel_writeFile(wb, fileName)
{
  const promise = new Promise(async (resolve, reject) =>
  {
    fileName = fileName || 'excelOutput';

    const xls64 = await wb.xlsx.writeBuffer({ base64: true });

    // build anchor tag and attach file (works in chrome)
    const a = document.createElement("a");
    const data = new Blob([xls64], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

    const url = URL.createObjectURL(data);
    a.href = url;
    a.download = fileName + '.xlsx';
    document.body.appendChild(a);
    a.click();

    // remove the <a> element from the DOM.
    setTimeout(() =>
    {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      resolve();
    }, 0);
  });

  return promise;
}

export { excel_newWorkbook, excel_createExcelFile, excel_writeFile } ;
