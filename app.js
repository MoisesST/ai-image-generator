const API_KEY = '';

const submit = document.getElementById('submit');
const input = document.getElementById('input');

const getImages = async () => {

  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: input.value,
      // n: 4,
      // size: '1024x1024'
    }),
  };

  try {
    const response = await fetch(
      'https://api.openai.com/v1/images/generations',
      options
    );

    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.error(error);
  }
}
submit.addEventListener('click', getImages);