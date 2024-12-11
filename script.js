const reviews = [
    {
      name: 'Susan Smith',
      job: 'Web Developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      name: 'Anna Johnson',
      job: 'Web Designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      name: 'Peter Jones',
      job: 'Intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      name: 'Bill Anderson',
      job: 'The Boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

const img = document.querySelector(".img");
const names = document.getElementById('name');
const job = document.getElementById('job');
const text = document.getElementById('text');

const prev = document.querySelector(".btn1");
const next = document.querySelector(".btn2");
const random = document.querySelector(".btn3");

function display(index){
    img.src = reviews[index].img;
    names.textContent = reviews[index].name;
    job.textContent = reviews[index].job;
    text.textContent = reviews[index].text;
}

let current = 0;

display(current);

next.addEventListener("click",()=>{
    current = (current + 1) % reviews.length;
    display(current);
});

prev.addEventListener("click",()=>{
    current = (current - 1 + reviews.length) % reviews.length;
    display(current);
});

random.addEventListener("click",()=>{
    current = Math.floor(Math.random() * reviews.length);
    display(current);
});