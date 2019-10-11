"use strict";

const titles = document.querySelectorAll(".project-card__h4");
const descriptions = document.querySelectorAll(".project-card__paragraph");
const demoLinks = document.querySelectorAll(".list-wrapper--demo");
const githubLinks = document.querySelectorAll(".list-wrapper--github");
const gridCards = document.querySelector(".projects__grid--js");
console.log(`Welcome to my site`);
console.log("Hey 🙃 nice of you to come here. Now that you're here, let me introduce myself briefly. I am 23 years old and live in Wrocław. I'm nice and I don't have any problems with contact with people. I learn Frontend technology and new things as much as I can and I enjoy it a lot. I often lose track of my time at the same time 😅. Besides, I like to spend time actively. I like skiing very much, I like climbing, sailing and traveling.")

fetch("https://api.github.com/users/JedrzejCh/repos")
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;

    for (const repo of repos) {
      const { description, html_url, name, has_pages } = repo;
      gridCards.innerHTML += `
<div class="project-card">
          <img src="../assets/img/github.svg" alt="Github logo" class="project-card__icon">
          <h4 class="project-card__h4">${name}</h4>
          <p class="project-card__paragraph">${description}</p>
          <div class="list-wrapper">
            <ul class="list-wrapper__ul">
          ${
        has_pages ? `<li class="list-wrapper__li"><a href="https://jedrzejch.github.io/${name}/" target="_blank" rel="no follow no referrer" class="list-wrapper__a list-wrapper__a--demo">Demo</a></li>` : ''
        }
              <li class="list-wrapper--li"><a href="${html_url}" target="_blank" rel="no follow no referrer" class="list-wrapper__a list-wrapper__a--github">Github</a></li>
            </ul>
          </div>
        </div>
`;
    }

  })
  .catch(err => {
    console.log(err)
  })

