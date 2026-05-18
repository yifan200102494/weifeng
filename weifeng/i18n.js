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
        'footer.desc': '专注纺织助剂20+年，为您提供最优质的化学品解决方案。致力于精细化工领域。',
        'footer.links': '快速链接',
        'footer.contact': '联系方式',
        'footer.contact_methods': '联系方式:',
        'footer.hotline': '客服热线:',
        'footer.manager_wang': '15924062099（王经理）',
        'footer.manager_mao': '15957042077（毛经理）',
        'footer.addr': '<i class="fas fa-map-marker-alt"></i> 浙江省衢州市江山市上余镇兴工八二路一号 浙江伟丰新材料有限公司',
        'footer.addr_text': '浙江省衢州市江山市上余镇兴工八二路一号 浙江伟丰新材料有限公司',

        // --- 首页 (Home) ---
        'home.hero_title': '专注纺织助剂<br>研发生产',
        'home.hero_desc': '20+年行业经验 · 科技创新 · 品质保证 · 年产18000吨',
        'home.btn_explore': '探索产品 <i class="fas fa-arrow-right"></i>',
        'home.btn_about': '了解伟丰',
        'stats.years': '年 励精图治',
        'stats.ton1': '吨 助剂年产量',
        'stats.ton2': '吨 硅油年产量',
        'stats.sat': '% 客户满意度',
        
        // --- 关于我们 (About) ---
        'sect.about_title': '公司简介',
        'sect.about_desc1': '浙江伟丰新材料有限公司是深耕环保型纺织印染助剂及有机硅新材料生产销售领域二十余年的现代化高新技术企业，一直致力于纺织印染的前处理、后整理，及防水系列等功能性产品开发、有机硅新材料的端氨硅油、低环体端环氧硅油和聚醚环氧硅油系列的产品创新研发。',
        'sect.about_desc2': '全力满足客户个性化需求，打造市场顶尖精品，与客户携手打造行业知名度，追求共同高质量发展是浙江伟丰一贯的追求！',
        'sect.about_list1': '<i class="fas fa-check-circle"></i> 环保型纺织印染助剂',
        'sect.about_list2': '<i class="fas fa-check-circle"></i> 高浓缩三元嵌段硅油',
        'sect.about_list3': '<i class="fas fa-check-circle"></i> 二甲基硅油及精细化工产品',
        'btn.more': '了解更多详情',
        'about.header_title': '20+年专注纺织助剂',
        'about.header_desc': '研发 · 生产 · 销售 —— 致力于成为行业领先的纺织化学品供应商',
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
        'prod.cat4_title': '防水系列',
        'prod.cat4_desc': '适用于各种纤维及织物的防水、防油整理，提升面料耐洗性能、加工稳定性和手感表现。',
        'prod.cat5_title': '软片系列',
        'prod.cat5_desc': '适用于全棉及其混纺针织物、机织物的柔软整理，尤其是对亲水及色光有高要求的柔软整理工艺。',
        'prod.cat6_title': '增白剂系列',
        'prod.cat6_desc': '增白剂是一类能提高纤维织物和纸张等白度的有机化合物。织物等常常由于含有色杂质而呈黄色。',
        'prod.cat7_title': '功能系列',
        'prod.cat7_desc': '适用于棉、涤纶、羊毛及其混纺织物的抗静电、吸湿快干、抗紫外线、芳香、除硅、阻燃、抗菌防臭及APEO/NPEO去除等功能整理。',
        'prod.cat8_title': '硅油产品系列',
        'prod.cat8_desc': '涵盖蓬松、平滑、功能及亲水硅油整理剂，适用于棉、涤纶、锦纶及多种混纺织物。',
        'prod.silicone_sub': 'SILICONE OIL SERIES',
        'prod.silicone_product_sub': 'SILICONE OIL PRODUCT SERIES',
        'prod.waterproof_sub': 'WATERPROOF SERIES',
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
        'news.home_company_title': '浙江伟丰新材料有限公司介绍',
        'news.home_company_desc': '浙江伟丰新材料有限公司位于江山市江东工业园区，是一家专业从事环保型纺织印染助剂的企业。',
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
        'contact.co_name': '江山本部',
        'contact.office_name': '客服热线:',
        'contact.label_tel': '电话:',
        'contact.label_fax': '传真:',
        'contact.label_addr': '地址:',
        'contact.label_contact': '<i class="fas fa-phone"></i> 联系方式:',
        'contact.label_hotline': '热线:',
        'contact.btn_map': '查看在线地图',

        // --- 理由 ---
        'sect.why_title': '选择我们的理由',
        'sect.why_sub': '人才、技术和效益是公司的核心基石',
        'why.1_title': '公司实力 — 20+年专业厂家',
        'why.1_desc': '20+年专业纺织印染助剂厂家，产品种类齐全，涵盖各类功能整理剂。产品包括各类新型有机硅柔软剂、平滑剂等。',
        'why.2_title': '专业团队 — 研发创新',
        'why.2_desc': '伟丰公司专业从事环保型纺织印染助剂生产销售及有机硅材料生产。公司团队致力于产品开发、市场开拓，力求专业化、精细化。',
        'why.3_title': '客户服务 — 尽心尽力为客户利益优先',
        'why.3_desc': '公司凭借多年的研发经验尽心尽力为客户服务，选择我们等于选择实力保证。秉承优质的产品、优惠的价格、优良的售后服务与新老客户竭诚合作。',

        'sect.honor_title': '荣誉资质',
        'sect.honor_sub': '权威认证 · 品质保障 · 行业标杆',
        'honor.tag1_cn': '高新技术企业',
        'honor.tag1_en': 'HIGH AND NEW TECHNOLOGY ENTERPRISES',
        'honor.tag2_cn': '创新型中小企业',
        'honor.tag2_en': 'INNOVATIVE SMALL AND MEDIUM-SIZED ENTERPRISES',
        'honor.tag3_cn': '专精特新中小企业',
        'honor.tag3_en': 'SPECIALIZED AND INNOVATIVE SMALL AND MEDIUM-SIZED ENTERPRISES'
    },
    'en': {
        // --- Navigation & Footer ---
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.products': 'Products',
        'nav.news': 'News',
        'nav.gallery': 'Gallery',
        'nav.contact': 'Contact Us',
        'footer.desc': 'Focusing on textile auxiliaries for 20+ years, providing you with the best chemical solutions.',
        'footer.links': 'Quick Links',
        'footer.contact': 'Contact Info',
        'footer.contact_methods': 'Contact:',
        'footer.hotline': 'Customer Hotline:',
        'footer.manager_wang': '15924062099 (Manager Wang)',
        'footer.manager_mao': '15957042077 (Manager Mao)',
        'footer.addr': '<i class="fas fa-map-marker-alt"></i> Zhejiang Wei Feng New Material Co., Ltd., No. 1 Xinggong 82nd Rd, Shangyu Town, Jiangshan, Quzhou, Zhejiang',
        'footer.addr_text': 'Zhejiang Wei Feng New Material Co., Ltd., No. 1 Xinggong 82nd Rd, Shangyu Town, Jiangshan, Quzhou, Zhejiang',

        // --- Home ---
        'home.hero_title': 'Focus on Textile Auxiliaries<br>R&D and Production',
        'home.hero_desc': '20+ Years Experience · Innovation · Quality · 18,000 Tons Annual Output',
        'home.btn_explore': 'Explore Products <i class="fas fa-arrow-right"></i>',
        'home.btn_about': 'About Wei Feng',
        'stats.years': 'Years of Effort',
        'stats.ton1': 'Tons Auxiliaries Output',
        'stats.ton2': 'Tons Silicone Output',
        'stats.sat': '% Customer Satisfaction',

        // --- About ---
        'sect.about_title': 'Company Profile',
        'sect.about_desc1': 'Zhejiang Wei Feng New Material Co., Ltd. is a modern high-tech enterprise with more than 20 years of experience in eco-friendly textile printing and dyeing auxiliaries and new organic silicone materials. We focus on pretreatment, post-finishing and waterproof functional products for textile printing and dyeing, as well as innovative development of amino-terminated silicone oil, low-cyclic epoxy-terminated silicone oil, and polyether epoxy silicone oil series.',
        'sect.about_desc2': 'Fully meeting customers personalized needs, creating market-leading boutique products, building industry recognition together with customers, and pursuing shared high-quality development are Zhejiang Wei Feng’s consistent goals.',
        'sect.about_list1': '<i class="fas fa-check-circle"></i> Eco-friendly Auxiliaries',
        'sect.about_list2': '<i class="fas fa-check-circle"></i> High Conc. Block Silicone Oil',
        'sect.about_list3': '<i class="fas fa-check-circle"></i> Dimethyl Silicone Oil & Chemicals',
        'btn.more': 'Learn More',
        'about.header_title': '20+ Years Focus on Auxiliaries',
        'about.header_desc': 'R&D · Production · Sales — Striving to be a leading textile chemical supplier',
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
        'prod.cat4_title': 'Waterproof Series',
        'prod.cat4_desc': 'Suitable for waterproof and oil-repellent finishing of various fibers and fabrics, improving wash durability, processing stability, and hand feel.',
        'prod.cat5_title': 'Softener Flake Series',
        'prod.cat5_desc': 'Suitable for soft finishing of cotton and blended knits and woven fabrics, especially for processes requiring high hydrophilicity and color shade protection.',
        'prod.cat6_title': 'Brightening Series',
        'prod.cat6_desc': 'Optical brighteners are organic compounds that improve the whiteness of fabrics and paper. Fabrics often appear yellow due to colored impurities.',
        'prod.cat7_title': 'Functional Series',
        'prod.cat7_desc': 'Suitable for antistatic, moisture wicking, UV-resistant, fragrance, silicone removal, flame retardant, antibacterial deodorizing, and APEO/NPEO removal finishing of cotton, polyester, wool and blends.',
        'prod.cat8_title': 'Silicone Oil Product Series',
        'prod.cat8_desc': 'Covers fluffy, smooth, functional, and hydrophilic silicone oil finishing agents for cotton, polyester, nylon, and blended fabrics.',
        'prod.silicone_sub': 'SILICONE OIL SERIES',
        'prod.silicone_product_sub': 'SILICONE OIL PRODUCT SERIES',
        'prod.waterproof_sub': 'WATERPROOF SERIES',
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
        'news.home_company_title': 'Introduction to Zhejiang Wei Feng New Material Co., Ltd.',
        'news.home_company_desc': 'Zhejiang Wei Feng New Material Co., Ltd. is located in Jiangshan and specializes in eco-friendly textile printing and dyeing auxiliaries.',
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
        'contact.co_name': 'Jiangshan Headquarters',
        'contact.office_name': 'Customer Hotline:',
        'contact.label_tel': 'Tel:',
        'contact.label_fax': 'Fax:',
        'contact.label_addr': 'Add:',
        'contact.label_contact': '<i class="fas fa-phone"></i> Contact:',
        'contact.label_hotline': 'Hotline:',
        'contact.btn_map': 'View Online Map',

        // --- Reasons ---
        'sect.why_title': 'Why Choose Us',
        'sect.why_sub': 'Talent, Technology and Efficiency are our Cornerstones',
        'why.1_title': 'Company Strength — 20+ Years',
        'why.1_desc': '20+ years professional manufacturer. Complete product range including various new organic silicone softeners and smoothing agents.',
        'why.2_title': 'Professional Team — R&D',
        'why.2_desc': 'Wei Feng team is committed to product development and market expansion, striving for specialization and refinement in chemical production.',
        'why.3_title': 'Customer Service — Priority',
        'why.3_desc': 'With years of R&D experience, we serve our customers wholeheartedly. Choosing us means choosing quality assurance. We cooperate with customers with high-quality products and competitive prices.',

        'sect.honor_title': 'Honors & Certifications',
        'sect.honor_sub': 'Authoritative certifications · Quality assured · Industry benchmark',
        'honor.tag1_cn': 'High & New Technology Enterprise',
        'honor.tag1_en': 'HIGH AND NEW TECHNOLOGY ENTERPRISES',
        'honor.tag2_cn': 'Innovative SME',
        'honor.tag2_en': 'INNOVATIVE SMALL AND MEDIUM-SIZED ENTERPRISES',
        'honor.tag3_cn': 'Specialized & Innovative SME',
        'honor.tag3_en': 'SPECIALIZED AND INNOVATIVE SMALL AND MEDIUM-SIZED ENTERPRISES'
    }
};

