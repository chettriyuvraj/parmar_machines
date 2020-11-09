// object for header - entire background + navbar

const header = 
{
    properties:
    {
        background_count:3, //background images in folder   
        current_background:0,
        current_text:0,
        nav_visible:false, //valid only for mobile site
        header_text: ["The most reliable machinery for drums and barrels pan-India.<br>You demand - we supply.", "A wide-ranging experience of over thirty years in the industry.<br>Quite simply the best. ", "Head and shoulders above all our peers in the machinery segment.<br>Unmatched quality - best support ."]
    },



    init()
    {

        setInterval(this._toggle_header_background, 8000);

        // // setting up burger icon
        // var nav_icon = document.querySelector(".nav_icon");
        // var nav_menu = document.querySelector('.header').getElementsByTagName('ul')[0];
        // nav_icon.addEventListener("click", dropdown_toggle);

        // // Adding scroll eventlisteners to buttons 

        // var about_link = document.querySelector("#about_link"); //When user clicks on 'about'
        // var contact_link = document.querySelector("#contact_link");//When user clicks on 'contact'

        // about_link.addEventListener("click", scroll_to_about);
        // contact_link.addEventListener("click", scroll_to_contact);
    },

    _toggle_header_background()
    {
        var header_elem = document.querySelector(".header");
        var header_text_container = document.querySelector(".header_text");

        console.log(header.properties.background_count);
        if (header.properties.current_background == header.properties.background_count-1)
            header.properties.current_background=0;
        else
            header.properties.current_background+=1;

        if (header.properties.current_text == header.properties.header_text.length-1)
            header.properties.current_text = 0;
        else
            header.properties.current_text+=1;

        header_elem.style.backgroundImage =`url('./resources/images/background${header.properties.current_background}.jpg')`;

    header_text_container.style.opacity = "0";
    setTimeout(()=>{
        header_text_container.innerHTML = header.properties.header_text[header.properties.current_text].toUpperCase();
        header_text_container.style.opacity="1";
    },2000);

    // header_text_container.innerHTML = header.properties.header_text[header.properties.current_text];

    }

}

 //initializing the object to kickstart toggle background function
if (document.title !='Products Listing | Parmar Machines')
if(window.innerWidth>900)
header.init();
else
     document.body.backgroundImage = './resources/images/background_products.png'

//nav burger icon 
var nav_icon = document.querySelector(".nav_icon");
var nav_menu = document.querySelector('.header').getElementsByTagName('ul')[0];
nav_icon.addEventListener("click",dropdown_toggle);
   
function dropdown_toggle()
{
    if (!header.properties.nav_visible)
        nav_menu.style.top = "5%";
    else 
        nav_menu.style.top = "-100%";
    
    header.properties.nav_visible = !header.properties.nav_visible;

}



// success stories div element 
  

const success_stories =
{
    review_text: [' "Their commitment is unparalleled. Definitely the best in their field - you will not be disappointed." - Yuvraj Chettri, Chettri Enterprises.', '"Prashant and his team have never given us any reason to complain. Simply the best!" - Rohan Arora,LeanTech Inc.', '"Our partnership started 5 years ago and we have not looked back ever since. High quality products."- Tanay Kadel, Grample Tools.', '"If you are wondering whether to work with them or not - just take the leap! Trust me, you will not regret it." - Shivam Yadav, ValerieTech.', '"Absolutely the best in the business. Prashant, Yash and Sahil defintely have me as their customer for the forseeable future." - Amrit Mishra, Amlearn', '" Just one word - flawless. They are the best listeners and deliver perfection once they know what it is that you need." -Shlok Naik, Naik Tech Ltd.'],

    current_text_count:0, 

    init()
    {

        setInterval(this._toggle_reviews,9000);
        
    },

    _toggle_reviews()
    {

        var review_box = document.querySelector(".success_stories").getElementsByTagName("p");
        var review_1 = review_box[0];
        var review_2 = review_box[1];
        var review_3 = review_box[2];

        if (success_stories.current_text_count+2 == success_stories.review_text.length-1)
            success_stories.current_text_count = 0 
        else
            success_stories.current_text_count += 3



        review_1.style.opacity = "0";
        
        
        setTimeout(()=>{
            review_1.innerHTML = success_stories.review_text[success_stories.current_text_count]
            review_1.style.opacity = "1";
        },5000);
        review_2.style.opacity = "0";

        
        setTimeout(() => {
            review_2.innerHTML = success_stories.review_text[success_stories.current_text_count+1];
            review_2.style.opacity = "1";
        }, 6000);

        review_3.style.opacity = "0";
        
        setTimeout(() => {
            
            review_3.innerHTML = success_stories.review_text[success_stories.current_text_count + 2];
            review_3.style.opacity = "1";
        }, 6500)
        
        
        
    }

}

//initializing success stories object to toggle review change
if (document.title !='Products Listing | Parmar Machines')
success_stories.init();



// // Adding scroll eventlisteners to buttons 

var about_link = document.querySelector("#about_link"); //When user clicks on 'about'
var contact_link = document.querySelector("#contact_link");//When user clicks on 'contact'
var about_link_2 = document.querySelector("#about_link_2");
var contact_link_2 = document.querySelector("#contact_link_2");

if(about_link)
about_link.addEventListener("click",scroll_to_about);
if(contact_link)
contact_link.addEventListener("click", scroll_to_contact);
if (about_link_2)
about_link_2.addEventListener("click",scroll_to_about);
if (contact_link_2)
contact_link_2.addEventListener("click",scroll_to_contact);

// header text buttons 
var why_us_button = document.querySelector(".why_us_button");
var check_catalog_button = document.querySelector(".check_catalog_button")

if (why_us_button)
    why_us_button.addEventListener("click",scroll_to_about);

if (check_catalog_button)
    check_catalog_button.addEventListener("click",()=>{
        window.location = "./products.html";
    });



function scroll_to_about(e)
{

    
    if (document.title !="Parmar Machines and Technologies | Drums and Barrels")
    {
        e.preventDefault();
        window.location = "./index.html#offer_box_header";
    }

    else
    {
    e.preventDefault();
    let offer_section = document.querySelector(".offer");
    offer_section.scrollIntoView({ behavior: 'smooth' });
    }
}

function scroll_to_contact(e) {

    console.log(document.title)

    if (document.title =="Products Listing | Parmar Machines")
    {
        e.preventDefault();
        window.location = "./index.html#contact_nav";
        console.log("yowtf");
    }
    else
    {
    e.preventDefault();
    let contact_section = document.querySelector(".contact");
    contact_section.scrollIntoView({ behavior: 'smooth' });
    }
}




// Adding event listeners 

// window.addEventListener("DOMContentLoaded",()=>{
//     //initializing the object to kickstart toggle background function
//     if (document.title != 'Products Listing | Parmar Machines')
//         header.init();
//     else
//         document.body.backgroundImage = './resources/images/background_products.png';

//     //initializing success stories object to toggle review change
//     if (document.title != 'Products Listing | Parmar Machines')
//         success_stories.init();




// })