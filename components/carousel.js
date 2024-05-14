const template = document.createElement('template');
template.innerHTML = `
  <style>
    .carousel-container {
      position: relative;
      
      
    }
    .arrow {
      display:block;
      position: absolute;
      top: 100px;
      z-index: 20;
      width: 40px;
      height: 40px;
      color: white;
      cursor: pointer;
    }
    .arrow:hover svg path{
      fill:var(--primary-moderate-cyan);
    }
    .arrow--left {
      left: 128px;
      
      
    }
    
    .arrow--right {
      right: 128px;
      
    }
    
    .carousel {
      display: flex;
      overflow: hidden;
     
    }
    .abbie{
      font-size:24px;
      line-height:34px;
      weight:700;
    }
    
    .carousel-item {
        flex: 0 0 700px;
        transition: transform 0.5s ease;
      }
    
 
    
    .dots {
      position: relative;
      bottom: 10px;
      padding:303px 0 100px 0;
      left: 50%;
      z-index:10;
      transform: translateX(-50%);
      display: flex;
    }
    
    .dot {
      width: 14px;
      height: 14px;
      z-index:10;
      position:relative;
      left:50%;
      background-color:  var(--primary-fade-white);
      border-radius: 50%;
      margin: 0 5px;
      cursor: pointer;
    }
    
    .dot.active {
      background-color: var(--primary-moderate-cyan);
      z-index:10;
    }
    .card-content{
        color:var(--secondary-white);
        background-color:var(--very-dark-cyan);
        padding:38px 65px 45px 65px;
        border-radius: 8px;

    }
    .content-item{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .card-paragraph{
        font-size:18px;
        font-style:italic;
        font-weight:400;
        margin:1rem 0 0 0;
        line-height:28px;
        weight:400;
    }
    .card {
        display: flex;
        position:absolute;
        width: 100%;
        top:-30px;
        left:50%;
        border-radius:8px;
        transform: translateX(-50%);
        z-index:1;
        justify-content: start;
        align-items: center;
        max-width: 980px;
        overflow: hidden;
      }
      
      .card-img {
        max-width: 270px;
        max-height: 240px;
        width: auto;
        margin:0 36px 0 0;
        border-radius: 8px 0 0 8px ;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        height: auto;
      }

      @media screen and (max-width: 1080px) {
        .arrow{
          display:none;
        }
        .card {
          display: flex;
          position: absolute;
          width: 95%;
          top: -30px;
          left: 50%;
          border-radius:8px;
          transform: translateX(-50%);
          z-index: 1;
          justify-content: start;
          align-items: center;
          overflow: hidden;
        }
        .abbie{
          font-size:18px;
          line-height:28px;
          font-weight:700;
        }
        .card-paragraph{
          font-size:14px;
          font-style:italic;
          font-weight:400;
          margin:1rem 0 0 0;
          line-height:24px;
          weight:400;
      }
     
        .card-img {
            max-width: 196px;
            max-height: 196px;
            width: auto;
            margin:0 1.5rem 0 0;
            border-radius: 8px 0 0 8px ;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
            height: auto;
          }
          .card-content{
            color:var(--secondary-white);
            background-color:var(--very-dark-cyan);
            padding:19px 36px 33px 37px;
            border-radius: 4px;
    
        }
        .dots {
            position: relative;
            bottom: 10px;
            padding:253px 0 100px 0;
            left: 50%;
            z-index:10;
            transform: translateX(-50%);
            display: flex;
          }
          .dot{
            z-index:10;
          }
      }

    @media screen and (max-width:660px){
      .carousel-container {
         z-index:-1;
         top:-80px;
        margin-bottom:160px;
      }
      .dots {
        position: relative;
        bottom: -310px;
        padding:253px 0 100px 0;
        left: 42%;
        z-index: 10;
        transform: translateX(-50%);
        display: flex;
      }
      .dot{
        z-index:10;
      }
      .abbie{
        font-size:18px;
        font-weight:700;
        padding:16px 0 0 0;
      }
      .card-paragraph{
        font-size:14px;
        font-style:italic;
        font-weight:400;
        margin:3rem 0 0 0;
        line-height:24px;
        weight:400;
    }
      .card {
        display: flex;
        flex-direction:column;
        width: 95%;
        position:absolute;
        
        transform: translateX(-50%);
        z-index: 0;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }
    

    .card-content{
      color:var(--secondary-white);
      background-color:var(--very-dark-cyan);
      padding:150px 36px 33px 37px;
      border-radius: 8px;
      position:relative;
      top:0;
      height:auto;
      max-width:320px;
     
  }
    .card-img {
      position:relative;
      top:30px;
      transform:translate(-34px,100px);
      z-index:1;
      max-width: 180px;
      max-height: 180px;
      width: auto;
      margin:0 1rem 0 0;
      border-radius: 8px  8px 0 0 ;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      height: auto;
    }

    .quotation{
      position:absolute;
      top:85px;
      right:28px;
    }
    
    }
    } 
  </style>
  <div class="carousel-container">
    <div class="carousel">
    <div class="card">
    <img class="card-img" src="./assets/person1.png" alt="i">
    <div class="card-content">
        <div class="content-item">
            <div class="abbie">
                
                    Abbie Harvey
              
            </div>
            <div class="quotation">
                <svg width="60" height="47" viewBox="0 0 60 47" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.5804 21.9794C21.9114 22.9931 23.7296 24.5137 25.035 26.5412C26.3403 28.5686 26.993 30.9647 26.993 33.7294C26.993 37.6922 25.7343 40.9176 23.2168 43.4059C20.6993 45.802 17.4825 47 13.5664 47C9.65035 47 6.38695 45.7559 3.77622 43.2676C1.25874 40.7794 0 37.6 0 33.7294C0 31.8863 0.2331 30.0431 0.699301 28.2C1.1655 26.3569 2.19114 23.5922 3.77622 19.9059L11.8881 0H25.7343L19.5804 21.9794ZM52.5874 21.9794C54.9184 22.9931 56.7366 24.5137 58.042 26.5412C59.3473 28.5686 60 30.9647 60 33.7294C60 37.6922 58.7413 40.9176 56.2238 43.4059C53.7063 45.802 50.4895 47 46.5734 47C42.6573 47 39.3939 45.7559 36.7832 43.2676C34.2657 40.7794 33.007 37.6 33.007 33.7294C33.007 31.8863 33.2401 30.0431 33.7063 28.2C34.1725 26.3569 35.1981 23.5922 36.7832 19.9059L44.8951 0H58.7413L52.5874 21.9794Z"
                        fill="#2A7C6B" />
                </svg>
            </div>
        </div>
        <span class="card-paragraph">I have been caring for my mom & dad off and on for about 10 years now,
            and I know the importance of me being there for appointments.
            Older people need attention, love and care that they truly deserve.</span>
    </div>
</div>

<div class="card">
<img class="card-img" src="./assets/person2.png" alt="i">
<div class="card-content">
    <div class="content-item">
        <div class="abbie">
            
                Abbie Harvey
          
        </div>
        <div class="quotation">
            <svg width="60" height="47" viewBox="0 0 60 47" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.5804 21.9794C21.9114 22.9931 23.7296 24.5137 25.035 26.5412C26.3403 28.5686 26.993 30.9647 26.993 33.7294C26.993 37.6922 25.7343 40.9176 23.2168 43.4059C20.6993 45.802 17.4825 47 13.5664 47C9.65035 47 6.38695 45.7559 3.77622 43.2676C1.25874 40.7794 0 37.6 0 33.7294C0 31.8863 0.2331 30.0431 0.699301 28.2C1.1655 26.3569 2.19114 23.5922 3.77622 19.9059L11.8881 0H25.7343L19.5804 21.9794ZM52.5874 21.9794C54.9184 22.9931 56.7366 24.5137 58.042 26.5412C59.3473 28.5686 60 30.9647 60 33.7294C60 37.6922 58.7413 40.9176 56.2238 43.4059C53.7063 45.802 50.4895 47 46.5734 47C42.6573 47 39.3939 45.7559 36.7832 43.2676C34.2657 40.7794 33.007 37.6 33.007 33.7294C33.007 31.8863 33.2401 30.0431 33.7063 28.2C34.1725 26.3569 35.1981 23.5922 36.7832 19.9059L44.8951 0H58.7413L52.5874 21.9794Z"
                    fill="#2A7C6B" />
            </svg>
        </div>
    </div>
    <span class="card-paragraph">I have been caring for my mom & dad off and on for about 10 years now,
        and I know the importance of me being there for appointments.
        Older people need attention, love and care that they truly deserve.</span>
</div>
</div>
<div class="card">
<img class="card-img" src="./assets/person3.png" alt="i">
<div class="card-content">
<div class="content-item">
    <div class="abbie">
        
            Abbie Harvey
      
    </div>
    <div class="quotation">
        <svg width="60" height="47" viewBox="0 0 60 47" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19.5804 21.9794C21.9114 22.9931 23.7296 24.5137 25.035 26.5412C26.3403 28.5686 26.993 30.9647 26.993 33.7294C26.993 37.6922 25.7343 40.9176 23.2168 43.4059C20.6993 45.802 17.4825 47 13.5664 47C9.65035 47 6.38695 45.7559 3.77622 43.2676C1.25874 40.7794 0 37.6 0 33.7294C0 31.8863 0.2331 30.0431 0.699301 28.2C1.1655 26.3569 2.19114 23.5922 3.77622 19.9059L11.8881 0H25.7343L19.5804 21.9794ZM52.5874 21.9794C54.9184 22.9931 56.7366 24.5137 58.042 26.5412C59.3473 28.5686 60 30.9647 60 33.7294C60 37.6922 58.7413 40.9176 56.2238 43.4059C53.7063 45.802 50.4895 47 46.5734 47C42.6573 47 39.3939 45.7559 36.7832 43.2676C34.2657 40.7794 33.007 37.6 33.007 33.7294C33.007 31.8863 33.2401 30.0431 33.7063 28.2C34.1725 26.3569 35.1981 23.5922 36.7832 19.9059L44.8951 0H58.7413L52.5874 21.9794Z"
                fill="#2A7C6B" />
        </svg>
    </div>
</div>
<span class="card-paragraph">I have been caring for my mom & dad off and on for about 10 years now,
    and I know the importance of me being there for appointments.
    Older people need attention, love and care that they truly deserve.</span>
</div>
</div>

    </div>
    <div class="arrow arrow--left ">
    <svg width="25" height="40" viewBox="0 0 25 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.24 35.76L8.47999 20L24.24 4.24L20 -3.70673e-07L-7.78829e-06 20L20 40L24.24 35.76Z" fill="#EAEAEA"/>
</svg>

    
  </div>
  <div class="arrow arrow--right ">
  <svg width="25" height="40" viewBox="0 0 25 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.76001 4.24L16.52 20L0.76001 35.76L5.00001 40L25 20L5.00001 0L0.76001 4.24Z" fill="#EAEAEA"/>
  </svg>
  
  </div>
    <div class="dots">
    <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  
  </div>
`;

