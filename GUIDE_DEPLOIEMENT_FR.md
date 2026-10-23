# Mise en ligne de The Team Breakdown sur GitHub Pages

Le site est prêt à être publié comme dépôt statique. **Le classement multijoueur ne devient réel qu'après la connexion de Firebase** ; GitHub Pages héberge les pages et les médias, pas la synchronisation des téléphones.

## Avant de publier : tester sans serveur

- Ouvrir `index.html` ou lancer `python -m http.server 8000` dans ce dossier.
- **Host the Show → Try Interactive Demo** : parcours animé avec six joueurs simulés.
- **Try Solo Demo** : parcours individuel pour tester réponses, corrections, score et écran final.

## Configurer le multijoueur en direct

1. Créer un projet sur https://console.firebase.google.com/.
2. Ajouter une **Web app** depuis les paramètres du projet et copier sa configuration Firebase.
3. Créer une **Realtime Database** et copier sa valeur `databaseURL` (adresse régionale complète).
4. Activer **Authentication → Sign-in method → Anonymous**.
5. Dans **Realtime Database → Rules**, copier l'intégralité du fichier `database.rules.json` et publier.
6. Dans `config.js`, remplir `apiKey`, `authDomain`, `databaseURL`, `projectId`, `appId` avec les valeurs de **ton** projet Firebase.
7. Ajouter au besoin `NOMUTILISATEUR.github.io` aux domaines autorisés d'Authentication.

Ne jamais mettre un mot de passe ou une clé de compte de service dans ce dépôt. Ne jamais publier des règles de base de données autorisant l'écriture par tout le monde.

## Publier sur GitHub

1. Créer un dépôt public, par exemple `ultimate-soft-skills-show`.
2. Mettre **tous les fichiers et le dossier `assets`** à la racine du dépôt (pas seulement le fichier `index.html`).
3. Ouvrir **Settings → Pages → Deploy from a branch** et choisir **main / (root)**.
4. Lorsque GitHub publie le site, ouvrir `https://NOMUTILISATEUR.github.io/ultimate-soft-skills-show/`.
5. Cliquer sur **Host the Show → Create Live Room**.
6. Projeter l'écran ; les joueurs scannent le QR code et saisissent leur pseudonyme.
7. L'animateur ouvre, révèle puis fait avancer les sept manches. Le score individuel et le classement se synchronisent.

## Important

Les photos de personnages sont des créations originales photoréalistes : **elles ne montrent pas des personnes réelles**. Les voix sont de vrais **fichiers audio MP3** en anglais, mais ont été synthétisées, et non enregistrées par des comédiens. La courte vidéo d'introduction est fournie dans `assets/intro.mp4`.

Les règles de sécurité sont prévues pour une compétition pédagogique avec pseudonymes. Les réponses du jeu restent dans le JavaScript publié et ne constituent pas un système d'examen protégé contre la triche.
