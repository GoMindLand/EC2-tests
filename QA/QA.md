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

10. Qu'affiche en sortie le bout de code ci-dessous?

```js
const me = {
  prefer: "I Do Smart Work",
};
const alsoMe = Object.create(me);
alsoMe["prefer"] = "I Do Hard Work";
console.log(me["prefer"]);
```

- "I Do Hard Work",
- "I Do Smart Work",
- "Cannot assign to read only property"

Bonne réponse: "I Do Smart Work"

## React

1. Quels sont les hooks que tu utilises et leur roles ?

2. Qu'est ce qu'une props, un state ?
   Une props est une donnée en lecture seule qui est transitée d'un composant parent vers un composant enfant. Un state est un object Javascript qui réprésente l'état d'un composant pendant son cycle de vie. Un state peut être modifié grâce à une fonction de setter.

3. C'est quoi un composant controlé et non controlé ?
   Un composant est controlé lorsque ses données sont gérées par son état interne (state) tandis qu'un composant non controlé les données sont gérées par le DOM.

4. Qu'est ce qu'un composant pure ?
   Un composant est dit pure lorsqu'il renvoie le même résultat pour le même state et/ou props qui lui est fourni. De plus les composants pures n'ont pas d'effets de bords car il ne dépendent d'aucune donnée extérieure.

5. Qu'est ce qu'un HOC ?
   Un HOC (High Order Component) en français composant d'ordre supérieur, est un composant qui prend un autre composant en entrée sur lequel il va effectuer des traitements/opérations et va rendre un nouveau composant en sortie. Ce type de composant est typiquement un composant pure.

6. A quoi servent les outils tels que Webpack, Vite ? (Niveau confirmé & sénior)
   Vite ou webpack sont des bundlers de modules offrant un serveur de développement sur les applications front et permettant de construire des fichiers (html, css, js) afin de les distribuer. La différence entre vite et webpack se situe principalement dans le temps de constuction (build) vite est beaucoup plus rapide que webpack peu importe l'environnement.

7. Connaissez-vous react-testing-library ? Si oui à quoi il sert ?
   react-testing-library est une librarie de test React qui cible principalement les tests de composants (l'UI) plutôt que des tests d'implémentations et de logique des composants React.

8. Qu'est ce qu'un custom hook (hook personnalisé)
   C'est un hook définie par le développeur dans le but d'extraire une logique de code réutilisable. Sa convention d'écriture est de préfixer par le mot "use" comme par exemple `usePaymentMethod()`

9. La différence entre le virutal DOM et le DOM ?
   Le DOM virtuel est une copie légère du DOM réel en mémoire. React l'utilise pour mettre à jour et restituer efficacement les composants, réduisant ainsi le besoin de manipulation directe du DOM réel. Le DOM virtuel de React exécute un algorithme différent pour identifier et appliquer uniquement les modifications nécessaires au DOM réel, ce qui entraîne des performances améliorées.

10. Quels sont les libraries de composants accessibles ?
    RadixUI, ShakraUI

11. C'est quoi TailwindCss ?
    C'est une librarie qui fournie des classes css préféfinies

12. Que réprésente l'accessibilité ?
    c'est un tout un ensemble de techniques de code visant à rendre l'expérience utilisateur plus épanouissante. Cela s'applique par exemple en utilisants des techniques comme:
    - aria-\*
    - Sémantique HTML : bien utiliser les balises
    - Labellisation dans les formulaires: htmlFor sur les éléments comme `<label />, <checkbox/>` etc
    - le control sur le focus
    - la navigation via le clavier
    - Donner un identifiant à chaque élément html pour les différencier de ses semblables. par ex si deux fois la balise `<span>` dans un composant, il faut rajouter un `<span id="id_span" />`
