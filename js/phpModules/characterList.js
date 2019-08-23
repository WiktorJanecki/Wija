/////characters == mysql.getCharacters

const form = document.getElementById("charactersForm");
if(characters !== undefined){
    var charactersCount = Object.keys(characters).length; 
    for(let i = 0;i<charactersCount;i++){
        ////////RADIOBOXES
        const radio  = document.createElement("input");
        radio.type = "radio";
        radio.name = "chooseCharacter";
        radio.value = Object.keys(characters)[i];
        radio.id = i;
        const div = document.createElement('div');
        div.style="text-align:left"
        const span = document.createElement('span');
        span.textContent = Object.keys(characters)[i];
        div.appendChild(radio);
        div.appendChild(span);
        form.appendChild(div);
        //draw characters etc.
        form.appendChild(document.createElement("br"));
    }
}
/////////////////NEW CHARACTER BUTTON
    const newCharacterButton = document.createElement('button'); //new char btn
    newCharacterButton.type = "button";
    newCharacterButton.textContent = "Nowa postać"; 
    newCharacterButton.className = "btn btn-primary col-12 mb-3"
    newCharacterButton.onclick = () =>{
        window.location.href = "/?v=create-character";
    };
    form.appendChild(newCharacterButton);
////////////////////////////////////
form.appendChild(document.createElement("br"));  //br
//////////////////VIEW BUTTON
    const editButton = document.createElement('button');// View btn
    editButton.type = "button";
    editButton.textContent = "Zobacz postać";
    editButton.className = "btn btn-secondary col-12 mb-3"
    editButton.onclick = () =>{
        form.action = "/?v=view-character";
        form.method = "post";
        form.submit();
    };
    form.appendChild(editButton);
/////////////////////////////
form.appendChild(document.createElement("br"));  //br
///////////////////PLAY BUTTON
    const playButton = document.createElement('button'); //play btn
    playButton.type = "button";
    playButton.textContent = "Graj";
    playButton.className = "btn btn-success col-12 mb-3"
    playButton.onclick = () =>{
        window.location.href = "/game.php";
    };
    form.appendChild(playButton);
/////////////////////////////