class Carousel extends HTMLElement {
  constructor() {
    super();
    
   
  }

  connectedCallback() {
    console.log('Connected Callback called');
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.currentIndex = 0;
    this.cards =shadowRoot.querySelectorAll('.card');
    this.dots = shadowRoot.querySelectorAll('.dot');
    this.arrows = shadowRoot.querySelectorAll('.arrow');
    // when clicking the arrow it changes the slide
    this.arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
        if (arrow.classList.contains('arrow--right')) {
          this.nextSlide();
          console.log("right")
        } else {
          this.prevSlide();
          console.log("left")
        }
      });
    });
  
  this.dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      this.goToSlide(index);
    });
  });

  this.updateCarousel();
  
  this.autoplayInterval = setInterval(() => {
    this.nextSlide();
  }, 3000); 
  
}


disconnectedCallback() {
  console.log("disconnected callback")
  clearInterval(this.autoplayInterval);
}
  updateCarousel() {
    this.cards.forEach(card => {
      card.style.display = 'none';
    });
    this.cards[this.currentIndex].style.display = 'flex';

    this.dots.forEach(dot => {
      dot.classList.remove('active');
    });
    void this.cards[this.currentIndex].offsetWidth;
    this.dots[this.currentIndex].classList.add('active');


   
  }
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    this.updateCarousel();
  }
  goToSlide(index) {
    this.currentIndex = index;
    console.log(this.currentIndex)
    this.updateCarousel();
  }

 
}

customElements.define('carousel-component', Carousel);
