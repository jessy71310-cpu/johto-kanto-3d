JOHTO & KANTO 3D — PREMIER PAQUET DE COMPILATION APK

CE QUE CONTIENT CETTE VERSION
- Le prototype 3D actuel emballé pour Android avec Capacitor.
- Three.js est inclus dans le paquet web par Vite (pas besoin de télécharger Three.js au lancement).
- L'application Android est verrouillée en mode paysage dans le manifeste.
- Sauvegarde locale du prototype, nouvelle partie et reprise.
- Détection des manettes via l'API Gamepad du navigateur intégré, lorsque l'appareil/WebView l'expose.

LIMITES HONNÊTES
- Ceci est une première version APK du prototype, pas le jeu complet Johto + Kanto.
- Le prototype n'a actuellement qu'un emplacement de sauvegarde.
- La prise en charge des manettes Bluetooth dépend du contrôleur et de la version Android System WebView. Elle devra être testée sur le Galaxy S25+.
- Les créatures et décors sont des modèles originaux provisoires. Aucun modèle ou musique officielle Pokémon n'est inclus.
- La bande-son originale rétro sera ajoutée dans une étape ultérieure.

COMPILATION GRATUITE AVEC GITHUB ACTIONS
1. Sur le téléphone, télécharge ce ZIP et extrais-le avec Mes fichiers.
2. Dans GitHub, crée un dépôt personnel (Private ou Public) nommé johto-kanto-3d.
3. Ouvre le dépôt dans Chrome et utilise Add file > Upload files.
4. Dans le gestionnaire de fichiers Android, sélectionne TOUS les fichiers et dossiers extraits (y compris .github; si le dossier caché n'apparaît pas, active l'affichage des fichiers cachés ou utilise l'option d'upload du navigateur).
5. Valide le commit sur la branche main.
6. Dans le dépôt, ouvre Actions > Construire APK Android > Run workflow.
7. Quand le workflow est terminé avec succès, ouvre son exécution et télécharge l'artefact Johto-Kanto-3D-APK.
8. Décompresse l'artefact : app-debug.apk. Ouvre-le sur le Samsung et autorise l'installation depuis cette source si Android le demande.

COÛT
GitHub Actions offre un quota mensuel gratuit pour les dépôts privés de comptes gratuits, avec des limites qui peuvent évoluer. Les dépôts publics sur les runners standard GitHub sont généralement gratuits. Vérifie les limites affichées par GitHub avant de lancer des workflows répétés. Aucun moyen de paiement ne doit être ajouté pour suivre ce guide.

SIGNATURE
L'APK debug généré est signé avec une clé de débogage temporaire créée par Gradle dans le runner. C'est suffisant pour installer et tester. Pour des mises à jour durables distribuées hors Play Store, il faudra ensuite configurer une clé de signature privée conservée en sécurité.
