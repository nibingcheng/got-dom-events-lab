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

for (let i=0; i<characters.length; i++) {
  let str = charEl[i].innerHTML + "<button class=" + "more-info" + ">More Info</button>\n";
  charEl[i].innerHTML = str;
  
  if (i === 0) {
    str = charEl[i].innerHTML + "<p id=" + "Daenerys" + "> </p>";
    charEl[i].innerHTML = str;
  }
  if (i === 1) {
    str = charEl[i].innerHTML + "<p id=" + "Khal" + "> </p>";
    charEl[i].innerHTML = str;
  }
  if (i === 2) {
    str = charEl[i].innerHTML + "<p id=" + "Tyrion" + "> </p>";
    charEl[i].innerHTML = str;
  }
  if (i === 3) {
    str = charEl[i].innerHTML + "<p id=" + "Sansa" + "> </p>";
    charEl[i].innerHTML = str;
  }
  if (i === 4) {
    str = charEl[i].innerHTML + "<p id=" + "Arya" + "> </p>";
    charEl[i].innerHTML = str;
  }
  if (i === 5) {
    str = charEl[i].innerHTML + "<p id=" + "Jon" + "> </p>";
    charEl[i].innerHTML = str;
  }

}
// console.log(charEl[4].innerHTML);
  
let moreInfo = document.querySelectorAll("button");
let bio = document.querySelectorAll("p");
// console.log(bio[3].textContent);

for (let i=0; i<characters.length; i++) {
  moreInfo[i].addEventListener("click", function(e) {
    // console.log("hello")
  bio[i].innerHTML = characters[i].name + ": <br>" + characters[i].bio;    
  });      
}

let form = document.querySelector('form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  // console.log(e)  

  let characterNameInput = e.target[0].value;
  // console.log(characterNameInput); 
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
  // console.log(index);
  
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


/*
    let password = e.target.elements[1].value;
    let verify = e.target.elements[2].value;
    console.log(password, verify)
    if(password === verify) {
      alert('Match!');
    }
    else {
      alert('Try again!');
    } 
*/