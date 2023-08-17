import VideoInfo from 'app/components/VideoComponents/VideoInfo';
import React from 'react'
import { useLocation } from "react-router-dom";
import { useState } from 'react';


const VideoEdit = () => {


  

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title');
  const [url,setUrl] = useState(queryParams.get('url'))
  const category = queryParams.get('category');
  const content = queryParams.get('content');
  const docId = queryParams.get('docId');

  return (
    <div>
      <VideoInfo command={"Düzenle"} title={title} url={url} category={category} content={content} docId={docId} />
    </div>
  )
}

export default VideoEdit
