function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '' ;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
  .then(resp => resp.json())
  .then(json => showResults(json));
  //use fetch to fork it!
}

function showResults(json) {
  //use this function to display the results from forking via the API
  let link = `<a href= ${json.html_url}>Link</a>`
  document.querySelector('#results').innerHTML = link
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'kyoung90/js-ajax-fetch-lab';
  const body = {
     title: document.querySelector('#title').value,
     body: document.querySelector('#body').value
   }
  fetch(`https://api.github.com/repos/${repo}/issues`,
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
  .then(resp => resp.json())
  .then(json => getIssues());
}

function getIssues() {
  const repo = 'kyoung90/js-ajax-fetch-lab';

  fetch(`https://api.github.com/repos/${repo}/issues?direction=asc`,
    {
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
  .then(resp => resp.json())
  .then(json => showIssues(json));
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}

function showIssues(json) {
  let issues = json.map(issue => `<h1>Issue${issue.number}</h1><ul><li>${issue.title}</li><li>${issue.body}</li><li><a href= ${issue.url}>${issue.url}</a></li></ul>`).join('')
  document.querySelector('#issues').innerHTML = issues
}