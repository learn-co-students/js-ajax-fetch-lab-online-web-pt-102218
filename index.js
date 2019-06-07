const baseURL = 'https://api.github.com';
const user = 'jaywood128';

function getToken() {
  // let token = '18cd87268af1a60a68238da24ee74d77b594cf6e' 
  // return token 
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(
    'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks',
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
  .then(res => showResults(res));
}

function showResults(json) {
  results = document.querySelector('#results')
  results.innerHTML = `<a href=${json.html_url}> ${json.html_url} </a>`
}

function createIssue() {
  let issueTitle = document.querySelector('#title').value
  let issueBody = document.querySelector('#body').value
  const issueRequest = {
    title: issueTitle,
    body: issueBody 
  };
  fetch(
    'https://api.github.com/repos/jaywood128/js-ajax-fetch-lab/issues',
    {
      method: 'POST',
      body: JSON.stringify(issueRequest),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(res => res.json())
  .then(res => getIssues(res));
  //use this function to create an issue based on the values input in index.html
}

function getIssues(res) {
  fetch(
    'https://api.github.com/repos/jaywood128/js-ajax-fetch-lab/issues',
    {
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
    ).then(res => res.json())
    .then(res => console.log(res)); 

}


