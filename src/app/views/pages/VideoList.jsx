import React from "react";
import { collection, getDocs } from "@firebase/firestore"; 
import {Grid } from "@mui/material";
import { db } from "app/config/firebase";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const VideoList = () =>{
    

    const [data, setData] = useState([]); 

    useEffect(() => {
      const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "videos"));
        const fetchedData = querySnapshot.docs.map(doc => doc.data());
        setData(fetchedData);
      };
  
      fetchData();
    }, []);




   return(
    <Grid container spacing={9}> 
       {data.map((veri)=>{
        return(
          <Grid item key={veri.url} xs={12} sm={6} md={3}>
        <Card key={veri.url}  sx={{ maxWidth: 345 , margin:"5px 0 0 5px"}} >
          <Link to={`/pages/videoedit/?title=${veri.title}&url=${veri.url}&content=${veri.content}&category=${veri.category}&docId=${veri.docId}`}>
    <CardActionArea>
      <ReactPlayer
        url={veri.url}
        width={312}
        height={250}
        controls={true}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {veri.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {veri.content}
        </Typography>
      </CardContent>
    </CardActionArea>
    </Link>
  </Card>
  </Grid>
  )
}

)} 
</Grid>
   ) 
}

export default VideoList;