const productPageExactTranslations = {
    '首页': 'Home',
    '关于我们': 'About Us',
    '产品中心': 'Products',
    '新闻资讯': 'News',
    '企业形象': 'Gallery',
    '联系我们': 'Contact Us',
    '快速链接': 'Quick Links',
    '联系方式': 'Contact Info',
    '联系方式:': 'Contact:',
    '客服热线:': 'Customer Hotline:',
    '浙江省衢州市江山市上余镇兴工八二路一号 浙江伟丰新材料有限公司': 'Zhejiang Wei Feng New Material Co., Ltd., No. 1 Xinggong 82nd Rd, Shangyu Town, Jiangshan, Quzhou, Zhejiang',
    '15924062099（王经理）': '15924062099 (Manager Wang)',
    '15957042077（毛经理）': '15957042077 (Manager Mao)',
    '专注纺织助剂20+年，为您提供最优质的化学品解决方案。致力于精细化工领域。': 'Focusing on textile auxiliaries for 20+ years, providing you with the best chemical solutions. Committed to fine chemical solutions.',

    '产品名称': 'Product Name',
    '外观': 'Appearance',
    '物化特性': 'Physical/Chemical Properties',
    '应用及工艺': 'Applications & Process',
    '适用面料': 'Applicable Fabrics',
    '备注': 'Remarks',
    '粘度': 'Viscosity',
    '用途': 'Use',
    '化学式': 'Chemical Formula',
    '特 性': 'Features',
    '特性': 'Features',
    '应 用': 'Applications',
    '应用': 'Applications',
    '包装贮运': 'Packaging, Storage & Transport',
    '发布时间: 2025-01-22': 'Published: 2025-01-22',
    '发布时间: 2025-01-22 17:39': 'Published: 2025-01-22 17:39',

    '端(氨/环氧/聚醚环氧) 硅油系列详情 | 浙江伟丰新材料有限公司': 'Silicone Oil Series Details | Zhejiang Wei Feng New Material Co., Ltd.',
    '端 (氨/环氧/聚醚环氧) 硅油系列': 'Silicone Oil Series (Amino/Epoxy/Polyether Epoxy Terminated)',
    '端(氨/环氧/聚醚环氧) 硅油系列': 'Silicone Oil Series (Amino/Epoxy/Polyether Epoxy Terminated)',
    '端含氢硅油系列': 'Terminal Hydrogen Silicone Oil Series',
    '端环氧硅油系列': 'Terminal Epoxy Silicone Oil Series',
    '聚醚环氧硅油系列': 'Polyether Epoxy Silicone Oil Series',
    '低环体端含氢硅油系列': 'Low-cyclic Terminal Hydrogen Silicone Oil Series',
    '低环体端环氧硅油系列': 'Low-cyclic Terminal Epoxy Silicone Oil Series',
    '低环体聚醚环氧硅油系列': 'Low-cyclic Polyether Epoxy Silicone Oil Series',
    '可定制各种特殊规格的端含氢硅油，低环体含量的端含氢硅油。': 'Custom terminal hydrogen silicone oils with special specifications and low cyclic content are available.',
    '可定制各种特殊规格端环氧硅油，低环体含量的端环氧硅油。': 'Custom terminal epoxy silicone oils with special specifications and low cyclic content are available.',
    '可定制各种规格的聚醚环氧硅油，低环体含量的聚醚环氧硅油。': 'Polyether epoxy silicone oils in various specifications and low cyclic content are available.',
    '端含氢硅油是利用其端基上的Si-H键，通过硅氢化反应，在末链端引入硅氢键的聚硅氧烷。它是生产有机硅改性嵌段或接枝共聚物的关键起始原料和重要的有机硅中间体。': 'Terminal hydrogen silicone oil uses the Si-H bond at the terminal group to introduce silicone-hydrogen bonds at the chain end through hydrosilylation. It is a key starting material and important silicone intermediate for silicone-modified block or graft copolymers.',
    '本品采用1000L聚乙烯塑料新桶包装，包装规格950Kg。本产品应贮存在通风、阴凉、干燥的环境中，不允许同酸、碱等有害物质接触。自生产之日起，贮存期为一年。': 'Packed in new 1000L polyethylene plastic drums, 950 kg per package. Store in a ventilated, cool and dry place, away from acids, alkalis and other harmful substances. Shelf life is one year from the production date.',
    '端环氧活性高，分子量分布均匀，粘度稳定。': 'High terminal epoxy activity, uniform molecular-weight distribution and stable viscosity.',
    '分子量8000-15000，具体规格和挥发分可依据客户定制。': 'Molecular weight 8000-15000; specifications and volatile content can be customized.',
    '无色无毒，无刺激气味，稳定性好。': 'Colorless, non-toxic, no irritating odor and good stability.',
    '各种有机硅嵌段硅油合成的起始原料。': 'Starting material for various silicone block silicone oils.',
    '有机硅纺织面料整理剂的主要中间体。': 'Main intermediate for silicone textile finishing agents.',
    '大量用于树脂交联剂，可调节树脂强度，柔和性，树脂反应性。': 'Widely used in resin crosslinkers to adjust resin strength, softness and reactivity.',
    '环氧聚硅氧烷大量用于建筑，增强基材强度、牢度的成膜性更具有良好防水功能。': 'Epoxy polysiloxanes are widely used in construction to improve substrate strength and film durability, with good waterproofing performance.',
    '用于柔水，蓬松硅油合成': 'For soft-water and fluffy silicone oil synthesis',
    '用于柔软，蓬松硅油合成': 'For soft and fluffy silicone oil synthesis',
    '用于柔软，滑爽硅油合成': 'For soft and smooth silicone oil synthesis',
    '用于超滑、柔软硅油合成': 'For super-smooth and soft silicone oil synthesis',
    '特殊定制的聚醚结构，环氧活性高，已将有机硅、聚醚、聚酯、酰胺等多种基团有机共聚在一起，采用不同分子量的多元共聚环氧硅油可以合成出各种手感风格的嵌段硅油。': 'Specially customized polyether structure with high epoxy activity. Silicone, polyether, polyester, amide and other groups are organically copolymerized, and multi-component epoxy silicone oils with different molecular weights can be used to synthesize block silicone oils with varied hand-feel styles.',
    '在合成嵌段硅油的过程中只需加入有机胺就可以聚合成新型嵌段硅油，稳定性好，手感佳。': 'During block silicone oil synthesis, adding organic amine can polymerize a new block silicone oil with good stability and hand feel.',
    '合成过程中，反应活性高，反应彻底，大幅度减少有机溶剂的用量，降低生产过程和运输途中的风险，反应生成均一透明的高含量嵌段硅油，品质更稳定，更加环保。': 'The synthesis has high reactivity and complete reaction, greatly reducing organic-solvent use and risks in production and transport. It produces uniform, transparent, high-content block silicone oil with more stable quality and better environmental performance.',
    '进行季铵化改性后的产品在亲水性、稳定性方面较普通的季铵盐改性硅油更佳。': 'After quaternary ammonium modification, the product offers better hydrophilicity and stability than ordinary quaternary ammonium modified silicone oil.',
    '可定制低环体含量的聚醚环氧硅油，满足国外客户需求。': 'Low-cyclic polyether epoxy silicone oil can be customized to meet overseas customer needs.',
    '水溶性的环氧树脂体系中，提高树脂的柔韧性、降低内应力。': 'Improves flexibility and reduces internal stress in water-soluble epoxy resin systems.',
    '可定制低环体含量的聚醚环氧硅油，符合欧洲标准，提供更多选择。': 'Low-cyclic polyether epoxy silicone oil can be customized to meet European standards and provide more choices.',

    '前处理系列详情 | 浙江伟丰新材料有限公司': 'Pre-treatment Series Details | Zhejiang Wei Feng New Material Co., Ltd.',
    '前处理系列': 'Pre-treatment Series',
    '前处理助剂就是纺织品在印染处理前进行一系列处理的助剂，一般有精炼剂、洗净剂、除油剂等。': 'Pre-treatment auxiliaries are used before textile dyeing and printing, including scouring agents, detergents, degreasing agents and related products.',
    '前处理系列产品一览': 'Pre-treatment Product List',
    '前处理系列产品涵盖去油、乳化、精练、渗透、退浆、抛光、消泡、螯合分散等工艺环节，适用于棉、涤纶、含氨纶织物及多种混纺织物的前处理和染整加工。': 'The pre-treatment series covers degreasing, emulsifying, scouring, penetrating, desizing, polishing, defoaming, chelating and dispersing processes for cotton, polyester, spandex-containing fabrics and many blends.',

    '染色系列详情 | 浙江伟丰新材料有限公司': 'Dyeing Series Details | Zhejiang Wei Feng New Material Co., Ltd.',
    '染色系列': 'Dyeing Series',
    '染色剂是染色工艺的主体，不同纤维织物使用不同的染色剂，染料加工助剂有助溶剂、分散剂等。': 'Dyeing auxiliaries support dyeing processes for different fibers, including leveling, soaping and fixing agents.',
    '染色系列产品一览': 'Dyeing Product List',
    '匀染剂': 'Leveling Agents',
    '皂洗剂': 'Soaping Agents',
    '固色剂': 'Fixing Agents',

    '增白剂系列详情 | 浙江伟丰新材料有限公司': 'Brightening Series Details | Zhejiang Wei Feng New Material Co., Ltd.',
    '增白剂系列': 'Brightening Series',
    '增白剂是一类能提高纤维织物和纸张等白度的有机化合物。织物等常常由于含有色杂质而呈黄色，本系列产品能显著提升白度和鲜艳度。': 'Brightening agents are organic compounds that improve the whiteness of fibers, fabrics and paper. This series significantly improves whiteness and brightness.',
    '增白剂系列产品一览': 'Brightening Product List',
    '增白剂系列产品适用于涤纶、棉、麻及混纺织物的白度和鲜艳度提升，覆盖热熔轧染、浸染及棉用增白整理等应用场景。': 'The brightening series improves whiteness and brightness for polyester, cotton, linen and blended fabrics, covering thermosol padding, exhaustion and cotton brightening finishing.',

    '功能系列详情 | 浙江伟丰新材料有限公司': 'Functional Series Details | Zhejiang Wei Feng New Material Co., Ltd.',
    '功能系列': 'Functional Series',
    '适用于棉、涤纶、羊毛及其混纺织物的特殊功能整理，包括防水整理、抗静电整理、吸湿快干整理、抗紫外线整理、芳香整理、阻燃整理及抗菌防臭整理等，提升纺织品的附加值。': 'Functional finishing for cotton, polyester, wool and blended fabrics, including waterproofing, antistatic, moisture-wicking, UV-resistant, fragrance, flame-retardant and antibacterial/deodorizing finishes.',
    '功能系列产品一览': 'Functional Product List',
    '功能系列产品覆盖防水、防油、抗静电、吸湿快干、抗紫外线、芳香、荧光剥除、除硅、阻燃、抗菌防臭及APEO/NPEO去除等应用场景，适用于棉、涤纶、锦纶、氨纶及多种混纺织物。': 'The functional series covers waterproofing, oil resistance, antistatic, moisture-wicking, UV resistance, fragrance, fluorescent stripping, silicone removal, flame retardancy, antibacterial/deodorizing and APEO/NPEO removal for cotton, polyester, nylon, spandex and many blends.',

    '硅油产品系列详情 | 浙江伟丰新材料有限公司': 'Silicone Oil Product Series Details | Zhejiang Wei Feng New Material Co., Ltd.',
    '硅油产品系列': 'Silicone Oil Product Series',
    '硅油产品系列涵盖蓬松、平滑、功能及亲水整理等应用方向，适用于棉、涤纶、锦纶、氨纶、毛绒及多种混纺织物的柔软、滑爽、蓬松、亲水和特殊手感整理。': 'The silicone oil product series covers fluffy, smooth, functional and hydrophilic finishing for cotton, polyester, nylon, spandex, fleece and many blended fabrics.',
    '硅油产品系列产品一览': 'Silicone Oil Product List',
    '本系列产品包括嵌段硅油蓬松、氨基硅油蓬松、嵌段硅油平滑、氨基硅油平滑、功能硅油及亲水硅油等多个小系列，覆盖浸轧、浸渍及复配整理工艺。': 'This series includes block silicone fluffy, amino silicone fluffy, block silicone smoothing, amino silicone smoothing, functional silicone and hydrophilic silicone products for padding, exhaustion and compounding finishing.',
    '嵌段硅油蓬松系列': 'Block Silicone Fluffy Series',
    '氨基硅油蓬松系列': 'Amino Silicone Fluffy Series',
    '嵌段硅油平滑系列': 'Block Silicone Smoothing Series',
    '氨基硅油平滑系列': 'Amino Silicone Smoothing Series',
    '亲水系列': 'Hydrophilic Series',

    '软片系列详情 | 浙江伟丰新材料有限公司': 'Softener Flake Series Details | Zhejiang Wei Feng New Material Co., Ltd.',
    '软片系列': 'Softener Flake Series',
    '软片系列适用于棉、人棉、麻、腈纶及其他合成纤维的柔软整理，可赋予织物柔软、丰满的手感，并具备良好的配伍稳定性。': 'The softener flake series is suitable for soft finishing of cotton, rayon, linen, acrylic and other synthetic fibers, giving fabrics a soft and full hand feel with good compatibility.',
    '软片系列产品一览': 'Softener Flake Product List',
    '本系列包含片状柔软剂与软油精，可用于浸渍、浸轧整理，适用于天然纤维、合成纤维及混纺织物的柔软、亲水和手感提升。': 'This series includes softener flakes and softening concentrates for exhaustion and padding, improving softness, hydrophilicity and hand feel of natural, synthetic and blended fabrics.',

    '防水系列详情 | 浙江伟丰新材料有限公司': 'Waterproof Series Details | Zhejiang Wei Feng New Material Co., Ltd.',
    '高浓缩三元嵌段硅油系列': 'Waterproof Series',
    '防水系列': 'Waterproof Series',
    '适用各种纤维织物提高柔滑挺弹度的后整理，特别是涤纶以及涤粘、涤棉等混纺织物。本产品为高浓度原油，使用时可根据需要进行稀释，性价比极高。': 'Waterproof finishing agents for various fiber fabrics, providing durable water repellency and good processing stability.',
    '可赋予织物优异的防水性能': 'Imparts excellent water repellency to fabrics',
    '防水系列产品一览': 'Waterproof Product List'
};

