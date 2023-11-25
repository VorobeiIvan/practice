// https://the-one-api.dev/

const apiKey = 'ZopXOod170KPzc8Wfj_X';
const apiUrl = 'https://the-one-api.dev/v2/character';

fetch(apiUrl, {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    renderCards(data.docs);
    renderPagination(data.docs);
  })
  .catch(error => console.error('Error:', error));
