const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<style>
header {
    height: fit-content;
    padding:0 0 70px 0;
    background-image: linear-gradient(to right, rgba(25, 77, 65, 0.8) 100%, rgba(25, 77, 65, 0.8) 70%),
        url(./assets/backimg.png);
    background-size: cover;
    background-position: top;
    overflow:auto;
}


.small-menu{
    display: none; /* Initially hide the small menu */
    padding: 10px;
    background-color: var(--very-dark-cyan);
    position: absolute;
    top: -100%; /* Initially position above the screen */
    left: 0;
    width: -webkit-fill-available;
    z-index: 1;
    transition: top 0.8s ease-out; /* Add transition for smooth animation */
   
}
.small-menu > .close-icon{
    font-size:18px;
    padding-left:10px;
    cursor:pointer;
}
.small-menu > .item {
    padding:10px;
    margin:4px;
    cursor:pointer;
    background-color:var(--dark-moderate-cyan);
}
.small-menu > .item:hover {
    padding:12px;
    cursor:pointer;
    background-color:var(--dark-moderate-cyan);
}
.show {
    top: 0; /* Move the menu into view */
    display: block;
    transition: top 0.8s ease-in;
    
}

a{
    text-decoration: inherit;
    color: inherit;
    cursor:pointer;
}
nav {
    display: flex;
    justify-content: space-between;
    padding: 1.125rem 8rem 0 8rem; /* 18px 128px 0 128px */
    align-items: center;
}

.phone-col {
    color: #5BC8AF;
}

ul {
    display: flex;
    align-items: center;
    font-size: 0.875rem; /* 14px */
    font-weight: 400;
    line-height: 2.5625rem; /* 41px */
    padding: 0;
    margin: 0;
}

.form-contact{
    font-size:28px;
    font-weight:700;
    line-height:34px;
    text-align:center;
    
}
.text_content p {
    text-align: left;
    font-size: 0.875rem; /* 14px */
}

li {
    color: #ffffff;
    font-size:12px;
    filter: brightness(70%);
    margin: 2px;
    text-align:center;
    list-style: none;
    cursor: pointer;
    margin: 0 1.9375rem 0 0; /* 0 31px 0 0 */
}

li:hover {
    color: #ffffff;
    filter: brightness(470%);
    font-weight: 700;
    transition: all 0.4s ease-out;
    text-decoration-line: underline;
}

.contact-info {
    font-weight: 700;
    line-height: 2.5625rem; /* 41px */
    font-size: 0.875rem; /* 14px */
}

.wrapper {
    display: flex;
    align-items: center;
}

.hamburg-line {
    width: 1.25rem; /* 20px */
    height: 0.125rem; /* 2px */
    margin: 0.125rem; /* 2px */
    background-color: #FFFFFF;
    border-radius: 0 0.625rem 0.625rem 0; /* 0 10px 10px 0 */
}

.line {
    margin-right: 2.875rem; /* 46px */
}

.show_hamburg {
    display: none;
}

.logo_large {
    display: block;
}

.logo_small {
    display: none;
}

.heading_desk {
    display: inline; /* Override hidden attribute for tablets */
}

.heading_tab {
    display: none; /* Override hidden attribute for tablets */
}

.heading_mobile {
    display: none; /* Hide for tablets */
}


.content_form {
    display: flex;
    margin: 4.125rem 0 0 0; /* 66px 0 0 0 */
    padding: 1.125rem 8rem 0 8rem; /* 18px 128px 0 128px */
    justify-content: space-between;
    align-items: center;
}

.text_content {
    max-width: 37.5rem; /* 600px */
    animation-name:moveInLeft;
    animation-duration: 2.5s;
}
@keyframes moveInLeft{
    0%{
        opacity:0;
        transform:translateY(100px);
    }
    80%{
      transform:translateY(-20px);
    }
    100%{
        opacity:1;
        transform:translateX(0);

    }
}
.item5{
    grid-column:1/3;
}
.item6{
    grid-column:1/3;
    
}
/* Form style section */
.form_warper {
    
    padding: 3.1875rem 1.75rem 3.5rem 1.75rem; /* 51px 28px 56px 28px */
    z-index:10;
    text-align: center;
    background: linear-gradient(to bottom, rgba(42, 125, 108, 0.8) 100%, rgba(62, 105, 96, 0.8) 62%);
    border-radius:0.5rem;
}

.form_warper span {
    font-size: 1.75rem; /* 28px */
}

.form_warper form {
    display: grid;
    grid-template-columns: auto auto;
    gap: 0.5rem; 
    margin:28px 0 0 0;

     
}

.text_content h1 {
    display: flex;
    flex-direction: column;
}

