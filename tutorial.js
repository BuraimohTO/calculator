// function animatedForm(){
// const arrows = document.querySelectorAll('.fa-arrow-down');
// arrows.forEach(arrow=>{
//     arrow.addEventListener('click', ()=>{
//         const input = arrow.previousElementSibling;
//         const parent = arrow.parentElement;
//         console.log(input);
//         const nextForm = parent.nextElementSibling;
// //checkn for validation
// if(input.type==="text" && validateUser(input)){
//    nextSlide(parent, nextForm)
// }
//    else if(input.type==="email" && validateEmail(input)){
//        nextSlide(parent,nextForm)
//    }
//    else if(input.type==="password" && validateUser(input)){
//        nextSlide(parent,nextForm);
//    }
//    else{
//        parent.style.animation = "shake 0.5s ease";
//    }
//    //get rid of animation
//    parent.addEventListener('animationend', ()=>{
//        parent.style.animation=""
//    })
//     })
// })

// }

// function validateUser(user){
//     if(user.value.length < 6){
//        console.log('not enough characters')
//         error("red")
//     }
//     else{
//         error("green")
//         return true;
//     }
// }

// function validateEmail(email){
//     const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(validation.test(email.value)){
//         error('green')
//         return true;
//     }
//     else{
//         error('red')
//     }
// }


// function error(color){
//     document.body.style.backgroundColor=color;
// }

// function nextSlide(parent, nextForm){
// parent.classList.add("innactive");
// parent.classList.remove("active");
// nextForm.classList.add("active")

// }


// animatedForm();


