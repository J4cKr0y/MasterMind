# Mastermind

## Projet
------
Créez une version du jeu Mastermind avec Next.js TypeScript et Tailwind. 


## C'est quoi ?
------------
Le Mastermind est un jeu de déduction dans lequel un joueur doit deviner une combinaison secrète de pions codée en couleurs. À chaque tentative, des indices sont donnés pour indiquer si les pions sont corrects en couleur et en position. C'est un jeu stratégique et logique où l'objectif est de découvrir la solution en un nombre limité d'essais. 


## Technologies Utilisées
-----------------------
- **Frontend**: Next.js 14, TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
![Next.js](https://img.shields.io/badge/Next.js-v14-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v3-green)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-black)


## Fonctionnalités Clés
---------------------
- **Rendu Côté Serveur (SSR)**: Implémentation optimisée pour de meilleures performances et un meilleur référencement
- **Interface Réactive**: Expérience utilisateur fluide sur tous les appareils
- **Logique de Jeu Avancée**: Algorithme sophistiqué pour générer et vérifier les combinaisons
- **Gestion d'État Optimisée**: Utilisation efficace des hooks React et/ou d'une solution de gestion d'état


## Architecture du Projet
------------------------
MasterMind/
├── app/ # Structure App Router de Next.js
│ ├── layout.tsx # Layout principal
│ ├── page.tsx # Page d'accueil
│ └── game/ # Fonctionnalités du jeu
├── components/ # Composants réutilisables
├── lib/ # Utilitaires et logique métier
├── public/ # Assets statiques
└── styles/ # Fichiers de style

J'ai adopté une architecture modulaire qui favorise la réutilisation des composants et la séparation des préoccupations.


## Par quoi commencer ? 
--------------------
Si vous voulez juste jouer au jeu et voir le résultat, rendez-vous ici : 
https://mastermind-bay-three.vercel.app


Sinon, téléchargez le projet, installez les dépendances : 

```bash
npm install
```

puis lancez le serveur : 

```bash
npm run dev
```

Et ouvrez :  [http://localhost:3000](http://localhost:3000) avec votre navigateur. 


## Roadmap et Améliorations Prévues
----------------------------------
- [ ] Mode multijoueur en temps réel
- [ ] Sauvegarde des scores et tableau de classement
- [ ] Thèmes personnalisables
- [ ] Version mobile native avec React Native

Les contributions sont bienvenues! N'hésitez pas à ouvrir une issue ou soumettre une pull request.
