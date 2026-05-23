// 页面交互与动画效果

document.addEventListener('DOMContentLoaded', () => {
    // 1. 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    const updateNavbarState = () => {
        if (!navbar) return;
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    updateNavbarState();
    window.addEventListener('scroll', updateNavbarState, { passive: true });

    // 2. 移动端菜单切换
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('active', navLinks.classList.contains('active'));
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                if (mobileBtn) mobileBtn.classList.remove('active');
                if (mobileBtn) {
                    const icon = mobileBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    document.querySelectorAll('.video-wrapper').forEach(wrapper => {
        const video = wrapper.querySelector('video');
        const playButton = wrapper.querySelector('.video-play-toggle');
        if (!video || !playButton) return;

        const updatePlayState = () => {
            wrapper.classList.toggle('is-playing', !video.paused && !video.ended);
        };

        playButton.addEventListener('click', () => {
            if (video.paused || video.ended) {
                video.play().catch(updatePlayState);
            } else {
                video.pause();
            }
        });

        video.addEventListener('play', updatePlayState);
        video.addEventListener('pause', updatePlayState);
        video.addEventListener('ended', updatePlayState);
        updatePlayState();
    });

    // 3. 滚动揭示动画 & 数字增长
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                const counter = entry.target.querySelector('.counter');
                if (counter && !counter.classList.contains('counted')) {
                    animateCounter(counter);
                    counter.classList.add('counted'); 
                }
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    reveals.forEach(element => revealOnScroll.observe(element));

    function animateCounter(counterElement) {
        const target = +counterElement.getAttribute('data-target');
        const suffix = counterElement.getAttribute('data-suffix') || '';
        const duration = 2000;
        const frameDuration = 1000 / 60; 
        const totalFrames = Math.round(duration / frameDuration);
        const increment = target / totalFrames;
        let currentCount = 0;
        const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= target) {
                counterElement.innerText = `${target}${suffix}`;
                clearInterval(timer);
            } else {
                counterElement.innerText = Math.ceil(currentCount);
            }
        }, frameDuration);
    }

    // Tab 切换逻辑
    const tabBtns = document.querySelectorAll('.tab-btn');
    const newsLists = document.querySelectorAll('.news-list');
    const newsTabIds = Array.from(tabBtns)
        .map(btn => btn.getAttribute('data-tab'))
        .filter(tabId => tabId && document.getElementById(tabId));

    function getInitialNewsTab() {
        const params = new URLSearchParams(window.location.search);
        const hashTab = window.location.hash.replace('#', '');
        const requestedTab = params.get('tab') || hashTab;
        const activeList = document.querySelector('.news-list.active');

        if (newsTabIds.includes(requestedTab)) return requestedTab;
        if (activeList && newsTabIds.includes(activeList.id)) return activeList.id;
        return newsTabIds[0];
    }

    function setNewsTab(targetTab, shouldUpdateUrl = false) {
        if (!newsTabIds.includes(targetTab)) return;

        tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-tab') === targetTab);
        });
        newsLists.forEach(list => {
            list.classList.toggle('active', list.id === targetTab);
        });

        if (shouldUpdateUrl && window.history && window.history.replaceState) {
            const url = new URL(window.location.href);
            url.searchParams.set('tab', targetTab);
            if (newsTabIds.includes(url.hash.replace('#', ''))) {
                url.hash = '';
            }
            window.history.replaceState({}, '', url.toString());
        }
    }

    if (tabBtns.length > 0 && newsLists.length > 0) {
        setNewsTab(getInitialNewsTab());

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                setNewsTab(btn.getAttribute('data-tab'), true);
            });
        });
    }

    // 筛选逻辑
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filterValue = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    clearTimeout(item._galleryShowTimer);
                    clearTimeout(item._galleryHideTimer);

                    const shouldShow = filterValue === 'all' || item.classList.contains(filterValue);
                    item.classList.toggle('hide', !shouldShow);
                    item.style.display = shouldShow ? '' : 'none';
                    item.style.pointerEvents = shouldShow ? '' : 'none';
                    item.style.opacity = '';
                    item.style.transform = '';
                });
            });
        });
    }

    // --- 首页背景轮播逻辑 (升级版：支持左右切换) ---
    const slides = document.querySelectorAll('.hero-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 13000; 
        let slideTimer; // 用于存储定时器ID

        // 核心切换函数
        function switchSlide(index) {
            // 移除当前的 active
            slides[currentSlide].classList.remove('active');
            
            // 更新索引
            currentSlide = index;
            
            // 循环处理：如果超过最大索引，回到0；如果小于0，去最后一张
            if (currentSlide >= slides.length) currentSlide = 0;
            if (currentSlide < 0) currentSlide = slides.length - 1;

            // 添加新的 active
            slides[currentSlide].classList.add('active');
        }

        // 启动自动播放
        function startTimer() {
            slideTimer = setInterval(() => {
                switchSlide(currentSlide + 1);
            }, slideInterval);
        }

        // 重置定时器 (用户手动点击后调用)
        function resetTimer() {
            clearInterval(slideTimer);
            startTimer();
        }

        // --- 事件监听 ---
        
        // 下一张按钮
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                switchSlide(currentSlide + 1);
                resetTimer(); // 只要手动点了，就重置倒计时
            });
        }

        // 上一张按钮
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                switchSlide(currentSlide - 1);
                resetTimer();
            });
        }

        // 初始化启动
        startTimer();
    }
});

