import React from 'react';
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import GifIcon from '@material-ui/icons/Gif';
import BarChartIcon from '@material-ui/icons/BarChart';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

const PostTweet = () => {
  return <Box maxHeight='500px'>
    <Card variant='outlined'>
      <Box display='flex' padding={2}>
        <AccountCircleIcon fontSize='large' color="primary"/>
        <input type='text'
               placeholder=" What's happening..."
               style={{'marginLeft': '10px', 'padding': '10px', 'height':'20px', 'border':'0px', 'font-size':'20px'}}
        />
      </Box>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box display='flex' width='110px' justifyContent='space-between' margin='24px 0 8px 56px'>
          <InsertEmoticonIcon color="primary"/>
          <GifIcon color="primary"/>
          <BarChartIcon color="primary"/>
          <InsertPhotoIcon color="primary"/>
        </Box>
        <Box margin={1}>
          <Button variant="outlined" color="primary" href="#outlined-buttons">
            Post
          </Button>
        </Box>
      </Box>
    </Card>
  </Box>
};

export default PostTweet;