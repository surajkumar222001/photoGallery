import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { photoAction } from '../../redux/photo/photo.action';
import * as photoReducer from '../../redux/photo/photo.reducer';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(photoAction("random"));
  }, []);

  let { banner } = useSelector(state => state[photoReducer.searchPhotosFeatureKeys])

    const [data,setData]= useState(false)
  return (
    <div>
      {
        banner && <Banner setData={setData}/>
      }
      <Gallery dataProps={data} />
    </div>
  )
}