.text_content h1 .line1,
.text_content h1 .line2 {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
}
/* style for input button*/
.tooltiptext{
    visibility: hidden;
    width: 150px;
    text-align:center;
    height:23px;
    font-size:13px;
    line-height:20px;
    background-color:var(--error-red);
    border
    color: #fff;
    text-align: center;
    border-radius: 8px;
    padding: 22px 10px;
    position: absolute;
    z-index: 1;
    top:80%;
    transform:translateX(-10%);
    c

    /* Adjust this value to position the tooltip */

}
.tooltiptext:after{
    content: "";
    position: absolute;
    top: -19px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent var(--error-red) transparent;
  
  }

 
.error{
    border-color:var(--error-red) ;
}
.text-field.outlined {
    position: relative; 
    padding:1rem; 
  }
  .text-field.outlined select{
    
    width: 100%;
    padding: 14px 0 14px 16px;
    border: 1px solid #EAEAEA;
    background: linear-gradient(to bottom, rgba(42, 125, 108, 0.8) 100%, rgba(62, 105, 96, 0.8) 62%);
    border-radius: 4px;
    color:#EAEAEA;
    filter:brightness(50%)
    font-size: 1rem;
    transition: border-color 0.3s, padding 0.3s;
  }
  
  .text-field.outlined label {
    position: absolute;
    transform:translate(13%,70%);
    padding: 0 5px;
    font-size: 0.75rem;
    line-height:19.5px;
    filter:brightness(70%);
    color: #EAEAEA;
    transition: top 0.3s, font-size 0.3s, color 0.3s;
  }
  
  .text-field.outlined input {
    width: 100%;
    padding: 14px 0 14px 16px;
    border: 1px solid #EAEAEA;
    background: linear-gradient(to bottom, rgba(42, 125, 108, 0.8) 100%, rgba(62, 105, 96, 0.8) 62%);
    border-radius: 4px;
    color:var(--primary-fade-white);
    filter:brightness(50%)
    font-size: 1rem;
    transition: border-color 0.3s, padding 0.3s;
  }
    .division{
        margin:0 46px 0 31px;
    }
  .text-field.outlined input:focus {
    outline: none;
  } 
  .text-field.outlined input:focus + ::placeholder{
    visibility:none;
  }
  .text-field.outlined.item5 select {
    width: 100%;
    padding: 14px 0 14px 16px;
    border: 1px solid #EAEAEA;
    background: linear-gradient(to bottom, rgba(42, 125, 108, 0.8) 100%, rgba(62, 105, 96, 0.8) 62%);
    border-radius: 4px;
    color: #EAEAEA;
    font-size: 1rem;
    cursor:pointer;
    transition: border-color 0.3s, padding 0.3s;
}

.text-field.outlined.item5 select:focus {
    outline: none;
    border-color: #5BC8AF;
}

.text-field.outlined.item5 option {
    background:var(--dark-moderate-cyan);
    color: white;
    cursor:pointer;
}

.text-field.outlined.item5 option:hover {
    background-color:white;
    color: var(--primary-text-color);
}
  .text-field.outlined:focus-within label {
    color:white;
    transform:translate(13%,-50%);
    filter:brightness(100%);
    background:linear-gradient(to right, rgba(42, 125, 108, 1) 100%, rgba(62, 105, 96, 1) 62%);   
  }

  .submit-button{
    position:relative;
    display:inline-block;
  }
   .submit-button button{
    padding : 1rem 3.8rem 1rem 3.8rem;
    font-size:1.1rem;
    font-weight:700;
    color:#EAEAEA;
    background-color:#5BC8AF;
    border:none;
    cursor:pointer;
    border-radius:0.25rem;
    position:relative;
  }
 .submit-button button:hover{
    top:-0.1rem;
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.08);
 }
 .submit-button button:active{
      background-color:#35BB9C;
      box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.08);
 }
  .submit-button button img{
    position: absolute;
    left: 3rem; /* Adjust as needed */
    top: 50%;
    margin:0 0.5rem 0 0 ;
    transform: translateY(-50%);
    width: 1.5rem; /* Adjust icon size */
    height: 1.5rem; /* Adjust icon size */
    fill: currentColor;
  
  }
  
