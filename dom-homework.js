const div = document.getElementById('myDiv');

const h1 = document.createElement('h1');
h1.textContent = "Welcome to DOM homework";
h1.setAttribute("class", "highlight")
div.appendChild(h1);

const p = document.createElement("p")
p.textContent = "This is your first DOM homework assignment";
div.appendChild(p);

const ul = document.createElement("ul")
div.appendChild(ul)

const li1 = document.createElement("li")
li1.textContent = "Basketball"
ul.appendChild(li1)
const li2 = document.createElement("li")
li2.textContent = "Soccer"
ul.appendChild(li2)
const li3 = document.createElement("li")
li3.textContent = "Tennis"
ul.appendChild(li3)

const button = document.createElement('button');
button.textContent = 'Add new list item';
div.appendChild(button);

let counter = 0;

button.addEventListener('click', function() {
    let newitem = document.createElement('li');
    newitem.textContent = 'New List Item' + " " + counter++;
    newitem.style.color = '#'+Math. floor(Math. random()*16777215). toString(16);
    ul.appendChild(newitem);
})