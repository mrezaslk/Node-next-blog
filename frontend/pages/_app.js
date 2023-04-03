import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/mainbackground.css';
import '../styles/description.css';
import '../styles/footer.css';
import '../styles/mainimg.css';
import '../styles/blog.css';
import '../styles/faq.css';
import '../styles/sectiondiv.css';
import '../styles/imagecomp.css';
import '../styles/bigcard.css';
import '../styles/bigimg.css';
import '../styles/newsletter.css';
import '../styles/recently.css';
import '../styles/imagecard.css';
import '../styles/questionmodal.css';
import '../styles/profileabout.css';
import '../styles/cardbox.css';
import '../styles/singlecontent.css';
import '../styles/mainbody.css';
import '../styles/secondheader.css';
import '../styles/slider.css';
import '../styles/topic.css';
import '../styles/contactpage.css';
import '../styles/imgwithtext.css';
import '../styles/designimg.css';
import '../styles/zitle.css';
import '../styles/ourteam.css';
import '../styles/views.scss';
import '../styles/useful.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet"></link>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </>
  )
}

export default MyApp
