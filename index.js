const baseURL = 'https://api.github.com';
const user = 'Beaulieu527';

function getToken() {
  
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch( `https://api.github.com/repos/${repo}/forks`,
  {
    method: 'post', 
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
  )
  .then(response => response.json())
  .then(json => showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API

  let link = `<a href=${json.html_url}>Link</a>`
  document.querySelector("#results").append(link)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'Beaulieu527/js-ajax-fetch-lab';
  const body = {
    title: document.querySelector('#title').value,
    body: document.querySelector('#body').value
  }
  fetch(`https://api.github.com/repos/${repo}/issues`,
  {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
  )
  .then(response => response.json())
  .then(json => getIssues(json))
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = 'Beaulieu527/js-ajax-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`, 
  {headers: 
    {
      Authorization: `token ${getToken()}`}
    })
    .then(response => response.json())
    .then(json => json.forEach(j =>  document.getElementById("issues").append(`${'Title: '+ j.title +' Body: '+ j.body}`)))
}
