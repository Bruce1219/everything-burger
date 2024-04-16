window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const logo1 = document.getElementById('logo1');
    const logo2 = document.getElementById('logo2');
    const scrollingObject = document.querySelector('.scrolling-object');


    // 物件滚动
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const containerWidth = document.querySelector('.scrolling-object-container').offsetWidth;
    const maxScroll = containerWidth - scrollingObject.offsetWidth;
    const scrollAmount = maxScroll * scrollPercentage * 0.5;
    scrollingObject.style.transform = 'translateX(' + scrollAmount + 'px)';


});

