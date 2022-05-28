 const images = [
    'images/pic1.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg',
    'images/pic5.jpg',
    'images/pic6.jpg',
    'images/pic7.jpg',
    'images/pic8.jpg',
    'images/pic9.jpg',
    'images/pic10.jpg',
    'images/pic11.jpg',
    'images/pic12.jpg',
    'images/pic13.jpg'
 ];
 let imgIndex = 0;
 const imagesElement = document.getElementById('slider-imag');
 setInterval(() => {
     if(imgIndex >= images.length){
         imgIndex = 0;
     }
     const imgUrl = images[imgIndex];
     imagesElement.setAttribute('src', imgUrl);
     imgIndex++;
 },2000)