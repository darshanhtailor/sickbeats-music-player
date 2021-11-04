class Node{
    constructor(f){
        this.f = f;
        this.next = null;
    }
}

let head = null, last = null;
let mp = new Map();
function addToPlaylist(f){
    for(var i in f){
        if(typeof(f[i]) == "object"){
            if(!mp[f[i].name]){
                if(!head){
                    head = new Node(f[i]);
                    last = head;
                }
                else{
                    last.next = new Node(f[i]);
                    last = last.next;
                }
                mp[f[i].name] = true;
            }
        }
        else break;
    }
}

function printLL(){
    console.clear();
    let ptr = head;
    while(ptr){
        console.log(ptr.f);
        ptr = ptr.next;
    }
}

const fileSelector = document.getElementById('songs-input');
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    // console.log(typeof(fileList[1]));
    addToPlaylist(fileList);
    printLL();  
});



