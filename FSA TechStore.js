let users = {};
let currentUser = "";

function showPage(p){
  document.querySelectorAll("div.page").forEach(d=>d.style.display="none");
  document.getElementById(p).style.display="block";
}

function inscrire(){
  let nom = document.getElementById("nom").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  users[email] = {nom:nom, pass:pass};
  showPage('inscriptionOK');
}

function connecter(){
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPass").value;
  if(users[email] && users[email].pass===pass){
    currentUser = email;
    showPage('connexionOK');
  } else {
    showPage('erreurLogin');
  }
}

function genererFacture(){
  let checkboxes = document.querySelectorAll("#produits input:checked");
  let total=0, liste="";
  checkboxes.forEach(c=>{
    let parts=c.value.split("-");
    liste += parts[0]+" - "+parts[1]+" DH<br>";
    total += parseInt(parts[1]);
  });
  document.getElementById("factureClient").innerHTML="Client : "+users[currentUser].nom;
  document.getElementById("factureProduits").innerHTML=liste;
  document.getElementById("factureTotal").innerHTML="TOTAL : "+total+" DH";
  showPage('facture');
}

function telechargerFacturePDF(){
  window.print(); // ouvre la page d'impression puis tu sauvegarde en PDF
}