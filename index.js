const base_url = "https://api.github.com"
const repo = 'js-ajax-fetch-lab';
const curriculum_username = 'learn-co-curriculum';
const my_username = 'ar-dov-eidelman';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  fetch(`${base_url}/repos/${curriculum_username}/${repo}/forks`, { method: 'post', headers: { token: getToken() } })
    .then(response => response.json())
    .then(json => { console.log(json); return showResults(json) })
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  fetch(`${base_url}/repos/${my_username}/${repo}/issues`, {
    method: 'post',
    headers: { token: getToken() },
    title: document.getElementById('title'),
    body: document.getElementById('body')
  })
    .then(response => showResults(response.json()))
}

function getIssues() {
  
  fetch(`${base_url}/repos/${my_username}/${repo}/issues`, {
    method: 'get',
    headers: { token: getToken() }
  })
}
