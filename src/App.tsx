import './buttonDayNight.css'
import { useState } from 'react';
import ButtonSwitch from './ButtonDayNight';

function App() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <ButtonSwitch
        value={checked}
        onChange={handleChange} />

      <section className={checked ? 'day' : 'night'}>
        <img src='images/bg.jpg' id="bg" />
      </section>
    </>
  )
}

export default App