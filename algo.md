## Exercice 1 : Addition de deux nombres

Crée une fonction appelée addition qui prend deux nombres en paramètres et retourne leur somme.

```JavaScript
function addition(a, b) {
  // Écrire le code ici
}
console.log(addition(2, 3)); // Résultat attendu : 5
```


## Exercice 2 : Salutation personnalisée

Crée une fonction appelée salutation qui prend un nom en paramètre et retourne une salutation personnalisée sous forme de chaîne.

```JavaScript
function salutation(nom) {
  // Écrire le code ici
}
console.log(salutation("Alice")); // Résultat attendu : "Bonjour Alice"
```


## Exercice 3 : Est pair ou impair ?

Crée une fonction appelée estPair qui prend un nombre en paramètre et retourne true si le nombre est pair, et false sinon.

```JavaScript
function estPair(nombre) {
  // Écrire le code ici
}
console.log(estPair(4)); // Résultat attendu : true
console.log(estPair(7)); // Résultat attendu : false
```


## Exercice 4 : Calcul de l'aire d'un rectangle

Crée une fonction appelée aireRectangle qui prend deux paramètres (la longueur et la largeur) et retourne l'aire du rectangle.

```JavaScriptfunction aireRectangle(longueur, largeur) {
  // Écrire le code ici
}
console.log(aireRectangle(5, 3)); // Résultat attendu : 15
```


## Exercice 5 : Majuscules ou minuscules ?

Crée une fonction appelée estMajuscule qui prend une chaîne de caractère en paramètre et retourne true si la chaîne est en majuscules, et false sinon.

```JavaScriptfunction estMajuscule(chaine) {
  // Écrire le code ici
}
console.log(estMajuscule("HELLO")); // Résultat attendu : true
console.log(estMajuscule("Hello")); // Résultat attendu : false
```


## Exercice 6 : Maximum de deux nombres

Crée une fonction appelée maxDeuxNombres qui prend deux nombres en paramètres et retourne le plus grand des deux.

```JavaScriptfunction maxDeuxNombres(a, b) {
  // Écrire le code ici
}
console.log(maxDeuxNombres(5, 10)); // Résultat attendu : 10
```


## Exercice 7 : Calcul de la différence

Crée une fonction appelée difference qui prend deux nombres en paramètres et retourne la différence entre le plus grand et le plus petit.

```JavaScriptfunction difference(a, b) {
  // Écrire le code ici
}
console.log(difference(10, 3)); // Résultat attendu : 7
```


# Exercice 8 : Conversion Fahrenheit en Celsius

Crée une fonction appelée convertirEnCelsius qui prend une température en Fahrenheit en paramètre et la convertit en Celsius. La formule de conversion est : C = (F - 32) * 5/9.

```JavaScript
function convertirEnCelsius(fahrenheit) {
  // Écrire le code ici
}
console.log(convertirEnCelsius(100)); // Résultat attendu : 37.7778
```


# Exercice 9 : Vérification de la majorité

Crée une fonction appelée estMajeur qui prend un âge en paramètre et retourne true si l'âge est supérieur ou égal à 18, et false sinon.

```JavaScript
function estMajeur(age) {
  // Écrire le code ici
}
console.log(estMajeur(20)); // Résultat attendu : true
console.log(estMajeur(16)); // Résultat attendu : false
```


# Exercice 10 : Comparaison de trois nombres

Crée une fonction appelée maxTroisNombres qui prend trois nombres en paramètres et retourne le plus grand des trois.

```JavaScript
function maxTroisNombres(a, b, c) {
  // Écrire le code ici
}
console.log(maxTroisNombres(3, 7, 5)); // Résultat attendu : 7
```

# Exercice 11 : Fonction d'opération arithmétique

Crée une fonction appelée calculer qui prend trois paramètres : deux nombres et une fonction représentant une opération arithmétique (addition, soustraction, multiplication ou division). La fonction doit appliquer l'opération donnée aux deux nombres.

```JavaScript
function calculer(a, b, operation) {
  // Écrire le code ici
}
function addition(x, y) {
}
function multiplication(x, y) {
}

console.log(calculer(5, 3, addition)); // Résultat attendu : 8
console.log(calculer(5, 3, multiplication)); // Résultat attendu : 15
```

# Exercice 12 : Filtrage d'une chaîne

Crée une fonction appelée filtrerTexte qui prend une chaîne de caractères et une fonction de filtrage en paramètre. Cette fonction de filtrage doit prendre un caractère et retourner true ou false selon qu'il doit être inclus dans le résultat ou non. filtrerTexte doit retourner une nouvelle chaîne composée uniquement des caractères qui passent le filtre.

```JavaScriptfunction filtrerTexte(chaine, filtre) {
  // Écrire le code ici
}
function estVoyelle(c) {
}
console.log(filtrerTexte("Bonjour", estVoyelle)); // Résultat attendu : "oo"
```

# Exercice 13 : Appliquer une fonction à une valeur

Crée une fonction appelée appliquerTroisFois qui prend un nombre et une fonction en paramètres, et applique cette fonction trois fois de suite au nombre donné. La fonction doit retourner la valeur finale après les trois applications.

```JavaScript
function appliquerTroisFois(valeur, fonction) {
  // Écrire le code ici
}
function incrementer(x) {
}

console.log(appliquerTroisFois(5, incrementer)); // Résultat attendu : 8
```

## Exercice 14 : Transformation de texte

Crée une fonction appelée transformerTexte qui prend une chaîne de caractères et une fonction en paramètre. Cette fonction de transformation doit être appliquée à chaque caractère de la chaîne pour produire une nouvelle chaîne. Par exemple, tu pourrais appliquer une transformation qui met tout en majuscules ou qui ajoute un point après chaque caractère.

```JavaScript
function transformerTexte(texte, transformation) {
  // Écrire le code ici
}
function majuscule(c) {
}
function avecPoint(c) {
}

console.log(transformerTexte("bonjour", majuscule)); // Résultat attendu : "BONJOUR"
console.log(transformerTexte("bonjour", avecPoint)); // Résultat attendu : "b.o.n.j.o.u.r."
```

# Exercice 15 : Fonction conditionnelle

Crée une fonction appelée conditionnelle qui prend trois paramètres : deux nombres et une fonction conditionnelle. Si la fonction conditionnelle retourne true pour ces deux nombres, la fonction conditionnelle doit retourner leur somme. Sinon, elle doit retourner leur produit.

```JavaScript
function conditionnelle(a, b, condition) {
  // Écrire le code ici
}
function estPairEtPositif(x, y) {
}

console.log(conditionnelle(4, 2, estPairEtPositif)); // Résultat attendu : 6 (car la condition est remplie)
console.log(conditionnelle(3, 2, estPairEtPositif)); // Résultat attendu : 6 (car la condition échoue, donc produit)
```

