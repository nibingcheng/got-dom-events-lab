var characters = [
  {
    name: "Daenerys Targaryen",
    bio:
      'The youngest child of King Aerys II — also known as the Mad King — Daenerys is known by many titles, including the Mother of Dragons, or Khaleesi (which simply means "queen" in Dothraki).',
    status: "alive"
  },
  {
    name: "Khal Drogo",
    bio:
      'Khal Drogo is the leader of a Dothraki "khalasar" (tribe). He and Daenerys eventually come to care for one another, but the marriage begins under traumatic circumstances.',
    status: "dead"
  },
  {
    name: "Tyrion Lannister",
    bio:
      "Joanna Lannister died in childbirth when Tyrion when born. He's known for his cleverness and sharp tongue, though many derisively call him the Imp or Halfman.",
    status: "alive"
  },
  {
    name: "Sansa Stark",
    bio:
      "Sansa Stark was raised as a highborn lady who would one marry into another great house.",
    status: "alive"
  },
  {
    name: "Arya Stark",
    bio:
      "Arya has no desire to grow up in the confines of ladyship — she prefers swords to sewing.",
    status: "alive"
  },
  {
    name: "Jon Snow",
    bio:
      "Said to be the bastard son of Ned Stark and a mystery woman, Jon is slightly ostracized from the rest of the Stark kids.",
    status: "alive"
  }
];

let charEl = document.querySelectorAll(".character");

// Add another button to each character's <div> with the class 'alive-or-dead'
// Add a button to each character's <div> with the class 'more-info'
// Add a <p> tag to each character's <div> without class or id 
for (let i=0; i<characters.length; i++) {
    // 2021-1-14: requirement #4 add box
    let h4 = document.createElement('h4');
    h4.innerHTML = " ";
    charEl[i].appendChild(h4);

    let str2 = charEl[i].innerHTML + "<button class=" + "alive-or-dead" + ">Status</button>\n";
    charEl[i].innerHTML = str2;
    
    let str = charEl[i].innerHTML + "<button class=" + "more-info" + ">More Info</button>\n";
    charEl[i].innerHTML = str;  

    str = charEl[i].innerHTML + "<p> </p>";
    charEl[i].innerHTML = str;
}
  
let aliveOrDead = document.querySelectorAll(".alive-or-dead");
let moreInfo = document.querySelectorAll(".more-info");
let profile = document.querySelectorAll("p");

// Handle more-info button click
for (let i=0; i<characters.length; i++) {
  moreInfo[i].addEventListener("click", function(e) {
  profile[i].innerHTML = characters[i].name + ": <br>" + characters[i].bio;    
  });      
}

// Add event listener to the form (added in HTML)
let form = document.querySelector('#form')
form.addEventListener('submit', handleSubmit)

// Handle form submit input click
function handleSubmit(e) {
  e.preventDefault()

  let characterNameInput = e.target[0].value; 
  let nameMatch = false;
  let index = null;

  for (let i=0; i<characters.length; i++) {
    if (characterNameInput.toLowerCase() === characters[i].name.toLowerCase()) {
      nameMatch = true;
      index = i;
    }
    if (i === (characters.length-1) && nameMatch === false) {
      alert('Invilad name.');
    }  
  }
// make only namr-matched character visible, hide others  
  for (let i=0; i<characters.length; i++) {
    charEl[i].style.visibility = 'hidden';
    if (nameMatch == true) {
      charEl[index].style.visibility = 'visible'
    }
    else {
      charEl[i].style.visibility = 'visible';
    }
  }
}

// Handle alive-or-dead button click
let h4 = document.querySelectorAll('h4');
for (let i=0; i<characters.length; i++) {
    aliveOrDead[i].addEventListener("click", function(e) {
        
    if(characters[i].status === "alive") {
      h4[i].innerHTML = 'STILL ALIVE';
    }
      else {
        h4[i].innerHTML = 'SORRY, YOU DEAD';
      }  
    });      
}
