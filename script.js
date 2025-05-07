// Selecting the elements
const title = document.getElementById('title');


const button = document.getElementById('changeTextButton');

// Add an event listener to the button
button.addEventListener('click', () => {
    // Change the text content of the title
    title.textContent = 'Where Agriculture begins!';
});


// Selectin the elements
const styleButton = document.getElementById('changetitlestyle');

// Add an event listener to the button
styleButton.addEventListener('click', () => {
    // Modify the CSS styles of the title
    title.style.color = 'blue';
    title.style.fontSize = '2.5rem';
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.textAlign = 'center';
});


// Select the container and buttons
const container = document.getElementById('products');
const addElementButton = document.getElementById('anotherUse');

// Add an event listener to the "Add Element" button
addElementButton.addEventListener('click', () => {
    // Create a new paragraph element and style it
    const newElement = document.createElement('p');
    newElement.textContent = 'Avocado trees also provide a good shade!';
    newElement.className = 'dynamic-element';
    newElement.style.color = 'green';
    newElement.style.textAlign = 'center';
    newElement.style.fontSize = '2rem';
    // Append the new element to the container
    container.appendChild(newElement);
});
