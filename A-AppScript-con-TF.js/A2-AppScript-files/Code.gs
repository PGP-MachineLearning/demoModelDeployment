
// copiar File Ids de la ejecución del Colab
const FileId_modelJS = ""
const FileId_modelWeights = ""

function loadModelFromDrive() {
  // obtiene JSON
  const f = DriveApp.getFileById(FileId_modelJS)
  const modeljson = f.getAs("application/json").getDataAsString();
  // obtiene pesos
  const f2 = DriveApp.getFileById(FileId_modelWeights)
  const weights = f2.getBlob().getBytes()
  // devuelve archivos
  return [modeljson, weights]
}


function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
}
