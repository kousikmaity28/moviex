import { useState,useEffect } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { FetchApidata } from './utils/api'
import { useDispatch,useSelector } from 'react-redux'
import { getUrl,getGenres } from './store/homeSlice'
import Home from './pages/home/Home'
import PageNotFound from './pages/404/PageNotFound'
import Details from './pages/details/Details'
import Explore from './pages/explore/Explore'
import SearchResults from './pages/searchResult/SearchResults'
import Header from './components/header/Header'
import Footer from './footer/Footer'


function App() {

  const dispatch = useDispatch();
  const {url}= useSelector((state)=>state.home)
  console.log(url)
  useEffect(()=>{
    fetchApiConfig()
    genresCall()
  },[])
const fetchApiConfig=()=>{
  FetchApidata("/configuration").then((res)=>{
      console.log(res)
      // setData(res.data)
      const url={
        backdrop:res.images.secure_base_url + "original",
        profile:res.images.secure_base_url + "original",
        poster:res.images.secure_base_url + "original"
      }
      dispatch(getUrl(url))
    })
   
}
const genresCall = async () => {
  let promises = [];
  let endPoints = ["tv", "movie"];
  let allGenres = {};

  endPoints.forEach((url) => {
      promises.push(FetchApidata(`/genre/${url}/list`));
  });

  const data = await Promise.all(promises);
  console.log(data);
  data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
  });

  dispatch(getGenres(allGenres));
};

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:mediaType/:id' element={<Details/>}/>
      <Route path='/search/:query' element={<SearchResults/>}/>
      <Route path='/explore/:mediaType' element={<Explore/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
