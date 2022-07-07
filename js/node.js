let body = document.body;

let header = document.createElement('header');

header.innerHTML = 
`<div class="logo" id="main">
  <img src="https://mszakii.github.io/muslim-home/asset/muslim.png" alt="muslim">
</div>
<div class="label">بيت مسلم</div>`;

body.prepend(header);

let footer = document.createElement('footer');

footer.innerHTML = 
`صنع بواسطة<a href="https://mszakii.github.io/me">محمد السيد زكي</a>© 2022`;

body.append(footer);

main.onclick = function () {
  location.href = `https://mszakii.github.io/muslim-home/index.html`;
}

let head = document.head;

let fav = document.createElement("link");

fav.setAttribute("rel", "shortcut icon");

fav.setAttribute("href", "https://mszakii.github.io/muslim-home/asset/muslim.png");

head.append(fav);
