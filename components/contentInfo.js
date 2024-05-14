const contentInfoTemplate = document.createElement("template");

contentInfoTemplate.innerHTML = `
<style>
  section {
    padding: 20px 90px 120px 90px;
    background-color: #F5F5F5;
    position:relative;
  }
  section:after{
    
    content: "";
    background-image: url("./assets/wave_desktop.svg");
    background-size: cover;
    repeat:no-repeat;
    background-position: center;
    overflow:auto;
    width:100%;
    position:absolute;
    top:-95px;
    z-index:0;
    left:0;
    height:100px;    
    opacity:0.5;
}
section:before{
    
  content: "";
  background-image: url("./assets/wave_desktop.svg");
  background-size: cover;
  repeat:no-repeat;
  background-position: center;
  overflow:auto;
  width:100%;
  position:absolute;
  top:-70px;
  z-index:0;
  left:0;
  height:100px; 
  opacity:1;
       
}
  .text-content {
    color: #333333;
    display: flex;
    font-size: 14px;
    text-align:start;
  }

  .stroke-container {
    display: flex;
    justify-content: start;
    padding:0 30px;
    align-items: center;
  }

  .line {
    flex: 1;
    width: 85vw;
    margin: 10px 0 0 10px;
    border: 1px solid #EAEAEA;
  }

  .stroke-text {
    
    color: white;
    text-shadow: 
        -1px -1px 0 black,
        -1px 1px 0 black,
        1px -1px 0 black,
        1px 1px 0 black;
    font-weight: 700;
    font-size: 2.2rem;
  }

  .stroke-text-2 {
    color: #333333;
    font-size: 2.2rem;
    font-weight:700;
    padding-left:2px;
  }

  div {
    margin-bottom: 20px;
  }

  .img-container {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .img-item {
    flex: 1;
    padding: 0 30px;
  }

  p {
    width: calc(33.33% - 20px);
    margin-bottom: 20px;
    padding: 0 30px;
  }

  p button {
    width: 100%;
    display: block;
    margin-top: 10px;
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: 4px;
    object-fit: cover;
  }
  .submit-button{
    position:relative;
    display:inline;
 
  }
   .submit-button button{
  
    padding : 1rem 3.8rem 1rem 1.3rem;
    font-size:1.1rem;
    font-weight:700;
    color:#5BC8AF;
    border:1px solid #5BC8AF; 
    background-color:#FFFFFF;
    cursor:pointer;
    border-radius:0.25rem;
    position:relative;
  }
 .submit-button button:hover{
    top:-0.1rem;
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.08);
 }
 .submit-button button:active{
  background-color:#F5F5F5;
      box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.08);
 }
  .submit-button button img{
    position: relative;
    right: 5rem; /* Adjust as needed */
    margin:0 0.5rem 0 0 ;
    transform: translate(100px,2px);
    width: 1.1rem; /* Adjust icon size */
    height: 0.8rem; /* Adjust icon size */
    fill: currentColor;
  
  }
  
.submit-button button span{
    position:relative;
    left:1rem;
    font-size:1.1rem;
}
  @media screen and (max-width: 1090px) {
    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      flex-direction:row;
    }
    section{
      padding:140px 0 0 0;
    }
    section:after{
      display:none;
      content: "";
      background-image: url("./assets/wave_small.svg");
      background-size: cover;
      repeat:no-repeat;
      background-position: center;
      overflow:auto;
      width:100%;
      position:absolute;
      top:-95px;
      z-index:0;
      left:0;
      height:100px;    
      opacity:0.5;
  }
  section:before{
    
    content: "";
    background-image: url("./assets/wave_small.svg");
    background-size: cover;
    
    background-position: center;
    overflow:auto;
    width:-webkit-fill-available;
    position:absolute;
    top:-90px;
    z-index:0;
    left:0;
    height:140px; 
    opacity:1;
         
  }
    .stroke-container {
 
      padding:0 10px;
      
    }

    p {
      width: calc(50% - 20px);
      margin-bottom: 20px;
      padding: 0 10px;
    }

    section {
      padding: 20px 24px 20px 24px;
    }

    .img-item {
      width: calc(33.33% - 20px);
      flex: 0 0 auto;
      margin-bottom: 20px;
      padding: 0 10px;
    }
    .submit-button button img{
     
      margin:0 0.5rem 0 0 ;
      transform: translate(100px,2px);
      width: 1.1rem; /* Adjust icon size */
      height: 0.8rem; /* Adjust icon size */
      fill: currentColor;
    }
    img {
      height: auto;
    }
    .item2{
      order:3;
    }
    .item3{
      order:2;
    }
  }

  @media screen and (max-width: 620px) {
    .img-container {
      display: none;
    }
    section{
      background-color:var(--secondary-white);
    }

    section:after{
      
      content: "";
      background-image: url("./assets/wave_mobile.svg");
      background-size: cover;
      repeat:no-repeat;
      background-position: center;
      overflow:auto;
      width:100%;
      position:absolute;
      top:-95px;
      z-index:0;
      left:0;
      height:100px;    
      opacity:0.5;
  }
  section:before{
    
    content: "";
    background-image: url("./assets/wave_mobile.svg");
    background-size: cover;
    
    background-position: center;
    overflow:auto;
    width:-webkit-fill-available;
    position:absolute;
    top:-90px;
    z-index:0;
    left:0;
    height:140px; 
    opacity:1;
    transform: rotate3d(0, 1, 0, 176deg);
         
  }

    .stroke-text {
      font-weight:700; 
      color: white;
      text-shadow: 
          -1px -1px 0 black,
          -1px 1px 0 black,
          1px -1px 0 black,
          1px 1px 0 black;
    
      font-size: 1.5rem;
    
    }

    .stroke-text-2 {
      color: #333333;
      font-size: 1.5rem;
      font-weight:700;
      padding-left:2px;
    }

    .text-content {
      color: #333;
      display: flex;
      flex-direction: column;
    }
    .submit-button button img{
     
      margin:0 0.5rem 0 0 ;
      transform: translate(100px,2px);
      width: 1.1rem; /* Adjust icon size */
      height: 0.8rem; /* Adjust icon size */
      fill: currentColor;
    }
    p {
      width: 100%;
    }
    .item2{
      order:2;
    }
    .item3{
      order:3;
    }
  }
</style>
<section>
  <div></div>
  <div class="img-container">
    <div class="img-item">
      <img src="./assets/img1.png" alt="Image 1">
    </div>
    <div class="img-item">
      <img src="./assets/img2.png" alt="Image 2">
    </div>
    <div class="img-item">
      <img src="./assets/img3.png" alt="Image 3">
    </div>
  </div>
  <div class="stroke-container">
    <span class="stroke-text">WE</span>
    <span class="stroke-text-2">UNDERSTAND</span>
    <div class="line"></div>
  </div>
  <div class="text-content">
    <p class="item1">
      Older adults want to play active and meaningful roles in their lives, including as part of a social network, a neighborhood, and a community. Service providers and policymakers must consider that a lack of sense of purpose can become problematic as people age. Engaging them in leisure activities and volunteer work is important.
    </p>
    <p class="item2">
      Older adults want to stay active and contribute to society in a reciprocal manner (meaning that they want to exchange their services and skills with others for the mutual benefit of the neighborhood or community). Qualitative and quantitative studies published from 2005 to 2016 examining the social needs of older adults were eligible for inclusion.
    </p>
    <p class="item3">
      To stimulate social contacts, neighborhood initiatives can be developed. Social meeting places, such as pubs and churches can help to foster the development of close and peripheral relationships.
      <span class="submit-button">
          <button type="submit">
          <span>92% success rate</span>
          <img src="./assets/arrow2.svg" alt="arrow" width="17" height="12">
      
      </button>
    </p>
  </span>
</section>
`;

class Section extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(contentInfoTemplate.content.cloneNode(true));
 
  }
}

customElements.define('contentinfo-component', Section);
