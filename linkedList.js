class Node{
    constructor(num){
        this.num = num;
        this.next = null;
    }
}

let head = null, curr = null;
function addToLL(){
    let numField = document.getElementById("value");
    let num = numField.value;
    numField.value = "";
    if(!head){
        head = new Node(num);
        curr = head;
    }
    else{
        curr.next = new Node(num);
        curr = curr.next;
    }
    alert(`${num} is added to linked list`);
}

function printLL(){
    console.clear();
    let ptr = head;
    while(ptr){
        console.log(ptr.num);
        ptr = ptr.next;
    }
}