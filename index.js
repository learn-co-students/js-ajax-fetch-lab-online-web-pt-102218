const token = '';
const repo = `learn-co-curriculum/js-ajax-fetch-lab`;
const user = 'bojosteph';
const issueRepo = 'js-ajax-fetch-lab';

function getToken() {
   return `${token}`
}


function forkRepo() {
 
  let url = `https://api.github.com/repos/${repo}/forks`
  console.log(url)
  fetch(url,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(response => response.json())
    .then(json => showResults(json));
}


function showResults(json) {
  const link = json.html_url
  document.getElementById('results').innerHTML = `<a href=${link}> ${link} </a>`;
}

function createIssue() {
  const issueTitle = document.getElementById('title').value;
  const issueText = document.getElementById('body').value; 
  
  url = `https://api.github.com/repos/${user}/${issueRepo}/issues`
  
  const issueData = {

    "title": issueTitle,
    "body": issueText

  }
  
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(issueData)
  })
  getIssues();
}


function getIssues() {
  url = `https://api.github.com/repos/${user}/${issueRepo}/issues`

  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(response => response.json())
  .then(json => showIssues(json));
}


function showIssues(json) {
  const issueList = json.map(
    issue =>
      issue.title + ' - ' + issue.body + '<br>'
  )
    .join('');
  document.getElementById('issues').innerHTML = issueList;
}