Object.assign(productPageExactTranslations, {
    '用量：轧染热熔法1-3g/L；浸染0.1-0.3%(o.w.f)': 'Dosage: thermosol padding 1-3g/L; exhaustion 0.1-0.3%(o.w.f)',
    '用量：轧染热熔法1.5-4g/L；浸染0.15-0.4%(o.w.f)': 'Dosage: thermosol padding 1.5-4g/L; exhaustion 0.15-0.4%(o.w.f)',
    '具有白度高、用量少、可中温发色的优点': 'High whiteness, low dosage and medium-temperature shade development',
    '具有优良的白度，色光纯正鲜艳，高温定型泛黄少': 'Excellent whiteness, pure bright shade and low yellowing during high-temperature setting',
    '优异的耐酸、耐碱、耐硬水、耐电解质性能，低泡': 'Excellent acid, alkali, hard-water and electrolyte resistance with low foam',

    '能赋予织物柔软、丰满的手感': 'Gives fabrics a soft and full hand feel',
    '优异的配伍性能，在pH:3-10范围内，能很好地稳定于工作液中': 'Excellent compatibility; stable in the working bath within pH 3-10',
    '浅黄色液体': 'Light-yellow liquid',
    '瞬间亲水及优异的手感性能': 'Instant hydrophilicity and excellent hand-feel performance',
    '低泡、低粘度、不粘缸': 'Low foam, low viscosity and no sticking to the tank',
    '环保，可生物降解': 'Eco-friendly and biodegradable',

    '无色或淡黄色透明液体': 'Colorless or light-yellow transparent liquid',
    '适用条件广泛，防止沾缸再沾污布面': 'Wide processing suitability; prevents tank staining and re-staining on fabric',
    '黄色或淡黄色透明液体': 'Yellow or light-yellow transparent liquid',
    '浅色粘稠液体': 'Light-colored viscous liquid',
    '适用条件广泛，去油净化二合一': 'Wide processing suitability; combines degreasing and cleaning',
    '对分散化纤油剂、粘度高的机械油等效果显著': 'Highly effective on dispersed synthetic-fiber oils and high-viscosity machine oils',
    '与去油剂4315CA复配性能更佳': 'Better performance when compounded with degreaser 4315CA',
    '涤纶及含氨织物或混纺织物': 'Polyester, spandex-containing fabrics and blends',
    '涤纶机织、经纬编针织及含氨纶织物': 'Polyester woven, warp/weft knitted and spandex-containing fabrics',
    '低温去油（中性条件和不耐碱织物）': 'Low-temperature degreasing for neutral conditions and alkali-sensitive fabrics',
    '弱碱性和中性浴中，含氨纶织物氨配去油': 'Degreasing of spandex-containing fabrics in weak alkaline and neutral baths',
    '碱性条件中，涤纶织物及全棉同浴去油': 'Same-bath degreasing for polyester and all-cotton fabrics under alkaline conditions',
    '防止面料产生褶皱': 'Prevents fabric creasing',
    '可用于染色和前处理': 'For dyeing and pre-treatment',
    '黄色粘稠体': 'Yellow viscous paste',
    '连续退煮漂工艺：2-4g/L': 'Continuous desizing, scouring and bleaching process: 2-4g/L',
    '具有优异的渗透性、耐电解质、稀释性好': 'Excellent penetration, electrolyte resistance and dilution stability',
    '优异的渗透、稳定性': 'Excellent penetration and stability',
    '良好的复配性': 'Good compounding compatibility',
    '提高染色的均匀性及渗染性': 'Improves dyeing uniformity and penetration',
    '具有增溶、乳化、去污的能力': 'Solubilizing, emulsifying and cleaning ability',
    '可高效去除涤纶纤维产生的低聚物，保持缸体和布面的整洁': 'Efficiently removes oligomers from polyester fibers and keeps the tank and fabric surface clean',
    '棕褐色液体': 'Dark brown liquid',
    '具有优异的去除淀粉浆料的性能，处理条件温和': 'Excellent starch-size removal with mild processing conditions',
    '复配稳定性好，节能环保': 'Good compounding stability, energy saving and eco-friendly',
    '减少织物起毛、起球现象，改善织物外观和手感': 'Reduces fuzzing and pilling, improving fabric appearance and hand feel',
    '可缩短加工时间，减少水和能源消耗，提高生产再现性': 'Shortens processing time, reduces water and energy use and improves production reproducibility',
    '用量少、消泡快、效果持久': 'Low dosage, fast defoaming and long-lasting effect',
    '适用于80-160℃的水溶液中的消泡和抑泡': 'Suitable for defoaming and foam suppression in aqueous solutions at 80-160℃',
    '用量：纺织印染煮练：0.02-0.1g/L；纸浆涂层上浆漂白：0.2-2g/L': 'Dosage: textile scouring 0.02-0.1g/L; pulp coating, sizing and bleaching 0.2-2g/L',
    '具有较强的氧化性和优异的渗透性和乳化分散性': 'Strong oxidation with excellent penetration, emulsification and dispersibility',
    '用量：溢流染色机1-3g/L；卷染机2-3g/L；连续煮漂机5-8g/L': 'Dosage: overflow dyeing machine 1-3g/L; jigger 2-3g/L; continuous scouring/bleaching machine 5-8g/L',
    '淡黄色透明或微浊液体': 'Light-yellow transparent or slightly turbid liquid',
    '高温高压染色': 'High-temperature high-pressure dyeing',
    '高温分散稳定性强，移染能力强，提高匀染效果，染色重现性好且化料方便': 'Strong high-temperature dispersion stability and migration; improves leveling, reproducibility and dye dissolution',
    '适用于各种织物的前处理染色皂洗工艺': 'Suitable for pre-treatment, dyeing and soaping processes of various fabrics',
    '黄色至浅棕色液体': 'Yellow to light-brown liquid',
    '适用于各种织物的前处理、染色、皂洗工艺，特别对重金属铁离子有极佳螯合分散能力': 'Suitable for pre-treatment, dyeing and soaping of various fabrics, with excellent chelating and dispersing ability for heavy-metal iron ions',
    '防止针洞产生': 'Prevents pinholes',

    '防水系列适用于各种纤维及织物的防水、防油整理，可提升面料耐洗性能、加工稳定性和手感表现，满足无氟防水、C6防水防油及配套交联整理需求。': 'The waterproof series is used for water- and oil-repellent finishing of fibers and fabrics, improving wash durability, processing stability and hand feel while supporting fluorine-free, C6 water/oil repellent and crosslinking systems.',
    '手感影响小，色变小，白度影响小': 'Low impact on hand feel, shade and whiteness',
    '性价比高，加工稳定性好': 'Cost-effective with good processing stability',
    '各种纤维及织物': 'Various fibers and fabrics',
    '优良的防水性能，优异的加工稳定性': 'Excellent water repellency and processing stability',
    '手感影响小，手抓感低': 'Low impact on hand feel and low grab feel',
    '面料适应性较广': 'Broad fabric adaptability',
    '可赋予织物优异的防水性能，面料适应性好': 'Gives fabrics excellent water repellency with good fabric adaptability',
    '手感影响小，滑移影响小，色变和白度影响小': 'Low impact on hand feel, slippage, shade and whiteness',
    '与其他类型无氟防水剂复配可改善手抓感问题': 'Compounding with other fluorine-free waterproofing agents can improve grab feel',
    '手感柔软，手抓感小，织物皱裂影响小': 'Soft hand feel, low grab feel and low fabric cracking impact',
    '配合本公司交联剂产品，具有优异的防洗烘干和阴干性能': 'Used with our crosslinker for excellent wash, tumble-dry and shade-dry performance',
    '与其他类型无氟防水剂复配可明显改善手感': 'Compounding with other fluorine-free waterproofing agents clearly improves hand feel',
    '无氟强防水，面料适应性强': 'Strong fluorine-free waterproofing with high fabric adaptability',
    '配合本公司交联剂产品，具有优异的防洗性能': 'Used with our crosslinker for excellent wash resistance',
    '防剥离牢度好，贴条牢度好，手抓感轻': 'Good peel resistance, good seam-tape fastness and light grab feel',
    '优异的阴干性能': 'Excellent shade-dry performance',
    '织物手感影响小，面料适应性较广': 'Low fabric hand-feel impact and broad fabric adaptability',
    '乳白色偏黄乳液': 'Milky yellowish emulsion',
    '乳液稳定性好，织物黄变色变小': 'Good emulsion stability with low fabric yellowing and shade change',
    '面料适应性广': 'Broad fabric adaptability',
    '优异的防水防油效果，防油效果尤为突出': 'Excellent water and oil repellency, especially strong oil repellency',
    '具有优异的耐洗性能，防剥离牢度影响小': 'Excellent wash durability with low impact on peel fastness',
    '能赋予面料优异的强防水效果': 'Provides fabrics with excellent strong waterproofing',
    '面料适应性较好': 'Good fabric adaptability',
    '与防水剂配套使用，提高织物防水防油性能': 'Used with waterproofing agents to improve fabric water and oil repellency',
    '显著提高织物耐洗性能': 'Significantly improves fabric wash durability',
    '黄变小，手感影响小，初始防水效果有一定提升': 'Low yellowing, low hand-feel impact and improved initial waterproofing'
});

