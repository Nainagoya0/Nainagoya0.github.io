// method to control the tab layout
function ChangeTabs(){
    let tab_a = {
        tab_name: document.getElementById("name-one"),
        tab_indicator: document.getElementById("indicator-one"),
    };

    let tab_b = {
        tab_name: document.getElementById("name-two"),
        tab_indicator: document.getElementById("indicator-two"),
    };

    let tab_c = {
        tab_name: document.getElementById("name-three"),
        tab_indicator: document.getElementById("indicator-three"),
    };

    let tab_d = {
        tab_name: document.getElementById("name-four"),
        tab_indicator: document.getElementById("indicator-four"),
    };

    tab_a.tab_indicator.style.display = "block";
    tab_a.tab_name.style.fontWeight = "bolder";
    tab_a.tab_name.style.color = "black";

    tab_b.tab_indicator.style.display = 
    tab_c.tab_indicator.style.display = tab_d.tab_indicator.style.display = "none";

    let large_cars = [
        "../images/large_car_one.jpg",
        "../images/large_car_two.jpg",
        "../images/large_car_three.png",
        "../images/large_car_4.jpg",
        "../images/large_car_5.jpg",
        "../images/large_car_6.avif",
        "../images/large_car_one.jpg",
        "../images/large_car_one.jpg",
        
    ];

    let small_cars = [
        "../images/small_car_one.webp",
        "../images/small_car_two.avif",
        "../images/small_car_three.jpg",
        "../images/small_car_4.jpg",
        "../images/small_car_5.webp",
        "../images/small_car_6.jpg",
        "../images/small_car_7.webp",
        "../images/small_car_8.webp",
    ];

    let popular = [
        "../images/car_1.jpg",
        "../images/car_2.jpg",
        "../images/car_3.jpg",
        "../images/car_4.jpg",
        "../images/car_5.jpeg",
        "../images/car_6.webp",
        "../images/car_7.webp",
        "../images/car_8.avif",
    ]

    document.querySelectorAll('.tab,.ghjghjgh').forEach(function (tab,index){
        tab.addEventListener('click', function(){
            if(index == 0){
                tab_a.tab_name.style.color = "black";
                tab_a.tab_indicator.style.display = "block";
                tab_a.tab_name.style.fontWeight = "bolder";

                tab_b.tab_name.style.color = "gray";
                tab_b.tab_indicator.style.display = "none";
                tab_b.tab_name.style.fontWeight = "normal";

                tab_c.tab_name.style.color = "gray";
                tab_c.tab_indicator.style.display = "none";
                tab_c.tab_name.style.fontWeight = "normal";

                tab_d.tab_name.style.color = "gray";
                tab_d.tab_indicator.style.display = "none";
                tab_d.tab_name.style.fontWeight = "normal";

                document.querySelectorAll(".car-class").forEach(function(image, index){
                    image.src = popular[index];
                    console.log(popular[index]);
                });
            }
            else if(index == 1){
                tab_b.tab_name.style.color = "black";
                tab_b.tab_indicator.style.display = "block";
                tab_b.tab_name.style.fontWeight = "bolder";

                tab_a.tab_name.style.color = "gray";
                tab_a.tab_indicator.style.display = "none";
                tab_a.tab_name.style.fontWeight = "normal";

                tab_c.tab_name.style.color = "gray";
                tab_c.tab_indicator.style.display = "none";
                tab_c.tab_name.style.fontWeight = "normal";

                tab_d.tab_name.style.color = "gray";
                tab_d.tab_indicator.style.display = "none";
                tab_d.tab_name.style.fontWeight = "normal";

                document.querySelectorAll(".car-class").forEach(function(image, index){
                    image.src = large_cars[index];
                    console.log(large_cars[index]);
                });
            }else if(index == 2){
                tab_c.tab_name.style.color = "black";
                tab_c.tab_indicator.style.display = "block";
                tab_c.tab_name.style.fontWeight = "bolder";

                tab_b.tab_name.style.color = "gray";
                tab_b.tab_indicator.style.display = "none";
                tab_b.tab_name.style.fontWeight = "normal";

                tab_a.tab_name.style.color = "gray";
                tab_a.tab_indicator.style.display = "none";
                tab_a.tab_name.style.fontWeight = "normal";

                tab_d.tab_name.style.color = "gray";
                tab_d.tab_indicator.style.display = "none";
                tab_d.tab_name.style.fontWeight = "normal";

                document.querySelectorAll(".car-class").forEach(function(image, index){
                    image.src = small_cars[index];
                    console.log(small_cars[index]);
                });
            }else if(index == 3){
                tab_d.tab_name.style.color = "black";
                tab_d.tab_indicator.style.display = "block";
                tab_d.tab_name.style.fontWeight = "bolder";

                tab_b.tab_name.style.color = "gray";
                tab_b.tab_indicator.style.display = "none";
                tab_b.tab_name.style.fontWeight = "normal";

                tab_c.tab_name.style.color = "gray";
                tab_c.tab_indicator.style.display = "none";
                tab_c.tab_name.style.fontWeight = "normal";

                tab_a.tab_name.style.color = "gray";
                tab_a.tab_indicator.style.display = "none";
                tab_a.tab_name.style.fontWeight = "normal";

                document.querySelectorAll(".car-class").forEach(function(image, index){
                    image.src = popular[index];
                });
            }
        });
    });


}

