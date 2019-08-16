# Facturacion
Proyecto simple, en NodeJS, para procesar una lista usuarios en un fichero Excel y obtener un PDF con los recibos para cada uno de ellos.

## API's
  - Express.
  - Formidable.
  - Body-parser.
  - PUG.
  - PDFKit.
  - Node-xlsx.
  - FS.

## Uso
Hay dos formas de iniciarlo:
  - Abrir Generador De Facturas.bat.
  - Iniciar con el comando node index.js y entrar en localhost:8080

El excel de entrada debe tener un formato en concreto (dado que se ha hecho por encargo).
Apellido, Nombre(codigo)|importe(sin unidades)|Concepto

Finalmente se genera un PDF en el escritorio con los recibos finales.

## Actualizaciones
  - 1.0: Lanzamiento de la versión final.
  - 1.1: Código reestructurado para mayor facilidad de tratamiento de actualizaciones.
