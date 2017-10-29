import igdb from 'igdb-api-node';

global['3scaleKey'] = '422b0b250799d114e611860b340af41d';
const client = igdb();
const createSearchOptions = (options) => {
  const defaultSearchOptions = {
    fields: '*',
    limit: 10,
    offset: 0,
  };
  return { ...defaultSearchOptions, ...options.search };
};
export const getGames = (searchCriteria) => {
  console.log(searchCriteria, 'In search games');
  const searchOptions = createSearchOptions({
    search: { search: searchCriteria.term },
  });
  console.log(searchOptions, 'Final search options');
  return client.games(/* {
    fields: '*',
    limit: 10,
    offset: 15,
    search: searchOptions,
  }*/searchOptions).then(response => response.body)
  .catch((error) => {
    console.log(error, 'Error occurred');
    throw error;
  });
};
export const getGameById = (id) => {
  console.log(id, 'In get game by id');
  return client.games({
    ids: [id],
  }).then((response) => {
    console.log(response.body);
    return response.body;
  })
  .catch((error) => {
    console.log(error, 'Error occurred');
    throw error;
  });
};

export const getGenreById = (id) => {
  console.log(id, 'In get genre by id');
  return client.genres({
  }, [
    'name', 'id'],
).then((response) => {
    console.log(response.body, 'Genre object received from igdb');
    return response.body;
  })
    .catch((error) => {
      console.log(error, 'Error occurred');
      throw error;
    });
};
