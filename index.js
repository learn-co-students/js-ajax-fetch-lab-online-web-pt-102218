const base_url = "https://api.github.com"
const repo = 'js-ajax-fetch-lab';
const curriculum_username = 'learn-co-curriculum';
const my_username = 'ar-dov-eidelman';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

async function forkRepo() {
  const response = await fetch(
    `${base_url}/repos/${curriculum_username}/${repo}/forks`,
    { method: 'post', headers: { token: getToken() } }
  )
  showResults(response.json())
}

async function showResults(json) {
  //use this function to display the results from forking via the API
}

async function createIssue() {
  const response = await fetch(
    `${base_url}/repos/${my_username}/${repo}/issues`,
    {
      method: 'post',
      headers: { token: getToken() },
      title: document.getElementById('title'),
      body: document.getElementById('body')
    }
  )
  showResults(response.json())
}

async function getIssues() {
  return fetch(`${base_url}/repos/${my_username}/${repo}/issues`, {
    method: 'get',
    headers: { token: getToken() }
  })
}