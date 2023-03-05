const DOM = {
    text: null,
    date: null,
    time: null,
    notesForm: null,
}
let notes = [];



function init() {
    DOM.text = document.querySelector("#text");
    DOM.date = document.querySelector("#date");
    DOM.time = document.querySelector("#time");
    document.querySelector("#saveButton").addEventListener("click", onClick);
    DOM.notesForm = document.querySelector("#noteContainer");
    const removeAllButton = document.querySelector("#removeButton");
    removeAllButton.addEventListener("click", clearForm);

}

function onClick() {
    const note = {
        text: DOM.text.value,
        date: DOM.date.value,
        time: DOM.time.value,
    }
    notes.push(note);
    drawNotes();



}

function drawNotes(iconSpan, getDeleteButton) {
    const noteContainer = document.querySelector("#noteContainer")
    noteContainer.innerHTML = ""
    for (let index = 0; index < notes.length; index++) {

        const note = notes[index];
        noteContainer.innerHTML += `
         <div class="note-item">
         <span class="glyphicon glyphicon-remove"></span>
        <div class="note-text">
            ${note.text}
        </div>
        <div class="note-date">
        ${note.date}

        </div>
        <div class="note-time">
        ${note.time}

        </div>
    </div> 
    `
    }
}

init()

function clearForm() {
    const clearFormButton = document.querySelector("#notes-container");
    clearFormButton.addEventListener("click", clearFormFn);

}

function clearFormFn() {
    DOM.text.value = "";

}


