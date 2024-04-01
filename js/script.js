// clear display functon 
const clearDisplay = () => document.getElementById("displayField").value = " "

// showing value in display field function 
const display = value => document.getElementById("displayField").value += value

// calculation function 
const calculate = () => {
    let calculation = eval(document.getElementById("displayField").value)
    document.getElementById("displayField").value = calculation
}