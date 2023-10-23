
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
