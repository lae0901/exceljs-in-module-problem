# exceljs-in-module-problem

This project illustrates a problem I am having using the excelJS javascript library in a browser based module. 

In the project excelJS is used successfully as a webpack based import. And as a standard browser include of the excelJS code file. But when run from a browser module there is an error: `Uncaught TypeError: ExcelJS.Workbook is not a constructor`

To build and run the project:
* download from github to your pc
* npm install
* npm run build
* launch live server against the index.html file
* click `regular excel` to create an excel file using the standard browser include method.
* click `webpack excel` to create the excel file using an import of a web pack exported function.
* click `module excel` to create the excel file using the browser module method.  See the error in the console.

One thing I want to understand is what does webpack do to be able to import the excelJS export that the browser module does not? They both use the same import statement to import excelJS.
```
import * as ExcelJS from '../exceljs.min.js';
```

Here is the browser module code. Why the error?

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>module excel</title>
</head>

<body>
  <h1>excel in module</h1>
  <button id="btn2">module excel</button>

  <script type="module">
    import * as ExcelJS from './exceljs.min.js';

    window.onload = () =>
    {
      btn2.addEventListener("click", () =>
      {
        const wb = new ExcelJS.Workbook()
      });
    }

  </script>
</body>
</html>
```