function initMap() {
    if (typeof BMap === 'undefined') return;
    var map = new BMap.Map("baiduMap");
    var point = new BMap.Point(118.629, 28.745); 
    map.centerAndZoom(point, 17);
    map.enableScrollWheelZoom(true);
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
    var opts = { width : 250, height: 80, title : "浙江伟丰新材料有限公司" }
    var infoWindow = new BMap.InfoWindow("地址：浙江省衢州市江山市上余镇兴工八二路一号 浙江伟丰新材料有限公司", opts);
    marker.addEventListener("click", function(){ map.openInfoWindow(infoWindow, point); });
    map.openInfoWindow(infoWindow, point);
}
// --- 纯净版分页逻辑 ---
function initPagination() {
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) return;

    function getItemsPerPage(list) {
        return 5;
    }

    // 核心函数：显示特定页码
    function showPage(page) {
        // 1. 找到当前选中的那个 Tab (行业资讯 or 公司新闻)
        const activeList = document.querySelector('.news-list.active');
        if (!activeList) return;

        // 2. 找到这个列表下所有的新闻行
        const items = activeList.querySelectorAll('.news-row');
        const itemsPerPage = getItemsPerPage(activeList);
        const totalPages = Math.ceil(items.length / itemsPerPage);

        // 3. 修正页码范围 (防止超出)
        if (page < 1) page = 1;
        if (page > totalPages && totalPages > 0) page = totalPages;

        // 4. 循环判断每一条新闻是显示还是隐藏
        items.forEach((item, index) => {
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            
            if (index >= start && index < end) {
                // 在当前页范围内 -> 显示
                item.style.display = 'flex';
                item.style.animation = '';
            } else {
                // 不在范围内 -> 隐藏
                item.style.display = 'none';
            }
        });

        // 5. 更新底部的 1 2 3 按钮
        updatePaginationButtons(page, totalPages);
    }

    // 更新按钮状态
    function updatePaginationButtons(currentPage, totalPages) {
        paginationContainer.innerHTML = ''; // 清空旧按钮

        // 如果只有1页，就不显示分页条了
        if (totalPages <= 1) {
            paginationContainer.style.display = 'none';
            return;
        } else {
            paginationContainer.style.display = 'flex';
        }

        // --- 生成 "上一页" (<) ---
        if (currentPage > 1) {
             const prevBtn = createBtn('<i class="fas fa-angle-left"></i>', currentPage - 1);
             paginationContainer.appendChild(prevBtn);
        }

        // --- 生成数字页码 (1 2 3) ---
        for (let i = 1; i <= totalPages; i++) {
            const btn = createBtn(i, i);
            if (i === currentPage) btn.classList.add('active');
            paginationContainer.appendChild(btn);
        }

        // --- 生成 "下一页" (>) ---
        if (currentPage < totalPages) {
            const nextBtn = createBtn('<i class="fas fa-angle-right"></i>', currentPage + 1);
            paginationContainer.appendChild(nextBtn);
        }
    }

    // 辅助函数：创建按钮
    function createBtn(content, targetPage) {
        const btn = document.createElement('a');
        btn.href = '#';
        btn.innerHTML = content;
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // 阻止页面跳到顶部
            showPage(targetPage);
        });
        return btn;
    }

    // --- 监听 Tab 切换 ---
    // 当用户从“行业资讯”点到“公司新闻”时，重置回第 1 页
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 设置一点点延迟，确保 Tab 切换的 class 变化已经完成
            setTimeout(() => {
                showPage(1);
            }, 50);
        });
    });

    // --- 页面刚加载时，默认显示第 1 页 ---
    showPage(1);
}

