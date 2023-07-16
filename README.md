# Calculatrice

Application de calculatrice créée à l'aide de Vite. C'est un application React en développé en TypeScript.

## Fonctionnalités

- Permet d'ajouter, soustraire, diviser et multiplier 2 nombres.
- Gère les nombres décimaux.
- Possède une interface basique sans trop de CSS.

## Prérequis

Avant de pouvoir exécuter l'application localement, assurez-vous que vous avez les éléments suivants installés :

- Node.js (version 12 ou supérieure)
- npm (version 6 ou supérieure)

## Installation

1. Clonez ce dépôt de code sur votre machine locale :

```bash
git clone https://github.com/votre-utilisateur/calculatrice-react.git
```

2. Accédez au répertoire du projet :

```bash
cd calculatrice-react
```

3. Installez les dépendances nécessaires :

```bash
npm install
```

## Utilisation

1. Exécutez la commande suivante pour lancer l'application en mode de développement :

```bash
npm run dev
```

2. Ouvrez votre navigateur et accédez à l'URL donné

3. Chaque bouton permet d'écrire le chiffre ou l en haut de la calculatrice.

4. Le bouton "C" permet de réinitialiser l'affichage de notre calculatrice.

5. Le bouton "=" permet de faire apparaitre le résultat à notre calcule (Division par 0 impossible).
   Le calcule est assez simple car je seulement eu le besoin d'utiliser une fonction "eval".



## Structure du projet

La structure du projet est organisée de la manière suivante :

```
calculatrice-react/
  |- src/
      |- assets/            # Dossier contenant le svg
      |- App.css            # Fichier de style CSS
      |- index.css          # Fichier de style CSS
      |- main.tsx           # Permet d'afficher notre calculette
      |- App.tsx            # Fichier contenant toutes les fonctions de notre calculatrice
  |- public/                # Fichiers publics accessibles par l'application
  |- package.json           # Dépendances du projet et scripts
  |- tsconfig.json          # Configuration TypeScript
  |- vite.config.ts         # Configuration Vite
```
