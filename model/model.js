// this information simulates getting data from a database
var homeContent = `<nav>
<div class="logo">
  <p>eventsy</p>
</div>
<div class="links">
  <a href="#home">home</a>
  <span>/</span>
  <a href="#about">about</a>
  <span>/</span>
  <a href="#gallery">gallery</a>
  <span>/</span>
  <a href="#blog">blog</a>
  <span>/</span>
  <a href="#contact">contact</a>
</div>
</nav><div class="banner">
<div class="banner-header1">
  <p>HEADER GOES HERE</p>
</div>
<div class="banner-header1-2">
  <p>LESS IMPORTANT TEXT GOES HERE</p>
</div>
<div class="banner-header2">
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
    ullam quae aliquam accusamus, corporis sapiente laudantium praesentium
    recusandae
  </p>
</div>
<div class="read-more">
  <p>Read More</p>
</div>
</div>

<div class="home-content">
<div class="home-content-container">
  <p class="home-content-text">
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
    reprehenderit numquam maiores, explicabo beatae voluptatibus accusamus
    amet cupiditate illo quam libero dolore enim quia eveniet eius
    praesentium? Eligendi, perferendis repudiandae."
  </p>
  <p class="john">John Smith</p>
  <p class="ceo">Corporation CEO, books author.</p>
</div>
</div>

<div class="events">
<div class="upcoming-container">
  <p class="upcoming">UPCOMING EVENTS:</p>
  <div class="underline"></div>
</div>
<div class="calendar-container">
  <div class="calendar1">
    <div class="date">
      <div class="date-text">
        <p class="date-number">06</p>
        <p class="date-month">JUN</p>
      </div>
    </div>
    <div class="calendar-text">
      <div class="calendar-toptext">Sed et persipiatis</div>
      <div class="calendar-bottomtext">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        temporibus quos aspernatur
      </div>
    </div>
  </div>
  <div class="calendar1">
    <div class="date">
      <div class="date-text">
        <p class="date-number">30</p>
        <p class="date-month">JUL</p>
      </div>
    </div>
    <div class="calendar-text">
      <div class="calendar-toptext">Sed et persipiatis</div>
      <div class="calendar-bottomtext">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        temporibus quos aspernatur
      </div>
    </div>
  </div>
  <div class="calendar1">
    <div class="date">
      <div class="date-text">
        <p class="date-number">30</p>
        <p class="date-month">AUG</p>
      </div>
    </div>
    <div class="calendar-text">
      <div class="calendar-toptext">Sed et persipiatis</div>
      <div class="calendar-bottomtext">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        temporibus quos aspernatur
      </div>
    </div>
  </div>
  <div class="calendar1">
    <div class="date">
      <div class="date-text">
        <p class="date-number">23</p>
        <p class="date-month">NOV</p>
      </div>
    </div>
    <div class="calendar-text">
      <div class="calendar-toptext">Sed et persipiatis</div>
      <div class="calendar-bottomtext">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        temporibus quos aspernatur
      </div>
    </div>
  </div>
  <div class="calendar1">
    <div class="date">
      <div class="date-text">
        <p class="date-number">23</p>
        <p class="date-month">DEC</p>
      </div>
    </div>
    <div class="calendar-text">
      <div class="calendar-toptext">Sed et persipiatis</div>
      <div class="calendar-bottomtext">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        temporibus quos aspernatur
      </div>
    </div>
  </div>
</div>
</div>`;
var aboutContent = `<nav class="black-nav">
<div class="logo-black">
  <p>eventsy</p>
</div>
<div class="links-black">
<a href="#home">home</a>
<span>/</span>
<a href="#about">about</a>
<span>/</span>
<a href="#gallery">gallery</a>
<span>/</span>
<a href="#blog">blog</a>
<span>/</span>
<a href="#contact">contact</a>
</div>
</nav><div class="about-container">
<div class="about">
  <div class="about-hero"></div>
  <div class="about-header">
    <h1>OUR HISTORY:</h1>
    <div class="rect"></div>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
</div>`;
var galleryContent = `<nav class="black-nav">
<div class="logo-black">
  <p>eventsy</p>
</div>
<div class="links-black">
<a href="#home">home</a>
<span>/</span>
<a href="#about">about</a>
<span>/</span>
<a href="#gallery">gallery</a>
<span>/</span>
<a href="#blog">blog</a>
<span>/</span>
<a href="#contact">contact</a>
</div>
</nav>

<div class="gallery-header">
<h1>GALLERY:</h1>
<div class="rect"></div>
</div>

<div class="topimages">
<a href="gallery1.html" class="img1"></a>
<a href="gallery2.html" class="img2"></a>
<a href="gallery3.html" class="img3"></a>
</div>

<div class="bottomimages">
<a href="gallery4.html" class="img4"></a>
<a href="gallery5.html" class="img5"></a>
</div>`;
var blogContent = `<nav class="black-nav">
<div class="logo-black">
  <p>eventsy</p>
</div>
<div class="links-black">
<a href="#home">home</a>
<span>/</span>
<a href="#about">about</a>
<span>/</span>
<a href="#gallery">gallery</a>
<span>/</span>
<a href="#blog">blog</a>
<span>/</span>
<a href="#contact">contact</a>
</div>
</nav>

<div class="blog-header-container">
<div class="header-text">
  <h1>BLOG:</h1>
</div>
<div class="rect"></div>
</div>

<div class="blog-total-container">
<div class="blog-container">
  <div class="blog-calendar-container">
    <div class="blog-calendar1">
      <div class="date">
        <div class="date-text">
          <p class="date-number">06</p>
          <p class="date-month">JUN</p>
        </div>
      </div>
      <div class="blog-calendar-text">
        <div class="calendar-img"></div>
        <div class="blog-calendar-toptext">Sed et persipiatis</div>
        <div class="calendar-bottomtext">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </div>
      </div>
    </div>
  </div>
  <div class="blog-calendar-container">
    <div class="blog-calendar1">
      <div class="date">
        <div class="date-text">
          <p class="date-number">30</p>
          <p class="date-month">AUG</p>
        </div>
      </div>
      <div class="blog-calendar-text">
        <div class="calendar-img"></div>
        <div class="blog-calendar-toptext">Sed et persipiatis</div>
        <div class="calendar-bottomtext">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </div>
      </div>
    </div>
  </div>
  <div class="blog-calendar-container">
    <div class="blog-calendar1">
      <div class="date">
        <div class="date-text">
          <p class="date-number">23</p>
          <p class="date-month">DEC</p>
        </div>
      </div>
      <div class="blog-calendar-text">
        <div class="calendar-img"></div>
        <div class="blog-calendar-toptext">Sed et persipiatis</div>
        <div class="calendar-bottomtext">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </div>
      </div>
    </div>
  </div>
</div>
<div class="blog-container">
  <div class="blog-calendar-container">
    <div class="blog-calendar1">
      <div class="date">
        <div class="date-text">
          <p class="date-number">30</p>
          <p class="date-month">JUL</p>
        </div>
      </div>
      <div class="blog-calendar-text">
        <div class="calendar-img"></div>
        <div class="blog-calendar-toptext">Sed et persipiatis</div>
        <div class="calendar-bottomtext">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </div>
      </div>
    </div>
  </div>
  <div class="blog-calendar-container">
    <div class="blog-calendar1">
      <div class="date">
        <div class="date-text">
          <p class="date-number">23</p>
          <p class="date-month">NOV</p>
        </div>
      </div>
      <div class="blog-calendar-text">
        <div class="calendar-img"></div>
        <div class="blog-calendar-toptext">Sed et persipiatis</div>
        <div class="calendar-bottomtext">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid temporibus quos aspernatur
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;
var contactContent = `<nav class="black-nav">
<div class="logo-black">
  <p>eventsy</p>
</div>
<div class="links-black">
<a href="#home">home</a>
<span>/</span>
<a href="#about">about</a>
<span>/</span>
<a href="#gallery">gallery</a>
<span>/</span>
<a href="#blog">blog</a>
<span>/</span>
<a href="#contact">contact</a>
</div>
</nav>

<div class="header-container">
<div class="header-text">
  <h1>CONTACT US:</h1>
</div>
<div class="rect"></div>
</div>

<div class="contact-container">
<div class="inputs">
  <form>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Your name..."
    /><br />
    <input
      type="text"
      id="email"
      name="email"
      placeholder="Email Address..."
    />
    <br />
    <input
      type="text"
      id="company"
      name="company"
      placeholder="Company..."
    />
    <br />
    <input
      type="text"
      id="msg"
      name="msg"
      class="msg"
      placeholder="Message..."
    />
  </form>
  <div class="sendmessage">
    <p>SEND MESSAGE</p>
  </div>
</div>
<div class="contact-map"></div>
</div>`;

// export var myName = "Nate";

// this function is being called from the app.js and it has the page name
export function modelPageName(pgName){
    console.log(pgName);

    $("#app").html(eval(pgName));
} 