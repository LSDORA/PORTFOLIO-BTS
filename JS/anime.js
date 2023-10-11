// Fonction pour basculer les propriétés CSS des boutons
function switchButtons() {
    const worButton = document.getElementById('wor');
    const fworButton = document.getElementById('fwor');
    const ON = document.getElementById('onwor');
    const OFF = document.getElementById('offwor');
  
   


    const tempClassList = worButton.classList;
    worButton.className = fworButton.className;
    fworButton.className = tempClassList;
  
 
  
   
  }
  