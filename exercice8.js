let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

console.log("===== RAPPORT UTILISATEUR =====")

let nomCorrige = nom.trim()
if(nomCorrige === ""){
nomCorrige = "Inconnu"
}
console.log('nom : "' + nomCorrige + '"')

let ageNombre = Number(age)
if(Number.isNaN(ageNombre) || ageNombre <= 0){
console.log("age : invalide")
}else{
console.log("age :", ageNombre , "(valide)")
}

let posAt = email.indexOf("@")
let posPoint = email.indexOf(".", posAt)

if(posAt !== -1 && posPoint !== -1){
console.log('email : "' + email + '" (valide)')
}else{
console.log('email : "' + email + '" (invalide)')
}

let score = parseInt(scoreJeu)
if(Number.isNaN(score)){
score = 0
}
console.log("scoreJeu :", score)

let admin
if(estAdmin === "true"){
admin = true
}else{
admin = false
}
console.log("estAdmin :", admin)

let connexion = derniereConnexion ?? "Jamais connecté"
console.log("derniereConnexion :", connexion)

let nb = Number(nombreConnexions)

if(nb === 0){
console.log('nombreConnexions : "Aucune connexion"')
}else{
console.log("nombreConnexions :", nb)
}

console.log("================================")