Object.assign(productPageExactTranslations, {
    '染色系列产品涵盖修补、匀染、皂洗、还原清洗、固色等染整工艺环节，适用于涤纶、棉、尼龙、锦纶及多种混纺织物。': 'The dyeing series covers repairing, leveling, soaping, reduction clearing and fixing processes for polyester, cotton, nylon and many blended fabrics.',
    '浅黄色至黄色透明液体': 'Light-yellow to yellow transparent liquid',
    '淡黄色至黄色透明液体': 'Light-yellow to yellow transparent liquid',
    '具有超强的移染性': 'Very strong migration ability',
    '回修后色光基本保持不变': 'Shade remains basically unchanged after correction',
    '用量：修补瑕疵0.5-1.5g/L；高温匀染剂0.1-0.3g/L': 'Dosage: defect correction 0.5-1.5g/L; high-temperature leveling agent 0.1-0.3g/L',
    '功能及特点本产品消色性小，染色重现好': 'Low shade stripping and good dyeing reproducibility',
    '适用涤纶，尤其是超细涤纶织物及混纺织物高温高压染色': 'Suitable for high-temperature, high-pressure dyeing of polyester, especially microfiber polyester and blends',
    '对分散染料具有优异的缓染、移染、分散性': 'Excellent retarding, migration and dispersion for disperse dyes',
    '降低分散染料对纤维的沾污': 'Reduces staining of fibers by disperse dyes',
    '浅黄色粘稠液体': 'Light-yellow viscous liquid',
    '提高尼龙染色的匀染性及再现性': 'Improves leveling and reproducibility of nylon dyeing',
    '对织物颜色及耐晒牢度无影响': 'No impact on fabric shade or light fastness',
    '低泡性': 'Low foaming',
    '尼龙': 'Nylon',
    '对不同水质具有广泛的适应能力': 'Broad adaptability to different water qualities',
    '耐盐性及高温分散性优良，移染能力强，染色重现性好': 'Excellent salt resistance and high-temperature dispersion, strong migration and good dyeing reproducibility',
    '极佳的分散性': 'Excellent dispersibility',
    '有效降低织物玻璃化温度，渗透到织物内部': 'Effectively lowers the glass-transition temperature and penetrates into the fabric',
    '棕深色液体': 'Dark brown liquid',
    '适用于多种活性染料的拼色，可使各个染料具有均一的上染速率，从而消除色花、色差、条痕，不影响色光': 'Suitable for shade matching with many reactive dyes, giving dyes uniform uptake rates to reduce color spots, shade differences and streaks without affecting shade',
    '改善水质，保持染浴稳定性': 'Improves water quality and keeps the dye bath stable',
    '优异的缓染性和移染性': 'Excellent retarding and migration properties',
    '棕深色粘稠液体': 'Dark brown viscous liquid',
    '优异的染料增溶和分散性能': 'Excellent dye solubilizing and dispersing performance',
    '优异的缓染性，使染料均匀上染，保持上染一致性': 'Excellent retarding performance for uniform dye uptake and consistent exhaustion',
    '对钙、镁离子有很好的螯合能力': 'Good chelating ability for calcium and magnesium ions',
    '对织物白地上有优异的防沾色效果': 'Excellent anti-staining effect on white grounds',
    '无色至浅黄色透明液体': 'Colorless to light-yellow transparent liquid',
    '用于分散染料染色后的酸性还原清洗': 'For acidic reduction clearing after disperse dyeing',
    '极佳的皂洗能力、防返沾能力': 'Excellent soaping and anti-back-staining ability',
    '通用性无泡，高效、环保、节水节能，皂洗干净': 'Universal foam-free product; efficient, eco-friendly, water-saving and energy-saving, with clean soaping',
    '纤维素纤维及其混纺织物': 'Cellulosic fibers and blended fabrics',
    '白色颗粒': 'White granules',
    '适用于染色后皂洗，使织物具有良好的皂洗牢度和撞白牢度，使用温度65-95℃，视颜色及深浅': 'Suitable for after-dyeing soaping, giving fabrics good soaping fastness and white-ground fastness; use at 65-95℃ depending on shade depth',
    '用于染色后去除浮色，适用于溢流机、气流机及筒子纱': 'Removes unfixed color after dyeing; suitable for overflow machines, airflow machines and package yarn',
    '锦纶、真丝、羊毛等': 'Nylon, silk, wool, etc.',
    '无色液体': 'Colorless liquid',
    '新一代分散染料染色后还原清洗剂': 'New-generation reduction clearing agent after disperse dyeing',
    '还原能力强，使用方便易于清洗，清洗后织物更加鲜艳，更加安全': 'Strong reducing ability, easy to use and wash off; fabrics are brighter and safer after cleaning',
    '棕黄色透明粘稠液体': 'Brown-yellow transparent viscous liquid',
    '适用颜色范围大，色变小，固色重现性好': 'Wide shade range, small shade change and good fixing reproducibility',
    '提高织物的耐洗、汗渍、高温水泡等湿摩擦牢度': 'Improves wet rubbing fastness related to washing, perspiration and hot-water soaking',
    '适用颜色范围广': 'Wide shade applicability',
    '适用性广，固色效果佳': 'Broad applicability and good fixing effect',
    '黄色透明粘液': 'Yellow transparent viscous liquid',
    '可显著提高织物的各项牢度，色变极少': 'Significantly improves fabric fastness with minimal shade change',
    '适用于蓝绿颜色，亦可作为消红色固色剂使用': 'Suitable for blue-green shades and can also be used as a red-neutralizing fixing agent',
    '可显著提高织物的各项牢度，尤其对耐氯方面有突出的效果': 'Significantly improves fabric fastness, especially chlorine resistance',
    '(久置色深)': '(shade deepens after long storage)',
    '用于全棉布类，可与硅油、软油同浴，不建议与固色剂同浴': 'For all-cotton fabrics; can be used in the same bath with silicone oil and softening oil, but not recommended with fixing agents',
    '全棉、T/C、混纺': 'All-cotton, T/C and blends',
    '用于分散染料，可有效提高其升华牢度': 'For disperse dyes; effectively improves sublimation fastness',
    '能有效提高水洗牢度，对织物色光影响极小': 'Effectively improves washing fastness with minimal impact on fabric shade',

    '适用于棉、涤纶、羊毛及其混纺织物的特殊功能整理，包括抗静电整理、吸湿快干整理、抗紫外线整理、芳香整理、荧光剥除、除硅、阻燃整理、抗菌防臭整理及APEO/NPEO去除等，提升纺织品的附加值。': 'Special functional finishing for cotton, polyester, wool and blends, including antistatic, moisture-wicking quick-dry, UV-resistant, fragrance, fluorescent stripping, silicone removal, flame-retardant, antibacterial deodorizing and APEO/NPEO removal finishes to increase textile value.',
    '功能系列产品覆盖抗静电、吸湿快干、抗紫外线、芳香、荧光剥除、除硅、阻燃、抗菌防臭及APEO/NPEO去除等应用场景，适用于棉、涤纶、锦纶、氨纶及多种混纺织物。': 'The functional series covers antistatic, moisture-wicking quick-dry, UV-resistant, fragrance, fluorescent stripping, silicone removal, flame-retardant, antibacterial deodorizing and APEO/NPEO removal applications for cotton, polyester, nylon, spandex and many blends.',
    '提高织物抗起毛起球性0.5级以上': 'Improves fabric anti-pilling grade by more than 0.5',
    '复配性好': 'Good compounding compatibility',
    '室温下易溶于水': 'Easily soluble in water at room temperature',
    '可与阳离子、非离子表面活性剂混用': 'Can be mixed with cationic and nonionic surfactants',
    '吸湿快干剂': 'Moisture-wicking Quick-dry Agent',
    '优异的吸湿快干性，易去污性和抗静电性': 'Excellent moisture-wicking, quick-dry, easy-clean and antistatic properties',
    '手感蓬松、柔软，耐洗性好': 'Fluffy and soft hand feel with good wash durability',
    '涤、锦纶、醋酯及其混纺织物': 'Polyester, nylon, acetate and blended fabrics',
    '黄棕色液体': 'Yellow-brown liquid',
    '提高织物日晒牢度': 'Improves fabric light fastness',
    '稳定性好，耐硬水、弱酸、弱碱': 'Good stability and resistance to hard water, weak acid and weak alkali',
    '染色同浴色光影响小': 'Low shade impact in same-bath dyeing',
    '对280-400nm波段的紫外线有良好的吸收转化、反射和散射性能': 'Good absorption conversion, reflection and scattering of UV light in the 280-400 nm range',
    '赋予纺织品持久的香味': 'Gives textiles a lasting fragrance',
    '织物的浸轧、浸渍整理，印花或涂层加工': 'For fabric padding, exhaustion finishing, printing or coating',
    '具有强力分散、乳化和清洗作用，能有效分散移去染机表面上的残余染料和其它杂质': 'Strong dispersing, emulsifying and cleaning action; effectively disperses and removes residual dyes and impurities from dyeing-machine surfaces',
    '浅黄色颗粒': 'Light-yellow granules',
    '适用于棉及其混纺织物的荧光剥色处理': 'Suitable for fluorescent stripping of cotton and blended fabrics',
    '环保产品，能有效溶解油渍、污渍产生的硅斑': 'Eco-friendly product that effectively dissolves silicone spots caused by oil and stains',
    '能有效去除有机硅等产生的交联物': 'Effectively removes crosslinked residues produced by silicone and related materials',
    '浅乳白色带蓝光液体': 'Light milky liquid with blue shade',
    '提高织物的抗磨性': 'Improves fabric abrasion resistance',
    '赋予织物抗起毛起球性能': 'Gives fabrics anti-fuzzing and anti-pilling performance',
    '整理后的织物能获得优良的阻燃效果': 'Finished fabrics obtain excellent flame-retardant effect',
    '纯棉、涤纶及其混纺织物': 'Pure cotton, polyester and blended fabrics',
    '提高织物的抗紫外线等级、耐日晒和耐汗光牢度有一定的耐洗性': 'Improves fabric UV resistance, light fastness and perspiration-light fastness with certain wash durability',
    '各种天然纤维、合成纤维': 'Various natural and synthetic fibers',
    '对金黄色葡萄球菌、大肠杆菌、白色念珠菌真菌等均具有优异抗菌作用': 'Excellent antibacterial effect against Staphylococcus aureus, Escherichia coli, Candida albicans and other fungi',
    '各种纤维及织物': 'Various fibers and fabrics',
    '整理后的织物能获得优良的抗菌效果': 'Finished fabrics obtain excellent antibacterial effect',
    '有效控制微生物的滋生和气味的产生，为基材提供持久的抗菌、清新效果，维护使用者健康': 'Effectively controls microbial growth and odor, providing lasting antibacterial freshness and supporting user health',
    '无色或浅黄色液体': 'Colorless or light-yellow liquid',
    '针对织物需要清除残留APEO、NPEO要求而最新开发的具有优异性能的染整助剂': 'A newly developed high-performance dyeing and finishing auxiliary for removing residual APEO and NPEO from fabrics'
});

