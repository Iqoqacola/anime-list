const query = `query ($id: Int) {
    Page(page: 1, perPage: 1) {
      media(id: $id) {
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
        format
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

export default async function getDetailAnime(variables) {
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
  return animeList.data.Page.media;
}
