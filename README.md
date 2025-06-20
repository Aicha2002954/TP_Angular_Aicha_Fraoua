
# Aicha Fraoua DCC0027/24
#👠 Passionisse-Chaussures élégantes pour femmes – en ligne
Passionisse est une application Angular pour la vente de chaussures féminines (talons, sandales, bottes). Elle permet de consulter un catalogue, voir les détails et gérer un panier.
Elle s’appuie sur une API Express en JSON et un serveur Node.js (server.js) pour l’hébergement ou le déploiement.

# Technologies utilisées 
Angular (frontend)
Node.js & Express (backend)
JSON (format des données
# Installation
Installer les dépendances
npm install
# Lancement
A-->Lancer l’application
1-Ouvres terminal
2-lancre avec commende "ng serve"
![image](https://github.com/user-attachments/assets/64391980-575c-4f29-9c4c-0ca37eb52a88)
![image](https://github.com/user-attachments/assets/ba590cb5-20b7-4486-a79e-67fc892b24c6)

B-->Lancer l’application
1-Dnas un autre terminal 
2-lancre avec commende "ng npm start"
![image](https://github.com/user-attachments/assets/cf32f6b7-a63e-443d-a9da-931cc40e86ed)

# page d'Accueil
La page d’accueil de Passionisse offre une expérience utilisateur fluide et élégante, centrée sur la présentation des chaussures à talons pour femmes.
L’en-tête comprend le logo Passionisse à gauche, pour un retour rapide à l’accueil, ainsi que des icônes à droite pour accéder à la page principale, aux catégories, aux favoris, au profil utilisateur (avec options de connexion ou accès au profil selon le statut), et au panier.
Sous la barre principale, une sélection de chaussures est affichée dans des cartes présentant l’image, le nom, le prix actuel, l’ancien prix en cas de promotion, et le pourcentage de remise, avec une option pour ajouter aux favoris.
Cette structure assure une navigation claire et une expérience d’achat agréable et efficace.
![image](https://github.com/user-attachments/assets/46faf0b5-4435-4dee-bae2-da11db5c794e)
![image](https://github.com/user-attachments/assets/53f51208-3b38-4aa7-8c47-832d89c1ea38)
![image](https://github.com/user-attachments/assets/2c22cb79-44e0-4359-9556-ca51d2828531)
![image](https://github.com/user-attachments/assets/173e66e2-66d0-4198-b238-153931f6f9ec)
![image](https://github.com/user-attachments/assets/b98c5f50-ba7b-41f6-bbaa-0cfa611bf6b7)

# page d'inscription
![image](https://github.com/user-attachments/assets/f4066dce-39f9-4f65-82bd-46cf12881860)

![image](https://github.com/user-attachments/assets/6f542536-9a4e-4184-b20a-d1293186c07c)
-->	Si le mot de passe n'est pas confirmé, un message d'erreur s'affichera. 
![image](https://github.com/user-attachments/assets/bedfd3b7-7a33-4ce5-9e31-c825517e0337)
-->	Si l’utilisateur déjà crée, un message d'erreur s'affichera. 
![image](https://github.com/user-attachments/assets/67b07f4a-6a6f-4f43-82b7-31661d85d80d)

# Page de connexion
![image](https://github.com/user-attachments/assets/0f7aaf12-afc6-4791-a92c-7d0a21c0f846)
-->Le contrôle côté client vérifie que les champs essentiels (email et mot de passe) sont correctement renseignés avant la soumission, en affichant des messages d’erreur spécifiques selon le cas.
![image](https://github.com/user-attachments/assets/627a60d3-5d31-4b2f-ad1f-8e97e8e2a2a5)
-->En cas d’erreur dans l’adresse email ou le mot de passe, un message d’alerte s’affiche pour informer l’utilisateur que les informations saisies sont incorrectes.
![image](https://github.com/user-attachments/assets/8c95e257-4e8a-4809-8c8e-40109acb82ea)

# Page Mon Profile
![image](https://github.com/user-attachments/assets/39950171-74db-4a83-9cc4-7bd2e72ffc54)
-->	Une fois que l’utilisateur modifie ses informations personnelles et clique sur le bouton « Mettre à jour », un message de confirmation s’affiche à l’écran pour lui indiquer que les modifications ont été enregistrées avec succès.
![image](https://github.com/user-attachments/assets/0e7d6595-c888-4464-ae38-cfddc5a93848)

#  Page Catalog



#  Page Panire


#  Page login

<img width="916" alt="login3" src="https://github.com/user-attachments/assets/8a70e81b-b82f-4d5f-a9ac-479498930cf5" />



<img width="916" alt="login5" src="https://github.com/user-attachments/assets/57228c63-c7b6-4cc4-b6f2-35459fe117d7" />




This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```





Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

