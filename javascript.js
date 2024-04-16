//---------------navbar bgc變色-------------------//
window.addEventListener('scroll', function() 
{
    const navbar = document.getElementById('navbar');
    // 当页面滚动超过100像素时，为导航栏添加scrolled类，否则移除scrolled类
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//-------------------logo-----------------------//

window.addEventListener('scroll', function() {
    var logo1 = document.getElementById('logo1');
    var logo2 = document.getElementById('logo2');

    // 如果滾動位置大於 0，則顯示 logo2，否則隱藏
    if (window.scrollY > 0) {
        logo1.style.display = 'none';
        logo2.style.display = 'block';
    } else {
        logo1.style.display = 'block';
        logo2.style.display = 'none';
    }
});
    
  // 在頁面加載時，初始狀態下隱藏 logo2
document.addEventListener('DOMContentLoaded', function() {
    var logo2 = document.getElementById('logo2');
    logo2.style.display = 'none';
});

// ------------------navbar隱藏----------------------//

// 在 DOM 加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 宣告變量
    var toggleButton = document.getElementById('toggleButton');
    var navList = document.getElementById('navList');
    var navbar = document.getElementById('navbar');

    // 將按鈕設置為隱藏
    toggleButton.classList.add('hidden');

    // 監聽按鈕點擊事件
    toggleButton.addEventListener('click', function() {
        // 如果 ul 是隱藏的，則顯示它，否則隱藏它
        if (navList.classList.contains('hidden')) {
            navList.classList.remove('hidden');
          // 讓 navbar 的背景顏色變黑色
            navbar.style.backgroundColor = 'black';
        } else {
            navList.classList.add('hidden');
          // 將 navbar 的背景顏色還原
          navbar.style.backgroundColor = ''; // 這裡設置為空字符串，將使用 CSS 中的定義
        }
    });

    // 監聽滾動事件
    window.addEventListener('scroll', function() {
      // 如果按鈕觸發了 navbar，則不做任何事情
    if (!toggleButton.classList.contains('hidden') && !navList.classList.contains('hidden')) {
        return;
    }
    
      // 如果滾動超過一定距離，則隱藏 ul，顯示按鈕
    if (window.scrollY > 50) {
        navList.classList.add('hidden');
        toggleButton.classList.remove('hidden');
        // navbar.classList.add('black-bg'); // 讓 navbar 的背景顏色變黑色
    } else {
        // 否則顯示 ul，隱藏按鈕
        navList.classList.remove('hidden');
        toggleButton.classList.add('hidden');
        navbar.style.backgroundColor = ''; // 將 navbar 的背景顏色還原
    }
    });

    // 回到頂部後恢復原始狀態
    window.addEventListener('scroll', function() {
      // 如果滾動到頂部，則顯示 ul，隱藏按鈕，將背景顏色還原
    if (window.scrollY === 0 && !toggleButton.classList.contains('hidden') && !navList.classList.contains('hidden')) {
        navList.classList.remove('hidden');
        toggleButton.classList.add('hidden');
        navbar.style.backgroundColor = '';
    }
    });
});

    

    

//------------------topbtn---------------------//

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};
    
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
        } else {
            document.getElementById("scrollToTopBtn").style.display = "none";
        }
    }
    
// When the user clicks on the button, scroll to the top of the document with smooth animation
function scrollToTop() {
    const scrollDuration = 500; // Duration of the scroll animation in milliseconds
    
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(function(){
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    },15);
}

//------------------menubtn-------------------//

const classicBtn = document.getElementById('classicBtn');
        const selfBtn = document.getElementById('selfBtn');
        const session1 = document.getElementById('session1');
        const session2 = document.getElementById('session2');

        classicBtn.addEventListener('click', function() {
            classicBtn.classList.add('red');
            classicBtn.classList.remove('white');
            selfBtn.classList.add('white');
            selfBtn.classList.remove('red');

            session1.classList.remove('hidden');
            session2.classList.add('hidden');
        });

        selfBtn.addEventListener('click', function() {
            classicBtn.classList.add('white');
            classicBtn.classList.remove('red');
            selfBtn.classList.add('red');
            selfBtn.classList.remove('white');

            session1.classList.add('hidden');
            session2.classList.remove('hidden');
        });

//--------------------menu----------------------//

function showContent(category) {
    // 檢查要顯示的內容是否已經是活動狀態
    var selectedContent = document.getElementById(category + 'Content');
    if (selectedContent.classList.contains('active')) {
        return; // 如果是，則不執行任何操作
    }

    // 隱藏所有內容
    var contents = document.querySelectorAll('.menu-content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // 取消所有按鈕的活動狀態
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // 顯示特定類別的內容
    selectedContent.classList.add('active');

    // 標記被點擊的按鈕為活動狀態
    var selectedButton = document.getElementById(category + 'Btn');
    selectedButton.classList.add('active');
}

//---------------------self------------------//
function showSelfContent(category) {
    // 檢查要顯示的內容是否已經是活動狀態
    var selectedContent = document.getElementById(category + 'Page');
    if (selectedContent.classList.contains('active')) {
        return; // 如果是，則不執行任何操作
    }

    // 隱藏所有內容
    var contents = document.querySelectorAll('.self-content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // 取消所有按鈕的活動狀態
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // 顯示特定類別的內容
    selectedContent.classList.add('active');

    // 標記被點擊的按鈕為活動狀態
    var selectedButton = document.getElementById(category + 'Btn');
    selectedButton.classList.add('active');
}

//---------------------selfNextBtn------------//
function showNextSelfContent(category) {
    // 找到當前活動的自定義內容
    var activeContent = document.querySelector('.self-content.active');

    // 找到下一個自定義內容
    var nextContent = activeContent.nextElementSibling;

    // 如果下一個自定義內容存在，將當前活動的自定義內容隱藏，並將下一個自定義內容顯示為活動
    if (nextContent) {
        activeContent.classList.remove('active');
        nextContent.classList.add('active');

        // 更新自定义类型按钮的活动状态
        var activeButtonId = activeContent.id.replace('Content', 'Btn');
        var nextButtonId = nextContent.id.replace('Content', 'Btn');
        var activeButton = document.getElementById(activeButtonId);
        var nextButton = document.getElementById(nextButtonId);
        activeButton.classList.remove('active');
        nextButton.classList.add('active');

        // 更新类型按钮的活动状态
        var activeTypeButton = document.querySelector('.self-type-menu button.active');
        activeTypeButton.classList.remove('active');
        var nextTypeButton = document.getElementById(category + 'Btn');
        nextTypeButton.classList.add('active');
    }
}





//---------------------news---------------------//


