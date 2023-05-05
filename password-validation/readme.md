# Password validator

Afin de renforcer le système de sécurité de mot de passe d'une application web, on vous propose de créer une fonction `passwordValidator()` qui va prend en paramètre d'entrée une chaine de caractère et renvoyer un résultat de validation. le résultat est un objet ayant comme propriété `isValid` et `errorMsg` indiquant respectivement si le mot de passe est valide auquel cas le `errorMsg` sera surchargé par l'erreur correspondante.

## Quelques règles de gestion

1. Le mot de passe doit contenir au moins 8 caractères de long. Si cette condition n'est pas respectée, renvoyer le message d'erreur suivant: “Password must be at least 8 characters”
2. Le mot de passe doit contenir au moins 2 nombres. Si cette condition n'est pas respectée renvoyer le message d'erreur suivant: “The password must contain at least 2 numbers”
3. Le mot de passe doit contenir au moins 1 caractère en majuscule. Si cette condition n'est pas respectée, renvoyer le message d'erreur suivant: "Password must contain at least one uppercase char"

Bonne chance!
