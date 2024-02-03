var data = [
    {
      "id": 1,
      "name": "Alien Escape",
      "price": 4.99,
      "img":"img/Aerial/Alien Escape.webp",
      "content":"N/A",
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
          "id": 5,
          "name": "Military Satellites, 6 pc ",
          "price":6.99,
          "img":"img/Aerial/Military Satellites.webp",
          "content":"This Aerial spinner has two separate color crackling effects!",
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
              "id": 7,
              "name": "Crackling Mine, 7 shot",
              "price": 11.99,
              "img":"img/Aerial/Crackling Mine.webp",
              "content":"Red shower fountain to red and green star cracklin' mines. Brilliant color and great crackle.",
              "type":"Aerial"
            },
            {
                "id": 8,
                "name": "Tornado, 6 pieces",
                "price": 2.99
                ,
                "img":"img/Aerial/Tornado.webp",
                "content":"Spins on the ground with red and green lights!",
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
                "id": 10,
                "name": "Whistling Moon Travelers Bottle Rockets, 144 pieces",
                "price": 24.99                ,
                "img":"img/Aerial/Whistling Moon Travelers Bottle Rockets.webp",
                "content":"This is a whistling Bottle Rockets with Report! Gross=144 Pieces                ",
                "type":"Aerial"
              },
      {
         "id": 11,
         "name": "Apache Firedance Fountain",
        "price": 12000,
          "img":"img/ground/Apache Firedance Fountain.webp",
         "content":"Unbelievable burn time of over 3 minutes and lots of action. Brilliant colors, tons of crackle, six whistles.",
        "type":"Ground & Non-Aerial        "
     },
       {
      "id": 12,
      "name": "Chinatown Red Snap Crackers, 20 pieces per box      ",
      "price": 3.99,
      "img":"img/ground/Chinatown Red Snap Crackers,.webp",
      "content":"Powerful snap firecrackers with loud bang!",
      "type":"Ground & Non-Aerial      "
    },
    {
        "id": 13,
        "name": "Saturn Ring Eruption, 12 pc        ",
        "price": 12.99,
        "img":"img/ground/Saturn Ring Eruption.webp",
        "content":"Saturn shape spinner with silver ring and crackling finale!        ",
        "type":"Ground & Non-Aerial"
      },
      {
        "id": 14,
        "name": "Crackling Ball",
        "price": 1.99,
        "img":"img/ground/F-080CracklingBall.webp",
        "content":"Round firecracker-type ball with crackling and flashing effects.",
        "type":"Ground & Non-Aerial"
      },
      {
        "id": 15,
        "name": "Flaring Stars Fountain",
        "price": 19.99,
        "img":"img/ground/Flaring Stars Fountain.webp",
        "content":"Low noise, safe & sane from Grucci\u00ae. Red, gold and green followed by multi-colored stars shoot out from gold showering sparks.",
        "type":"Ground & Non-Aerial"
      },
      {
          "id": 16,
          "name": "Happiness Fountain",
          "price": 34.99,
          "img":"img/ground/Happiness Fountain.webp",
          "content":"Long duration. Begins with titanium and blue crackle. Then spray. Ends with strobing light-up eyes and mouth!",
          "type":"Ground & Non-Aerial"
        },
        {
          "id": 17,
          "name": "Lady Liberty",
          "price": 19.99,
          "img":"img/ground/Lady Liberty.webp",
          "content":"This fountain performs with a bright color of spring, followed by a spectrum of color pearls,and sizzling golden flowers with a finale of silver silk crackle!",
          "type":"Ground & Non-Aerial"
        },
        {
          "id": 2,
          "name": "Double Night Parachute, 6 pc",
          "price": 18.99,
          "img":"img/Aerial/Double Night Parachute.webp",
          "content":"Two parachutes float down with flares attached! Very Impressive!",
          "type":"Aerial"
        }
       ,
          {
            "id": 19,
            "name": "Point 'N' Shoot Fountain",
            "price": 39.99,
            "img":"img/ground/Point 'N' Shoot Fountain.webp",
            "content":"Silver shower sprays with green & purple fish go to gold and silver chrysanthemums. Big flashing strobe finale.",
            "type":"Ground & Non-Aerial"
          },
          {
            "id": 20,
            "name": "Moondance Fountain",
            "price": 8.99,
            "img":"img/ground/Moondance Fountain.webp",
            "content":"Very long-lasting! Purple pearls with glittering crackling chrysanthemums. Don't let its size fool you!",
            "type":"Ground & Non-Aerial"
          },
          
  ]

  var main =document.getElementById("cards")
  for(let item of data){
    var item_div = document.createElement("div");
    item_div.classList.add("card");
    item_div.innerHTML = `
        <div class="card-img" onclick="document.location='http://127.0.0.1:5501/product.html?id=${item.id}'">
            <img src="${item.img}" alt="">
        </div>
        <div class="card-content" onclick="document.location='http://127.0.0.1:5501/product.html?id=${item.id}'">
            <h3  style=" font-size: 18px; margin:10px;">${item.name}</h3>
            <p  style=" font-size: 12px; color: #aaa; margin:10px;">${item.content}</p>
            <p class="price"  style=" font-size: 20px;  margin:10px;">$${item.price}</p>
        </div>
        <div class="card-btn">
            <button class="atc-btn" onclick="addToCart(key)">Add To Cart</button>
        </div>
    `;
    main.appendChild(item_div);
  }

   const addToCart = (key) => {
    // get item has key param
    let item = data[key];// lấy item từ dữ liệu products.data
  
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    if (cart == null) {
      cart = [
        {
          product: item,
          quantity: 1,
        },
      ];
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      for (product_item of cart) {
        if (product_item.product.name == item.name) {
          // Xử lý trùng item đã thêm vào giỏ hàng
          product_item.quantity += 1;
          localStorage.setItem("cart", JSON.stringify(cart));
          return;
        }
      }
      cart.push({
        product: item,
        quantity: 1,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  
 