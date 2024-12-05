// components/Marquee.js
// import React from 'react';
// import Link from 'next/link';
// import styles from '@styles/Marquee.module.css';

// const Marquee = () => {
//   // Define the items directly within the component
//   const itemsnames = [
//     { text: 'YouTube News 2024.', href: '../news/top-3-best-youtube-news-videos-to-watch/', image: 'https://res.cloudinary.com/dezf3wemk/image/upload/v1717391455/YTM_NEWS_tts2ux.webp' },
//     { text: 'YouTube Crime Movie 2024.', href: '../movies/top-3-best-youtube-crime-movie-videos-to-watch/', image: 'https://res.cloudinary.com/dezf3wemk/image/upload/v1717292628/ytmg_movies_esajnc.webp' },
//     { text: 'YouTube Movie 2024.', href: '../movies/top-3-best-youtube-movie-videos-to-watch/', image: 'https://res.cloudinary.com/dezf3wemk/image/upload/v1717160383/YouTube_Movie_tvmai7.webp' },
//     { text: 'YouTube Crime Movie 2024.', href: '../movies/top-3-best-youtube-crime-movie-videos-to-watch/', image: 'https://res.cloudinary.com/dezf3wemk/image/upload/v1717292628/ytmg_movies_esajnc.webp' },
//     { text: 'YouTube Movie 2024.', href: '../movies/top-3-best-youtube-movie-videos-to-watch/', image: 'https://res.cloudinary.com/dezf3wemk/image/upload/v1717160383/YouTube_Movie_tvmai7.webp' },
//   ];

//   return (
//     <div className={styles.marquee}>
//       <div className={styles.marqueeContent}>
//         {itemsnames.map((item, index) => (
//           <Link href={item.href} key={index}>
//             <span className='bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl hover:text-blue-800 font-bold mt-2'>
//               <p className={styles.marqueeItem}>
//                 <img   width={140}  height={140} quality={90} src={item.image} alt={item.text} className={styles.marqueeImage}  style={{
//                      borderRadius: '8px',
//                           filter:
//                             'contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)'
//                         }}/>
//                 {item.text}
//               </p>
//             </span>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Marquee;

// components/Marquee.js
import React from 'react';
import Link from 'next/link';
import styles from '@styles/Marquee.module.css';
import Image from 'next/image'

const Marquee = () => {
  const itemsnames = [
    {
      text: 'Latest Movies & Tv Show Updated Engilsh & Hindi & Others.',
      href: '../movies/',
      image: ''
    },
    {
      text: 'Bhool Bhulaiyaa 3 (2024)',
      href: '../desktop/',
      image: 'https://res.cloudinary.com/db36kfuq3/image/upload/c_scale,h_720,w_1280/v1730518213/Bhool_Bhulaiyaa_3_2024_1_kae6m4.webp'
    },
    {
      text: 'Bhool Bhulaiyaa 3 (2024)',
      href: '../desktop/',
      image: 'https://res.cloudinary.com/db36kfuq3/image/upload/c_scale,h_720,w_1280/v1730518213/Bhool_Bhulaiyaa_3_2024_1_kae6m4.webp'
    },
    {
      text: 'Bhool Bhulaiyaa 3 (2024)',
      href: '../desktop/',
      image: 'https://res.cloudinary.com/db36kfuq3/image/upload/c_scale,h_720,w_1280/v1730518213/Bhool_Bhulaiyaa_3_2024_1_kae6m4.webp'
    },
    {
      text: 'Bhool Bhulaiyaa 3 (2024)',
      href: '../desktop/',
      image: 'https://res.cloudinary.com/db36kfuq3/image/upload/c_scale,h_720,w_1280/v1730518213/Bhool_Bhulaiyaa_3_2024_1_kae6m4.webp'
    },
    {
      text: 'Bhool Bhulaiyaa 3 (2024)',
      href: '../desktop/',
      image: 'https://res.cloudinary.com/db36kfuq3/image/upload/c_scale,h_720,w_1280/v1730518213/Bhool_Bhulaiyaa_3_2024_1_kae6m4.webp'
    },
  ];

  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeContent}>
        {/* <h2 className="flex flex-col items-center space-x-4">
          <span
            className='animate-pulse px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl hover:text-blue-800 font-bold mt-2'
            style={{ marginBottom: '15px' }}
          >
            Most Trending Videos:
          </span>
        </h2> */}
        {itemsnames.map((item, index) => (
          <Link href={item.href} key={index}>
            <span className='bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl hover:text-blue-800 font-bold mt-2'>
              <p className={styles.marqueeItem}>
                {/* <Image
                  width={140}
                  height={140}
                  quality={90}
                  src={item.image}
                  alt={item.text}
                  className={styles.marqueeImage}
                  style={{
                    borderRadius: '8px',
                    filter: 'contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)'
                  }}
                /> */}
                {item.text}
              </p>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
