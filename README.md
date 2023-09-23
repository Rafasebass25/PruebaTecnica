# Nombre del Proyecto

BPrueba Tecnica para Testing Bolivia - Rafael Sebastian Quispe

## Tabla de Contenidos

1. [Introducción]
Se utilizaron las siguientes herramientas: Visual Studio Code, Node.js Cucumber, Cypress y Allure (Reportes)
2. [Requisitos] (utilizados en este proyecto)
Node.js v14.17.6
Java 8 para usar allure
3. [Instalación](#instalación)
-   Una vez clonado el proyecto realizar un "npm install" para instalar todas las dependencias utilizadas en el proyecto
-   "npm install allure-commandline" para ejecutar los comandos de Allure

4. [Uso]
-   Una vez instalado todo procedemos a iniciar los tests, en este caso son 6 siguiendo el ejercicio que se me pidio realizar.
-   Para empezar la ejecucion utilizar:
            npm run cypress:execution-allure
-   Para generar el reporte utilizar: 
            npm run allure:report
-   Para abrir el reporte generado por Allure utilizar: 
            npm allure:open
-   Posteriormente para limpiar el reporte y no tener datos pasados utilizar:
            npm run allure:clear

Nota aparte
-   Si se desea visualizar el navegador chrome a traves cypress  ejecutar:
            npm run cypress:execution
    
-   Tomar en cuenta que todos los scripts se encuentran en el archivo package.json
5. [Link de Video Demo]
    Link


