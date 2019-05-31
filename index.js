function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
  //28ee22a5d8b291c13228270a03613e2feb92d194
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `https://api.github.com/repos/${repo}/forks`
  fetch(url, {method: 'post', headers: {authorization: `token ${getToken()}`}})
    .then(response => response.json())
    .then(json => showResults(json))
}

function showResults(json) {
  const url = json.html_url
  document.querySelector("#results").append(url);
  //use this function to display the results from forking via the API
}

function createIssue() {
  const postData = {title: document.getElementById("title").value, body: document.getElementById("body").value}
  const repo = 'msherman0801/js-ajax-fetch-lab';
  const url = `https://api.github.com/repos/${repo}/issues`
  fetch(url, {method: 'post', body: JSON.stringify(postData), headers: {authorization: `token ${getToken()}`}})
    .then(response => response.json())
    .then(json => json)
  getIssues()
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  console.log('first check')
  const issues = document.getElementById("issues");
  const repo = 'msherman0801/js-ajax-fetch-lab';
  const url = `https://api.github.com/repos/${repo}/issues`
  fetch(url, {headers: {authorization: `token ${getToken()}`}})
    .then(response => response.json())
    .then(json => json.forEach(j => issues.append(`${'Title: '+ j.title +' Body: '+ j.body}`)))
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