// 确保在页面加载完成后运行
document.addEventListener('DOMContentLoaded', () => {
    initPagination();
});
// --- Lightbox 图片预览功能 ---
function initLightbox() {
    const modal = document.getElementById('lightbox');
    const modalImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');

    // 1. 找到所有的图片容器
    // 注意：我们监听 .img-wrapper，这样无论点图片哪里都能触发
    const items = document.querySelectorAll('.gallery-item .img-wrapper');

    items.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img'); // 找到容器里面的 img 标签
            const caption = this.nextElementSibling; // 找到下方的文字说明 (.gallery-caption)
            
            if (modal && img) {
                modal.style.display = "flex";
                
                // 稍微延时一点加 show class，为了触发 CSS 的 opacity 动画
                setTimeout(() => {
                    modal.classList.add('show');
                }, 10);

                modalImg.src = img.src; // 把大图地址设为当前图片的地址
                
                // 如果有文字说明，也显示出来
                if (caption) {
                    captionText.innerHTML = caption.innerHTML;
                } else {
                    captionText.innerHTML = "";
                }
            }
        });
    });

    // 2. 关闭功能的函数
    function closeModal() {
        modal.classList.remove('show');
        // 等待0.3秒动画结束后再隐藏 display
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    // 3. 绑定关闭事件
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // 4. 点击背景也能关闭 (优化用户体验，尤其是手机端)
    if (modal) {
        modal.addEventListener('click', function(e) {
            // 如果点击的是背景层（modal本身），而不是图片本身，则关闭
            if (e.target === modal) {
                closeModal();
            }
        });
    }
}

