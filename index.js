const token = "3bd40fd0543eb1e479ce579cca5851240ef00beb";
const base = 'https:/api.github.com/';
const lco = 'learn-co-curriculum/'
const repo = 'js-ajax-fetch-lab';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const token = getToken();
  fetch(`${base}repos/${lco + repo}/forks`,
    {
      // mode: 'no-cors',
      method: 'POST',
      headers: {
        Authorization: `token ${token}`,
      }
    }
  ).then(r => r.json())
  .then(json => showResults(json))
  // https://github.com/learn-co-curriculum/js-ajax-fetch-lab
  //use fetch to fork it!
}

function showResults(json) {
  console.log(json);
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.name}</a>`
  //use this function to display the results from forking via the API
}

function createIssue() {
  const owner = 'artrexdenthur';
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  fetch(`${base}repos/${owner + repo}/issues`,
    {
      // mode: 'no-cors',
      title: `${title}`,
      body: `${body}`,
      method: 'POST',
      headers: {
        Authorization: `token ${token}`,
      }
    }
  ).then(getIssues(owner))
  //use this function to create an issue based on the values input in index.html
}

function getIssues(owner) {

  const json = fetch(`${base}repos/${owner + repo}/issues`,
    {
      // mode: 'no-cors',
      method: 'GET',
      headers: {
        Authorization: `token ${token}`,
      }
    }
  ).then(r => {
    json = r.json()
  
    const issueList = `<ul>${json
    .map(
      issue =>
        '<li>' +
        `${issue.title}` +
        '</li>'
    ).join('')}</ul>`
    document.getElementById('issues').innerHTML = issueList
  })
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
