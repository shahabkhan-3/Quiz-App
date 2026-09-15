let container = document.querySelector('.container')
let Q = document.querySelector('.question')
let option = document.querySelector('.option')
let btns = document.querySelectorAll('.btn')
let nextbtn = document.querySelector('.next')
let result = document.querySelector('.result')
let score = document.querySelector('.score')
let playAgain = document.querySelector('.play-again')
let currentQ = 0;
let myScore= 0;
let questions = [{
    Q: 'what is the capital of Pakistan',
    options: ['Peshawar','Islamabad','Lahore','karachi'],
    answer: 'Islamabad'},
    {
     Q: 'what is the capital of Pukhtunkhuwa',
    options: ['Peshawar','Islamabad','Lahore','karachi'],
    answer: 'Peshawar'},
    {
         Q: 'Who invented JavaScript?',
    options: ['Tim Berners-Lee','Brendan Eich', 'Haakon Wium Lie','elon musk'],
    answer: 'Brendan Eich'},
                 {
        Q: 'In HTML, JavaScripts must be inserted inside which HTML tags?',
    options: ['<script> and </script>','<javascript> and </javascript>', '<head></head>','<link >'],
    answer: '<script> and </script>'},  
                 {
                     Q: 'What is the correct file extension for JavaScript files?',
    options: ['.jvs','.jv', '.js','.javascript'],
    answer: '.js'
}]
function showQ(){
let currentQbox = questions[currentQ]
Q.innerText = currentQbox.Q
btns.forEach((btn,index )=> {
   btn.innerText = currentQbox.options[index]
   btn.classList.remove('active','wrong','correct')
   btn.disabled= false
})
}
   btns.forEach(btn =>{
   btn.addEventListener('click',()=>{
    btns.forEach(b => b.classList.remove('active','wrong','correct'))
    
    let currentQbox = questions[currentQ]
if(btn.innerText == currentQbox.answer)
{
    btn.classList.add('correct')
    myScore++
    
}
else{
    btn.classList.add('wrong')
}
btns.forEach(b => b.disabled = true)
   })
})
nextbtn.addEventListener('click',function(){
currentQ++


if(currentQ < questions.length){
    showQ()
   btns.forEach(b => b.disabled = false)
}
   
else{
    Q.innerText=''
    score.innerText=` Your score is ${myScore} /5`
    btns.forEach(btn => btn.style.display ='none')
    result.style.display ='block'
    playAgain.style.display = 'block'
    nextbtn.style.display='none'
 }
})

playAgain.addEventListener('click',function(){
    currentQ =0
    myScore=0

    btns.forEach(btn =>{
        btn.style.display ='block'
        btn.classList.remove('active','wrong','correct')
        btn.disabled=false
    })
    nextbtn.style.display = 'block'
    playAgain.style.display ='none'
    result.style.display ='none'
    score.innerText=''


    showQ()
})
showQ()
