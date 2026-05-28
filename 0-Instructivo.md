## Alternativas para "puesta en producción" del modelo:
Existen tres alternativas que se pueden aplicar:
- <*A*> - Exportando el modelo a [TensorFlow.js](https://www.tensorflow.org/js) de manera que se pueda ejecutar desde una página web directamente.
- <*B*> - Accediendo al modelo usando Web API creada con [Flask](https://flask.palletsprojects.com/).
- <*C*> - Exportando el modelo como cálculos en una planilla de cálculo de [Google Sheets](https://docs.google.com/spreadsheets/).

## Instrucciones:

### Construcción del modelo:
Ejecutar el cuaderno <*1-construir-RNA-MLP-IRIS.ipynb*> de forma completa para que se constuya el modelo y se guarde en el drive. Se pueden cambiar los parámetros que se consideren necesarios.

### Alternativa A- Web con TensorFlow.js:
A1. Convertir el modelo construido para poder ser usado con TensorFlow.js usando el script <**A1-Exportar-Modelo-a-TFjs.ipynb**>.

Luego hay dos posibilidades para publicar la página:

#### Aa - utilizar AppsScripts para publicar la página:
1. Acceder a [AppsScripts](https://script.google.com/home/my)
2. Crear nuevo proyecto e indicar el nombre que se desee (por ejemplo ejemplo "IRIS).
3. Copiar en <**Code.gs**> todo el contenido del archivo del mismo nombre disponible en subdirectorio <**Aa-AppScript-files**>
4. Copiar los ``` File Ids ```  de la ejecución de (*A1*) en las constantes del <Code.gs> copiado.
5. Agregar archivo HTML y renombrarlo a <**index.html**>.
6. Copiar en <**index.html**> todo el contenido del archivo del mismo nombre disponible en subdirectorio <**Aa-AppScript-files**>
7. Realizar la publicación del proyecto usando Deploy/Implementación > New Deployment/Nueva implementación y eligiendo tipo "**Web App**" (elegir nombre y permisos según su preferencia). Luego, se debe autorizar el acceso para que pueda acceder al drive.
8. Abrir la URL que se asigna para el proyecto y probar las opciones de la página.

*Nota: por razones de seguridad la página se debe acceder desde un navegador donde se haya accedido con una cuenta de Google.*

#### Ab - utilizar directamente GitHub para publicar la página:
1. Crear un repositorio en [Github](https://github.com/) con el nombre que se desee.
2. Subir carpeta de exportado en el paso (*A1*) como TensorFlow.js al repositorio creado.
3. Editar archivo <**index.html**> disponible en subdirectorio <**Ab-GitHub**> indicando:
* ``` const Model_URL = ``` URL "raw" obtenida del archivo <**model.js**> subido al respositorio creado.  
* ``` const Model_CLASES = ``` definición de clases obtenida de la ejecución de (**A1**) para exportar a TF.js. 
4. Subir archivo "<**index.html**> editado al repositorio creado.
5. Publicar página <**index.html**> subida en forma pública usando https://raw.githack.com/ o un sitio similar.
6. Abrir URL asignada y probar las opciones de la página

### Alternativa B- TF.Keras con Flask:
1. Crear cuenta en [ngrok](https://dashboard.ngrok.com/signup) para crear Web API pública.
2. Ejecutar script <**B1-Crear-Model-Web-API.ipynb**> ingresando los datos solicitados.
3. Probar Web API pública ejecutando <**B2-Probar-Model-Web-API-publica.ipynb**> con la URL pública obtenida en el paso 2.
4. Probar Web Page pública ejecutando URL indicada al ejecutar el paso 2.

### Alternativa C- GoogleSheet:
1) Ejecutar script <**C1-Exportar-Modelo-a-GoogleSheet.ipynb**> dando los permisos correspondientes.
2) Abrir la planilla creada en el paso anterior.

*Nota: por ahora funciona para redes MLP solamente.*

