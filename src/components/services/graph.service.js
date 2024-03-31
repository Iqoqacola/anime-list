const query = `query ($search: String, $sort: [MediaSort]) {
    Page(page: 1, perPage: 15) {
      media(search: $search, sort: $sort, isAdult: false, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          large
          medium
          color
        }    
        description
        episodes
        genres
        averageScore
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
      }
    }
  }
  `;

export default async function getData(variables) {
  const url = "https://graphql.anilist.co";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const animeList = data;
  // console.log(animeList)
  return animeList.data.Page.media;
}
