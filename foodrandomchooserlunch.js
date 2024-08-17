function foods() {
    
          var myArray = [
          "You should make- Rajma Rice!",
          "You should make- Biryani!",
          "You should make- Chhole Bhature/Chhole Rice!", 
          "You should make- Pulao!",
          "You should make- Kofte with rice!",
          "You should make- Yellow Moong Dal and rice!",
          "You should make- Dal Makhni and rice!",
          "You should make- Shahi Paneer and rice!",
          "You should make- Aloo Paneer and rice!",
          "You should make- Aloo Matar and rice!",
          "You should make- Arhar Dal and rice!",
          "You should make- Chana Dal and rice!",
          "You should make- Whole Moong Dal and rice!",
          "You should make- Whole Urad Dal and rice!",
          "You should make- Urad Chilka Dal and rice!",
          "You should make- Urad Dhuli Dal and rice!",
          "You should make- Paneer Lababdaar and rice!",
          "You should make- Dum-Aloo and rice!",
          "You should make- Tuar Dal and rice!",
          "You should make- Aloo Vadi and rice!",
          "You should make- Urad-Chana Dal and rice!",
          " ",
          ];
  
          var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

          alert(randomItem);
         }