// preventing user from submitting empty data
function FormValidation(){
    document.getElementsByClassName("submit")[0].addEventListener("click", function(){
        let email = document.getElementById("email");
        let phonenumber = document.getElementById("phonenumber");
        let message = document.getElementById("textarea");

        if((email.value == "") || (email.value == null)){
            email.style.border = "1px solid red";
            alert("Fill in email");
        }else if((phonenumber.value == "") || (phonenumber.value == null)){
            phonenumber.style.border = "1px solid red";
            alert("Fill in phone");
        }else if((message.value == "") || (message.value == null)){
            message.style.border = "1px solid red";
            alert("Fill in message")
        }else{
            alert("Message submitted successfully");
        }
    });
}

// function to slide testimonies
function SlideTestimonies(){
    let back = document.getElementById("back-arrow");

    let forth = document.getElementById("forth-arrow");

    let reviews = document.querySelectorAll('.review');

    let dots = document.querySelectorAll('.dot');

    let index_num_to_display = 0;

    let width = screen.width;

    if(width >= 1000){
        index_num_to_display = 3;
    }
    else if(width >= 600){
        index_num_to_display = 2;
    }
    else if(width >= 480){
        index_num_to_display = 1;
    }

    reviews.forEach(function(review, index){
        if(index <= index_num_to_display){
            review.style.display = "block";
            dots[index].style.borderColor = "green";
        }else{
            review.style.display = "none";
        }
    });

    function ArrowVisibility(){
        if(reviews[0].style.display == "block"){
            back.style.visibility = "hidden";
        }else{
            back.style.visibility = "visible";
        }
    
        if(reviews[reviews.length - 1].style.display == "block"){
            forth.style.visibility = "hidden";
        }else{
            forth.style.visibility = "visible";
        }
    }

    ArrowVisibility();

    function GetVisibleReviews(){

        let visible_reviews = [];

        reviews.forEach(function(review, index) {
            if(review.style.display == "block"){
                visible_reviews.push(index);
            }
        });

        return visible_reviews;
    }

    // event listener to slide images back
    back.addEventListener("click", function(){
        let visible_reviews = GetVisibleReviews();

        // hide the last element in the array
        reviews[visible_reviews[visible_reviews.length - 1]].style.display = "none";

        dots[visible_reviews[visible_reviews.length - 1]].style.borderColor = "#dfe5ec";

        // show an element before the first one
        reviews[visible_reviews[0] - 1].style.display = "block";

        dots[visible_reviews[0] - 1].style.borderColor = "green";

        ArrowVisibility();
    });

    // event listener to slide images front
    forth.addEventListener("click", function(){
        let visible_reviews = GetVisibleReviews();

        // hide the first element in the array
        reviews[visible_reviews[0]].style.display = "none";

        dots[visible_reviews[0]].style.borderColor = "#dfe5ec";

        // show an element after the last one
        reviews[visible_reviews[visible_reviews.length - 1] + 1].style.display = "block";

        dots[visible_reviews[visible_reviews.length - 1] + 1].style.borderColor = "green";

        ArrowVisibility();
    });
}