.submit-button button span{
    position:relative;
    left:1rem;
    font-size:1.1rem;
}
/* Media query for Tablet screens */
@media screen and (max-width: 1090px) {
    header {
        height: fit-content;
        padding:0 0 156px 0;
    }
  
   

    .wrapper {
        flex-direction: column;
        align-items: end;
        justify-content:center;
    }

    .contact-info {
        padding: 0;
        margin: -0.625rem 1rem 0 0; /* -10px 16px 0 0 */
    }

    .form_warper form {
        display: grid;
        z-index:10;
        grid-template-columns: auto auto ;
        gap: 0.5rem; /* 16px */
         
    }
    .form_warper span {
        
        font-size: 1.75rem; /* 28px */
    }

    .line {
        display: none;
    }

    nav {
        padding: 1.25rem 0.25rem 0 1.5rem; /* 20px 4px 0 24px */
        align-items: start;
    }

    ul {
        margin-top: -0.625rem; /* -10px */
        justify-content: end;
    }

    li {
        margin-right: 1rem; /* 16px */
    }

    .content_form {
        flex-direction: column;
        margin:0 20px 0 0; 
        align-items:center;
    }

    .text_content h1 .line1,
    .text_content h1 .line2 {
        text-align: center;
    }

    .text_content p {
        text-align: center;
        filter:brightness(80%);
        font-size: 1.1rem; 
        line-height:28px;
        font-weight:400;
    }
    .division{
        display:none;
    }
    .heading_desk {
        display: none; /* Override hidden attribute for tablets */
    }

    .heading_tab {
        display: flex; /* Hide for tablets */
        width:100%;
        margin:50px 0 0 0;
        justify-content:center;
        align-items:center;
    }

    .heading_mobile {
        display: none; /* Hide for tablets */
        
    }
}

@media screen and (max-width: 660px) { /* 440px */
    .wrapper {
        display: none;
    }
    header {
        height: fit-content;
        padding:0 0 156px 0;
    }
    .heading_desk {
        display: none; 
    }

    .heading_tab {
        display: none; 
    }
    .division{
        display:none;
    }

    .heading_mobile {
        display: flex; 
        width:100%;
        justify-content:center;
        align-items:center;
    }
    .show_hamburg {
        display: block;
        cursor: pointer;
        margin-right:-90px;
    } 

    nav{
        padding: 1rem;
        display: flex;
        justify-content:space-between;
        align-items: center;
        
    }

    .logo_large {
        display: none;
    }

    .logo_small {
        display: block;
    }  

    .form_warper form {
    
      display:contents;
       
         
    }
    

    .content_form {
        margin: 0;
        padding: 1.5rem 1rem 0 1rem;
        align-items:normal;
    }

    .form_warper span {
        font-size: 1.5rem; /* 24px */
    }
}
</style>
<header role="banner">

<div class="small-menu">
<div id="close" class="close-icon">x</div>
<div class="item">HOME</div>
<div class="item">ABOUT</div>
<div class="item">CONTACT</div>
</div>
    <nav role="navigation">
        <!-- Logo -->
        <a href="#" aria-label="Home">
            <img src="./assets/logo.svg" alt="Company Logo">
        </a>

        <!-- Menu -->
        <div id="open" class="show_hamburg" aria-label="Toggle Menu">
            <div class="hamburg-line"></div>
            <div class="hamburg-line"></div>
            <div class="hamburg-line"></div>
        </div>
       <div>
        <!-- Navigation Links -->
        <div class="wrapper">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
            <div class="contact-info">
                <span class="division" >|</span>
                <span>CALL NOW FOR CONSULT <span class="phone-col">123.456.7890</span></span>
            </div>
        </div>
    </nav>

    <!-- Content and Form -->
    <div class="content_form">
        <div class="text_content">
            <span> 
            <img class="heading_desk" src="./assets/heading.svg" alt="heading" >
            <div class="heading_tab">
            <img src="./assets/headingTab.svg" alt="heading" >
            
            </div>
            <div class="heading_mobile" >
            <img src="./assets/headingMobile.svg" alt="heading" >
            
            </div>
            </span>
            <p>
                Showing greater respect to older adults can be done in several ways: acknowledging and putting to use the talents and skills of older adults; creating intergenerational initiatives; and allowing older adults to stay active and independent for as long as possible.
            </p>
        </div>

        <!-- Form -->
        <div class="form_warper">
            <span class="form-contact">Contact us</span>
            <form>
            <div class="text-field outlined item1">
               <label for="FirstName">First Name</label>
               <input type="name" id="FirstName" name="FirstName" >
               <div class="tooltiptext" id="firstNameTooltip">This field can’t be empty. Please fill it in.</div> 
               </div>
          <div class="text-field outlined item2">
              <label for="LastName">Last Name</label>
              <input type="name" id="LastName" name="LastName" >
              <div class="tooltiptext" id="lastNameTooltip">This field can’t be empty. Please fill it in.</div> 
              </div>
                <div class="text-field outlined item3">
                    <label for="email">Business Email</label>
                    <input type="email" id="email" name="email"  >
                    <div class="tooltiptext" id="emailTooltip">This field can’t be empty. Please fill it in.</div> 

                </div>
                <div class="text-field outlined item4">
                    <label for="company">Company</label>
                    <input type="text" id="company" name="company"  >
                    <div class="tooltiptext" id="companyTooltip">This field can’t be empty. Please fill it in.</div> 
               
                    </div>
                <div class="text-field outlined item5">
                    <select id="country" name="country">
                        <option value="">Country</option>
                    </select>
                </div>
                
             
                 <div class="submit-button item6">
                 <button type="submit">
                 <img src="./assets/arrow.svg" alt="arrow" width="24" height="24">
                 <span>Submit</span>
                 
                 </button>
                 </div>
                </form>
        </div>
    </div>

    
