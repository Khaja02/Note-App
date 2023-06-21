const addNote=document.querySelector("#addNote")
const main=document.querySelector("#main")
const saveNotes=()=>{
    const notes=document.querySelectorAll(".note textarea");
     const data=[];
     notes.forEach(
        (note)=>{
            data.push(note.value)
        }
     )
     if(data.length===0){
        localStorage.removeItem("notes")
     }else{
        localStorage.setItem("notes",JSON.stringify(data))
     }
     
}


addNote.addEventListener(
    "click",
    function(){
        addN()
    }
)

// {/* <div class="note">
//             <div class="tool">
//                 <i class="fas fa-trash"></i>
//                 <i class="fas fa-save"></i>
//             </div>
//             <textarea></textarea> 
//         </div> */}
const addN =(text="")=>{
    const note=document.createElement("div");
    note.classList.add("note")
    note.innerHTML=`
    <div class="tool">
        <i class="trash fas fa-trash"></i>
        <i class="save fas fa-save"></i>
        <i class=hey>helo</i>
    </div>
    <textarea>${text}</textarea> 
    `;


    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove()
            saveNotes()
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNotes()
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            saveNotes()
        }
    )
    main.appendChild(note);
    saveNotes()
}
(
    function(){
        const lsNotes=JSON.parse(localStorage.getItem("notes"));
        if(lsNotes===null){
            addN()
        }else{
            lsNotes.forEach(
                (lsNote)=>{
                    addN(lsNote)
                }
            )
        }
        
    }
)()