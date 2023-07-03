

let quenum = document.querySelector(".question");

let radiobtn = document.querySelectorAll(".answer");

let btn = document.querySelector(".btn");

    let quest = [{
    ques: "Which of the following languages is most commonly used for web development",
    a:"HTML",
    b: "Javascript",
    c: "CSS", 
    d: "PHP",
    ans: "opt2"
},

{
   ques:"Which actress is known as the national crush of India",
   a:"Rashi khanna",
   b:"Sammantha ruth prabhu",
   c:"Rashmika mandanna",
   d:"Keerthy suresh",
   ans:"opt3"
},

{
   ques: "Which type of data can be stored in the database" ,
 a: "Image oriented data",
b: "Text, files containing data",
c:" Data in the form of audio or video",
d: "All of the above",
ans:"opt4"
}, 

{
    ques:"which of the following my correct instagram handle ",
    a:"deepakgaikwad2044",
    b:"deePakGaikwad_2044",
    c:"deepakGaikwad_2044",
    d:"deepakgaikwad_2044",
    ans:"opt4"
} ,

{
    ques: "which of the following my youtube channel handle",
    a:"@dpkedits",
    b:"@DPKedits",
    c:"@DGEDITS",
    d:"@DPKEDITS",
    ans:"opt1"
}
,

{
    ques:"What is React.js",
a:"Open-source JavaScript back-end library",

b:"JavaScript front-end library to create a database",

c:"Free and open-source JavaScript front-end library",

d:"None of the mentioned",
ans:"opt3"
},

{
    ques:"Who works at the visualize part of the website",

a:"UX Designer ",

b:"Web Developer ",

c:"UI Designer ",

d:"Graphic Designer",

ans:"opt3"
},

{
  ques:"which question is most searched on google",
  a:"what cream can i use to make my dark skin glow ",
  b:"how to get girlfriend",
  c:"how to hack google",
  d:"what is the best age for marriage ",
  ans:"opt2"
}
]

 

let opt1 = document.querySelector("#lbl1")
let opt2 = document.querySelector("#lbl2")
let opt3 = document.querySelector("#lbl3")
let opt4 = document.querySelector("#lbl4")
 
 let resdiv = document.querySelector(".resdiv");
 let resulttext = document.querySelector(".resdiv h3");
 
var ind=0;
var score =0;
 
const quize = ()=>{
  

    var quizelen = quest[ind];
    
quenum.innerHTML =   quest[ind].ques;

opt1.innerHTML = ` <h4>${quest[ind].a}</h4>`;
opt2.innerHTML = ` <h4>${quest[ind].b}</h4>`;
opt3.innerHTML = ` <h4>${quest[ind].c}</h4>`;
opt4.innerHTML = ` <h4>${quest[ind].d}</h4>`;

}

quize();

console.log(quest.length)

const check = ()=>{
 
 
    radiobtn.forEach((cur)=>{
       
       if(cur.checked) {
         answer = cur.id;
       }
    });
    

    
    return answer;
}


const deselect = ()=>{
    
    radiobtn.forEach((curElm)=> curElm.checked = false);
}


btn.addEventListener("click", ()=>{
    let res = check();
   
 
    
    if(res === quest[ind].ans){
        
        let jawab = quest[ind].ans;
        console.log("correct");
        score++;
        
        resdiv.style.display="block";
        resdiv.classList.remove("wrong");
        resdiv.classList.add("correct");
        resulttext.innerHTML = `correct 😊`
   
    }else{
          resdiv.classList.remove("correct");
        resdiv.classList.add("wrong");
        resdiv.style.display="block";
        resulttext.innerHTML = `wrong 😐`
 
    }
    
    ind++;
    
    

  
  deselect() ;
    if(ind < quest.length ){
       
        quize();
        
    }else{
        resdiv.style.display="block";
        let div= document.createElement("div");
        
        div.classList.add("resdiv");
        
        resulttext.innerHTML = `You scored ${score}/ ${quest.length} 😊 <br>
        
        <button  class="tryagainbtn" onclick ="location.reload()" >Play again </button>`;
        
    }
   
  
   
 
});