</header>

`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
        this.submit=shadowRoot.querySelector('button[type="submit"]');
        const countyDropdown=shadowRoot.getElementById('country');
        this.handleHam=shadowRoot.getElementById('open');
        this.populateCountryDropdown(countyDropdown);
        this.form = shadowRoot.querySelector('form');
        this.handleClose=shadowRoot.getElementById('close');
        this.smallMenu = shadowRoot.querySelector('.small-menu');
        this.addEventListener()
        
    }
 
    populateCountryDropdown(countryList) {
        const countries = [
            "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", 
            "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", 
            "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", 
            "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", 
            "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", 
            "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", 
            "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
            "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", 
            "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", 
            "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", 
        ];
        
    

        countries.forEach(country => {
            const option = document.createElement('option');
            option.textContent = country;
            option.value = country;
            countryList.appendChild(option);
        }); 
    }
    addEventListener(){

        
        this.handleHam.addEventListener("click",()=>{
            this.smallMenu.classList.add('show'); 

        })
        this.handleClose.addEventListener("click",(e)=>{
            
            
            this.smallMenu.classList.remove('show'); 
        })
        this.submit.addEventListener("click",(e)=>{
            e.preventDefault()
            const inputs = this.form.querySelectorAll('input'); 
            let hasEmptyField = false;
            console.log(inputs)  
            inputs.forEach(input => {
                            const tooltip = input.nextElementSibling;
                            const label = input.previousElementSibling;
                if (!input.value.trim() && input.focus) { 
                    hasEmptyField = true;
                    
                    input.classList.add('error');
                    input.style.borderColor="#FF7777";
                    label.style.transform = 'translate(13%, -50%)';
                    label.style.brightness="filter:brightness(100%)";
                    label.style.background="linear-gradient(to right, rgba(42, 125, 108, 1) 100%, rgba(62, 105, 96, 1) 100%)"; 
                    label.style.color="#FF7777"; 
                    tooltip.style.visibility = "visible";                     
                } else {
                    input.classList.remove('error'); 
                    input.style.borderColor="white";
                    label.style.brightness="filter:brightness(100%)";
                    label.style.transform = 'translate(13%, 70%)';
                    tooltip.style.visibility = "hidden";                                    
                }
            });
            if (hasEmptyField) {
                // Show error message or perform any action
                console.log('Some fields are empty!');
            } else {
                // Proceed with form submission or perform any action
                console.log('All fields have values. Proceeding...');
                this.form.setAttribute('target', '_blank');

                this.form.submit(); // Submit the form

                window.location.href = 'thankyou.html';
            }


        })


        const inputs = this.form.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                const tooltip = input.nextElementSibling;
                if (input.value.trim()) {
                    input.classList.remove('error'); 
                    input.style.borderColor="white";
                    tooltip.style.visibility = "hidden"; // Hide tooltip
                }
            });
        });

    inputs.forEach(input => {
        const label = input.previousElementSibling;
        
        input.addEventListener('input', () => {
            if (input.value.trim()) {
                label.style.transform = 'translate(13%, -50%)'; // Keep label position if input has value
                 label.style.color='white';
                 label.style.brightness="filter:brightness(100%)";
                 label.style.backgroundImage="linear-gradient(to right, rgba(42, 125, 108, 1) 100%, rgba(62, 105, 96, 1) 62%)";


            } else {
                label.style.transform = 'translate(13%, 70%)'; // Move label to original position if input is empty
            
            }
        });

        input.addEventListener('blur', () => {
            if (!input.value.trim()) {
                label.style.transform = 'translate(13%, 70%)'; // Move label to original position if input is empty on blur
                label.style.brightness="filter:brightness(100%)";
            }
        });

        input.addEventListener('focus', () => {
            if (!input.value.trim()) {
                label.style.transform = 'translate(13%, -50%)'; // Move label to original position if input is empty on blur

            }
        });
    });
    }

    

    
}

customElements.define('header-component', Header);
