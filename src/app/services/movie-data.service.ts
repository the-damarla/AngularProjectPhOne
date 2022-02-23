import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor() { }
  arOfMves={
    data : [
    {
        movieName: 'Bheemla Nayak',
        rating: 9,
        hero: 'pawan kalyan',
        imageUrl: 'https://images.news18.com/telugu/uploads/2021/12/Bheemla-Nayak-1.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=m8v-qYaiWzw&ab_channel=SitharaEntertainments'
    },
    {
        movieName: 'Khushi',
        rating: 10,
        hero: 'pawan kalyan',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1b2da3c930ce2b9cd6e709c4afce902b23e1104a4ef9ce8b0dad4a30369a3b78._RI_V_TTW_.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=jF8q_Vlz714'
    },
    {
        movieName: 'Theenamr',
        rating: 7,
        hero: 'pawan kalyan',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMGExYTk3N2UtYjU3OC00NjI4LWFhYmMtZDcyOTUyOTViNGM1XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=kV3Fi9GmHBA'
    },
    {
        movieName: 'GabbarSingh',
        rating: 9.5,
        hero: 'pawan kalyan',
        imageUrl: 'https://im.rediff.com/movies/2015/aug/25sardaar-gabbar-singh.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=FpFoQPj4sgs'
    },
    {
        movieName: 'komaram Puli',
        rating: 6,
        hero: 'ppawan kalyank',
        imageUrl: 'https://megastarfanz.files.wordpress.com/2010/09/ogaaamtmywvnikpf_dcrczbwl9wpkw83uabkxyi8mq02eixnsx6desuygx92w37zcy-prgylulytvmf_6c2xsahx6k8am1t1ud26zxx1pwkigbl9zedjjp-ktktd.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=7Ijg3cOHgow'
    },
    {
        movieName: 'Attarintiki Daredhi',
        rating: 9.7,
        hero: 'pawan kalyan',
        imageUrl: 'http://4.bp.blogspot.com/-K5oYPLQlTZ4/Ukapmgkxx8I/AAAAAAAAAks/YlCUobqcRoE/s1600/Attarintiki-Daredi-Movie-Poster-Designs-5.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=81retl0nHh8'
    },
    {
        movieName: 'Spider Man No-Way Home',
        rating: 9.79,
        hero: 'tom holland',
        imageUrl: 'https://i.ytimg.com/vi/uyPCkTzhDxQ/maxresdefault.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=JfVOs4VSpmA'
    },
    {
      movieName: 'GanguBhai KathiaWada',
      rating: 8.6,
      hero: 'alia bhatt',
      imageUrl: 'https://www.iwmbuzz.com/wp-content/uploads/2021/02/a-week-more-of-shooting-gangubai-kathiawadi-is-complete.jpeg',
      trailerUrl: 'https://www.youtube.com/watch?v=N1ZwRv3vJJY'
  },
  {
      movieName: 'Pushpa The-Raise',
      rating: 9.175,
      hero: 'allu arjun',
      imageUrl: 'https://www.telugu360.com/wp-content/uploads/2021/12/Pushpa-4.jpg',
      trailerUrl: 'https://www.youtube.com/watch?v=Q1NKMPhP8PY'
  }
  ]};

  movies()
  {
    return this.arOfMves.data
  }
}