// 确保页面加载完成后运行
document.addEventListener('DOMContentLoaded', () => {
    // ... 原有的代码 ...
    
    // 启动 Lightbox 功能
    initLightbox();
});
// ==========================================
// --- 产品详情页专用 Tab 切换功能 ---
// ==========================================
function openProductTab(evt, tabId) {
    // 1. 隐藏所有的产品内容区
    var tabcontent = document.getElementsByClassName("product-tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // 2. 移除所有产品选项卡按钮的 active 状态
    var tablinks = document.getElementsByClassName("prod-tab-btn");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 3. 显示当前点击的这个内容区
    var target = document.getElementById(tabId);
    if (target) {
        target.style.display = "block";
    }
    
    // 4. 给当前点击的按钮加上 active 状态
    if (evt && evt.currentTarget) {
        evt.currentTarget.className += " active";
    }
}

// --- 产品中心搜索 ---
function normalizeProductSearchText(text) {
    return (text || '')
        .toString()
        .toLowerCase()
        .replace(/[：:，,。.\s\-_/（）()·]/g, '');
}

function extractProductCode(name) {
    const matches = (name || '').match(/[A-Z]{1,5}-?\d+[A-Z0-9]*(?:\/\d+)?(?:系列)?|\b\d{3,4}[A-Z]?\b/gi);
    return matches ? matches[matches.length - 1] : '';
}

function productSearchLang() {
    return localStorage.getItem('preferredLang') === 'en' || document.documentElement.lang === 'en' ? 'en' : 'zh';
}

function productSearchText(key) {
    const lang = productSearchLang();
    const text = {
        zh: {
            product: '产品',
            series: '系列',
            noResults: '没有找到匹配产品，请换个型号或关键词试试。',
            go: '查看详情'
        },
        en: {
            product: 'Product',
            series: 'Series',
            noResults: 'No matching product found. Try another model or keyword.',
            go: 'View Details'
        }
    };
    return text[lang][key];
}

function buildProductSearchEntries() {
    const groups = window.PRODUCT_SEARCH_GROUPS || [];
    const entries = [];

    groups.forEach(group => {
        entries.push({
            type: 'series',
            name: group.series,
            nameEn: group.seriesEn || group.series,
            series: group.series,
            seriesEn: group.seriesEn || group.series,
            href: group.href,
            target: '',
            keywords: [group.series, group.seriesEn, group.keywords].filter(Boolean).join(' ')
        });

        (group.products || []).forEach(product => {
            const code = extractProductCode(product);
            const target = code || product;
            entries.push({
                type: 'product',
                name: product,
                nameEn: product,
                series: group.series,
                seriesEn: group.seriesEn || group.series,
                href: `${group.href}?product=${encodeURIComponent(target)}`,
                target,
                keywords: [product, code, group.series, group.seriesEn, group.keywords].filter(Boolean).join(' ')
            });
        });
    });

    return entries;
}

function scoreProductSearchEntry(entry, rawQuery) {
    const query = normalizeProductSearchText(rawQuery);
    if (!query) return 0;

    const name = normalizeProductSearchText(entry.name);
    const nameEn = normalizeProductSearchText(entry.nameEn);
    const target = normalizeProductSearchText(entry.target);
    const series = normalizeProductSearchText(entry.series);
    const seriesEn = normalizeProductSearchText(entry.seriesEn);
    const keywords = normalizeProductSearchText(entry.keywords);

    if (target && target === query) return 100;
    if (name === query || nameEn === query) return 96;
    if (target && target.startsWith(query)) return 92;
    if (name.startsWith(query) || nameEn.startsWith(query)) return 86;
    if (name.includes(query) || nameEn.includes(query)) return 76;
    if (series.includes(query) || seriesEn.includes(query)) return entry.type === 'series' ? 70 : 52;
    if (keywords.includes(query)) return entry.type === 'series' ? 46 : 38;
    return 0;
}

function initProductSearch() {
    const form = document.getElementById('productSearchForm');
    const input = document.getElementById('productSearchInput');
    const resultsBox = document.getElementById('productSearchResults');
    if (!form || !input || !resultsBox || !window.PRODUCT_SEARCH_GROUPS) return;

    const entries = buildProductSearchEntries();
    let currentResults = [];

    function closeResults() {
        resultsBox.classList.remove('active');
        input.setAttribute('aria-expanded', 'false');
    }

    function navigateTo(entry) {
        if (!entry) return;
        window.location.href = entry.href;
    }

    function resultLabel(entry) {
        return entry.type === 'series' ? productSearchText('series') : productSearchText('product');
    }

    function renderResults() {
        const query = input.value.trim();
        if (!query) {
            currentResults = [];
            resultsBox.innerHTML = '';
            closeResults();
            return;
        }

        currentResults = entries
            .map(entry => ({ entry, score: scoreProductSearchEntry(entry, query) }))
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score || (a.entry.type === 'series' ? -1 : 1))
            .slice(0, 10)
            .map(item => item.entry);

        if (!currentResults.length) {
            resultsBox.innerHTML = `<div class="product-search-empty">${productSearchText('noResults')}</div>`;
            resultsBox.classList.add('active');
            input.setAttribute('aria-expanded', 'true');
            return;
        }

        resultsBox.innerHTML = currentResults.map((entry, index) => `
            <button class="product-search-result" type="button" data-index="${index}">
                <span>
                    <strong>${entry.name}</strong>
                    <span>${entry.type === 'series' ? productSearchText('go') : entry.series}</span>
                </span>
                <em>${resultLabel(entry)}</em>
            </button>
        `).join('');

        resultsBox.classList.add('active');
        input.setAttribute('aria-expanded', 'true');
    }

    input.addEventListener('input', renderResults);
    input.addEventListener('focus', renderResults);

    resultsBox.addEventListener('click', event => {
        const button = event.target.closest('.product-search-result');
        if (!button) return;
        navigateTo(currentResults[Number(button.dataset.index)]);
    });

    form.addEventListener('submit', event => {
        event.preventDefault();
        renderResults();
        navigateTo(currentResults[0]);
    });

    document.addEventListener('click', event => {
        if (!event.target.closest('.product-search')) {
            closeResults();
        }
    });
}

function activateProductTabForTarget(target) {
    const tab = target.closest('.product-tab-content');
    if (!tab) return;

    document.querySelectorAll('.product-tab-content').forEach(content => {
        content.style.display = content === tab ? 'block' : 'none';
    });

    document.querySelectorAll('.prod-tab-btn').forEach(button => {
        const action = button.getAttribute('onclick') || '';
        button.classList.toggle('active', action.includes(`'${tab.id}'`) || action.includes(`"${tab.id}"`));
    });
}

