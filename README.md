
## Features

- Simplifier les composants les plus utilisés
- Les écrans sont pointés par le menu de navigation
- Modifier une todo
- Lorsqu'on clique sur une todo, on peut voir les détails
- Utiliser un StackNavigation pour la navigation dans les listes de todolist
- API
  - La gestion de l'API est sur zimbra
  - Avant d'envoyer le formulaire, vérifier que les champs ne soient pas vides
  - Connexion
    - Vérifier si le username est valide
    - Vérifier si le mot de passe est valide
  - Inscription
    - Vérifier si le username existe déjà
    - Créer un user avec le username et le mot de passe
  - déconnexion
    - on met le jeton à null
    - on appelle l'écran de navigation du signin/signup
- 




## Questions pour  le professeur

- 


## Structuration finale du code

+-- App.js
+-- components
|   \-- SignIn.js
+-- Context
|   \-- Context.js
+-- Navigation
|   \-- Navigation.js
+-- Screen
|   +-- HomeScreen.js
|   +-- SignInScreen.js
|   +-- SignOutScreen.js
|   +-- TodoLists.js
|   \-- TodoListsScreen.js

## Notions à approfondir

- contexts
  - provider
  - consumer
- navigation
- JWT -> JSON Web Token


## Dépendences

- `@expo` : lancer le serveur
- `@expo-status-bar` :
- `@react` : fonctionnalités de react
- `@react-dom` : construire le dom pour les applis web
- `@react-native` : composants natifs
- `@react-native-web` : composants natifs web
- `@react-navigation/native` : navigation native
- `@react-navigation/bottom-tabs` : menu de navigation en bas de l'application
- `@react-native-screens` : nécéssaire pour `@react-navigation/native-stack`
- `@react-navigation/native-stack` : stacks de navigation
