# Questions & réponses techniques

## Javascript

1. Quelle est la différence entre l'opérateur == et === ?

   L'opérateur == compare l'opérande de gauche et de droite après avoir effectué une conversion de type si necessaire (coercision). Tandis que l'opérateur === compare leur type sans effectuer de conversion

   Quelle est la sortie de chaque expression ci-dessous?

```js
0 == false // true
0 === false // false
1 == "1" // true
1 === "1" // false
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
NaN == NaN or NaN === NaN // false
[]==[] or []===[] //false, refer different objects in memory
{}=={} or {}==={} //false, refer different objects in memory
```

2. Qu'est ce qu'une fonction pure ?

   Une fonction pure est une fonction dont la valeur de retour dépend de ses arguments sans effets de bords.
   Laquelle de ces 2 fonctions est une fonction pure ?

```js
let arrayNumbers = [];
const myFunc = (number) => arrayNumbers.push(number);

const myFunc2 = (number) => (arrayNumbers) => arrayNumbers.concat([number]);
```

3. Qu'est ce qu'une IIFE (Immediatly Invoked Function Expression) ?

   Une IIFE ou bien fonction auto-invoquée est un type de fonction qui est directement exécutée après sa déclaration

4. Quelle est la différence entre null et undefined ?

   null réprésente une valeur non existante tandis que undefined réprésente une valeur qui est n'est pas définie

5. Quelle est la différence entre les méthodes map() et forEach() ?

   Les deux méthodes s'opèrent sur un tableau en itérant sur toutes les valeurs d'un tableau. La méthode map() renvoie un nouveau tableau transformé sans changer le tableau d'origine tandis que la méthode forEach renvoie toujours `undefined` sans changer le tableau d'origine.

6. Comment muter un objet correctement ?

   En utilisant l'opérateur `Object.assign()` ou le spread operator (...)

7. Qu'est ce qu'une promesse (Promises) ?

   Une promesse est un objet qui réprésente l'état de complétion d'une opération asynchrone ayant trois états : Pending, fulfilled or rejected

8. Quelle est la différence entre opération tache asynchrone et une opération synchrone ?

   Une opération synchrone est bloquante et séquentielle. Une opération asynchrone est non bloquante et peut exécuter plusieurs tâches en parallèle sans attendre qu'une autre opération se termine.
   Que renvoie ces expressions ci-dessous?

```js
console.log("statement 1");
console.log("statement 2");
console.log("statement 3");
```

```js
console.log("statement 1");
setTimeout(() => {
  console.log("Statement 2");
}, 2000);
setTimeout(() => {
  console.log("statement 3");
}, 500);
```

9. Que réprésente la méthode preventDefault() ?

   Elle permet d'empêcher toute évènement du navigateur lié à cet évènement. Cette méthode est par exemple utilisée pour lors de la soumission d'un formulaire lorsqu'un évènement de click est attaché à un bouton en empêchant le rafraichissement de la page

10. Comment récupérer l'url courante d'une page ?

    En utilisant l'expression `window.location.href` ou bien `document.URL`

## React

1. Quels sont les hooks que tu utilises et leur roles ?

2. Qu'est ce qu'une props, un state ?
   Une props est une donnée en lecture seule qui est transitée d'un composant parent vers un composant enfant. Un state est un object Javascript qui réprésente l'état d'un composant pendant son cycle de vie. Un state peut être modifié grâce à une fonction de setter.
