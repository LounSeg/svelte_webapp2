<span style="color: #BB0B0B">
<h1>Avertissement</h1>
Je suis en alternance, ainsi j'ai passé du temps à rattraper
une partie de ce que vous avez fait au premier semestre.
J'ai donc perdu beaucoup de temps à faire des choses qui 
n'étaient finalement pas bien compliqués. Je ne savais faire 
que le html et le css, mais j'ai préféré mettre le css de côté 
tant que le tout n'était pas fonctionnel, veuillez alors être
indulgent sur la beauté de mon app :)
</span>

# User Stories
## US1 : Possibilité de se Register et Log In
Il est possible de créer un compte "user" depuis le site, je 
n'ai pas encore fait la création de compte admin, mais y ai 
déjà pensé brièvement, je pensais à un code donné par l'admin 
général fournit à un futur admin qui pourra être entré dans 
un champ lors de la création d'un compte, et qui créera un 
compte admin si ce code est présent dans la base de donnée 
dans une table "codes" par exemple.  
On peut également de connecté aux comptes admin et user sur 
la page login
## US2 : Redirection vers la page principale si l'on n'est pas connecté
J'ai utilisé "redirect" pour cela
## US3 : Voir le tableau des locations (et détails)
J'ai pour l'instant affiché toutes les infos sans filtres, 
mais à terme, j'enlèverais les lignes inutiles qui ne 
s'afficheront que sur la page détaillée.  
Je comptais afficher les détails une fois que la page d'édition
aurait été faite, en enlevant simplement le côté modifiable et
en ne gardant que les informations de la localisation choisie,
je ne pense malheureusement pas avoir le temps de faire cela
avant le rendu

## US4 : Ajouter une location pour admins
Le bouton "ajouter" n'apparait en haut de la page locations 
que lorsque nous sommes connectés en tant qu'admin
(il nécessite parfois un refresh de la page, comme ça fonctionne
je comptais régler ce souci après, mais encore une fois je 
n'aurais sûrement pas le temps)
## US5 : Éditer une location pour admins
Le bouton "éditer" n'apparait en haut de la page locations
que lorsque nous sommes connectés en tant qu'admin (refresh 
requis comme pour new et delete)
## US6 : Supprimer une location pour admins
Le bouton "supprimer" n'apparait en haut de la page locations
que lorsque nous sommes connectés en tant qu'admin