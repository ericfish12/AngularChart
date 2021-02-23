const Model = (() => {
  let searchResult = [];
  return {
    searchResult,
  };
})();

const View = (() => {
  const render = (element, htmlTemplate) => {
    element.innerHTML = htmlTemplate;
  };
  const initTmp = (arr) => {
    let template = "";
    arr.forEach((ele) => {
      template += `
                      <div class = 'card'>
                      <img src = '${ele.artworkUrl60}'alt="Avatar" key='${ele.artistId}'  />
                      <h4><b>${ele.artistName}</b></h4> 
                      </div>
                  `;
    });
    return template;
  };

  return {
    render,
    initTmp,
  };
})();

const todoAPI = (() => {
  const searchAllAlbums = (ARTIST_NAME) =>
    fetchJsonp(
      `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=500`
    ).then((response) => response.json());
  return {
    searchAllAlbums,
  };
})();

const AppController = (() => {
  const container = document.getElementsByClassName("content")[0];
  const searchBar = document.getElementById("search_bar");

  const addListenerOnSearch = () => {
    searchBar.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        let currentSearch = event.target.value;

        todoAPI.searchAllAlbums(currentSearch).then((data) => {
          Model.searchResult = data.results;
          let count = data.resultCount;
          document.getElementsByTagName(
            "h6"
          )[0].innerText = `${count} Albums for ${currentSearch}`;

          View.render(container, View.initTmp(Model.searchResult));
        });
      }
    });
  };

  const init = async () => {
    addListenerOnSearch();
  };

  return {
    init,
  };
})();

AppController.init();