Object.assign(productPageExactTranslations, {
    '赋予织物蓬松，细腻带挺的回弹手感，低黄变': 'Gives fabrics a fluffy, fine, crisp and resilient hand feel with low yellowing',
    '涤腈、涤锦': 'Polyester/acrylic and polyester/nylon blends',
    '手感蓬松，柔软，稳定性好': 'Fluffy, soft hand feel with good stability',
    '蓬松、柔软、低黄变，良好的稳定性和配伍性': 'Fluffy, soft, low-yellowing, with good stability and compatibility',
    '涤腈、棉': 'Polyester/acrylic and cotton',
    '棉、涤棉、罗马布、窗帘布、涤纶': 'Cotton, polyester/cotton, Roman fabric, curtain fabric and polyester',
    '良好的柔软性，厚重织物的透爽整理，适用于低温整理（低于160℃）': 'Good softness and breathable finishing for heavy fabrics; suitable for low-temperature finishing below 160℃',
    '棉、涤、各类化纤布、混纺': 'Cotton, polyester, synthetic fabrics and blends',
    '手感蓬松，厚实，渗透性好，抗起毛起球好': 'Fluffy and full hand feel, good penetration and good anti-pilling performance',
    '棉、涤棉家纺': 'Cotton and polyester/cotton home textiles',
    '乳白液体': 'Milky white liquid',
    '手感蓬松，柔滑，挺弹': 'Fluffy, smooth, crisp and elastic hand feel',
    '大兔毛、小兔毛、绒类面料': 'Large-rabbit-hair, small-rabbit-hair and fleece fabrics',
    '手感特蓬松，低黄变，稳定性好': 'Extra fluffy hand feel, low yellowing and good stability',
    '棉、涤棉混纺、破卡面料、涤纶混纺': 'Cotton, polyester/cotton blends, twill fabrics and polyester blends',
    '手感蓬松、柔滑，挺弹': 'Fluffy, smooth, crisp and elastic hand feel',
    '雪纺、涤纶装饰布、氨纶布': 'Chiffon, polyester decorative fabric and spandex fabric',
    '无色透明微带蓝光乳液': 'Colorless transparent emulsion with slight blue shade',
    '手感蓬松，挺弹，耐洗性好': 'Fluffy, crisp and elastic hand feel with good wash durability',
    '雪纺布、涤纶布': 'Chiffon fabric and polyester fabric',
    '淡黄透明液体': 'Light-yellow transparent liquid',
    '柔软、平滑、渗透性好，良好的滑爽及蓬感效果': 'Soft and smooth with good penetration, smoothness and fluffy effect',
    '雪纺、乱麻、巴厘纱': 'Chiffon, slub linen and voile',
    '棉用高水柔软剂，手感细腻柔软，亲水性好棉感强': 'High-hydrophilic cotton softener with fine soft hand feel, good hydrophilicity and strong cotton-like touch',
    '无色透明蓝光液体': 'Colorless transparent liquid with blue shade',
    '手感滑爽、蓬松丰满、柔软细腻': 'Smooth, fluffy, full, soft and fine hand feel',
    '手感滑柔，松软，细腻': 'Smooth, soft, loose and fine hand feel',
    '棉、人棉、涤纶、锦纶及其混纺织物': 'Cotton, rayon, polyester, nylon and blended fabrics',
    '浅白蓝光液体': 'Off-white liquid with blue shade',
    '手感滑爽、细腻': 'Smooth and fine hand feel',
    '带蓝光透明液体': 'Transparent liquid with blue shade',
    '手感滑爽、丰满、有弹性，稳定性好': 'Smooth, full and elastic hand feel with good stability',
    '刺毛布、涤纶、罗马布': 'Brushed fabric, polyester and Roman fabric',
    '手感爽滑、柔软、蓬松，耐盐碱好，低黄变': 'Smooth, soft and fluffy hand feel with good salt/alkali resistance and low yellowing',
    '淡黄色透明粘稠液体': 'Light-yellow transparent viscous liquid',
    '手感滑爽、柔软、细腻，抗起毛起球好': 'Smooth, soft and fine hand feel with good anti-pilling performance',
    '淡白色乳液': 'Off-white emulsion',
    '手感挺弹，丝滑': 'Crisp, elastic and silky hand feel',
    '涤纶、锦纶、丝织物及毛纺织物': 'Polyester, nylon, silk fabrics and wool fabrics',
    '无色至淡黄液体': 'Colorless to light-yellow liquid',
    '手感柔软、特细滑': 'Soft and extra fine-smooth hand feel',
    '涤棉、混纺提花、锦纶、腈纶、涤、棉等': 'Polyester/cotton, blended jacquard, nylon, acrylic, polyester, cotton, etc.',
    '手感柔软、特细滑、油感好': 'Soft, extra fine-smooth hand feel with good oily touch',
    '赋予织物或毛类产品超滑爽、柔软丰满回弹好的整理风格': 'Gives fabrics or wool-like products a super-smooth, soft, full and resilient finishing style',
    '具有耐洗刷洗涤性和良好的化学稳定性': 'Wash and brushing resistance with good chemical stability',
    '手感柔滑，挺弹，很好的水滑性、稳定性、混用性': 'Soft-smooth, crisp and elastic hand feel with excellent water-smoothness, stability and compatibility',
    '各种涤纶织物': 'Various polyester fabrics',
    '手感柔滑，挺弹，很好的稳定性、混用性': 'Soft-smooth, crisp and elastic hand feel with excellent stability and compatibility',
    '手感柔软，滑爽，冰凉丝质感，极低黄变，亲水性好': 'Soft, smooth, cool and silky hand feel with extremely low yellowing and good hydrophilicity',
    '有增深亮光效果，手感弹性好，不粘手，不粘辊，机上有一定亲水效果': 'Deepening and brightening effect, elastic hand feel, non-sticky to hand or roller, with some on-machine hydrophilic effect',
    '有很好的起毛效果，起绒，摇粒': 'Good raising, fleece and polar-fleece effect',
    '稳定性好，手感蓬松柔软': 'Good stability with fluffy and soft hand feel',
    '具有吸湿排汗效果': 'Moisture-wicking effect',
    '有良好的亲水性能，透气、抗静电，能使合成纤维克服起毛、起球的缺点': 'Good hydrophilicity, breathability and antistatic performance; helps synthetic fibers reduce fuzzing and pilling',
    '柔软、柔滑、低黄变，不油腻，亲水性': 'Soft, smooth, low-yellowing, non-greasy and hydrophilic',
    '亲水性好，手感柔软、柔滑、丝质般的后整理效果': 'Good hydrophilicity with soft, smooth and silk-like finishing effect'
});

