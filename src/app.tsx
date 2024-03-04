import { Button, Rows, Text, Alert } from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";
import * as React from "react";
import { useSelection } from "utils/use_selection_hook";
import styles from "styles/components.css";
import { useState } from "react";
import Days from "./days"

export const App = () => {
  const [days, setDaysVisible] = useState([]);
  const [dayCounter, setDayCounter] = useState(0);
  const selection = useSelection("plaintext");

  const updateDaysVisible = (newDays) => {
    setDaysVisible(newDays);
    setDayCounter(0);
  };

  const updateDayCounter = () =>{
    if(dayCounter==days.length-1) setDayCounter(0);
    else setDayCounter(dayCounter+1);
  };

  const updateText = async (e) => {
    e.preventDefault();
    if (selection.count == 0) return;
      
    const draft = await selection.read();
    draft.contents.forEach((s) => (s.text = `${days[dayCounter]}`));
    updateDayCounter();
    await draft.save();
  };

  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="2u">
        <Days updateDaysVisible={updateDaysVisible} arrayDays={days}></Days>
        <Button variant="primary" onClick={updateText} stretch>
          Sostituisci giorno
        </Button>
        
      </Rows>
    </div>
  );
};
