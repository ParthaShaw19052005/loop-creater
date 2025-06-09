document.querySelector('.loop_button').addEventListener('click', function() {
    let inputText = document.querySelector('.left_input').value;
    let loopCount = parseInt(document.querySelector('.select_loop').value);
    let outputField = document.querySelector('.right_section');

    // Clear previous output
    outputField.innerHTML = ''; 

    // Ensure valid input
    if (!inputText.trim()) {
        alert("Please enter text to loop!");
        return;
    }

    if (isNaN(loopCount) || loopCount < 0) {
        alert("Please select a valid loop count!");
        return;
    }

    // Generate new lines for each loop iteration
    for (let i = 0; i < loopCount; i++) {
        let newParagraph = document.createElement('p');
        newParagraph.textContent = inputText;
        newParagraph.style.margin = "5px 0";
        outputField.appendChild(newParagraph);
    }
});
