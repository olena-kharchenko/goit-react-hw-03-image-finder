function fetchImages(name) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=1&key=18452046-d075d28130c097165687e8e16&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error('Sorry, something went wrong. Please try again later'),
    );
  });
}

const api = { fetchImages };

export default api;