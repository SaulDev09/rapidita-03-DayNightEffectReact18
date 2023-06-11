//import { useState } from 'react';
import './ButtonDayNight.css';

export default function ButtonSwitch({ value, onChange }) {
    // const defaultChecked = checked ? checked : false;
    // const [isChecked, setIsChecked] = useState(defaultChecked);
    // const handleChange = () => {
    //     setIsChecked(!checked);
    // };

    return (
        <div className='check-wrapper'>
            <input type="checkbox" id="dark-mode" checked={value} onChange={onChange} />
            <label htmlFor="dark-mode" />
            {/* <div className="background" /> */}
        </div>
    )
}