// method to subscribe email
function Subscribe(){
    let sub = document.getElementById("subscribe");

    sub.addEventListener('input', () => {
        if(sub.value.includes(".com")){
            alert("You subscribed for the news letter");
        }
    });
}

// method to book
function Book(){
    let pick_location = document.getElementById("p-location");
    let pick_date = document.getElementById("p-date");
    let pick_time = document.getElementById("p-time");

    let p_location_drop = document.getElementById("p_city");
    let p_location_value_holder = document.getElementById("city-pick-up");
    let p_date_drop = document.getElementById("p_date");
    let p_date_value_holder = document.getElementById("date-pick-up");
    let p_time_drop = document.getElementById("p_time");
    let p_time_value_holder = document.getElementById("time-pick-up");

    pick_location.addEventListener('click', () => {
       if(p_location_drop.style.visibility == "visible"){
        p_location_drop.style.visibility = "hidden";
       }else{
        p_location_drop.style.visibility = "visible";
       }
        p_date_drop.style.visibility = "hidden";
        p_time_drop.style.visibility = "hidden";
    });

    pick_date.addEventListener('click', () => {
        if(p_date_drop.style.visibility == "visible"){
            p_date_drop.style.visibility = "hidden";
        }else{
            p_date_drop.style.visibility = "visible";
        }
        p_location_drop.style.visibility = "hidden";
        p_time_drop.style.visibility = "hidden";
    });

    pick_time.addEventListener('click', () => {
        if(p_time_drop.style.visibility == "visible"){
            p_time_drop.style.visibility = "hidden";
        }else{
            p_time_drop.style.visibility = "visible";
        }

        p_location_drop.style.visibility = "hidden";
        p_date_drop.style.visibility = "hidden";
    });

    // set the pick up location values
    Array.from(p_location_drop.getElementsByTagName("*")).forEach((element, index) => {
        element.addEventListener('click', () => {
            p_location_value_holder.innerHTML = element.innerHTML;
            p_location_drop.style.visibility = "hidden";
        });
    });

    // set the pick up date values
    Array.from(p_date_drop.getElementsByTagName("*")).forEach((element, index) => {
        element.addEventListener('click', () => {
            p_date_value_holder.innerHTML = element.innerHTML;
            p_date_drop.style.visibility = "hidden";
        });
    });

    // set the pick up location values
    Array.from(p_time_drop.getElementsByTagName("*")).forEach((element, index) => {
        element.addEventListener('click', () => {
            p_time_value_holder.innerHTML = element.innerHTML;
            p_time_drop.style.visibility = "hidden";
        });
    });

    let drop_location = document.getElementById("d-location");
    let drop_date = document.getElementById("d-date");
    let drop_time = document.getElementById("d-time");

    let d_location_drop = document.getElementById("d_city");
    let d_location_value_holder = document.getElementById("city-drop-off");
    let d_date_drop = document.getElementById("d_date");
    let d_date_value_holder = document.getElementById("date-drop-off");
    let d_time_drop = document.getElementById("d_time");
    let d_time_value_holder = document.getElementById("time-drop-off");

    drop_location.addEventListener('click', () => {
       if(d_location_drop.style.visibility == "visible"){
        d_location_drop.style.visibility = "hidden";
       }else{
        d_location_drop.style.visibility = "visible";
       }
        d_date_drop.style.visibility = "hidden";
        d_time_drop.style.visibility = "hidden";
    });

    drop_date.addEventListener('click', () => {
        if(d_date_drop.style.visibility == "visible"){
            d_date_drop.style.visibility = "hidden";
        }else{
            d_date_drop.style.visibility = "visible";
        }
        d_location_drop.style.visibility = "hidden";
        d_time_drop.style.visibility = "hidden";
    });

    drop_time.addEventListener('click', () => {
        if(d_time_drop.style.visibility == "visible"){
            d_time_drop.style.visibility = "hidden";
        }else{
            d_time_drop.style.visibility = "visible";
        }
        
        d_location_drop.style.visibility = "hidden";
        d_date_drop.style.visibility = "hidden";
    });

    // set the pick up location values
    Array.from(d_location_drop.getElementsByTagName("*")).forEach((element, index) => {
        element.addEventListener('click', () => {
            d_location_value_holder.innerHTML = element.innerHTML;
            d_location_drop.style.visibility = "hidden";
        });
    });

    // set the pick up date values
    Array.from(d_date_drop.getElementsByTagName("*")).forEach((element, index) => {
        element.addEventListener('click', () => {
            d_date_value_holder.innerHTML = element.innerHTML;
            d_date_drop.style.visibility = "hidden";
        });
    });

    // set the pick up location values
    Array.from(d_time_drop.getElementsByTagName("*")).forEach((element, index) => {
        element.addEventListener('click', () => {
            d_time_value_holder.innerHTML = element.innerHTML;
            d_time_drop.style.visibility = "hidden";
        });
    });

    let cars = [
        "../images/car_1.jpg",
        "../images/car_2.jpg",
        "../images/car_3.jpg",
        "../images/car_4.jpg",
        "../images/car_5.jpeg",
        "../images/car_6.webp",
        "../images/car_7.webp",
        "../images/car_8.avif"
    ];

    document.getElementById("search_book_car").addEventListener('click', () => {
        let min = Math.ceil(0);
        let max = Math.floor(7);

        if(p_location_value_holder.innerHTML != null &&
            !p_location_value_holder.innerHTML.includes("Select") &&
            p_date_value_holder.innerHTML != null &&
            !p_date_value_holder.innerHTML.includes("Select") &&
            p_time_value_holder.innerHTML != null &&
            !p_time_value_holder.innerHTML.includes("Select") &&
            d_location_value_holder.innerHTML != null &&
            !d_location_value_holder.innerHTML.includes("Select") &&
            d_date_value_holder.innerHTML != null &&
            !d_date_value_holder.innerHTML.includes("Select") &&
            d_time_value_holder.innerHTML != null &&
            !d_time_value_holder.innerHTML.includes("Select")
            ){
                document.getElementById("display_car_book").src = cars[
                    Math.floor(Math.random() * (max - min + 1)) + min
                ];

                document.getElementsByClassName("book-now")[0].addEventListener('click', () => {
                    alert("Car booked!");
                });
            }
            else
            {
                alert("Fill in all the form fields");
            }

        
    });

    // love cars
    document.querySelectorAll(".love").forEach((car, index) => {
        car.addEventListener('click', () => {
            if(car.src = "../images/love.png"){
                car.src = "../images/love2.png";
            }else{
                car.src= "../images/love.png";
            }
        });
    });

}



let file = window.location.href.split("/");

if(file[file.length -1].includes("index")){
    // calling method to change tabs
    ChangeTabs();
    // calling method to slide testimonies
    setInterval(SlideTestimonies,1000);

    // calling function to subscribe for news letter
    Subscribe();

    // calling function to book
    Book();
}
else if(file[file.length - 1].includes("contact_page")){

    FormValidation();
}

document.getElementById("menu").addEventListener("click", () => {
    let links = document.getElementById("links");

    if(links.style.visibility == "hidden"){
        links.style.visibility = "visible";
    }else{
        links.style.visibility = "hidden";
    }
});

