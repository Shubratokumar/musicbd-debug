const elementById = (id) => {
  return document.getElementById(id);
};

const handleSearch = () =>{
  const keyword = elementById("keyword");
  const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${keyword.value}`;

  fetch(url)
  .then(res => res.json())
  .then(data => showArtist(data))
}

const showArtist = (data) =>{
  console.log(data.artists);
  // const artists = data.artists; // general method
  const {artists} = data;  // object destructuring
  artists.forEarch((artist) =>{
    console.log(artist);
  })
}