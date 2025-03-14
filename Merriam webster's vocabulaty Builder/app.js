document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('vocabulary-form');
    const wordInput = document.getElementById('word-input');
    const definitionInput = document.getElementById('definition-input');
    const vocabularyList = document.getElementById('vocabulary-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const word = wordInput.value.trim();
        const definition = definitionInput.value.trim();

        if (word && definition) {
            const listItem = document.createElement('li');
            listItem.textContent = `${word}: ${definition}`;
            vocabularyList.appendChild(listItem);

            wordInput.value = '';
            definitionInput.value = '';
        }
    });
});