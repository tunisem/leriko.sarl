# Leriko Sàrl — site statique original, prêt pour GitHub → Vercel

Ce dossier contient une **refonte visuelle plus marquée** du site Leriko Sàrl, pensée pour sortir des codes trop classiques du secteur.

## Direction créative

Le design suit une logique :

- **premium local**
- **univers alpin / entretien / terrain**
- **ambiance sombre + accents dorés / verts**
- **structure plus mémorable qu’un site artisanal standard**
- **mise en avant de la conversion** : appel, WhatsApp, réservation, contact

## Pages incluses

- `index.html` : accueil
- `services/` : détail des prestations
- `particuliers/` : offre pour les privés
- `professionnels/` : offre pour les professionnels
- `tarifs/` : cadrage tarifaire
- `galerie/` : galerie avant / après
- `partenaires/` : logos et collaborations
- `reservation/` : formulaire relié à WhatsApp
- `contact/` : contact
- `mentions-legales/`
- `politique-confidentialite/`
- `conditions-generales/`

## Fichiers clés

- `assets/css/styles.css` : design global
- `assets/js/main.js` : menu mobile
- `assets/js/forms.js` : formulaires WhatsApp
- `assets/images/` : logo, galerie, visuel, partenaires

## Ce qui est déjà prêt

- site **100 % statique**
- compatible **GitHub + Vercel**
- responsive mobile / tablette / desktop
- séparation **privés / professionnels**
- galerie avant / après
- partenaires
- pages légales
- réservation par WhatsApp
- structure SEO de base
- `robots.txt`

## Éléments à remplacer avant publication finale

1. **Photos réelles**
   - remplacer `assets/images/gallery/*`

2. **Vrais logos partenaires**
   - remplacer `assets/images/partners/*`

3. **Tarifs réels**
   - affiner `tarifs/index.html` selon la grille du client

4. **Mentions légales finales**
   - relire les pages légales selon les informations officielles du client

5. **Éventuel email pro**
   - à ajouter si le client dispose d’une adresse officielle

## Déploiement GitHub → Vercel

### 1. GitHub
- créer un dépôt GitHub
- envoyer tout le contenu de ce dossier dans le dépôt
- vérifier que `index.html` est bien présent à la racine

### 2. Vercel
- ouvrir Vercel
- cliquer sur **Add New Project**
- importer le dépôt GitHub
- laisser Vercel déployer le site comme **static site**

### 3. Domaine
- dans Vercel, ouvrir le projet
- aller dans **Settings > Domains**
- ajouter le domaine final
- suivre les instructions DNS de Vercel

## Formulaires

Les formulaires n’enregistrent pas les données dans une base.
Ils ouvrent **WhatsApp** avec un message pré-rempli au numéro :

`076 733 24 23`

## Remarque

Le fichier `assets/images/leriko-flyer-reference.png` est utilisé comme **visuel de marque** dans la maquette actuelle.
