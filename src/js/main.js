"use strict";

const titles = document.querySelectorAll(".project-card__h4");
const descriptions = document.querySelectorAll(".project-card__paragraph");
const demoLinks = document.querySelectorAll(".list-wrapper--demo");
const githubLinks = document.querySelectorAll(".list-wrapper--github");
const gridCards = document.querySelector(".projects__grid--js");
console.log(`Welcome to my site`);

fetch("https://api.github.com/users/JedrzejCh/repos")
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;

    for (const repo of repos) {
      const { description, homepage, html_url, name } = repo;
      console.log(repo)
      gridCards.innerHTML += `
<div class="project-card">
          <img src="../assets/img/github.svg" alt="Github logo" class="project-card__icon">
          <h4 class="project-card__h4">${name}</h4>
          <p class="project-card__paragraph">${description}</p>
          <div class="list-wrapper">
            <ul class="list-wrapper--ul">
          ${
        name ? `<li class="list-wrapper--li"><a href="https://jedrzejch.github.io/${name}/" target="_blank" rel="no follow no referrer" class="list-wrapper--demo">Demo</a></li>` : 'xd'
        }
        
              <li class="list-wrapper--li"><a href="${html_url}" target="_blank" rel="no follow no referrer" class="list-wrapper--github">Github</a></li>
            </ul>
          </div>
        </div>
`;
    }

  })
  .catch(err => {
    console.log(err)
  })
