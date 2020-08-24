// Search for the button
document.querySelector("#add-time")

// When the button is clicked
.addEventListener('click', cloneField);

// Do
function cloneField () {

    //console.log('clicou horario');
    
    // Clone the fields. What fields?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    
    // Select the inputs. What inputs?
    const fields = newFieldContainer.querySelectorAll('input');
  
    /*
    fields[0].value = "";
    fields[1].value = "";
    */

    // For each field, clear.
    fields.forEach(
        function (field) {
            // Take the current field and clear it.
            field.value = "";
        }
    )

    // Put on page. Where?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
    