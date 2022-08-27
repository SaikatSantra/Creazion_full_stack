/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CustomerOffer() {
  return (
    <>
     
     <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination,  A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide  style={{ width:'100%'  }}>
      <Grid item>
      <Item>
     <Image alt='' src="https://images.pexels.com/photos/5872364/pexels-photo-5872364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={1980} height={350} />
      </Item>
      </Grid>
      </SwiperSlide>
      <SwiperSlide style={{ width:'100%' }}>
      <Grid item>
      <Item>
     <Image alt='' src="https://thumbs.dreamstime.com/z/special-offer-written-blackboard-special-offer-102131020.jpg" width={1980} height={350}/>
      </Item>
      </Grid>
      </SwiperSlide>
    </Swiper>

     {/* <Grid item xs={12} md={4} sm={6}>
      <Item>
     <Image src="https://thumbs.dreamstime.com/z/special-offer-written-blackboard-special-offer-102131020.jpg" width={1000} height={200} style={{width:'100%'}}/>
      </Item>
      </Grid>
      <Grid item xs={12} md={4} sm={6}><Item>
     <Image src="https://thumbs.dreamstime.com/z/special-offer-written-blackboard-special-offer-102131020.jpg" width={1000} height={200} style={{width:'100%'}}/>
      </Item>
      </Grid>
      <Grid item xs={12} md={4} sm={6}><Item>
     <Image src="https://thumbs.dreamstime.com/z/special-offer-written-blackboard-special-offer-102131020.jpg" width={1000} height={200} style={{width:'100%'}}/>
      </Item>
      </Grid> */}
    </>
  )
}
