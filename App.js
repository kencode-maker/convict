import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import landing_image from './bootstrap-themes.png';
import './App.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/bootstrap/js/bootstrap.bundle.min.js';

nav_ctrl ();

var nav_class ,nav_container , nav_brand ,nav_toggler_button ,nav_collapse ,nav_ul ,nav_li , nav_li_a ,nav_li_drop, nav_li_drop_a,nav_ul_drop,nav_ul_drop_a, nav_form ,nav_form_input;



function nav_ctrl (){
	nav_class="navbar navbar-expand-sm navbar-dark bg-primary ";
	nav_container="container-fluid ";
	nav_brand="navbar-brand";
	nav_toggler_button="navbar-toggler ";
	nav_collapse ="navbar-toggler-icon ";
	nav_ul ="navbar-nav me-auto mb-2 mb-sm-0";
	nav_li ="nav-item ";
	nav_li_a="nav-link text-white";
	nav_li_drop ="nav-item ";
    nav_li_drop_a="nav-link dropdown-toggle text-white";
	nav_ul_drop="dropdown-menu";
	nav_ul_drop_a="dropdown-item text-white  ";
	nav_form="d-none" ; 
	nav_form_input="form-control";
	
}



 var header_1=(<nav class={nav_class}>
    <div class={nav_container}>
      <a class={nav_brand} href="#">Company Name</a>
      <button class={nav_toggler_button} type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon  "></span>
      </button>
 <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0" >
        <li class="nav-item  "><a class="nav-link text-white  " aria-current="page" href="#">Home</a></li>
        <li class="nav-item " > <a class="nav-link text-white " href="#">Services</a> </li>
	  <li class="nav-item"><a class="nav-link text-white  " href="#">About us</a></li>
	  <li class="nav-item dropdown"><a class="nav-link dropdown-toggle text-white " href="#" data-bs-toggle="dropdown" aria-expanded="false">Contact us</a></li>
          <ul class="dropdown-menu">
              <li><a class="dropdown-item text-white  " href="#">Message</a></li>
              <li><a class="dropdown-item text-white  " href="#">Email</a></li>
              <li><a class="dropdown-item text-white  " href="#">Details</a></li>
            </ul> </ul>
        <form role="search" class="d-none">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
        </form> </div></div></nav>);

var landing_1=(
  <div class={containerClass}>
    <div class={rowClass}>
      <div class={imageDivClass}>
        <img src={landing_image} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div class={textDivClass}>
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class={buttonDivClass}>
          <button type="button" class={primaryButtonClass}>Primary</button>
          <button type="button" class={defaultButtonClass}>Default</button>
        </div>
      </div>
    </div>
  </div>
);

var services_1=(<div class="container  col-xxl-8  px-4 py-2" id="hanging-icons">
    <h2 class="pb-2 border-bottom">Hanging icons</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col-lg-4  mb-4 pb-2  d-flex align-items-start  border">
        <div class=" bg-body-primary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
         <i class="bi bi-cpu-fill" ></i>
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">Primary button</a>
        </div>
      </div>
      <div class="col-lg-4  mb-4 pb-2  d-flex align-items-start border ">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <i class="bi bi-cpu-fill" ></i>
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary"> Primary button</a>
        </div>
      </div>
      <div class="col-lg-4  mb-4 pb-2 d-flex align-items-start  border">
        <div> <i class="bi bi-cpu-fill" ></i></div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary"> Primary button </a>
        </div>
      </div>
    </div>
  </div>);




