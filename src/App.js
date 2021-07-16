import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import "./index.css";

function App() {
  const [timeDistance, setTimeDistance] = useState({});
  const [isDone, setIsDone] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleNav = () =>{
    if(showNav == true){
      setShowNav(false);
      const container = document.getElementById("hidden");
      const navside = document.getElementById("navside");
      container.style.animationName = "backShadEnd";
      navside.style.animationName = "showMenuEnd";
    }
    else{
      setShowNav(true);
      const container = document.getElementById("hidden")
      const navside = document.getElementById("navside")
      container.style.animationName = "backShad";
      navside.style.animationName = "showMenu";
    }
  }
  // Counter
  // Set the date we're counting down to
  let countDownDate = new Date("August 8, 2021 23:59:59").getTime();

  // Update the count down every 1 second
  let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  setTimeDistance({days,hours,minutes,seconds});
    // Display the result in the element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, change state
    if (distance < 0) {
      clearInterval(x);
      setIsDone(true);
    }
  }, 1000);
  return (
    <div className="App">
      {/* WA */}
      <a className="FixedCTA" href="http://wa.me/6282252730620"><img src="https://img.icons8.com/officel/80/000000/whatsapp.png"/></a>
      
      {/* Hidden Navbar */}
      <div className="hiddenNavbar" id="hidden">
           <div className="burgerMenuHiden">
              <a onClick={handleNav} href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              </a>
            </div>
          <ul className="hiddenMenu" id="navside">
              <li><a onClick={handleNav} href="#home">HOME</a></li>
              <li><a onClick={handleNav} href="#">PAGE</a></li>
              <li><a onClick={handleNav} href="#event">EVENT</a></li>
              <li><a onClick={handleNav} href="#contact">CONTACT</a></li>
          </ul>
      </div>

      <header>

        <nav>
          <div className="nav-container">
            <div className="logo">
              <img src="https://i.ibb.co/sjqMQBD/Undip.png" alt="logo" /> 
              <img src="https://i.postimg.cc/4yQSY7Kr/logornb.png" alt="logo" />
              <img src="https://i.ibb.co/Cmh9mH4/logorb.png" alt="logorb" border="0" /> 
            </div>
            <ul className="nav-menu">
              <li><a href="#">HOME</a></li>
              <li><a href="#">PAGE</a></li>
              <li><a href="#">EVENT</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
            <div className="burgerMenu">
              <a onClick={handleNav} href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              </a>
            </div>
          </div>

        </nav>

        <div id="home" className="headingContainer">

          <div className="heading">
            <div className="hero">
              <img src="https://i.ibb.co/18fBvMB/Logo-2-1.png" alt="logo-rnbc" />	
            </div>
            
            <div className="cta-hero">
              <h1>R'nB <strong className="stronger">Startup</strong> Competition 2021</h1>
              <p>R’nB Startup Competition 2021 merupakan sebuah acara pada tingkat nasional yang diselenggarakan oleh Unit Kegiatan Mahasiswa Research and Business (UKM R’nB) Universitas Diponegoro. Kegiatan ini diadakan untuk memberikan kesempatan kepada seluruh mahasiswa di universitas seluruh Indonesia untuk menyampaikan ide atau gagasan yang dapat mengasah kreativitas serta keterampilan dalam bisnis berbentuk startup digital. <br /><br />Rangkaian acara pada R’nB Startup Competition terdiri atas tiga rangkaian seleksi dan terdapat masa Bootcamp sebagai wadah bagi para peserta untuk mengembangkan lagi pengetahuan dan keahlian dalam bisnis startup digital. Dengan mengusung konsep baru sebagai sebuah kompetisi startup mahasiswa, R’nB Startup Competition 2021 diharapkan dapat mengembangkan startup yang sedang dirintis sekaligus mengasah dan menambah wawasan seputar startup bagi mahasiswa.</p>
              <a id="guide" href="http://bit.ly/PendaftaranRNBC2021">Daftar Sekarang!</a>
            </div>
          </div>

        </div>

      </header>

      <main>
{/* Untuk Guidebook */}
        <div className="imageGuide"></div>
        <div className="guidebook">
            <div className="cta-guidebook">
              <h3>Buku&nbsp;<span>Panduan</span></h3>
              <p>Unduh buku panduan untuk mengetahui info mengenai RNBC 2021 secara detail sebagai pedoman dalam mengikuti kompetisi ini.</p>
              <a href="http://bit.ly/BookletRNBC2021">Unduh Panduan</a>
            </div>
            <div className="heroGuide">
              <img src="https://i.ibb.co/z709YZs/Group-1.png" alt="buku" />
            </div>
        </div>

 {/* Untuk Event Card */}
        <h2 id="event" className="eventTitle">COMPETITION <strong className="stronger">EVENT</strong></h2>
        <div className="event">

          <div className="eventCard">
            <div className="eventCardAnimation">
              <img src="https://i.ibb.co/YNhTjP3/headway-5-Qg-Iuu-Bx-Kw-M-unsplash.jpg" /> 
            </div>
            <div className="eventCardContent">
              <h4>Pitch Deck</h4>
              <p>Seleksi berupa pengiriman slide presentasi singkat yang memberikan gambaran umum mengenai rencana bisnis startup seperti solusi yang ditawarkan, proyeksi pendapatan, hingga strategi yang akan dilakukan di masa mendatang.</p>
            </div>
          </div>
        
          <div className="eventCard">
            <div className="eventCardAnimation">
              <img src="https://i.ibb.co/F85Tp7r/austin-distel-rxp-Th-Owu-Vg-E-unsplash.jpg" /> 
            </div>
            <div className="eventCardContent">
              <h4>Bootcamp</h4>
              <p>Dari 25 tim terbaik akan mengikuti program pelatihan berupa pemberian materi seputar startup dan mentoring yang nantinya diakhiri dengan penugasan membuat proyek tertentu (challenge)</p>
            </div>
          </div>

        
          <div className="eventCard">
            <div className="eventCardAnimation">
              <img src="https://i.ibb.co/yFKW5HJ/teemu-paananen-bzdhc5b3-Bxs-unsplash.jpg" /> 
            </div>
            <div className="eventCardContent">
              <h4>Final Day</h4>
              <p>Kegiatan Akhir berupa persentasi pitching oleh tim 5 besar di hadapan juri yang telah memiliki pengalaman di bidangnya masing-masing.</p>
            </div>
          </div>

        </div>

        {/* Time Line */}
          <svg className="decoration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,160L24,154.7C48,149,96,139,144,133.3C192,128,240,128,288,144C336,160,384,192,432,181.3C480,171,528,117,576,122.7C624,128,672,192,720,208C768,224,816,192,864,197.3C912,203,960,245,1008,250.7C1056,256,1104,224,1152,208C1200,192,1248,192,1296,160C1344,128,1392,64,1416,32L1440,0L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>        <div className="timeline">
          
          <div className="timelineCard">
            <img src="https://i.ibb.co/nnLbVkh/Timeline.png" alt="Timeline" border="0" />
          </div>

          <h3 className="eventTitle pendaftaran">Biaya <span className="stronger">Pendaftaran</span></h3>
          <div className="biayaPendaftaran">

            <div class="disabledPrice">
              <h4>Batch 1</h4>
              <p>Rp 100.000,-</p>
            </div>

            <div class="batch2">
              <h4>Batch 2</h4>
              <p class="priceBefore">Rp 250.000,-</p>
              <p>Rp 150.000,-</p>
            </div>

          </div>

          <h3 className="eventTitle benefit">Benefit</h3>
          <div className="Benefit"> 
            <ul>
              <li>Biaya registrasi yang murah dan ramah dengan kantong mahasiswa</li>
              <li>Raih kesempatan hadiah dengan total hadiah jutaan rupiah!</li>
              <li>Tiap peserta dan finalis dipastikan akan mendapatkan E-SERFITIKAT (Bukan hanya finalis aja yang mendapatkan!)</li>
              <li>Kesempatan bootcamp dan mentoring online oleh Mentor-Mentor yang profesional di bidangnya!  </li>
              <li>Berkesempatan untuk bergabung kedalam circle akselerator startup dan raih kesempatan networking dengan akselerator di dalam dan luar kompetisi ini!</li>
              <li>Dapatkan kesempatan mengikuti webinar yang akan membahas topik seputar teknopreneur dengan pembicara yang profesional dan pastinya keren!</li>
            </ul>
          </div>
          
        </div>
        <svg className="decoration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,256L13.3,256C26.7,256,53,256,80,256C106.7,256,133,256,160,229.3C186.7,203,213,149,240,117.3C266.7,85,293,75,320,80C346.7,85,373,107,400,106.7C426.7,107,453,85,480,85.3C506.7,85,533,107,560,117.3C586.7,128,613,128,640,112C666.7,96,693,64,720,74.7C746.7,85,773,139,800,170.7C826.7,203,853,213,880,208C906.7,203,933,181,960,154.7C986.7,128,1013,96,1040,106.7C1066.7,117,1093,171,1120,176C1146.7,181,1173,139,1200,122.7C1226.7,107,1253,117,1280,122.7C1306.7,128,1333,128,1360,144C1386.7,160,1413,192,1427,208L1440,224L1440,0L1426.7,0C1413.3,0,1387,0,1360,0C1333.3,0,1307,0,1280,0C1253.3,0,1227,0,1200,0C1173.3,0,1147,0,1120,0C1093.3,0,1067,0,1040,0C1013.3,0,987,0,960,0C933.3,0,907,0,880,0C853.3,0,827,0,800,0C773.3,0,747,0,720,0C693.3,0,667,0,640,0C613.3,0,587,0,560,0C533.3,0,507,0,480,0C453.3,0,427,0,400,0C373.3,0,347,0,320,0C293.3,0,267,0,240,0C213.3,0,187,0,160,0C133.3,0,107,0,80,0C53.3,0,27,0,13,0L0,0Z"></path></svg>

        {/* Time Count */}
        <h3 className="timeCountTitle eventTitle">REGISTRATION <strong className="stronger">BATCH 2</strong></h3>
        <div className="timeCount">
          <div className="days">
            <p>{timeDistance.days}</p>
            <p >Hari</p>
          </div>
          <div className="hours">
            <p>{timeDistance.hours}</p>
            <p>Jam</p>
          </div>
          <div className="minutes">
            <p>{timeDistance.minutes}</p>
            <p>Menit</p>
          </div>
          <div className="seconds">
            <p>{timeDistance.seconds}</p>
            <p>Detik</p>
          </div>
        </div>
        <div className="CTACount"><a href="http://bit.ly/PendaftaranRNBC2021">DAFTAR SEKARANG</a></div>
        
        {/* Sponsor */}
        <div className="sponsor">
        <svg className="decoration sponsorDecoration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffcd59" fillOpacity="1" d="M0,96L24,128C48,160,96,224,144,224C192,224,240,160,288,160C336,160,384,224,432,218.7C480,213,528,139,576,138.7C624,139,672,213,720,202.7C768,192,816,96,864,58.7C912,21,960,43,1008,80C1056,117,1104,171,1152,160C1200,149,1248,75,1296,37.3C1344,0,1392,0,1416,0L1440,0L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
          <h3 className="sponsorTitle supportTitle">MEDIA <strong className="stronger">PARTNER</strong></h3>	
          <div className="partner">
          <a href="#"><img src="https://i.ibb.co/hBvbgvy/Logo-YOT-Semarang.png" alt="Logo-YOT-Semarang" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/8bYRSsD/Logo-Upii-transparan-1.png" alt="Logo-Upii-transparan-1" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/WpvbjBG/logo-tfl-with-ttexr.png" alt="logo-tfl-with-ttexr" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/HBDZX0b/sonora-putih.png" alt="sonora-putih" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/svzs4rF/sejuta-cita-removebg-preview.png" alt="sejuta-cita-removebg-preview" border="0" /></a>
            <a href="#"><img src="https://i.ibb.co/b5dqWq5/png-1.png" alt="png-1" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/VS20TTz/IDN-Times-Jateng.png" alt="IDN-Times-Jateng" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/277sYR9/IMG-20210625-WA0020.jpg" alt="IMG-20210625-WA0020" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/qMg065y/gnfi-logo.png" alt="gnfi-logo" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/Y7CGJCM/LOGO-eventcampus.png" alt="LOGO-eventcampus" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/j4WvHSb/Whats-App-Image-2021-06-23-at-20-31-41-1.jpg" alt="Whats-App-Image-2021-06-23-at-20-31-41-1" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/Yp9nntX/BEMKM-UDINUS-LOGO.png" alt="BEMKM-UDINUS-LOGO" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/P4wtWxy/logo-info-semarang-raya-new.webp" alt="logo-info-semarang-raya-new" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/8znDFqH/Bpreneur-png.png" alt="Bpreneur-png" border="0" /></a>
            <a href="#"><img src="https://i.ibb.co/7VL9Y67/Linimuda-01.png" alt="Linimuda-01" border="0" /></a>
            <a href="#"><img src="https://i.ibb.co/NjgKHFR/MW.png" alt="MW" border="0" /></a>
            <a href="#"><img src="https://i.ibb.co/n0p1Wr2/agn.png" alt="agn" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/XY9nwrg/Logo-Ayo-Semarang.png" alt="Logo-Ayo-Semarang" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/nbkKgVr/logo-infolomba-png.png" alt="logo-infolomba-png" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/VtKYx2X/20210403-105229.png" alt="20210403-105229" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/fCdMR6X/LOGO-LOMBABISNIS.png" alt="LOGO-LOMBABISNIS" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/cbBYvMy/logo-Artboard-1-2x-100.jpg" alt="logo-Artboard-1-2x-100" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/bFcVCF3/Logo-Satu-Tampa.png" alt="Logo-Satu-Tampa" border="0"/></a>
          </div>  
        </div>
        <div className="sponsor partnerContainer">
          <h3 className="sponsorTitle">SPONSORED <strong className="stronger">BY</strong></h3>	
          <div className="partner">
            <a href="#"><img src="https://i.ibb.co/zf9KTf0/digipedia-logo-1.png" alt="digipedia-logo-1" border="0"/></a>
            <a href="#"><img src="https://i.ibb.co/FxLHCdC/default.png" alt="default" border="0" /></a>
            <a href="#"><img src="https://i.ibb.co/PYbyBkH/LOGO-DUITKU-03.png" alt="LOGO-DUITKU-03" border="0" /></a>
            <a href="#"><img src="https://i.ibb.co/hHnDKcn/BLOCK71-Indonesia-Logo-1-white.png" alt="BLOCK71-Indonesia-Logo-1-white" border="0" /></a>
            <a href="#"><img src="https://i.ibb.co/NCGG9Nt/new-logo-white.png" alt="new-logo-white" border="0" /></a>
            <a href="#"><img src="https://i.ibb.co/ZSrP8mC/Sx-C-Semarang-biru-putih.png" alt="Sx-C-Semarang-biru-putih" border="0" /></a>
            <a href="#"><img src="https://i.ibb.co/wd178P3/logo-impala-network.png" alt="logo-impala-network" border="0" /></a>
          </div>
        </div>
        <div className="sponsor partnerContainer">
          <h3 className="sponsorTitle">SUPPORTED <strong className="stronger">BY</strong></h3>	
          <div className="partner">
            <a href="#"><img src="https://i.ibb.co/sjqMQBD/Undip.png"/></a>
            <a href="#"><img src="https://i.postimg.cc/4yQSY7Kr/logornb.png"/></a>
          </div>
        </div>
      </main>

      <footer>
        <div>
          <div>
            <address>
              <p>Jl. Prof. Sudarto No.13, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275</p>
              <a href="mailto:rnbcompetition159@gmail.com">rnbcompetition159@gmail.com</a>
              <p>Phone: 082252730620</p>
            </address>
            
          </div>
          <div id="contact" className="contact">
            <h3>Temukan Kami :</h3>
            <div className="social-media">
              <a href="https://www.instagram.com/rnb_competition/"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
              <a href="https://liff.line.me/1645278921-kWRPP32q?accountId=346mygwh&openerPlatform=webview&openerKey=webview%3AunifiedSearch#mst_challenge=viMz-6f4TZiQ9ItK1K3IfXy944njpe1E0C9-eZuAFGw"><img src="https://img.icons8.com/color/48/000000/line-me.png"/></a>
              <a href="https://twitter.com/RnB_Competition"><img src="https://img.icons8.com/color/48/000000/twitter-squared.png"/></a>
              <a href="https://www.tiktok.com/@rnb_competition/"><img src="https://img.icons8.com/doodle/50/000000/tiktok.png"/></a>
            </div>
          </div>
        </div>
        <p className="copy">Copyright &copy;UKMRNB 2021 </p>
      </footer>

    </div>
  );
}

export default App;
