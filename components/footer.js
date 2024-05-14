const footerTemplate = document.createElement("template");

footerTemplate.innerHTML =
    `
<style>
section{
    display:flex;
    align-items:center;
    font-size:14px;
    font-weight:400;
    line-height:24px;
    justify-content:space-between;
    background-color:var(--primary-fade-white);
    color:var(--grey);
    padding:38px 128px 38px 128px;
    position:relative;
}
.logo-img {
    position:absolute;
    top:-50px;
    right:3%;
    z-index:10;
    width: 226px;
    height: 35px;
    background-image: url(./assets/logo.svg);
    background-size: cover;
    
    background-position: center;
    overflow: auto;
}

a{
    text-decoration:none;
    text-decoration: inherit;
    color: inherit;
}
ul{
    display:flex;
    padding:0;
    margin:0;
}
li{
    list-style: none;
    cursor: pointer;
    
}
li:hover{
    text-decoration-line: underline;
}


@media screen and (max-width:1090px){
    section{
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:34px 100px 34px 100px;
    }


    .logo-img {
        position:absolute;
        top:-50px;
        left:50%;
        transform:translateX(-50%);
        z-index:10;
        width: 226px;
        height: 35px;
        background-image: url(./assets/logo.svg);
        background-size: cover;
        
        background-position: center;
        overflow: auto;
    }
}
@media screen and (max-width:620px){
    section{
        flex-direction:column;
        line-height:22px;
        justify-content:center;
        font-size:12px;
        align-items:center;
        padding:34px 11px 34px 10px;
    }
}
</style>


<section>
<div class="logo-img"></div>
<div class="tex">
<span >
@2021 Get an Intervention Inc. All rights reserved.
</span>
</div>
<div>
<ul>
<li><a href="#">Privacy Policy</a> <span style="margin: 0 8px"> | </span></li>
<li><a href="#">Terms of use</a> <span style="margin: 0 8px"> | </span></li>
<li><a href="#">Site Map </a><span></span></li>
</ul>

</div>

</section>
`


class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
    }
}


customElements.define('footer-component', Footer);