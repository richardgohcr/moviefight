const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com', {
    params: {
      apikey: '9db0b2b5',
      s: searchTerm,
    },
  });

  console.log(response.data);
};

const input = document.querySelector('input');

const debounce = (cb, delay=1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      cb.apply(null, args);
    }, delay);
  };
};
//Alogrithm to debounce an input
const onInput = (event) => {
  fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 1500));
