let costaanName = document.getElementsByClassName("name")[0];
let departmentName = document.getElementsByClassName("department")[0]; 

const names = ['Johny English', 'Guido Rossum', 'Harry Potter', 'Linus Torvalds'];
const departments = ['Department of Something', 'Department of Else', 'Something Else', 'Linux Linux'];
let counter = 0;

function printLetters(index, arr, nameToPrint) 
{
	let person = arr[index];               
	let ar = person.split("");

	if(person != null) {
        for (let i=0; i < ar.length; i++)
        {
			// let element = document.getElementById("element");
            let span = document.createElement('span');
            span.innerHTML = ar[i];
            nameToPrint.appendChild(span);
            span.style.opacity = 0;
        }
        person = null;
	}
    for (let i=0; i < ar.length; i++) 
    {
        (function(i) {
            setTimeout(function() {
                // nameToPrint.getElementsByTagName('span')[i].style.opacity = 1;
                nameToPrint.getElementsByTagName('span')[i].classList.add("scale-letter");
            }, 90 * i);             
        })(i); 
    }
}

function addAnimation() {
    document.getElementsByClassName("th")[0].classList.remove("collapse");
    document.getElementsByClassName("outer-circle")[0].classList.add("animate-outer-circle");
    document.getElementsByClassName("inner-circle")[0].classList.add("animate-inner-circle");
    document.getElementsByClassName("innermost")[0].classList.add("animate-innermost");
    document.getElementsByClassName("rotator-1")[0].classList.add("animate-rotator");        
    // document.querySelector(".circles").style.animation = "slide 1s ease forwards";
} 

function removeAnimation() {
    document.getElementsByClassName("outer-circle")[0].classList.remove("animate-outer-circle");
    document.getElementsByClassName("inner-circle")[0].classList.remove("animate-inner-circle");
    document.getElementsByClassName("innermost")[0].classList.remove("animate-innermost");
    document.getElementsByClassName("rotator-1")[0].classList.remove("animate-rotator");
    document.getElementsByClassName("th")[0].classList.add("collapse");
}

let firstTimeCalled = 0;

function displayDetailsFirst(index) {
    document.querySelector(".circles").style.animation = "slideLeft 1s ease forwards";
                
    setTimeout(()=>{
        printLetters(index, names, costaanName);
        printLetters(index, departments, departmentName);
    },1000)
    setTimeout(()=> {removeAnimation()},3000)
    firstTimeCalled = 1;
}

function displayDetails(index) {
    addAnimation();
    while (costaanName.hasChildNodes()) {
        costaanName.removeChild(costaanName.lastChild);
    }
    while (departmentName.hasChildNodes()) {
        departmentName.removeChild(departmentName.lastChild);
    }

    setTimeout(()=>{
        document.querySelector(".circles").style.animation = "slideRight 1s ease forwards";
    },1000)
    
    setTimeout(() => {
        document.querySelector(".circles").style.animation = "slideLeft 1s ease forwards"; 
    },2500);
    
    setTimeout(()=>{
        printLetters(index, names, costaanName);
        printLetters(index, departments, departmentName);
    },3500)
    setTimeout(()=>{removeAnimation()},5500)
}

// window.onload(addAnimation());   
document.addEventListener("keydown", (e)=> {
    // if (e.keyCode == 32) {
    //     // console.log('works');
    //     if (counter == 0) {
    //         addAnimation();
    //         counter = 1;
    //     }
    //     else {
    //         removeAnimation();
    //         counter = 0;
    //     }
    // }
    // // setTimeout()
    // removeAnimation();
    // else if (e.keyCode == 65) {
    //     printLetters(0, names, costaanName);
    //     printLetters(0, departments, departmentName);
    // }
    
    if (!firstTimeCalled) {
        switch (e.keyCode) 
        {
            case 49: 
                displayDetailsFirst(0);
                break;
            case 50:
                displayDetailsFirst(1);
                break;
            case 51:
                displayDetailsFirst(2);
                break;
            case 52:
                displayDetailsFirst(3);
                break;
        }
    }

    else {
        switch (e.keyCode) 
        {
            case 49: 
                displayDetails(0);
                break;
            case 50:
                displayDetails(1);
                break;
            case 51:
                displayDetails(2);
                break;
            case 52:
                displayDetails(3);
                break;
        }
    }
    
})
