const resetButton = document.querySelector('#reset button');
const buttons = document.querySelectorAll('button');


resetButton.addEventListener('click', reset);
//buttons[0].addEventListener('click', func);

// const clickButton = buttons.addEventListener('click', func);
for(let k = 1; k<buttons.length; k++){
    buttons[k].addEventListener('click', func);
}


function func(e){
    //this.parentElement.style.background = "blue";
    let img = document.createElement('img');
    img.src = "imgs/trash.jpg";
    this.parentElement.appendChild(img);
    let n = parseInt(this.parentElement.getElementsByTagName('span')[0].innerText)+1;
    this.parentElement.getElementsByTagName('span')[0].innerText = `${n}`;
    if(n==7){
        //find person who has taken out the garbage the smallest number of times
        let i  = [];
        let temp;
        for(let k = 1; k<buttons.length; k++){
            temp = parseInt(buttons[k].parentElement.getElementsByTagName('span')[0].innerText);
            if(temp<n){
                n=temp;
                i = [];//reset array
                i[0]=k;
            }
            else if(temp==n){
                i.push(k);
            }
        }

        let peopleWhoOweCookie = buttons[i[0]].parentElement.id;
        for(let k = 1; k<i.length;k++){
            if(k==i.length-1)
                peopleWhoOweCookie = peopleWhoOweCookie + ', and ' + buttons[i[k]].parentElement.id;
            else
                peopleWhoOweCookie = peopleWhoOweCookie + ', ' + buttons[i[k]].parentElement.id;
        }
        peopleWhoOweCookie = peopleWhoOweCookie + ` owe ${this.parentElement.id} a cookie`;
        //give all sections the switch class
        
         for(let k = 0; k<buttons.length;k++){
            buttons[k].parentElement.setAttribute('class', 'switch');
        }
        

        buttons[0].parentElement.getElementsByTagName('p')[0].innerText = peopleWhoOweCookie;
    }
    // for(let roomy in buttons){

    // }
}

function reset(){
    document.querySelectorAll('img').forEach(e => e.remove());
    for(let k = 0; k<buttons.length;k++){
        buttons[k].parentElement.setAttribute('class', '');
        if(k!=0){
            buttons[k].parentElement.getElementsByTagName('span')[0].innerText = '0';
        }

        // if(k!=0){
        //     buttons[k].parentElement.innerHTML=`<button>${buttons[k].parentElement.id} <span>0</span></button>`;
        //     buttons[k].addEventListener('click', func);
        // }
        // else{
        //     buttons[k].parentElement.innerHTML = "<p></p> <button>Reset</button>";
        //     resetButton.addEventListener('click', reset);
        // }
    }
   
}