// 定义翻译字典
const translations = {
    'zh': {
        // --- 导航 & 页脚 ---
        'nav.home': '首页',
        'nav.about': '关于我们',
        'nav.products': '产品中心',
        'nav.news': '新闻资讯',
        'nav.gallery': '企业形象',
        'nav.contact': '联系我们',
        'footer.desc': '专注纺织助剂17年，为您提供最优质的化学品解决方案。致力于精细化工领域。',
        'footer.links': '快速链接',
        'footer.contact': '联系方式',
        'footer.addr_text': '浙江省江山市江东工业园区兴工八二路1号', // 为了复用地址文本

        // --- 首页 (Home) ---
        'home.hero_title': '专注纺织助剂<br>研发生产',
        'home.hero_desc': '17年行业经验 · 科技创新 · 品质保证 · 年产18000吨',
        'home.btn_explore': '探索产品 <i class="fas fa-arrow-right"></i>',
        'home.btn_about': '了解伟丰',
        'stats.years': '年 励精图治',
        'stats.ton1': '吨 助剂年产量',
        'stats.ton2': '吨 硅油年产量',
        'stats.sat': '% 客户满意度',
        
        // --- 关于我们 (About) ---
        'sect.about_title': '公司简介',
        'sect.about_desc1': '浙江伟丰新材料有限公司（原江山市伟丰化工厂）位于江山市江东工业园区，是一家专业从事环保型纺织印染助剂生产销售及有机硅材料生产销售的化工企业。',
        'sect.about_desc2': '致力于产品开发、市场开拓，力求专业化、精细化。产品基本覆盖纺织品整理的所有领域。',
        'sect.about_list1': '<i class="fas fa-check-circle"></i> 环保型纺织印染助剂',
        'sect.about_list2': '<i class="fas fa-check-circle"></i> 高浓缩三元嵌段硅油',
        'sect.about_list3': '<i class="fas fa-check-circle"></i> 二甲基硅油及精细化工产品',
        'btn.more': '了解更多详情',
        'about.header_title': '17年专注纺织助剂',
        'about.header_desc': '研发 · 生产 · 销售 —— 致力于成为行业领先的纺织化学品供应商',
        'about.desc3': '我公司纺织助剂类产品主要涵盖纺织品的前处理、染色和印花、后整理、功能整理等多个环节，包括多个系列数十个品种。产品基本可以涵盖到纺织品后整理的所有领域。',
        'about.desc4': '多年的经营和取得的成绩离不开广大新老客户的支持和厚爱。“高质量的产品，具有竞争力的价格、及时的交货、优质的服务”是我企一贯的追求。',

        // --- 产品中心 (Products) ---
        'prod.header_title': '认真执着 精益求精',
        'prod.header_desc': '致力于纺织助剂产品研发、力求专业化、精细化',
        'prod.intro_title': '致力于精细化工领域',
        'prod.intro_text': '我公司纺织助剂类产品主要涵盖纺织品的前处理、染色和印花、后整理、功能整理等多个环节，包括多个系列数十个品种。主要包括：各类新型有机硅柔软剂、平滑剂、羊绒羊毛用助剂、三元嵌段硅油、多功能整理剂、染色用助剂、生物酶酵素、固色剂、净洗剂、消泡剂、高浓硅油、二甲基硅油及部分精细化工产品。',
        'prod.cat1_title': '端(氨/环氧/聚醚环氧) 硅油系列',
        'prod.cat1_desc': '各种端基反应性线性改性硅油；嵌段共聚反应的关键中间体；拥有极低的挥发份，满足出口要求。',
        'prod.cat2_title': '前处理系列',
        'prod.cat2_desc': '前处理助剂就是纺织品在印染处理前进行一系列处理的助剂，一般有精炼剂、洗净剂、除油剂等。',
        'prod.cat3_title': '染色系列',
        'prod.cat3_desc': '染色剂是染色工艺的主体，不同纤维织物使用不同的染色剂，染料加工助剂有助溶剂、分散剂等。',
        'prod.cat4_title': '高浓缩三元嵌段硅油系列',
        'prod.cat4_desc': '适用各种纤维织物提高柔滑挺弹度的后整理，特别是涤纶以及涤粘、涤棉等混纺织物。',
        'prod.cat5_title': '软片系列',
        'prod.cat5_desc': '适用于全棉及其混纺针织物、机织物的柔软整理，尤其是对亲水及色光有高要求的柔软整理工艺。',
        'prod.cat6_title': '增白剂系列',
        'prod.cat6_desc': '增白剂是一类能提高纤维织物和纸张等白度的有机化合物。织物等常常由于含有色杂质而呈黄色。',
        'prod.cat7_title': '功能系列',
        'prod.cat7_desc': '适用于棉、涤纶、羊毛及其混纺织物的非耐久阻燃整理、吸湿排汗整理、抗静电处理、香味整理。',
        'prod.silicone_sub': 'SILICONE OIL SERIES',
        'prod.pre_sub': 'Pre-treatment Chemicals',
        'prod.dye_sub': 'Dyeing Series',
        'prod.soft_sub': 'Softener Flake Series',
        'prod.bright_sub': 'Brightening Series',
        'prod.func_sub': 'FUNCTIONAL AGENT SERIES',
        'btn.view_more': 'view more',
        'sect.prod_title': '核心产品系列',
        'prod.silicone': '端(氨/环氧)硅油系列',
        'prod.pre': '前处理系列',
        'prod.dye': '染色系列',
        'prod.soft': '软片系列',
        'btn.view_all': '查看全部产品',

        // --- 新闻资讯 (News) ---
        'sect.news_title': '新闻资讯',
        'news.header_title': '与世界联接',
        'news.header_desc': '致力打造纺织助剂产品领袖品牌',
        'news.tab_industry': '行业资讯',
        'news.tab_company': '公司新闻',
        'news.tab_faq': '常见问题',
        'news.ind_1_title': '伟丰公司俞建芳经理《新一代环保硅油的介绍》',
        'news.ind_1_desc': '讲解主题：新一代环保硅油的介绍。深入解析行业发展趋势与技术革新，探讨如何在环保政策日益严格的背景下，通过技术创新实现可持续发展。',
        'news.ind_2_title': '纺织品印染助剂不断创新 助力纺织品行业发展',
        'news.ind_2_desc': '据不完全统计，2000年纺织印染助剂产量47万t，销售额约200亿元；2005年产量75万t，销售额约330亿元。预计未来我国助剂产量将继续维持增长趋势。',
        'news.ind_3_title': '印染助剂产品开发 配方还是“捷径”',
        'news.ind_3_desc': '纺织印染助剂作为纺织印染的重要原料之一，是用以改善纺织印染品质，提高纺织品附加值。',
        'news.co_1_title': '浙江伟丰新材料有限公司 35kta 高端有机硅系列产品扩产项目环境影响评价信息公示',
        'news.co_1_desc': '浙江伟丰新材料有限公司 35kta 高端有机硅系列产品扩产项目环境影响评价信息公示.pdf',
        'news.co_2_title': '二甲基硅油，它的功能可以运用在哪里？',
        'news.co_2_desc': '硅油属于不少行业使用比较多的一种，它的作用主要取到了产品中的柔和润滑。',
        'news.faq_1_title': '如何选择合适的硅油产品？',
        'news.faq_1_desc': '根据织物的材质（棉、涤纶、混纺等）以及所需的整理效果（亲水、蓬松、平滑等）来选择不同侧基改性的硅油。',
        'news.read_more': 'Read More <i class="fas fa-long-arrow-alt-right"></i>',

        // --- 企业形象 (Gallery) ---
        'gallery.header_title': '因为专业，所以值得信赖',
        'gallery.header_desc': '深入了解我们的生产环境和设备',
        'gallery.filter_all': '全部展示',
        'gallery.filter_env': '企业环境',
        'gallery.filter_workshop': '生产车间',
        'gallery.filter_lab': '实验室',
        'gallery.cap_gate': '厂区大门实景',
        'gallery.cap_garden': '花园式厂区一角',
        'gallery.cap_building': '综合办公大楼',
        'gallery.cap_tank': '大型反应釜设备',
        'gallery.cap_lab': '产品研发中心',

        // --- 联系我们 (Contact) 页面专用 ---
        'contact.header_title': '真诚服务 客户至上',
        'contact.header_desc': '以优质服务赢得客户满意 · 专业专注 · 值得信赖',
        'contact.info_title': '联系方式',
        'contact.info_sub': '期待您与伟丰联系，我们将竭诚为您服务',
        'contact.co_name': '浙江伟丰新材料有限公司',
        'contact.office_name': '绍兴办事处',
        'contact.label_tel': '电话:',
        'contact.label_fax': '传真:',
        'contact.label_addr': '地址:',
        'contact.btn_map': '查看在线地图',

        // --- 理由 ---
        'sect.why_title': '选择我们的理由',
        'sect.why_sub': '人才、技术和效益是公司的核心基石',
        'why.1_title': '公司实力 — 17年专业厂家',
        'why.1_desc': '17年专业纺织印染助剂厂家，产品种类齐全，涵盖各类功能整理剂。产品包括各类新型有机硅柔软剂、平滑剂等。',
        'why.2_title': '专业团队 — 研发创新',
        'why.2_desc': '伟丰公司专业从事环保型纺织印染助剂生产销售及有机硅材料生产。公司团队致力于产品开发、市场开拓，力求专业化、精细化。',
        'why.3_title': '客户服务 — 尽心尽力为客户利益优先',
        'why.3_desc': '公司凭借多年的研发经验尽心尽力为客户服务，选择我们等于选择实力保证。秉承优质的产品、优惠的价格、优良的售后服务与新老客户竭诚合作。'
    },
    'en': {
        // --- Navigation & Footer ---
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.products': 'Products',
        'nav.news': 'News',
        'nav.gallery': 'Gallery',
        'nav.contact': 'Contact Us',
        'footer.desc': 'Focusing on textile auxiliaries for 17 years, providing you with the best chemical solutions.',
        'footer.links': 'Quick Links',
        'footer.contact': 'Contact Info',
        'footer.addr_text': 'No. 1 Xinggong 82nd Rd, Jiangdong Ind. Park, Jiangshan',

        // --- Home ---
        'home.hero_title': 'Focus on Textile Auxiliaries<br>R&D and Production',
        'home.hero_desc': '17 Years Experience · Innovation · Quality · 18,000 Tons Annual Output',
        'home.btn_explore': 'Explore Products <i class="fas fa-arrow-right"></i>',
        'home.btn_about': 'About Wei Feng',
        'stats.years': 'Years of Effort',
        'stats.ton1': 'Tons Auxiliaries Output',
        'stats.ton2': 'Tons Silicone Output',
        'stats.sat': '% Customer Satisfaction',

        // --- About ---
        'sect.about_title': 'Company Profile',
        'sect.about_desc1': 'Zhejiang Wei Feng New Material Co., Ltd. is located in Jiangdong Industrial Park, Jiangshan City. We are a chemical enterprise specializing in the production and sales of eco-friendly textile printing and dyeing auxiliaries.',
        'sect.about_desc2': 'Committed to product development and market expansion, striving for specialization and refinement. Our products cover almost all fields of textile finishing.',
        'sect.about_list1': '<i class="fas fa-check-circle"></i> Eco-friendly Auxiliaries',
        'sect.about_list2': '<i class="fas fa-check-circle"></i> High Conc. Block Silicone Oil',
        'sect.about_list3': '<i class="fas fa-check-circle"></i> Dimethyl Silicone Oil & Chemicals',
        'btn.more': 'Learn More',
        'about.header_title': '17 Years Focus on Auxiliaries',
        'about.header_desc': 'R&D · Production · Sales — Striving to be a leading textile chemical supplier',
        'about.desc3': 'Our textile auxiliary products mainly cover pretreatment, dyeing and printing, post-finishing, and functional finishing, including dozens of varieties in multiple series. Basically covering all fields of textile post-finishing.',
        'about.desc4': 'Years of operation and achievements are inseparable from the support of our customers. "High-quality products, competitive prices, timely delivery, and excellent service" are our consistent pursuit.',

        // --- Products ---
        'prod.header_title': 'Diligent & Professional',
        'prod.header_desc': 'Committed to R&D of textile auxiliaries, striving for specialization and refinement',
        'prod.intro_title': 'Committed to Fine Chemicals',
        'prod.intro_text': 'Our textile auxiliary products mainly cover multiple links such as pretreatment, dyeing and printing, post-finishing, and functional finishing. Main products include: various new organic silicone softeners, smoothing agents, wool auxiliaries, ternary block silicone oil, multifunctional finishing agents, dyeing auxiliaries, biological enzymes, fixing agents, detergents, defoamers, high-concentration silicone oil, and dimethyl silicone oil.',
        'prod.cat1_title': 'Silicone Oil Series (Amino/Epoxy)',
        'prod.cat1_desc': 'Various end-group reactive linear modified silicone oils; key intermediates for block copolymerization; extremely low volatiles, meeting export requirements.',
        'prod.cat2_title': 'Pre-treatment Series',
        'prod.cat2_desc': 'Pre-treatment auxiliaries are used for a series of treatments before printing and dyeing, generally including scouring agents, detergents, and degreasers.',
        'prod.cat3_title': 'Dyeing Series',
        'prod.cat3_desc': 'Dyeing agents are the main body of the dyeing process. Different fibers use different dyeing agents. Processing auxiliaries include solubilizers, dispersants, etc.',
        'prod.cat4_title': 'High Conc. Block Silicone Oil',
        'prod.cat4_desc': 'Suitable for post-finishing of various fabrics to improve softness and resilience, especially for polyester, polyester-viscose, and polyester-cotton blends.',
        'prod.cat5_title': 'Softener Flake Series',
        'prod.cat5_desc': 'Suitable for soft finishing of cotton and blended knits and woven fabrics, especially for processes requiring high hydrophilicity and color shade protection.',
        'prod.cat6_title': 'Brightening Series',
        'prod.cat6_desc': 'Optical brighteners are organic compounds that improve the whiteness of fabrics and paper. Fabrics often appear yellow due to colored impurities.',
        'prod.cat7_title': 'Functional Series',
        'prod.cat7_desc': 'Suitable for non-durable flame retardant finishing, moisture wicking, antistatic treatment, and fragrance finishing of cotton, polyester, wool and blends.',
        'prod.silicone_sub': 'SILICONE OIL SERIES',
        'prod.pre_sub': 'Pre-treatment Chemicals',
        'prod.dye_sub': 'Dyeing Series',
        'prod.soft_sub': 'Softener Flake Series',
        'prod.bright_sub': 'Brightening Series',
        'prod.func_sub': 'FUNCTIONAL AGENT SERIES',
        'btn.view_more': 'view more',
        'sect.prod_title': 'Core Products',
        'prod.silicone': 'Silicone Oil Series',
        'prod.pre': 'Pre-treatment Series',
        'prod.dye': 'Dyeing Series',
        'prod.soft': 'Softener Flake Series',
        'btn.view_all': 'View All Products',

        // --- News ---
        'sect.news_title': 'Latest News',
        'news.header_title': 'Connect with the World',
        'news.header_desc': 'Committed to building a leading brand of textile auxiliaries',
        'news.tab_industry': 'Industry News',
        'news.tab_company': 'Company News',
        'news.tab_faq': 'FAQ',
        'news.ind_1_title': 'Manager Yu Jianfang: "Introduction to New Eco-friendly Silicone Oil"',
        'news.ind_1_desc': 'Topic: Introduction to the new generation of eco-friendly silicone oil. In-depth analysis of industry trends and technological innovations in the context of stricter environmental policies.',
        'news.ind_2_title': 'Innovation in Textile Auxiliaries Aids Industry Development',
        'news.ind_2_desc': 'According to incomplete statistics, the output of textile auxiliaries was 470,000 tons in 2000. It is expected that the output of auxiliaries in our country will continue to maintain a growth trend.',
        'news.ind_3_title': 'Product Development: Formulation is the "Shortcut"',
        'news.ind_3_desc': 'As one of the important raw materials for textile printing and dyeing, textile auxiliaries are used to improve quality and increase the added value of textiles.',
        'news.co_1_title': 'Wei Feng New Material 35kta High-end Silicone Expansion Project EIA Publicity',
        'news.co_1_desc': 'Zhejiang Wei Feng New Material Co., Ltd. 35kta high-end silicone series product expansion project environmental impact assessment information publicity.',
        'news.co_2_title': 'Where can Dimethyl Silicone Oil be applied?',
        'news.co_2_desc': 'Silicone oil is used in many industries, and its main function is to provide soft lubrication in products.',
        'news.faq_1_title': 'How to choose suitable silicone oil products?',
        'news.faq_1_desc': 'Select different side-chain modified silicone oils based on the fabric material (cotton, polyester, blends, etc.) and the desired finishing effect (hydrophilic, fluffy, smooth, etc.).',
        'news.read_more': 'Read More <i class="fas fa-long-arrow-alt-right"></i>',

        // --- Gallery ---
        'gallery.header_title': 'Trust Built on Professionalism',
        'gallery.header_desc': 'Explore our production environment and equipment',
        'gallery.filter_all': 'All',
        'gallery.filter_env': 'Environment',
        'gallery.filter_workshop': 'Workshop',
        'gallery.filter_lab': 'Laboratory',
        'gallery.cap_gate': 'Factory Gate',
        'gallery.cap_garden': 'Garden-style Factory',
        'gallery.cap_building': 'Office Building',
        'gallery.cap_tank': 'Large Reactor Equipment',
        'gallery.cap_lab': 'R&D Center',

        // --- Contact Page Specific ---
        'contact.header_title': 'Customer First Service',
        'contact.header_desc': 'Winning customer satisfaction through quality, professionalism and trust',
        'contact.info_title': 'Contact Information',
        'contact.info_sub': 'We look forward to hearing from you and serving you wholeheartedly',
        'contact.co_name': 'Zhejiang Wei Feng New Material Co., Ltd.',
        'contact.office_name': 'Shaoxing Office',
        'contact.label_tel': 'Tel:',
        'contact.label_fax': 'Fax:',
        'contact.label_addr': 'Add:',
        'contact.btn_map': 'View Online Map',

        // --- Reasons ---
        'sect.why_title': 'Why Choose Us',
        'sect.why_sub': 'Talent, Technology and Efficiency are our Cornerstones',
        'why.1_title': 'Company Strength — 17 Years',
        'why.1_desc': '17 years professional manufacturer. Complete product range including various new organic silicone softeners and smoothing agents.',
        'why.2_title': 'Professional Team — R&D',
        'why.2_desc': 'Wei Feng team is committed to product development and market expansion, striving for specialization and refinement in chemical production.',
        'why.3_title': 'Customer Service — Priority',
        'why.3_desc': 'With years of R&D experience, we serve our customers wholeheartedly. Choosing us means choosing quality assurance. We cooperate with customers with high-quality products and competitive prices.'
    }
};

function setLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(lang)) {
            btn.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // 初始化语言
    const savedLang = localStorage.getItem('preferredLang') || 'zh';
    setLanguage(savedLang);

    // 1. 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // 2. 移动端菜单切换
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
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
                if (mobileBtn) {
                    const icon = mobileBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
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
        const duration = 2000;
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

    // Tab 切换逻辑
    const tabBtns = document.querySelectorAll('.tab-btn');
    const newsLists = document.querySelectorAll('.news-list');
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const targetTab = btn.getAttribute('data-tab');
                newsLists.forEach(list => list.classList.remove('active'));
                document.getElementById(targetTab).classList.add('active');
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
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.classList.remove('hide');
                        setTimeout(() => {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            }, 50);
                        }, 0);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.classList.add('hide');
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
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
    var infoWindow = new BMap.InfoWindow("地址：浙江省江山市经济技术开发区兴工八二路1号", opts);
    marker.addEventListener("click", function(){ map.openInfoWindow(infoWindow, point); });
    map.openInfoWindow(infoWindow, point);
}