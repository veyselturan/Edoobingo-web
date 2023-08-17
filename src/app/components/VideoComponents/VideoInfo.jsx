import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { collection, addDoc, setDoc, doc, updateDoc } from "@firebase/firestore"; 
import { db } from 'app/config/firebase';
import { toast } from "react-toastify";


const VideoInfo = (props) =>{

    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [url, setUrl] = useState(props.url);
    const [category, setCategory] = useState(props.category);
    const docId =props.docId;
           


    
       const add = async() =>{
        if (!title || !content || !url || !category) {
          toast.error("Lütfen tüm alanları doldurun !");
          return;
        }
        try {
          const docRef = await addDoc(collection(db, "videos") ,{
          });
          
          setDoc(doc(db,"videos",docRef.id),{
            title,
            content,
            url,
           category,
            docId:docRef.id
          })
          toast.success(`Ekleme İşlemi Başarılı: ${docRef.id} `);
        } catch (e) {
          toast.error("Error adding document: ", e);
        }
       }





       const update = async() =>{
        
try{
  const videoDocRef = doc(db, "videos", docId);
        await updateDoc(videoDocRef, {
          title,
          content,
          url,
          category,
          
        });
        toast.success(`Güncelleme işlemi başarılı! 5 saniye içinde bir sonraki sayfaya yönlendiriliyorsunuz.`);
        await new Promise((resolve) => setTimeout(resolve, 5000));
        window.location.href = "/pages/videolist"

      }
      catch{
        toast.error("Error adding/updating document: ");
      }
      }
 

       
  const categories = ["ders", "ders1", "ders2", "ders3", "ders4"];


    return(
        <>
        <React.Fragment>
          <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
            <Box sx={{ padding: 5 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={2}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                   
                  >
                    Title
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    required
                    id="title"
                    name="title"
                    label="Title"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    defaultValue={props.title}
                    onChange ={(e)=>{setTitle(e.target.value)}}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
             
                  >
                    Content
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Content"
                    multiline
                    fullWidth
                    rows={4}
                    defaultValue={props.content}
                    onChange ={(e)=>{setContent(e.target.value)}}
                  />
                </Grid>

                <Grid item xs={12} sm={2}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
               
                  >
                    URL
                  </InputLabel>
                </Grid>

                <Grid item xs={12} sm={4} >
                  <TextField
                    required
                    id="url"
                    name="url"
                    label="Video url"
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    defaultValue={props.url}
                    onChange ={(e)=>{setUrl(e.target.value)}}
                    
                  />
                </Grid>

                <Grid item xs={12} sm={2}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Category
                  </InputLabel>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Age"
                      // onChange={handleChange}
                      defaultValue={props.category}
                    onChange ={(e)=>{setCategory(e.target.value)}}
                    >
                      {categories.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <ReactPlayer
                    style={{
                      margin: "0 0 0 50px",
                    }}
                    width={320}
                    height={180}
                    url={url ? url : "abc"}
                    controls={true}
                  />
                </Grid>

                <Grid item xs={12} sm={2}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Img Upload
                  </InputLabel>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Button>
                    <UploadFileIcon />
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6} />
                <Grid item xs={12} sm={5} />
                <Grid item xs={12} sm={4}>
                  <Button variant="contained" sx={{ color: "#fff" }} onClick={props.command === 'Ekle' ? add:update} >
                    {props.command}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </React.Fragment>
        </>
    )
}

export default VideoInfo;