const productPagePhraseTranslations = [
    ['浙江伟丰新材料有限公司', 'Zhejiang Wei Feng New Material Co., Ltd.'],
    ['详情', 'Details'],
    ['发布时间', 'Published'],
    ['发布', 'Published'],
    ['产品名称', 'Product Name'],
    ['物化特性', 'Physical/Chemical Properties'],
    ['应用及工艺', 'Applications & Process'],
    ['适用面料', 'Applicable Fabrics'],
    ['备注', 'Remarks'],
    ['外观', 'Appearance'],
    ['粘度', 'Viscosity'],
    ['含氢量', 'Hydrogen Content'],
    ['环氧值', 'Epoxy Value'],
    ['挥发份', 'Volatile Matter'],
    ['用途', 'Use'],

    ['强力乳化除油剂', 'Strong Emulsifying Degreaser'],
    ['强力乳化去油剂', 'Strong Emulsifying Degreaser'],
    ['强力去油剂', 'Strong Degreasing Agent'],
    ['乳化去油剂', 'Emulsifying Degreaser'],
    ['低温去油剂', 'Low-temperature Degreasing Agent'],
    ['浴中宝', 'Bath Additive'],
    ['棉用高效精练剂', 'High-efficiency Cotton Scouring Agent'],
    ['非离子渗透剂', 'Nonionic Penetrating Agent'],
    ['低聚物剥除剂', 'Oligomer Removing Agent'],
    ['高效退浆酶', 'High-efficiency Desizing Enzyme'],
    ['中性抛光酶', 'Neutral Polishing Enzyme'],
    ['消泡剂', 'Defoamer'],
    ['氧化退浆剂', 'Oxidative Desizing Agent'],
    ['练染同浴剂', 'One-bath Scouring and Dyeing Agent'],
    ['螯合分散剂', 'Chelating Dispersant'],
    ['重金属离子螯合分散剂', 'Heavy Metal Ion Chelating Dispersant'],

    ['高效快速匀染剂', 'High-speed Leveling Agent'],
    ['高浓酸性匀染剂', 'High-concentration Acid Leveling Agent'],
    ['耐盐高温匀染剂', 'Salt-resistant High-temperature Leveling Agent'],
    ['翠蓝艳蓝匀染剂', 'Turquoise/Brilliant Blue Leveling Agent'],
    ['高效修补剂', 'High-efficiency Repairing Agent'],
    ['高温匀染剂', 'High-temperature Leveling Agent'],
    ['高浓匀染剂', 'High-concentration Leveling Agent'],
    ['分散促进剂', 'Dispersing Promoter'],
    ['棉用匀染剂', 'Cotton Leveling Agent'],
    ['通用匀染剂', 'Universal Leveling Agent'],
    ['高效皂洗剂', 'High-efficiency Soaping Agent'],
    ['还原清洗剂', 'Reduction Clearing Agent'],
    ['防沾皂洗剂', 'Anti-staining Soaping Agent'],
    ['低温皂洗剂', 'Low-temperature Soaping Agent'],
    ['酸性皂洗剂', 'Acid Soaping Agent'],
    ['棉用高效固色剂', 'High-efficiency Cotton Fixing Agent'],
    ['高浓固色剂', 'High-concentration Fixing Agent'],
    ['酸性固色剂', 'Acid Fixing Agent'],
    ['交联固色剂', 'Crosslinking Fixing Agent'],
    ['翠蓝固色剂', 'Turquoise Blue Fixing Agent'],
    ['耐氯固色剂', 'Chlorine-resistant Fixing Agent'],
    ['湿摩擦牢度提升剂', 'Wet-rubbing Fastness Improver'],
    ['涤纶固色剂', 'Polyester Fixing Agent'],

    ['荧光增白剂', 'Fluorescent Brightener'],
    ['高效荧光增白剂', 'High-efficiency Fluorescent Brightener'],
    ['棉用增白剂', 'Cotton Brightener'],
    ['片状柔软剂', 'Softener Flake'],
    ['软油精', 'Softening Concentrate'],

    ['非离子抗静电剂', 'Nonionic Antistatic Agent'],
    ['阳离子抗静电剂', 'Cationic Antistatic Agent'],
    ['吸湿快干整理剂', 'Moisture-wicking Quick-dry Finishing Agent'],
    ['抗紫外线整理剂', 'UV-resistant Finishing Agent'],
    ['芳香整理剂', 'Fragrance Finishing Agent'],
    ['清缸剂', 'Vat Cleaning Agent'],
    ['荧光剥除剂', 'Fluorescent Stripping Agent'],
    ['除硅剂', 'Silicone Remover'],
    ['抗起毛起球剂', 'Anti-pilling Agent'],
    ['阻燃剂', 'Flame Retardant'],
    ['日晒牢度提升剂', 'Light Fastness Improver'],
    ['抗菌防臭剂', 'Antibacterial Deodorant Agent'],
    ['纳米抗菌剂', 'Nano Antibacterial Agent'],
    ['APEO/NPEO去除剂', 'APEO/NPEO Remover'],
    ['抗菌剂', 'Antibacterial Agent'],

    ['特松软整理剂', 'Extra-soft Finishing Agent'],
    ['高浓平滑整理剂', 'High-concentration Smoothing Agent'],
    ['绒类滑柔水硅油', 'Fleece Smooth Soft Water Silicone Oil'],
    ['吸湿排汗整理剂', 'Moisture-wicking Finishing Agent'],
    ['高手感亲水整理剂', 'Premium Hydrophilic Finishing Agent'],
    ['滑软亲水硅油', 'Smooth Soft Hydrophilic Silicone Oil'],
    ['松弹整理剂', 'Elastic Soft Finishing Agent'],
    ['蓬松整理剂', 'Fluffy Finishing Agent'],
    ['松软整理剂', 'Soft Finishing Agent'],
    ['松软硅油', 'Soft Silicone Oil'],
    ['家纺蓬松剂', 'Home-textile Fluffy Agent'],
    ['免毛蓬松剂', 'Wool-free Fluffy Agent'],
    ['滑弹整理剂', 'Smooth Elastic Finishing Agent'],
    ['平滑整理剂', 'Smoothing Agent'],
    ['冰感硅油', 'Cooling Silicone Oil'],
    ['亮光增深剂', 'Brightening Deepening Agent'],
    ['起毛柔软剂', 'Raising Softener'],
    ['多功能整理剂', 'Multifunctional Finishing Agent'],
    ['高浓亲水硅油', 'High-concentration Hydrophilic Silicone Oil'],
    ['特蓬松整理剂', 'Special Fluffy Finishing Agent'],
    ['松滑整理剂', 'Soft Smooth Finishing Agent'],
    ['滑软整理剂', 'Smooth Soft Finishing Agent'],
    ['超滑整理剂', 'Super-smooth Finishing Agent'],
    ['细滑整理剂', 'Fine Smooth Finishing Agent'],
    ['超弹整理剂', 'Super-elastic Finishing Agent'],
    ['柔滑整理剂', 'Soft Smooth Finishing Agent'],
    ['家纺平滑剂', 'Home-textile Smoothing Agent'],
    ['丝滑整理剂', 'Silky Smoothing Agent'],
    ['特柔滑硅油', 'Special Soft Smooth Silicone Oil'],
    ['免毛平滑剂', 'Wool-free Smoothing Agent'],

    ['无氟防水剂', 'Fluorine-free Waterproofing Agent'],
    ['C6防水防油剂', 'C6 Water and Oil Repellent'],
    ['C6强防水', 'C6 Strong Waterproofing Agent'],
    ['C6防水剂', 'C6 Waterproofing Agent'],
    ['交联剂', 'Crosslinking Agent'],

    ['无杂质透明液体', 'Clear liquid without impurities'],
    ['无色透明液体', 'Colorless transparent liquid'],
    ['无色至淡黄色透明液体', 'Colorless to light-yellow transparent liquid'],
    ['无色至淡黄色液体', 'Colorless to light-yellow liquid'],
    ['无色透明微乳液', 'Colorless transparent microemulsion'],
    ['无色透明微乳', 'Colorless transparent microemulsion'],
    ['无色透明液体', 'Colorless transparent liquid'],
    ['无色至淡黄色液体', 'Colorless to light-yellow liquid'],
    ['淡黄色透明液体', 'Light-yellow transparent liquid'],
    ['淡黄色液体', 'Light-yellow liquid'],
    ['淡黄色粘稠液体', 'Light-yellow viscous liquid'],
    ['淡黄色分散液', 'Light-yellow dispersion'],
    ['灰蓝色分散液', 'Gray-blue dispersion'],
    ['棕黄色至棕红色透明液体', 'Brown-yellow to reddish-brown transparent liquid'],
    ['棕黄色液体', 'Brown-yellow liquid'],
    ['黄棕色透明液体', 'Yellow-brown transparent liquid'],
    ['黄色粘稠液体', 'Yellow viscous liquid'],
    ['黄色透明液体', 'Yellow transparent liquid'],
    ['黄色至棕色微浑液体', 'Yellow to brown slightly turbid liquid'],
    ['白色粘稠液体', 'White viscous liquid'],
    ['白色悬浮液', 'White suspension'],
    ['乳白色液体', 'Milky white liquid'],
    ['乳白色微乳液', 'Milky white microemulsion'],
    ['乳白-淡黄色乳液', 'Milky white to light-yellow emulsion'],
    ['浅黄色片状固体', 'Light-yellow flake solid'],
    ['浅白色液体', 'Off-white liquid'],
    ['浅色透明粘稠液体', 'Light-colored transparent viscous liquid'],
    ['浅色透明液体', 'Light-colored transparent liquid'],
    ['透明液体', 'Transparent liquid'],
    ['透明液', 'Transparent liquid'],
    ['亚透明液体', 'Translucent liquid'],
    ['略带蓝光透明液体', 'Transparent liquid with slight blue shade'],
    ['略带蓝光透明微乳液', 'Transparent microemulsion with slight blue shade'],
    ['略带蓝光液体', 'Liquid with slight blue shade'],
    ['略带蓝光透明微乳', 'Transparent microemulsion with slight blue shade'],
    ['暗带蓝光透明液体', 'Transparent liquid with dark blue shade'],
    ['微带蓝光透明液体', 'Transparent liquid with slight blue shade'],
    ['乳白色流体', 'Milky white fluid'],
    ['乳白色液体', 'Milky white liquid'],
    ['微黄透明液体', 'Slightly yellow transparent liquid'],
    ['淡黄色透明微碱液体', 'Light-yellow transparent slightly alkaline liquid'],
    ['淡黄至棕色液体', 'Light-yellow to brown liquid'],

    ['阴/非', 'Anionic/Nonionic'],
    ['阳/非', 'Cationic/Nonionic'],
    ['弱阴/非', 'Weak Anionic/Nonionic'],
    ['弱阳/非', 'Weak Cationic/Nonionic'],
    ['弱阳离子', 'Weak cationic'],
    ['弱阴离子', 'Weak anionic'],
    ['弱阳', 'Weak cationic'],
    ['弱阴', 'Weak anionic'],
    ['阴离子', 'Anionic'],
    ['阳离子', 'Cationic'],
    ['非离子', 'Nonionic'],
    ['阳', 'Cationic'],
    ['阴', 'Anionic'],
    ['非', 'Nonionic'],

    ['各类纤维织物', 'all fiber fabrics'],
    ['各种纤维织物', 'various fiber fabrics'],
    ['各种织物', 'various fabrics'],
    ['各类织物', 'all fabrics'],
    ['涤纶及其混纺织物', 'polyester and blended fabrics'],
    ['涤纶及混纺织物', 'polyester and blended fabrics'],
    ['涤纶混纺织物', 'polyester blended fabrics'],
    ['涤纶织物', 'polyester fabrics'],
    ['棉及其混纺织物', 'cotton and blended fabrics'],
    ['棉、麻、混纺等织物', 'cotton, linen and blended fabrics'],
    ['棉、人棉、麻等天然纤维及其他合成纤维', 'cotton, rayon, linen and other natural or synthetic fibers'],
    ['腈纶、人棉、麻等天然纤维及其他合成纤维', 'acrylic, rayon, linen and other natural or synthetic fibers'],
    ['棉、人棉、涤及其混纺', 'cotton, rayon, polyester and blends'],
    ['棉、人棉、涤及其混纺织物', 'cotton, rayon, polyester and blended fabrics'],
    ['棉、涤及其混纺织物', 'cotton, polyester and blended fabrics'],
    ['棉、麻、涤', 'cotton, linen and polyester'],
    ['棉、麻、毛、丝、化纤织物', 'cotton, linen, wool, silk and synthetic fabrics'],
    ['棉、麻、毛、化纤织物', 'cotton, linen, wool and synthetic fabrics'],
    ['棉、麻、混纺、毛巾', 'cotton, linen, blended fabrics and towels'],
    ['涤、锦纶、醋酯、混纺', 'polyester, nylon, acetate and blends'],
    ['棉、涤、锦纶及其混纺织物', 'cotton, polyester, nylon and blended fabrics'],
    ['棉、涤纶、锦纶及其混纺织物', 'cotton, polyester, nylon and blended fabrics'],
    ['锦纶、涤纶及其混纺织物', 'nylon, polyester and blended fabrics'],
    ['锦棉、涤纶及其混纺织物', 'nylon/cotton, polyester and blended fabrics'],
    ['锦棉、涤纶及混纺织物', 'nylon/cotton, polyester and blended fabrics'],
    ['粘胶及其混纺织物', 'viscose and blended fabrics'],
    ['羊绒素纤维及其混纺织物', 'cashmere-like fibers and blends'],
    ['羊绒素纤维', 'cashmere-like fibers'],
    ['梭织、针织及其混纺织物', 'woven, knitted and blended fabrics'],
    ['各种天然纤维合成纤维', 'natural and synthetic fibers'],
    ['纯棉、丝光棉', 'pure cotton and mercerized cotton'],
    ['全涤、全棉、T/C、T/R', 'all-polyester, all-cotton, T/C and T/R'],
    ['棉、涤各类化纤布、混纺', 'cotton, polyester, synthetic fabrics and blends'],
    ['棉、涤、罗马布、窗帘布、涤纶', 'cotton, polyester, Roman fabric, curtain fabric and polyester'],
    ['涤纶、棉、混纺织物', 'polyester, cotton and blended fabrics'],
    ['涤、棉、混纺织物', 'polyester, cotton and blended fabrics'],
    ['绒类、涤纶仿棉织物', 'fleece and polyester cotton-like fabrics'],
    ['雪纺、涤纶、尼龙', 'chiffon, polyester and nylon'],
    ['锦、涤', 'nylon and polyester'],
    ['棉、涤', 'cotton and polyester'],
    ['涤、锦纶及其混纺', 'polyester, nylon and blends'],
    ['涤纶、锦纶及其混纺织物', 'polyester, nylon and blended fabrics'],
    ['涤纶及混纺', 'polyester and blends'],
    ['涤纶', 'polyester'],
    ['锦纶', 'nylon'],
    ['氨纶', 'spandex'],
    ['腈纶', 'acrylic'],
    ['粘胶', 'viscose'],
    ['人棉', 'rayon'],
    ['棉', 'cotton'],
    ['麻', 'linen'],
    ['毛', 'wool'],
    ['丝', 'silk'],

    ['不含磷及APEO', 'Phosphorus-free and APEO-free'],
    ['不含磷和APEO', 'Phosphorus-free and APEO-free'],
    ['环保', 'environmentally friendly'],
    ['低泡', 'low foam'],
    ['无泡', 'foam-free'],
    ['耐酸', 'acid resistant'],
    ['耐碱', 'alkali resistant'],
    ['耐硬水', 'hard-water resistant'],
    ['耐电解质', 'electrolyte resistant'],
    ['渗透性', 'penetration'],
    ['稳定性', 'stability'],
    ['分散性', 'dispersibility'],
    ['乳化性能', 'emulsifying performance'],
    ['防水性能', 'waterproof performance'],
    ['防油性能', 'oil-repellent performance'],
    ['抗静电性能', 'antistatic performance'],
    ['亲水性能', 'hydrophilic performance'],
    ['耐洗性', 'wash durability'],
    ['耐黄变', 'yellowing resistance'],
    ['柔软', 'soft'],
    ['柔滑', 'soft and smooth'],
    ['滑爽', 'smooth'],
    ['蓬松', 'fluffy'],
    ['丰满', 'full'],
    ['手感', 'hand feel'],
    ['低黄变', 'low yellowing'],
    ['高白度', 'high whiteness'],
    ['白度高', 'high whiteness'],
    ['荧光强', 'strong fluorescence'],
    ['用量少', 'low dosage'],
    ['色光纯正鲜艳', 'pure and bright shade'],
    ['发色不受温度控制', 'shade development is not temperature-dependent'],
    ['可中温发色', 'can develop shade at medium temperature'],
    ['优异', 'excellent'],
    ['优良', 'excellent'],
    ['良好', 'good'],
    ['提高', 'improves'],
    ['改善', 'improves'],
    ['减少', 'reduces'],
    ['防止', 'prevents'],
    ['适用于', 'suitable for'],
    ['用于', 'for'],
    ['适用', 'suitable'],
    ['具有', 'has'],
    ['用量', 'Dosage'],
    ['浸轧', 'Padding'],
    ['浸渍', 'Exhaustion'],
    ['轧染热熔法', 'thermosol padding process'],
    ['连续工艺', 'continuous process'],
    ['连续式工艺', 'continuous process'],
    ['间歇式工艺', 'batch process'],
    ['冷轧堆处理工艺', 'cold pad-batch process'],
    ['染色同浴', 'same-bath dyeing'],
    ['涂料印花', 'pigment printing'],
    ['原液pH', 'original liquid pH'],
    ['工作液', 'working bath'],
    ['配合使用', 'used together'],
    ['复配整理', 'compound finishing'],
    ['印花', 'printing'],
    ['染整', 'dyeing and finishing'],
    ['后整理', 'finishing'],
    ['前处理', 'pre-treatment'],
    ['织物', 'fabric'],
    ['面料', 'fabric'],
    ['纤维', 'fiber'],
    ['混纺', 'blend'],
    ['天然纤维', 'natural fiber'],
    ['合成纤维', 'synthetic fiber']
];

