function addition(a, b) {
    return a + b
}
console.log(addition(2, 3));

function salutation(nom) {
   const result = `Bonjour ${nom}`
   return result
}
console.log(salutation("Alice")); 

function estPair(nombre) {
    if (nombre%2 == 0) {
        return true
    }else{
        return false
    }
  }
  console.log(estPair(4)); // Résultat attendu : true
  console.log(estPair(7)); // Résultat attendu : false

function aireRectangle(longeur, largeur) {
    const result = longeur * largeur
    return result
}

  console.log(aireRectangle(5, 3)); // Résultat attendu : 15



function estMajuscule(string) {
    if (string === string.toUpperCase()) {
        return true
    }else{
        return false
    }
}

  console.log(estMajuscule("HELLO")); // Résultat attendu : true
  console.log(estMajuscule("Hello")); // Résultat attendu : false

  function convertirEnCelsius(fahrenheit) {
    C = (fahrenheit - 32) * 5/9.
    return C
  }
  console.log(convertirEnCelsius(100)); // Résultat attendu : 37.7778


  function estMajeur(age) {
    if (age >= 18) {
        return true
    }else{
       return false
    }
  }
  console.log(estMajeur(20)); // Résultat attendu : true
  console.log(estMajeur(16)); // Résultat attendu : false


  function maxTroisNombres(a, b, c) {
    const result = Math.max(a, b, c)
    return result
  }
  console.log(maxTroisNombres(3, 7, 5)); // Résultat attendu : 7



  function calculer(a, b, operation) {
    return operation(a, b)
  }
  function addition(x, y) {
    return x + y
  }
  function multiplication(x, y) {
    return x * y
  }
  
  console.log(calculer(5, 3, addition)); // Résultat attendu : 8
  console.log(calculer(5, 3, multiplication)); // Résultat attendu : 15

// function filtrerTexte () {
    
// }

//   function estVoyelle(c) {
// }

// console.log(filtrerTexte("Bonjour", estVoyelle)); // Résultat attendu : "oo"

function appliquerTroisFois(valeur, fonction) {
    let result = valeur; 
    for (let index = 0; index < 3; index++) {
        result = fonction(result); 
    }
    return result;
}

function incrementer(x) {
    return x + 1; 
}

console.log(appliquerTroisFois(5, incrementer)); // Résultat attendu : 8


function transformerTexte(texte, transformation) {
    
    return  transformation(texte)
  }
  function majuscule(c) {
    return c.toUpperCase()
  }
  function avecPoint(c) {
    return c.split('').join('.')
  }
  
  console.log(transformerTexte("bonjour", majuscule)); // Résultat attendu : "BONJOUR"
  console.log(transformerTexte("bonjour", avecPoint)); // Résultat attendu : "b.o.n.j.o.u.r."



  function conditionnelle(a, b, condition) {
    if (condition(a, b)) {
      return a + b;
    }
    // Sinon, retourner leur produit
    return a * b;
  }
  
  function estPairEtPositif(x, y) {
    return x > 0 && y > 0 && x % 2 === 0 && y % 2 === 0;
  }
  
  console.log(conditionnelle(4, 2, estPairEtPositif)); // Résultat attendu : 6 (car la condition est remplie)
  console.log(conditionnelle(3, 2, estPairEtPositif)); // Résultat attendu : 6 (car la condition échoue, donc produit)
  