import {Text } from "@canva/app-ui-kit";
import React, { useState } from 'react';

function Days({updateDaysVisible, arrayDays}){
  const [selectedDays, setSelectedDays] = useState([]);

  const handleUpdate = (event) => {
    const { name, checked } = event.target;

    // Copia l'array corrente dei giorni selezionati
    const updatedSelectedDays = [...arrayDays];

    if (checked) {
      // Aggiungi il giorno alla lista se è selezionato
      updatedSelectedDays.push(`${name}`);
    } else {
      // Rimuovi il giorno dalla lista se è deselezionato
      const index = updatedSelectedDays.indexOf(name);
      if (index !== -1) updatedSelectedDays.splice(index, 1); //elimina un elemento dall' l'indice indicato 
      
    }

    // Aggiorna lo stato con la nuova lista di giorni selezionati
    updateDaysVisible(updatedSelectedDays);
  };

  return (
    <form onChange={handleUpdate}>
      <Text>Seleziona i giorni della settimana:</Text>
      <label style={{fontSize: "15px"}}>
        <input type="checkbox" name="Lunedì"/>
        Lunedì
      </label>
      <br/>
      <label style={{fontSize: "15px"}}>
        <input type="checkbox" name="Martedì"/>
        Martedì
      </label>
      <br/>
      <label style={{fontSize: "15px"}}>
        <input type="checkbox" name="Mercoledì"/>
        Mercoledì
      </label>
      <br/>
      <label style={{fontSize: "15px"}}>
        <input type="checkbox" name="Giovedì"/>
        Giovedì
      </label>
      <br/>
      <label style={{fontSize: "15px"}}>
        <input type="checkbox" name="Venerdì"/>
        Venerdì
      </label>
      <br/>
      <label style={{fontSize: "15px"}}>
        <input type="checkbox" name="Sabato"/>
        Sabato
      </label>
      <br/>
      <label style={{fontSize: "15px"}}>
        <input type="checkbox" name="Domenica"/>
        Domenica
      </label>
    </form>
  );
};

export default Days;
