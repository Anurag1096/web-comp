const videoTemplate = document.createElement("template");

videoTemplate.innerHTML =
    `
<style>
section{
    background-color:var(--secondary-white);
    margin:120px 0 0 0;
    display:flex;
    width:100%;
    position:relative;
}
.content{
    width:38%;
    max-height:670px;
    background:linear-gradient(to right, #305D52 ,  #153F38);
    padding:94px 0 93px 128px;
    z-index:1;
    
}
.content:after{
    content: "";
    background-image: url("./assets/curveVideo.svg");
    background-size: cover;
    background-position: center;
    overflow:auto;
    width:54%;
    position:absolute;
    z-index:-1;
    top:0;
    left:0;
    height:100%;
  
}
.video-container{
    width:60%;
    position:relative;
    
}
.thumb-nail{
   position:absolute;
   top:0;
   height:100%;
}
.svg-content svg {
    transition: transform 0.3s ease-in-out;
    cursor:pointer;
    position:absolute;
    right:280px;
    top:40%;
    z-index:2;
}
.svg-content svg:hover{
    transform:scale(1.07);
}
.heading{

    margin:0 0 48px 0;
}
.stroke-text {
    text-shadow: 
          0.3px 1px 0  #305D52,
          0.3px 1px 0 white,
          0.1px 1px 0 white,
          0.1px 0.1px 0 white;
          
          
    color: transparent;
    font-weight: 700;
    font-size: 2.8rem;
     line-height:52px;
  }

.stroke-text-2 {
    color: var(--secondary-white);
    font-size: 2.8rem;
    font-weight: 700;
    line-height:52px;
  }  
.svg-content svg:hover {
   
}
.text-heading{
    font-size:18px;
    font-weight:700;
    color:var(--secondary-white);
    line-height:32px;
}
.text-inner{
    font-size:14px;
    weight:400;
    color:var(--secondary-white);
    filter:brightness(80%);
    line-height:28px;
    padding:0 0 0 24px;
    max-width:430px;
}

@media screen and (max-width:1090px){
    section{
        flex-direction:column;
        
    }

    .svg-content svg {
        
        position: absolute;
        transform:scale(0.9);
        top:45%;
        left: 37%;
        z-index:-2
        
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    .svg-content svg:hover {
       transform:scale(1.1);
    }
    .content{
        width:auto;
        max-height:670px;
        padding:102px 24px 110px 90px;
        z-index:1;
    }
    .content:after{
        
        content: "";
        background-image: url("./assets/curveVideoTab.svg");
        background-size: cover;
        background-position: bottom;
        overflow:auto;
        width:100%;
        position:absolute;
        z-index:-1;
        top:110px;
        left:0;
        height:50%;      
    }
    .content:before{
        
        content: "";
        background-image: url("./assets/curveVideoTab.svg");
        background-size: cover;
        background-position: bottom;
        overflow:auto;
        width:100%;
        position:absolute;
        z-index:-1;
        left:0;
        height:50%;      
    }
    .inner-text{
        max-width:90%;
    }
    .video-container{
        width:100%;
    }
}
@media screen and (max-width:620px){
    section{
        flex-direction:column;
        
    }
  
    .svg-content svg {
        position: absolute;
        top:63%;
        left: 25%;
        transform:translateX(-50%);
        transform:scale(0.5);
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    .svg-content svg:hover {
       transform:scale(0.6);
    }
    .content{
        width:auto;
        max-height:670px;
        padding:80px 16px 50px 16px;
 
    }
   
    .inner-text{
        max-width:90%;
    }
    .video-container{
        width:100%;
       height:100%
    }
    video{
        
       
    }
    .content:after{
        
        content: "";
        background-image: url("./assets/cureveVideoMobile.svg");
        background-size: cover;
        background-position: bottom;
        overflow:auto;
        width:100%;
        position:absolute;
        top:255px;
        z-index:-1;
        left:0;
        height:50%;      
    }
    .content:before{
        
        content: "";
        background-image: url("./assets/cureveVideoMobile.svg");
        background-size: cover;
        background-position: bottom;
        overflow:auto;
        width:100%;
        position:absolute;
        top:275px;
        opacity:0.2;
        z-index:-1;
        left:0;
        height:50%;      
    }

}
</style>


<section>

<div id="play-btn" class="svg-content">
    <svg width="208" height="208" viewBox="0 0 208 208" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="104" cy="104" r="104" fill="#5BC8AF" fill-opacity="0.1"/>
    <circle cx="104" cy="104" r="103" stroke="white" stroke-opacity="0.3" stroke-width="2"/>
    <circle cx="104" cy="104" r="59.2692" fill="#5BC8AF" fill-opacity="0.8" stroke="white" stroke-width="2"/>
    <path d="M120.123 101.149C122.209 102.353 122.209 105.363 120.123 106.567L95.7847 120.619C93.6995 121.823 91.093 120.318 91.093 117.91L91.093 89.8061C91.093 87.3983 93.6995 85.8935 95.7847 87.0974L120.123 101.149Z" fill="white"/>
    </svg>
</div>
<div class="content">

<div>
<div class="heading">
<span class="stroke-text">WATCH</span> <span class="stroke-text-2">THE VIDEO</span>

</div>

<div>
<div class="text-heading">
<span style="color:#5BC8AF;margin:0 12px 0 0;">&#x2713;</span>Needs Assessment
</div>
<div class="text-inner">
The Advocacy Evaluation Toolkit contains the instruments used to collect data for
 evaluating the Consumer Voices for Coverage program. 
</div>

</div>

<div  class="text-heading">
<span style="color:#5BC8AF;margin:0 12px 0 0;">&#x2713;</span> Insurance Advocacy
</div>
<div class="text-inner">
We are committed to advocating for appropriate coverage and payment policies.
</div>

</div>

<div  class="text-heading">
<span style="color:#5BC8AF;margin:0 12px 0 0;">&#x2713;</span>Treatment Planning & Placement
</div>
<div class="text-inner">
Patients can better understand medical procedures, discharge instructions, etc.
</div>

</div>


</div>
<div class="video-container">
<div id="thumbnail" class="thumb-nail">
     <img class="thumbnail-img" src="assets/backimg.png" width="100%" height="100%"  >
   

</div>
<video id="myVideo" width="100%" height="100%"   >
  <source src="./assets/video/mov_bbb2.mp4" type="video/mp4">
 
  
  Your browser does not support HTML video.
</video>
</div>

</section>
`

class Video extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(videoTemplate.content.cloneNode(true));
        this.video = shadowRoot.querySelector('#myVideo');
        this.thumbNail=shadowRoot.querySelector(".thumb-nail");
        this.playBtn=shadowRoot.getElementById("play-btn");
        this.addEventListeners();
       
    }
    
    addEventListeners() {
        this.playBtn.addEventListener("click",()=>{
            if (this.video.paused) {
                this.video.play();
                this.video.muted=true;
                
                this.video.loop=true;
            } else {
                this.video.pause();
            
                this.video.loop=true;
            }
        })

        if (this.video) { 
        this.video.addEventListener('play', () => {
          
            this.thumbNail.style.visibility = 'hidden';

        });
        
        this.video.addEventListener('pause', () => {
          
            this.thumbNail.style.visibility = 'visible';
        });
    }}
}


customElements.define('video-component', Video);