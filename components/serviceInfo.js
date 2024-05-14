const serviceTemplate = document.createElement("template");

serviceTemplate.innerHTML =
    `
<style>
section{
    background-color:var(--secondary-white);
    color:var(--primary-text-color);
    padding:0 128px 0 128px;
}
.heading-container {
    display: flex;
    justify-content: start;
   
    align-items: center;
    
  }
  .heading-container-small{
    display:none;
  }
.stroke-text {
    color: white;
    font-weight: 700;
    font-size: 2.2rem;
    text-shadow: 
        -1px -1px 0 black,
        -1px 1px 0 black,
        1px -1px 0 black,
        1px 1px 0 black;
  }

.stroke-text-2 {
    color: #333333;
    font-size: 2.2rem;
    font-weight:700;
    padding-left:2px;
  }  

.line {
    flex: 1;
    max-width: 85vw;
    margin: 10px 0 0 10px;
    border: 1px solid #EAEAEA;
  }

  .tooltip {
    position: relative;
    display: block;
    max-width:100%;
    min-height:86px;
  }

  .tooltiptext:after{
    content: "";
    position: absolute;
    top: -19px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent var(--dark-moderate-cyan) transparent;
    
  
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    width:80%;
    background-color:var(--dark-moderate-cyan);
    color: var(--secondary-white);
    text-align: left;
    border-radius: 6px;
    padding: 21px 16px 12px 16px ;
    position: absolute;
    font-size:13px;
    font-weight:400;
    line-height:20px;   
    z-index:2;
    top: calc(100% + 10px);
    left:60%;
    transform: translateX(-50%);
    margin-left: -30px;
    opacity: 0;
    transition: opacity 0.3s;
    
  }
.tooltip .icon{
    visibility:hidden;
}
.tooltip:hover .icon{
    visibility: visible;
    margin:5px 0 0 5px;
}
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
    
  }
  

  /* Button styles */
  .btn {
    background-color: var(--secondary-white);
    color: var(--primary-text-color);
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    height:86px;
    border: 1.5px solid var(--primary-moderate-cyan);
    padding: 0 24px;
     font-size:18px;
     font-weight:700;
     line-height:28px;
     text-align:center;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    
  }
  .btn:hover {
    color: var(--primary-moderate-cyan);
  }
  /* Grid code*/
  .grid-container{
    display: grid;
    grid-template-columns:auto auto auto;
    gap: 36px;
    margin:32px 0 0 0;
  }

  @media screen and (max-width: 1090px) {
    section {
      padding: 0 24px;
    }
    .tooltip {
        position: relative;
        display: block;
        max-width:100%;
      }
    .heading-container-small{
      display:none;
    }
    .grid-container{
        display: grid;
        grid-template-columns:auto auto;
        gap: 24px;
        margin:32px 0 0 0;
      }
    .item1{
        grid-column:1/3;
    }  
  }
  @media screen and (max-width: 620px) {
    section {
      padding: 50px 16px;
    
    }
    .heading-container{
      display:none;
    }
    .heading-container-small{
      display:block;
    }
    .grid-container {
      display: flex;
      flex-direction:column;
      margin: 16px 0 0 0;
    }
    .stroke-text{
        font-size:1.5rem;
    }
    .stroke-text-2{
        font-size:1.5rem;
        font-weight:700;
        padding-left:2px;
    }
    .grid-item{
      width:100%;
    }
    .item1 {
      margin: 0 0 40px 0;
      width:100%;
    }
    .item2{
        margin:0 0 24px 0;
    }
    .item3{
        margin:0 0 68px 0;
    }

  }
</style>


<section>
  <div class="heading-container">
    <span class="stroke-text">WE</span>
    <span class="stroke-text-2"> CAN ORGANIZE EVERYTHING</span>
    <div class="line"></div>
  </div>
  <div class="heading-container-small">
  <span class="stroke-text">WE</span>
  <span class="stroke-text-2"> CAN ORGANIZE </span>
  <div class="stroke-text-2" style="display:flex;align-items:center;"><span>
  EVERYTHING
  </span> 
  
  <div class="line"></div>
  
  </div>
</div>
  <div class="grid-container">
    <div class="grid-item item1">
      <span><i><b>Interventions</b> should focus on older adult’s desire for connectedness, participation and independence.</i></span>
    
      </div>
    <div class="grid-item item2">
      <span>Loneliness and social isolation are growing public health concerns in our aging society. Whilst these experiences occur across the life span, 50% of individuals aged over 60 are at risk of social isolation and one-third will experience some degree of loneliness later in life. It is vital to reduce loneliness and social isolation among older adults.</span>
    </div>
    <div class="grid-item item3">
      <span>The methodology framework proposed by Asked and O’Malley and further developed by Levac, et al. was used to guide the scoping review process. A total of 33 reviews met the inclusion criteria, evaluating a range of interventions targeted at older people residing in the community or institutionalised settings.</span>
    </div>  
    <div class="grid-item item4">
      <div class="tooltip">
        <button class="btn">Needs Assessment
        <span class="icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="8.25" stroke="#5BC8AF" stroke-width="1.5"/>
        <line x1="9" y1="11" x2="9" y2="7" stroke="#5BC8AF" stroke-width="1.5"/>
        <circle cx="9" cy="5.5" r="0.75" fill="#5BC8AF"/>
      </svg>
        
        </button>
        <span class="tooltiptext">We’re experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.  </span>
      </div>
    </div>
    <div class="grid-item item5">
      <div class="tooltip">
        <button class="btn">Treatment Planning & Placement 
        <span class="icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="8.25" stroke="#5BC8AF" stroke-width="1.5"/>
        <line x1="9" y1="11" x2="9" y2="7" stroke="#5BC8AF" stroke-width="1.5"/>
        <circle cx="9" cy="5.5" r="0.75" fill="#5BC8AF"/>
      </svg>
        
        </button>
        <span class="tooltiptext">We’re experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.  </span>
      </div>
    </div>   
    <div class="grid-item item6"> 
      <div class="tooltip">
        <button class="btn">Transportation & Logistics <span class="icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="8.25" stroke="#5BC8AF" stroke-width="1.5"/>
        <line x1="9" y1="11" x2="9" y2="7" stroke="#5BC8AF" stroke-width="1.5"/>
        <circle cx="9" cy="5.5" r="0.75" fill="#5BC8AF"/>
      </svg>

        </span>      
         </button>
        <span class="tooltiptext">We’re experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.  </span>
        </div>
    </div>
    <div class="grid-item item7">
      <div class="tooltip">
        <button class="btn">Insurance Advocacy 
        <span class="icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="8.25" stroke="#5BC8AF" stroke-width="1.5"/>
        <line x1="9" y1="11" x2="9" y2="7" stroke="#5BC8AF" stroke-width="1.5"/>
        <circle cx="9" cy="5.5" r="0.75" fill="#5BC8AF"/>
      </svg>
        </button>
        <span class="tooltiptext">We’re experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.  </span>
      </div>
    </div>
    <div class="grid-item item8">
      <div class="tooltip">
        <button class="btn">Employment Advocacy    
        <span class="icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="8.25" stroke="#5BC8AF" stroke-width="1.5"/>
        <line x1="9" y1="11" x2="9" y2="7" stroke="#5BC8AF" stroke-width="1.5"/>
        <circle cx="9" cy="5.5" r="0.75" fill="#5BC8AF"/>
      </svg>
        
        </button>
        <span class="tooltiptext">We’re experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.  </span>
      </div>
    </div>  
    <div class="grid-item item9">       
      <div class="tooltip">
        <button class="btn">Aftercare Planning
        <span class="icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="8.25" stroke="#5BC8AF" stroke-width="1.5"/>
        <line x1="9" y1="11" x2="9" y2="7" stroke="#5BC8AF" stroke-width="1.5"/>
        <circle cx="9" cy="5.5" r="0.75" fill="#5BC8AF"/>
      </svg>
        
        </button>
        <span class="tooltiptext">We’re experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.</span>
      </div>
    </div>
  </div>
</section>
`


class Service extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(serviceTemplate.content.cloneNode(true));
    }
}


customElements.define('service-component', Service);