const sortedProductPagePhraseTranslations = productPagePhraseTranslations
    .slice()
    .sort((a, b) => b[0].length - a[0].length);

let productPageTextRecords = null;

const staticPageTitleTranslations = {
    '浙江伟丰新材料有限公司 | 专注纺织助剂研发生产': 'Zhejiang Wei Feng New Material Co., Ltd. | Textile Auxiliaries R&D and Production',
    '首页 | 浙江伟丰新材料有限公司': 'Home | Zhejiang Wei Feng New Material Co., Ltd.',
    '关于我们 | 浙江伟丰新材料有限公司': 'About Us | Zhejiang Wei Feng New Material Co., Ltd.',
    '产品中心 | 浙江伟丰新材料有限公司': 'Products | Zhejiang Wei Feng New Material Co., Ltd.',
    '新闻资讯 | 浙江伟丰新材料有限公司': 'News | Zhejiang Wei Feng New Material Co., Ltd.',
    '新闻详情 | 浙江伟丰新材料有限公司': 'News Details | Zhejiang Wei Feng New Material Co., Ltd.',
    '企业形象 | 浙江伟丰新材料有限公司': 'Gallery | Zhejiang Wei Feng New Material Co., Ltd.',
    '联系我们 | 浙江伟丰新材料有限公司': 'Contact Us | Zhejiang Wei Feng New Material Co., Ltd.'
};