function initProductSearchTarget() {
    const params = new URLSearchParams(window.location.search);
    const product = params.get('product');
    if (!product) return;

    const query = normalizeProductSearchText(product);
    const candidates = Array.from(document.querySelectorAll('.spec-table tbody tr, .article-product-block'));
    const target = candidates.find(item => normalizeProductSearchText(item.textContent).includes(query));
    if (!target) return;

    activateProductTabForTarget(target);
    target.classList.add('product-search-target');

    window.setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 120);
}

document.addEventListener('DOMContentLoaded', () => {
    initProductSearch();
    initProductSearchTarget();
});

/* ========================================================== */
/* === Honor Section: PDF.js thumbnails + Lightbox viewer === */
/* ========================================================== */
(function () {
    const cards = document.querySelectorAll('.honor-card[data-cert]');
    if (!cards.length) return;

    // PDF.js worker
    if (typeof pdfjsLib !== 'undefined') {
        pdfjsLib.GlobalWorkerOptions.workerSrc =
            'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }

    // Decode base64 -> Uint8Array (used when PDF data is embedded inline)
    function base64ToBytes(b64) {
        const bin = atob(b64);
        const out = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
        return out;
    }

    // Cache of loaded PDF documents (keyed by id-or-url) so we don't re-decode
    const pdfCache = new Map();
    async function getPdf(card) {
        const key = card.dataset.certId || card.dataset.cert;
        if (pdfCache.has(key)) return pdfCache.get(key);

        let docParams;
        const id = card.dataset.certId;
        if (id && window.PDF_DATA && window.PDF_DATA[id]) {
            // Inline base64 path (works on file:// where fetch is blocked)
            docParams = { data: base64ToBytes(window.PDF_DATA[id]) };
        } else {
            // Direct URL fetch (works when served over HTTP)
            docParams = { url: card.dataset.cert };
        }
        const promise = pdfjsLib.getDocument(docParams).promise;
        pdfCache.set(key, promise);
        return promise;
    }

    // Render the PDF's first page onto a thumbnail canvas. The canvas's drawing
    // buffer carries the high-res pixels; CSS (object-fit: contain) handles display sizing.
    async function renderPdfThumbnail(card, canvas, targetWidth) {
        const pdf = await getPdf(card);
        const page = await pdf.getPage(1);
        const baseViewport = page.getViewport({ scale: 1 });
        const dpr = window.devicePixelRatio || 1;
        const scale = (targetWidth / baseViewport.width) * dpr;
        const viewport = page.getViewport({ scale });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        // Note: do NOT set canvas.style.width/height — let CSS object-fit: contain center it inside the cert-frame.
        await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
    }

    // Render every page of the PDF into a scrollable wrapper for the lightbox.
    async function renderPdfAllPages(card, container, maxWidth) {
        const pdf = await getPdf(card);
        const pageCount = pdf.numPages;
        const dpr = window.devicePixelRatio || 1;
        container.innerHTML = '';

        if (pageCount > 1) {
            const indicator = document.createElement('div');
            indicator.className = 'pdf-page-indicator';
            indicator.innerHTML = '<i class="fas fa-layer-group icon"></i>共 ' + pageCount + ' 页 · 上下滚动查看';
            container.appendChild(indicator);
        }

        // Pre-create canvases sized to viewport so layout doesn't jump as pages render
        const queue = [];
        for (let i = 1; i <= pageCount; i++) {
            const page = await pdf.getPage(i);
            const baseViewport = page.getViewport({ scale: 1 });
            const scale = (maxWidth / baseViewport.width) * dpr;
            const viewport = page.getViewport({ scale });
            const canvas = document.createElement('canvas');
            canvas.className = 'pdf-page';
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            canvas.style.width  = (viewport.width / dpr) + 'px';
            canvas.style.height = (viewport.height / dpr) + 'px';
            container.appendChild(canvas);
            queue.push({ page, canvas, viewport });
        }

        // Render sequentially so the first page appears quickly
        for (const job of queue) {
            await job.page.render({ canvasContext: job.canvas.getContext('2d'), viewport: job.viewport }).promise;
        }
    }

    // ---------- Render PDF thumbnails on load ----------
    async function renderThumbnails() {
        if (typeof pdfjsLib === 'undefined') return;
        for (const card of cards) {
            if (card.dataset.type !== 'pdf') continue;
            const frame = card.querySelector('.cert-frame');
            const canvas = card.querySelector('canvas');
            if (!canvas) continue;
            try {
                const cardWidth = card.getBoundingClientRect().width || 200;
                await renderPdfThumbnail(card, canvas, Math.max(cardWidth * 1.8, 360));
                if (frame) frame.classList.add('loaded');
            } catch (err) {
                console.warn('PDF thumbnail render failed:', card.dataset.cert, err);
                // Fallback: show generic icon if rendering fails
                if (frame) {
                    frame.classList.add('loaded');
                    const fallback = document.createElement('div');
                    fallback.className = 'cert-fallback';
                    fallback.innerHTML = '<i class="fas fa-file-pdf" style="font-size:48px;color:#dc2626;"></i><br><span style="display:block;margin-top:10px;color:#475569;font-size:13px;">' + (card.dataset.caption || '查看证书') + '</span>';
                    fallback.style.cssText = 'position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:16px;background:#fff;';
                    frame.appendChild(fallback);
                }
            }
        }
    }

    // ---------- Lightbox ----------
    const lightbox    = document.getElementById('honorLightbox');
    const lbBody      = document.getElementById('lightboxBody');
    const lbCaption   = document.getElementById('lightboxCaption');
    const lbOverlay   = lightbox && lightbox.querySelector('.lightbox-overlay');
    const lbClose     = lightbox && lightbox.querySelector('.lightbox-close');
    const lbPrev      = lightbox && lightbox.querySelector('.lightbox-prev');
    const lbNext      = lightbox && lightbox.querySelector('.lightbox-next');

    let currentIndex = 0;
    const cardsArr = Array.from(cards);

    function showSpinner() {
        lbBody.classList.remove('pdf-mode');
        lbBody.innerHTML = '<div class="lightbox-spinner"><i class="fas fa-spinner fa-spin"></i></div>';
    }

    async function showCert(index) {
        currentIndex = (index + cardsArr.length) % cardsArr.length;
        const card = cardsArr[currentIndex];
        const url  = card.dataset.cert;
        const type = card.dataset.type;

        lbCaption.textContent = card.dataset.caption || '';
        showSpinner();

        if (type === 'image') {
            const img = new Image();
            img.alt = card.dataset.caption || '';
            img.onload = () => {
                lbBody.classList.remove('pdf-mode');
                lbBody.innerHTML = '';
                lbBody.appendChild(img);
            };
            img.onerror = () => { lbBody.innerHTML = '<div style="padding:40px;color:#64748b;">图片加载失败</div>'; };
            img.src = url;
        } else if (type === 'pdf') {
            if (typeof pdfjsLib === 'undefined') {
                lbBody.innerHTML = '<div style="padding:40px;color:#64748b;">PDF 预览不可用</div>';
                return;
            }
            try {
                const stageMaxWidth = Math.min(window.innerWidth * 0.85, 1000);
                lbBody.classList.add('pdf-mode');
                lbBody.innerHTML = '';
                const wrapper = document.createElement('div');
                wrapper.className = 'pdf-pages';
                lbBody.appendChild(wrapper);
                await renderPdfAllPages(card, wrapper, stageMaxWidth);
                lbBody.scrollTop = 0;
            } catch (err) {
                console.warn('PDF lightbox render failed:', err);
                lbBody.classList.remove('pdf-mode');
                lbBody.innerHTML = '<div style="padding:40px;color:#64748b;">PDF 加载失败</div>';
            }
        }
    }

    function openLightbox(index) {
        showCert(index);
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setTimeout(() => {
            lbBody.classList.remove('pdf-mode');
            lbBody.innerHTML = '';
        }, 300);
    }

    cardsArr.forEach((card, idx) => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            openLightbox(idx);
        });
    });

    if (lbOverlay) lbOverlay.addEventListener('click', closeLightbox);
    if (lbClose)   lbClose.addEventListener('click', closeLightbox);
    if (lbPrev)    lbPrev.addEventListener('click', () => showCert(currentIndex - 1));
    if (lbNext)    lbNext.addEventListener('click', () => showCert(currentIndex + 1));

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape')      closeLightbox();
        if (e.key === 'ArrowLeft')   showCert(currentIndex - 1);
        if (e.key === 'ArrowRight')  showCert(currentIndex + 1);
    });

    // Kick off thumbnail rendering once PDF.js is ready & DOM is laid out
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(renderThumbnails, 50);
    } else {
        document.addEventListener('DOMContentLoaded', () => setTimeout(renderThumbnails, 50));
    }
})();

