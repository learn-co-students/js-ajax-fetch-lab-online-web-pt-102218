const baseURL = 'https://api.github.com';
const user = 'alexandercleasby';
const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
  //return '78fad0d6cfb14bd7d0b68ce8d42e858e059b770b';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`${baseURL}/repos/${repo}/forks`,{
    method:'POST',
    headers:{
      Authorization:`token ${getToken()}`
    }
  })
  .then((r)=>r.json())
  .then((r)=>showResults(r))
  //use fetch to fork it!
}

function showResults(json) {
  document.getElementById('results').innerHTML = JSON.stringify(json)
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  fetch(`${baseURL}/repos/${user}/js-ajax-fetch-lab/issues`,{
    method:'POST',
    headers:{
      Authorization:`token ${getToken()}`
    },
    body:JSON.stringify({
      title: document.getElementById('title').value,
      body: document.getElementById('body').value
    })
  })
  .then((r)=>r.json())
  .then((r)=>getIssues())
}

function getIssues() {
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
}
