import React, { useState } from "react";

function NumberInput() {
    // Using the state hook to create separate state variables for 'number' and 'numPeople'
    const [number, setNumber] = useState('');
    const [numPeople, setNumPeople] = useState('');

    // Defining a function 'handleInputChange' that takes an event 'e' as a parameter
    const handleInputChange = (e, setFunction) => {
      // Extracting the entered value from the event target (the input field)
      const enteredValue = e.target.value;

      // Checking if the entered value is a valid number (using isNaN) or setting it to an empty string if not
        const newValue = isNaN(+enteredValue) ? '' : enteredValue;

      // Updating the respective state variable with the entered value
      setFunction(newValue);
    };


  // The component returns JSX (React elements) that define the user interface
return (
    <div>
        <h1>Bill</h1>
        <input
            type="number"
            id="numberInput"
            value={number}
            onChange={(e) => handleInputChange(e, setNumber)}
        />

    <h3>Select Tip %</h3>
    <table>
        <tbody>
            <tr>
                <td><button>5%</button></td>
                <td><button>10%</button></td>
                <td><button>15%</button></td>
            </tr>

        <tr>
            <td><button>25%</button></td>
            <td><button>50%</button></td>
            <td><input type="number" id="billInput" value="" onChange="" /></td>
        </tr>
    </tbody>
    </table>

        <h1>Number of People</h1>
        <input type="number" id="numPeople" value={numPeople} onChange="" />
    </div>
    );
}

export default NumberInput;
