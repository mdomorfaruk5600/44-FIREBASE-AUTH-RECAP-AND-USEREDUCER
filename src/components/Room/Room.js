import { AttachMoney, Hotel, Wc } from '@mui/icons-material';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Room = ({room}) => {
    const navigate = useNavigate();

    const handleBook = (bedType) => {
        navigate(`/book/${bedType}`);
    }
    return (
        <Card sx={{ maxWidth:345 }}>
            <CardHeader avatar={
                <Avatar sx={{ bgcolor: 'rgb(244, 67, 54)' }}>{room.avatar}</Avatar>
            } 
            title={room.title} />
            <CardMedia 
            component={'img'} 
            src={room.imgUrl}
            height='194'
            alt={room.title}
             />
             <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {room.description}
                </Typography>
             </CardContent>
             <CardActions disableSpacing>
                <IconButton aria-label='bed'>
                    <Hotel />: {room.bed}
                </IconButton>
                <IconButton aria-label='capacity'>
                    <Wc />: {room.capacity}
                </IconButton>
                <IconButton aria-label='price'>
                    <AttachMoney />: {room.price}
                </IconButton>
                <Button onClick={()=>handleBook(room.bedType)} variant='contained' color='primary'>Book</Button>
             </CardActions>
        </Card>
    );
};

export default Room;