var grid_1=(<div class="container col-xxl-8 px-4 py-2  " ><div class="row mb-3 justify-content-center align-items-center">
      <div class="col-lg-4 mb-4 p-2 border"><article >
                                    <img src={landing_image} alt="Image" class="img-fluid" />
                                    <div >
                                        <header><h4 >Sed cursus dictum nunc quis molestie</h4></header>
                                        <p>Pellentesque quis dui sit amet purus scelerisque eleifend sed ut eros. Morbi viverra blandit massa in varius. Sed nec ex eu ex tincidunt iaculis. Curabitur eget turpis gravida.</p>
                                        <a href="#" class=" btn btn-primary">View Detail</a>
                                    </div>                                
                                </article></div>
								
      <div class="col-lg-4 mb-4 p-2 border"><article >
                                    <img src={landing_image} alt="Image" class="img-fluid" />
                                    <div >
                                        <header><h4 >Sed cursus dictum nunc quis molestie</h4></header>
                                        <p>Pellentesque quis dui sit amet purus scelerisque eleifend sed ut eros. Morbi viverra blandit massa in varius. Sed nec ex eu ex tincidunt iaculis. Curabitur eget turpis gravida.</p>
                                        <a href="#" class=" btn btn-primary">View Detail</a>
                                    </div>                                
                                </article></div>
								
      <div class="col-lg-4 mb-4 p-2 border"><article >
                                    <img src={landing_image} alt="Image" class="img-fluid" />
                                    <div >
                                        <header><h4 class=" tm-article-title-2">Sed cursus dictum nunc quis molestie</h4></header>
                                        <p>Pellentesque quis dui sit amet purus scelerisque eleifend sed ut eros. Morbi viverra blandit massa in varius. Sed nec ex eu ex tincidunt iaculis. Curabitur eget turpis gravida.</p>
                                        <a href="#" class=" btn btn-primary">View Detail</a>
                                    </div>                                
                                </article></div>
    </div> </div>);


					
								
								var grid_2=(<div class="container col-xxl-8 px-4 py-2p px-4 py-5">  <article class="margin-b-20 "><div class="row mb-3 ">
                                        <img src={landing_image} alt="Image" class="col-lg-8"/>
                                        <div class="col-lg-4">
                                            <h3 >Suspendisse vel est libero sem phasellus ac laoreet</h3>
                                            <p>Vivamus eget tellus ornare, sollicitudin quam id, dictum nulla. Phasellus finibus rhoncus justo, tempus eleifend neque dictum ac. Aenean metus leo, consectetur non. 
                                            <br></br>
											Etiam aliquam arcu at mauris consectetur scelerisque. Integer elementum justo in orci facilisis ultricies. Pellentesque at velit ante. Duis scelerisque metus vel felis porttitor gravida.</p>
                                        </div> </div>                               
                                    </article></div>);
								



var article_1=(<div class="container col-xxl-8  px-4 py-5">  <article class="margin-b-20 "><div class="row mb-3 ">
                                        
                                        <div class="col-lg-8">
                                            <h3>Suspendisse vel est libero sem phasellus ac laoreet</h3>
                                            <p>Vivamus eget tellus ornare, sollicitudin quam id, dictum nulla. Phasellus finibus rhoncus justo, tempus eleifend neque dictum ac. Aenean metus leo, consectetur non. 
                                            <br></br>
											Etiam aliquam arcu at mauris consectetur scelerisque. Integer elementum justo in orci facilisis ultricies. Pellentesque at velit ante. Duis scelerisque metus vel felis porttitor gravida.</p>
                                        </div><img src={landing_image} alt="Image" class="col-lg-4"/> </div>                               
                                    </article></div>);

var contact_1=( <div class="container col-xxl-8  mb-5 "><h5>Message Us</h5><div class="col-lg-8  mt-3  bg-dark   ">
                             <div>
                                <form action="index.html" method="post" class="contact-form "><br></br>
                                    <div class="form-group">
                                        <input type="text" id="contact_name" name="contact_name" class="form-control" placeholder="Name"  required/>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" id="contact_email" name="contact_email" class="form-control" placeholder="Email"  required/>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" id="contact_subject" name="contact_subject" class="form-control" placeholder="Subject"  required/>
                                    </div>
                                    <div class="form-group">
                                        <textarea id="contact_message" name="contact_message" class="form-control" rows="9" placeholder="Message" required></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary tm-btn-primary m-2">Send Message Now</button>
                                </form></div>
                        </div>                            
                        </div>);

var footer_1=( <div class="bg-primary m-0 text-white"><div class="container ">   <footer class="py-5 "> <div class="row">
    <div class="col-lg-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
           
            <input id="newsletter1" type="text" class="form-control " placeholder="Email address"/>
            <button class="btn btn-primary mx-1 border" type="button">Subscribe</button>
          </div>
        </form>
      </div>  

      <div class="col-lg-2  mb-3 ">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white ">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
        </ul>
      </div>

      <div class="col-lg-2  mb-3  ">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
        </ul>
      </div>

      <div class="col-lg-2  mb-3 ">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
        </ul>
      </div>

   <p>&copy; 2023 Company, Inc. All rights reserved.</p>
    </div></footer></div></div>);

function site_1() {
  return (
    <React.Fragment>
      {header_1}
      {landing_1}
      {services_1}
     {grid_1}
	  {grid_2}
	  {article_1}
	    {contact_1}
      {footer_1}
    </React.Fragment>
  );
}




export default site_1;


