const baseURL = 'https://api.github.com';
const user = 'gsmith77';

function getToken() {
  return '';
}

function forkRepo() {
  const repo = `${baseURL}/repos/learn-co-curriculum/js-ajax-fetch-lab/forks`;
  fetch(repo, {
    method: 'POST',
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(resp => resp.json())
.then(json => showResults(json));
}

function showResults(json) {
    let link = `<a href= ${json.html_url}>Link</a>`
    const results = document.getElementById('results')
    results.innerHTML = link
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const info = `title: ${title} <br> body: ${body}`
  fetch(`${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`, {
    method: 'POST', 
    body: JSON.stringify(info),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
  .then(json => getIssues());
}


function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating

  fetch(`${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
  .then(json => showIssues())
}

function showIssues(json) {
  let issues = json.map(issue => `<h1>Issue${issue.number}</h1><ul><li>${issue.title}</li><li>${issue.body}</li><a href=${issue.url}>${issue.url}</a></li></ul>`).join('');
  document.querySelector('#issues').innerHTML = issues
}
