
const user = '<YOUR_USERNAME>';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const token = 'f36b2272eb92bd86bb649ea4229bf1fdfbb703b9'
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const baseUrl = 'https://api.github.com'
  fetch(`${baseUrl}/repos/${repo}/forks`, {
    method: 'POST', 
    headers: {
      Authorization: `Token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json))
}

function showResults(json) {
  //use this function to display the results from forking via the API
   document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
    json.html_url
  }</a>`;
}

function createIssue() {
  const token = 'f36b2272eb92bd86bb649ea4229bf1fdfbb703b9'
  const baseUrl = 'https://api.github.com'
  const repo = `${user}/js-ajax-fetch-lab`; 
  const data = {
      title: document.getElementById('title').value,
      body: document.getElementById('body').value
    }
  fetch(`${baseUrl}/repos/${repo}/issues`, {
    method: 'POST', 
    body: JSON.stringify(data),
    headers: {
      Authorization: `Token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => getIssues(json))
}

function getIssues() {
  const token = 'f36b2272eb92bd86bb649ea4229bf1fdfbb703b9'
  const baseUrl = 'https://api.github.com'
  const repo = `${user}/js-ajax-fetch-lab`; 
  const data = {
      title: document.getElementById('title').value,
      body: document.getElementById('body').value
    }
  fetch(`${baseUrl}/repos/${repo}/issues`, {
    method: 'POST', 
    body: JSON.stringify(data),
    headers: {
      Authorization: `Token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))
}
