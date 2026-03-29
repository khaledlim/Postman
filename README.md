#  Postman & Newman (CLI)

## Installation

### 1. Installer Node.js
Télécharger et installer depuis :
https://nodejs.org/

### 2. Installer Newman (exécuteur Postman en CLI)
npm install -g newman

### 3. Installer le reporter HTML
npm install -g newman-reporter-html

### 4. (Optionnel) Installer html-pdf pour générer un rapport PDF
npm install -g html-pdf

---

## Exécuter une collection Postman

### Exécution simple (affichage CLI uniquement)
newman run Sample_collection.json

### Exécuter avec un rapport HTML
newman run Sample_collection.json -r html

### Exécuter avec plusieurs reporters (CLI + HTML)
newman run Sample_collection.json -r cli,html

Un dossier `newman/` sera automatiquement créé contenant les rapports générés :
newman/
  ├── Sample_collection.html
  ├── Sample_collection.json
  └── ...
