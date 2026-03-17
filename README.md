# Site Leriko Sàrl — version statique Vercel-ready

Ce dossier contient un site vitrine statique prêt à être poussé sur GitHub puis déployé sur Vercel.

## Structure

- `index.html` : page d'accueil
- `services/` : vue globale des services
- `particuliers/` : offre dédiée aux privés
- `professionnels/` : offre dédiée aux professionnels
- `tarifs/` : page tarifs / devis
- `galerie/` : galerie avant / après
- `partenaires/` : section partenaires
- `reservation/` : formulaire de réservation relié à WhatsApp
- `contact/` : contact
- `mentions-legales/`, `politique-confidentialite/`, `conditions-generales/`
- `assets/css/styles.css` : styles globaux
- `assets/js/main.js` : menu mobile et petits comportements
- `assets/js/forms.js` : formulaires WhatsApp
- `assets/images/` : logo, favicon, galerie et logos partenaires

## Ce qui est déjà prêt

- design responsive
- structure SEO locale
- pages privées / professionnels séparées
- réservation via WhatsApp
- galerie avant / après
- partenaires
- mentions légales / confidentialité / conditions générales
- structure compatible Vercel sans build ni dépendances Node

## Données intégrées

- entreprise : Leriko Sàrl
- adresse : Chemin du Carroz Delay 8, 1264 St-Cergue
- téléphone : 076 733 24 23
- registre : CH-550.1.249.707-6
- UID : CHE-430.702.480

## Points à remplacer avant mise en ligne finale

1. **Vraies photos galerie**
   - remplacer les fichiers dans `assets/images/gallery/`

2. **Vrais logos partenaires**
   - remplacer les fichiers dans `assets/images/partners/`

3. **Textes légaux**
   - relire les pages légales selon le fonctionnement réel du client

4. **Tarifs**
   - la page `tarifs/` est structurée mais volontairement prudente
   - valider la formulation exacte à publier

5. **Email / autres réseaux**
   - si le client a une adresse email officielle ou d'autres canaux, les ajouter dans `contact/index.html`

## Déploiement GitHub → Vercel

### 1. Mettre le site sur GitHub
- créer un nouveau repository GitHub
- envoyer tout le contenu de ce dossier dans le repository
- vérifier que `index.html` est bien à la racine du dépôt

### 2. Déployer sur Vercel
- se connecter à Vercel
- cliquer sur **Add New Project**
- importer le repository GitHub
- Vercel détectera automatiquement qu’il s’agit d’un site statique
- lancer le déploiement

### 3. Ajouter le domaine
- dans Vercel, ouvrir le projet
- aller dans **Settings > Domains**
- ajouter le domaine final
- pointer ensuite le DNS selon les instructions Vercel

## Fonctionnement du formulaire

Le formulaire ne stocke pas les données sur un serveur.
Il ouvre WhatsApp avec un message pré-rempli au numéro :

`076 733 24 23`

Si vous voulez plus tard un vrai envoi email ou une base CRM, il faudra connecter un backend ou un service externe.

## Remarque importante

Le fichier `assets/images/leriko-flyer-reference.png` contient l'image de référence transmise par le client.  
Il sert uniquement de base visuelle et n’est pas affiché sur le site.
