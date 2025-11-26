document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. 移动端菜单切换
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    mobileBtn.addEventListener('click', () => {
        // 切换 active 类来控制显示/隐藏
        navLinks.classList.toggle('active');
        
        // 切换图标样式 (汉堡 <-> 叉号)
        const icon = mobileBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 点击菜单项后自动关闭菜单 (提升手机端体验)
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // 3. 滚动揭示动画 & 数字增长
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // 如果元素包含计数器，且未开始计数
                const counter = entry.target.querySelector('.counter');
                if (counter && !counter.classList.contains('counted')) {
                    animateCounter(counter);
                    counter.classList.add('counted'); 
                }
                
                // 动画只触发一次，取消观察
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1, // 元素进入视口10%时触发
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(element => {
        revealOnScroll.observe(element);
    });

    // 数字增长函数
    function animateCounter(counterElement) {
        const target = +counterElement.getAttribute('data-target');
        const duration = 2000; // 2秒完成
        const frameDuration = 1000 / 60; 
        const totalFrames = Math.round(duration / frameDuration);
        const increment = target / totalFrames;
        
        let currentCount = 0;
        
        const timer = setInterval(() => {
            currentCount += increment;
            
            if (currentCount >= target) {
                counterElement.innerText = target;
                clearInterval(timer);
            } else {
                counterElement.innerText = Math.ceil(currentCount);
            }
        }, frameDuration);
    }
    const tabBtns = document.querySelectorAll('.tab-btn');
    const newsLists = document.querySelectorAll('.news-list');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 1. 移除所有按钮的 active 类
                tabBtns.forEach(b => b.classList.remove('active'));
                // 2. 给当前点击按钮添加 active 类
                btn.classList.add('active');

                // 3. 获取目标 Tab 的 ID
                const targetTab = btn.getAttribute('data-tab');

                // 4. 隐藏所有新闻列表
                newsLists.forEach(list => list.classList.remove('active'));
                // 5. 显示目标新闻列表
                document.getElementById(targetTab).classList.add('active');
            });
        });
    }
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 1. 按钮样式切换
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // 2. 获取筛选类别
                const filterValue = btn.getAttribute('data-filter');

                // 3. 筛选项目
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.classList.remove('hide');
                        // 稍微延迟加上显示动画
                        setTimeout(() => {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            }, 50);
                        }, 0);
                    } else {
                        // 隐藏过程
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.classList.add('hide');
                            item.style.display = 'none'; // 确保彻底不占位
                        }, 300);
                    }
                });
            });
        });
    }
});
function initMap() {
        // 检查是否引入了 BMap
        if (typeof BMap === 'undefined') return;

        var map = new BMap.Map("baiduMap");
        // 坐标：浙江省江山市经济技术开发区兴工八二路1号 (大概坐标，需校准)
        var point = new BMap.Point(118.629, 28.745); 
        
        map.centerAndZoom(point, 17); // 缩放级别
        map.enableScrollWheelZoom(true); // 开启滚轮缩放

        // 创建标注
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);

        // 创建信息窗口
        var opts = {
            width : 250,
            height: 80,
            title : "浙江伟丰新材料有限公司"
        }
        var infoWindow = new BMap.InfoWindow("地址：浙江省江山市经济技术开发区兴工八二路1号", opts);
        
        marker.addEventListener("click", function(){          
            map.openInfoWindow(infoWindow, point);
        });
        
        // 默认打开窗口
        map.openInfoWindow(infoWindow, point);
    }