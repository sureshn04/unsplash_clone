import React, {useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import Heading from './components/Heading'
import Loader from './components/Loader'
import UnsplashImage from './components/UnsplashImage'

import axios from 'axios'
import styled, {createGlobalStyle} from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: boarder-box;
  }
`;

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`; 

function App() {
  const [images, setImage] = useState([]);
  const [collection, setCollection] = useState(1580860);

  useEffect(() => {
    fetchImages();
  }, [])

  // fetch the images from unsplash api and stored in the state
  const fetchImages = async (count = 10 ) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = 'ucKO2LjRemMGWPgBzlQQng-bwRkwGjYyGHVwdqby4ho'

    axios
      .get(`${apiRoot}/collections/${collection}/photos?client_id=${accessKey}`)
      .then(res => {
        setImage([...images, ...res.data]);
        // console.log(res.data)
      })
    // setImage([...images, ...api])
  }

  // TODO create Tabs navigation
  // const getImages = async (collection)=> {
  //   const apiRoot = "https://api.unsplash.com";
  //   const accessKey = 'ucKO2LjRemMGWPgBzlQQng-bwRkwGjYyGHVwdqby4ho'

  //   axios
  //     .get(`${apiRoot}/collections/${collection}/photos?client_id=${accessKey}`)
  //     .then(res => {
  //       setImage([...res.data]);
  //       setCollection(collection);
  //       // console.log(res.data)
  //     })
  // }

  return (
    <div className="App">
      <NavBar/>
      <Heading/>
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader/>}
      >
        <WrapperImage class>
          {images.map(image => (
              <UnsplashImage url={image.urls.thumb} key={image.id} alt={image.alt_description} />
          ))}
        </WrapperImage>
      </InfiniteScroll>
    </div>
  );
}

export default App;
