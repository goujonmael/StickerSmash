# Développement d'une Application en React JS avec Expo

Projet de développement d'une application en React JS en utilisant le framework Expo, à partir du tutoriel officiel sur le site d'Expo.


## Introduction
Ce projet a pour but le développement d'une application mobile et web en utilisant React JS et Expo.

## Prérequis
- Node.js 
- npm 

## Installation
Clonez le dépôt sur votre machine :
```bash
git clone https://github.com/goujonmael/StickerSmash.git
```
Accédez au répertoire du projet :
```bash
cd StickerSmash
```
Installez les dépendances nécessaires :
```bash
npm install
```

## Structure du Projet
La structure du projet est la suivante :
```
votre-repo/
├── assets/
├── components/
├── App.js
├── app.json
├── package.json
└── README.md
```
- **assets/** : Contient les fichiers statiques tels que les images et les polices.
- **components/** : Contient les composants React réutilisables.
- **App.js** : Point d'entrée principal de l'application.
- **app.json** : Configuration de l'application Expo.
- **package.json** : Fichier de configuration npm/yarn.

## Développement
j'ai suivi les étapes du tutoriel officiel sur le site d'Expo pour développer l'application. A l'adresse suivante : [Tutoriel Expo](https://docs.expo.dev/tutorial/introduction/)

## Démarrage de l'Application
Pour démarrer l'application en mode web, exécutez la commande suivante :
```bash
npm run web
```
Pour démarrer l'application en mode mobile Android via ADB, exécutez la commande suivante :
```bash
npm run android
```
Ces commandes vont démarrer l'application depuis le terminal. Vous pourrez alors scanner le QR code avec l'application Expo Go sur Android ou depuis un navigateur web.


---
