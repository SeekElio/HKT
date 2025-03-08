var images = [
    "https://images.unsplash.com/photo-1513622790541-eaa84d356909?q=80&w=1974&auto=format&fit=crop",
    "images/HK 3.jpg",
    "images/HongKong photo1.jpg",
    "images/HongKong photo2.jpg",
    "images/Hongkong photo3.jpg"
  ];
var currentIndex = 0;
var homepage = document.getElementsByClassName("homepage")[0];
var tips = [];
var likeQuota = 10;
var currentImageData = "";

function changeBackground() {
    homepage.style.backgroundImage = "url('" + images[currentIndex] + "')";
    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(changeBackground, 5000);
  }
window.onload = function changeMain() {
    changeBackground();
}
//AI process start
function processTip() {
    var tipText = document.userTipsForm.tipInput.value.trim();
    var imageFile = document.userTipsForm.imageInput.files[0];
    var tipsList = document.getElementById("tips-list");
    var tipObj = { text: tipText, likes: 0 };

    if (imageFile) {
      var reader = new FileReader();
      reader.onload = function(e) {
        currentImageData = e.target.result;
        tipObj.image = currentImageData;
        tips.push(tipObj);
        if (tips.length > 10) {
          tips.shift();
        }
        var newEntry = '<li><img src="' + currentImageData + '" alt="User uploaded image"> ' + tipText + ' <button class="like-btn" onclick="likeTip(' + (tips.length - 1) + ')">Like (0)</button></li>';
        tipsList.innerHTML = tipsList.innerHTML + newEntry;
        document.userTipsForm.tipInput.value = "";
        document.userTipsForm.imageInput.value = "";
      };
      reader.readAsDataURL(imageFile);
    } else {
      tips.push(tipObj);
      if (tips.length > 10) {
        tips.shift();
      }
      var newEntry = '<li>' + tipText + ' <button class="like-btn" onclick="likeTip(' + (tips.length - 1) + ')">Like (0)</button></li>';
      tipsList.innerHTML = tipsList.innerHTML + newEntry;
      document.userTipsForm.tipInput.value = "";
      document.userTipsForm.imageInput.value = "";
    }
  }
  // AI process end //

  function displayTips() {
    var tipsList = document.getElementById("tips-list");
    tipsList.innerHTML = "";
    for (var i = 0; i < tips.length; i++) {
      var content = tips[i].text;
      if (tips[i].image) {
        content = '<img src="' + tips[i].image + '" alt="User uploaded image"> ' + tips[i].text;
      }
      tipsList.innerHTML += '<li>' + content + ' <button class="like-btn" onclick="likeTip(' + i + ')">Like (' + (tips[i].likes || 0) + ')</button></li>';
    }
  }

  function likeTip(index) {
    if (likeQuota > 0) {
      var likeCount = window.prompt("Enter number of likes (default is 1, remaining: " + likeQuota + "):", "1");
      if (likeCount !== null) {
        var num = Number(likeCount);
        if (isNaN(num)) {
          num = 1;
        }
        if (num <= likeQuota) {
          if (typeof tips[index].likes === "undefined") {
            tips[index].likes = 0;
          }
          tips[index].likes = tips[index].likes + num;
          likeQuota = likeQuota - num;
          displayTips();
        } else {
          window.alert("Number of likes exceeds remaining quota (" + likeQuota + ")!");
        }
      }
    } else {
      window.alert("You have used up all your likes!");
    }
  }
window.onload = function changeInput() {
    changeBackground();
    displayTips();
};
  