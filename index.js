var data = [
    
      {
        "id": 3,
        "name": "Garden In Spring, 7 Shot",
        "price": 12.99,
        "img":"img/Aerial/Garden In Spring,.webp",
        "content":"This 200 gram repeater has 7 shots of bright and repeating colors and report that will be a must have for your show!",
        "type":"Aerial"
      },
      {
        "id": 4,
        "name": "Gunner Mates, 9 Shot",
        "price": 19.99,
        "img":"img/Aerial/Gunner Mates.webp",
        "content":"Small in size, big in effect! Silver comet tails soar high and break open with red, green and yellow stars with crackle.",
        "type":"Aerial"
      },
     
        {
          "id": 6,
          "name": "Shriller, 16 Shot",
          "price": 19.99,
          "img":"img/Aerial/Shriller.webp",
          "content":"Highflying whistling comets with crackling tails then silver crackling comet with red or green bursts! Awesome show!",
          "type":"Aerial"
        },
        
           
              {
                "id": 9,
                "name": "Turboprops",
                "price": 12.99
                ,
                "img":"img/Aerial/Turboprops.webp",
                "content":"Four different aerial spinners with colored tails, crackles and pearls!",
                "type":"Aerial"
              },
           
        {
            "id": 18,
            "name": "Phantom Night Owl Fountain",
            "price": 29.99,
            "img":"img/ground/Phantom Night Owl Fountain.webp",
            "content":"This fountain features 4 extra loud tricky whistles and too many effects to list, this night-owl will be an annual staple once you see his spooking glowing face and eyes. Don't pass this one up!            ",
            "type":"Ground & Non-Aerial"
          },
        
        {
          "id": 10,
          "name": "Whistling Moon Travelers Bottle Rockets, 144 pieces",
          "price": 24.99                ,
          "img":"img/Aerial/Whistling Moon Travelers Bottle Rockets.webp",
          "content":"This is a whistling Bottle Rockets with Report! Gross=144 Pieces                ",
          "type":"Aerial"
        },

  
          
  ]
  var main =document.getElementById("scroll-container")
  for(let item of data){
    var item_div = document.createElement("div");
    item_div.classList.add("card-pd");
    item_div.innerHTML = `
        <div class="cardpd-img">
            <img src="${item.img}" alt="">
        </div>
        <div class="cardpd-content">
            <h3  style=" font-size: 18px; margin:10px;">${item.name}</h3>
            <p  style=" font-size: 12px; color: #aaa; margin:10px;">${item.content}</p>
            <p class="price"  style=" font-size: 20px;  margin:10px;">$${item.price}</p>
        </div>
        <div class="card-btn">
            <button class="atc-btn" onclick="document.location='http://127.0.0.1:5501/product.html?id=${item.id}'">View</button>
        </div>
    `;
    main.appendChild(item_div);
  }

var currentIndex = 0;

function slide(direction) {
    var totalItems = data.length;
    var itemsPerPage = 3;
    var totalPages = Math.ceil(totalItems / itemsPerPage);

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= totalPages) {
        currentIndex = totalPages - 1;
    }

    var translateValue = -100 * currentIndex;
    main.style.transform = `translateX(${translateValue}%)`;
}

document.getElementById("slide-left").addEventListener("click", function() {
    slide(-1);
});

document.getElementById("slide-right").addEventListener("click", function() {
    slide(1);
});
