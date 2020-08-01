var product_display = 
{

    elements:{

        products_title: null,
        products_image: null,
        products_main: null,
        drum_list:null,
        barrel_list:null,
        sidebar:[],
        products_text:null,
        products_display:null,



    },


    init()
    {

        // creating elements 
        this.elements.products_main = document.createElement("div");
        this.elements.drum_list = document.createElement("div");
        this.elements.barrel_list = document.createElement("div");
        this.elements.products_display = document.createElement("div");
        this.elements.products_text = document.createElement("p");
        this.elements.products_image = document.createElement("img");
        this.elements.products_title = document.createElement("h2");

        //adding classes 
        this.elements.products_main.classList.add("products_main");
        this.elements.drum_list.classList.add("products_list",'drum_list');
        this.elements.barrel_list.classList.add("products_list","barrel_list");
        this.elements.products_display.classList.add("products_display");
        this.elements.products_image.classList.add("products_image");
        this.elements.products_title.classList.add("products_title");
        


        //adding buttons 

        this.elements.drum_list.appendChild(this._create_sidebar('drum'));
        this.elements.barrel_list.appendChild(this._create_sidebar('barrel'));

        //appending requisite children 
        this.elements.products_display.appendChild(this.elements.products_title);
        this.elements.products_display.appendChild(this.elements.products_image);
        this.elements.products_display.appendChild(this.elements.products_text);
        this.elements.products_main.appendChild(this.elements.drum_list);
        this.elements.products_main.appendChild(this.elements.barrel_list);
        this.elements.products_main.appendChild(this.elements.products_display);


        //appending to document 
        var products_button = document.querySelector(".products_button");
        // document.body.appendChild(this.elements.products_main);
        products_button.parentNode.insertBefore(this.elements.products_main,products_button.nextSibling);


        




        //Fading in the buttons 
        products_button = document.querySelector(".products_button");
        products_button.style.display = "flex";
        setTimeout(()=>{

            
            products_button.style.opacity = "1";

        },2000) 

        drum_button = document.getElementsByTagName("button")[2];
        barrel_button = document.getElementsByTagName("button")[3];

        // Toggle the drum_button
        drum_button.addEventListener("click",this._toggle_drum_button);
        barrel_button.addEventListener("click",this._toggle_barrel_button);
        


    },

    _toggle_barrel_button()
    {

        //Making the choice buttons fade out then move to the top - the drum list sidebar too
        products_button = document.querySelector(".products_button");
        products_button.style.opacity = "0";
        var drum_list = document.querySelector(".drum_list");
        drum_list.style.opacity="0";

        // changing footer bottom 
        var footer = document.querySelector("footer");
        footer.style.bottom = "-80vh";


        setTimeout(() => {
            products_button.style.top = "-5vh"
            products_button.style.opacity = "1";
            // products_button.style.display = "none";
            drum_list.style.display = 'none';
        }, 2000);

        //making the products div appear along with the sidebar -barrel list and image 
        var products_image = document.querySelectorAll("img")[1];
        var products_main = document.querySelector(".products_main");
        var barrel_list = document.querySelector(".barrel_list");
        var products_display = document.querySelector(".products_display");
        var products_text = document.querySelectorAll("p")[1];
        var products_title = document.querySelector(".products_title");


        products_main.style.display = 'flex';
        barrel_list.style.display = 'flex';
        products_display.style.flex = 'flex';

        products_title.innerHTML = "Spot Welding Machine"
        product_display.set_txt('barrel', 'spot', products_text);
        products_image.src = './resources/images/barrel/spot.jpeg';



        setTimeout(() => {
            products_main.style.opacity = 1;
            barrel_list.style.opacity = 1;
            products_display.style.opacity = 1;
        }, 2000)


    //content in the products div 






    },




    _toggle_drum_button()
    {


        //Making the choice buttons disappear and also barrel list sidebar
    products_button = document.querySelector(".products_button");
    products_button.style.opacity = "0";
    var barrel_list = document.querySelector(".barrel_list");
    barrel_list.style.opacity = "0";

    // changing footer bottom 
    var footer = document.querySelector("footer");
    footer.style.bottom = "-50vh";


     setTimeout(() => {
            products_button.style.top = "-5vh"
            products_button.style.opacity = "1";
            // products_button.style.display = "none";
            barrel_list.style.display = "none";
        }, 2000);
    

    //making the products div appear along with the sidebar -drum list and image 
    var products_image = document.querySelectorAll("img")[1];
    var products_main = document.querySelector(".products_main");
    var drum_list = document.querySelector(".drum_list");
    var products_display = document.querySelector(".products_display");
    var products_text = document.querySelectorAll("p")[1];
    var products_title = document.querySelector(".products_title");
   
    
        
    


    products_main.style.display = 'flex';
    drum_list.style.display = 'flex';
    products_display.style.flex = 'flex';
    
    products_title.innerHTML = "Body Bending"
    product_display.set_txt('drum','body_bending',products_text);
    products_image.src = './resources/images/drum/body_bending.jpg';
    


    setTimeout(()=>{
        products_main.style.opacity = 1;
        drum_list.style.opacity = 1;
        products_display.style.opacity = 1;
    },2000)


    //content in the products div 




    },

    set_txt(machine,file,elem)
    {
        var text;
        fetch(`./resources/text/${machine}/${file}.txt`)
        .then(function(response){
            return response.text();
            

        })
        .then(function(data){
            console.log(data);
            elem.innerHTML = data;
        });

        
    },

    _create_sidebar(element_name) //create sidebar - each button
    {

        var fragment = document.createDocumentFragment();

        var drum_id = ["body_bending", "body_expander", "dies", "double", 'drum', 'flanging', 'multiple', 'paint', 'pre', 'seam', 'shearing', 'spot'];

        var drum_names = ['Body Bending', 'Body Expander', 'Dies', 'Double Ended Seamer', 'Drum Seaming Machine', 'Flanging Cum Stackable', 'Multiple Corrugation', 'Paint Booth', 'Pre Edge Curling', 'Seam Welding Machine', 'Shearing Machine', 'Spot Welding Machine'];

        var barrel_names = ["Spot Welding Machine","Seam Welding Machine","Press Type Flanging","Double Bead Expander","Barrel Seaming Machine","Decoiling Machine","Guillotine Shearing","Sheet Edge Grinder","Multiple Corrugation","Pre-Curling Machine","Paint Booth","Degreasing Unit","Air Compressor","Oven","Dies","Presses"];

        var barrel_id = ['spot','seam','press','double','barrel','decoiling','guillotine','sheet','multiple','pre','paint','degreasing','air','oven','dies','presses'];

        var product_names = drum_names;

        if(element_name=='barrel')
            product_names = barrel_names;

        product_names.forEach( function(value,i){

            var keyElement = document.createElement('button');

            keyElement.innerHTML = value;
            keyElement.addEventListener("click",()=>{

                //making the products div appear along with the sidebar -drum list and image 
                var products_image = document.querySelectorAll("img")[1];
                var products_main = document.querySelector(".products_main");
                var list;
                var file;
                var extension;
                if (element_name =='barrel')
                    {list = document.querySelector(".barrel_list");
                    file = barrel_id[i];
                    extension = 'jpeg';
                    } 
                else
                {
                    list = document.querySelector(".drum_list");
                    file = drum_id[i];
                    extension = 'jpg';
                }
                var products_display = document.querySelector(".products_display");
                var products_text = document.querySelectorAll("p")[1];
                var products_title = document.querySelector(".products_title");


                



                products_main.style.display = 'flex';
                list.style.display = 'flex';
                products_display.style.flex = 'flex';
                products_display.style.opacity = 0; // blurring it out

                setTimeout(() => {
                    product_display.set_txt(`${element_name}`, `${file}`, products_text);
                    products_title.innerHTML = value;
                    products_image.src = `./resources/images/${element_name}/${file}.${extension}`;
                    products_image.alt = "COMING SOON!";
                }, 1000)
                

                


                setTimeout(() => {
                    // products_main.style.opacity = 1;
                    // list.style.opacity = 1;
                    products_display.style.opacity = 1;
                }, 3000)


























            
            });

            fragment.appendChild(keyElement);




        });

        return fragment;



    }





}

window.addEventListener("DOMContentLoaded",()=>{

    product_display.init()

});