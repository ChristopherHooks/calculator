# JavaScript Calculator

This project implements a simple calculator using JavaScript, HTML, and CSS. The calculator performs basic arithmetic operations such as addition, subtraction, multiplication, and division, while handling user interactions via a dynamic display and event listeners.

## Features

1. **Arithmetic Operations**:  
   - **Addition (`+`)**: Adds two numbers and displays the result.  
   - **Subtraction (`-`)**: Subtracts the second number from the first and displays the result.  
   - **Multiplication (`x`)**: Multiplies two numbers and displays the result.  
   - **Division (`%`)**: Divides the first number by the second. Handles division by zero with a user-friendly message.

2. **Precision Handling**:  
   Results with decimals are displayed with a maximum of two decimal places. Whole number results are displayed without decimals.

3. **Interactive Display**:  
   - Numbers and operations are dynamically updated in the display area.  
   - Users can undo the current input or clear all calculations.

4. **Keyboard Support**:  
   - Numeric keys and `.` for entering numbers.  
   - Operators (`+`, `-`, `*`, `/`) for arithmetic operations.  
   - `Enter` for calculating the result.  
   - `Backspace` for undoing the last input.  
   - `Escape` for clearing all inputs.

## How to Use

1. **Basic Operations**:
   - Click or press a number to input it.
   - Click or press an operator to select the desired arithmetic operation.
   - Enter the second number and press `=` or `Enter` to view the result.

2. **Special Buttons**:
   - **Clear (`C`)**: Resets all inputs and clears the display.
   - **Undo**: Clears the current input.

3. **Keyboard Shortcuts**:
   - Numbers (`0-9`) and `.`: Input values.
   - Operators (`+`, `-`, `*`, `/`): Select operations.
   - `Enter`: Execute the operation.
   - `Backspace`: Undo the last input.
   - `Escape`: Clear all inputs.

## Code Overview

### Core Functions

- **`add(num1, num2)`**: Adds two numbers.  
- **`subtract(num1, num2)`**: Subtracts the second number from the first.  
- **`multiply(num1, num2)`**: Multiplies two numbers.  
- **`divide(num1, num2)`**: Divides the first number by the second, handling division by zero.  
- **`operate(num1, num2, operator)`**: Executes the appropriate operation based on the given operator.

### Display Management

- The display is dynamically updated using `display.value`, ensuring real-time feedback for user input.

### Event Listeners

- **Number Buttons**: Append numbers to the display.
- **Operator Buttons**: Set the desired operation.
- **Equal Button**: Perform the calculation and display the result.
- **Clear Button**: Reset the calculator.
- **Undo Button**: Remove the current input from the display.

### Keyboard Events

- `keydown` event listener maps keyboard inputs to the calculator buttons.

## File Structure

- **`index.html`**: Contains the calculator layout and button elements.  
- **`styles.css`**: Defines the calculator's appearance.  
- **`script.js`**: Implements the calculator's logic and functionality.

## Potential Improvements

- Add support for more advanced operations like exponents, square roots, or percentages.
- Enhance UI/UX with animations and themes.
- Implement a history feature to track previous calculations.

## How to Run

1. Clone the repository or copy the code to your local machine.
2. Open the `index.html` file in a browser.
3. Start using the calculator by interacting with the buttons or using keyboard shortcuts.