function translateProductPageText(text) {
    if (!text || !/[\u4e00-\u9fff]/.test(text)) return text;
    const trimmed = text.trim();
    if (productPageExactTranslations[trimmed]) {
        return text.replace(trimmed, productPageExactTranslations[trimmed]);
    }

    let output = text;
    sortedProductPagePhraseTranslations.forEach(([source, target]) => {
        output = output.split(source).join(target);
    });

    return output
        .replace(/：/g, ': ')
        .replace(/；/g, '; ')
        .replace(/，/g, ', ')
        .replace(/、/g, ', ')
        .replace(/。/g, '. ')
        .replace(/（/g, ' (')
        .replace(/）/g, ')')
        .replace(/范围/g, 'range')
        .replace(/中/g, 'in')
        .replace(/及/g, 'and')
        .replace(/等/g, 'etc.')
        .replace(/类/g, 'types')
        .replace(/系列/g, 'series')
        .replace(/剂/g, 'agent')
        .replace(/液体/g, 'liquid')
        .replace(/液/g, 'liquid')
        .replace(/乳/g, 'emulsion')
        .replace(/与/g, 'and')
        .replace(/和/g, 'and')
        .replace(/为/g, 'is')
        .replace(/在/g, 'in')
        .replace(/可/g, 'can')
        .replace(/的/g, '')
        .replace(/年/g, ' years')
        .replace(/号/g, ' No.')
        .replace(/\s+/g, ' ')
        .trim();
}

function shouldSkipProductTextNode(node) {
    const element = node.parentElement;
    return !element || Boolean(element.closest('script, style, noscript, .lang-switch, .beian-info, [data-i18n]'));
}

function collectProductPageTextNodes() {
    if (productPageTextRecords) return;
    productPageTextRecords = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            if (!node.nodeValue || !/[\u4e00-\u9fff]/.test(node.nodeValue)) {
                return NodeFilter.FILTER_REJECT;
            }
            if (shouldSkipProductTextNode(node)) {
                return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
        }
    });

    let current = walker.nextNode();
    while (current) {
        productPageTextRecords.push({ node: current, zh: current.nodeValue });
        current = walker.nextNode();
    }
}

function applyProductPageLanguage(lang) {
    if (!document.body || !document.body.classList.contains('detail-page-body')) return;
    collectProductPageTextNodes();

    productPageTextRecords.forEach(record => {
        record.node.nodeValue = lang === 'en' ? translateProductPageText(record.zh) : record.zh;
    });

    document.querySelectorAll('[data-label]').forEach(element => {
        if (!element.dataset.zhLabel) {
            element.dataset.zhLabel = element.getAttribute('data-label');
        }
        element.setAttribute('data-label', lang === 'en' ? translateProductPageText(element.dataset.zhLabel) : element.dataset.zhLabel);
    });

    if (!document.documentElement.dataset.zhTitle) {
        document.documentElement.dataset.zhTitle = document.title;
    }
    document.title = lang === 'en'
        ? translateProductPageText(document.documentElement.dataset.zhTitle)
        : document.documentElement.dataset.zhTitle;
}

function applyStaticPageTitleLanguage(lang) {
    if (document.body && document.body.classList.contains('detail-page-body')) return;
    if (!document.documentElement.dataset.zhTitle) {
        document.documentElement.dataset.zhTitle = document.title;
    }
    const originalTitle = document.documentElement.dataset.zhTitle;
    document.title = lang === 'en' && staticPageTitleTranslations[originalTitle]
        ? staticPageTitleTranslations[originalTitle]
        : originalTitle;
}

function setLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    applyProductPageLanguage(lang);
    applyStaticPageTitleLanguage(lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        const onclick = btn.getAttribute('onclick') || '';
        const buttonLang = btn.textContent.trim().toLowerCase();
        if (onclick.includes(lang) || (lang === 'zh' && buttonLang === 'cn') || buttonLang === lang) {
            btn.classList.add('active');
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'zh';
    setLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (!btn.getAttribute('onclick')) {
            btn.addEventListener('click', () => {
                const buttonLang = btn.textContent.trim().toLowerCase();
                setLanguage(buttonLang === 'en' ? 'en' : 'zh');
            });
        }
    });
});
