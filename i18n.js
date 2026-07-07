// 定义翻译字典
const translations = {
    'zh': {
        // --- 导航 & 页脚 ---
        'nav.home': '首页',
        'nav.about': '关于我们',
        'nav.products': '产品中心',
        'nav.news': '新闻资讯',
        'nav.gallery': '企业形象',
        'nav.downloads': '资料下载',
        'nav.contact': '联系我们',
        'footer.desc': '专注纺织助剂20+年，为您提供最优质的化学品解决方案。致力于精细化工领域。',
        'footer.links': '快速链接',
        'footer.wechat_official': '<i class="fab fa-weixin"></i> 微信公众号',
        'footer.wechat_video': '<i class="fas fa-video"></i> 微信视频号',
        'footer.contact': '联系方式',
        'footer.contact_methods': '联系方式:',
        'footer.hotline': '客服热线:',
        'footer.manager_wang': '15924062099（王经理）',
        'footer.manager_mao': '15957042077（毛经理）',
        'footer.addr': '<i class="fas fa-map-marker-alt"></i> 浙江省衢州市江山市上余镇兴工八二路一号 浙江伟丰新材料有限公司',
        'footer.addr_text': '浙江省衢州市江山市上余镇兴工八二路一号 浙江伟丰新材料有限公司',
        'footer.privacy': '隐私政策',
        'footer.b2b_privacy': 'B2B隐私协议',
        'footer.legal': '法律声明',

        // --- 首页 (Home) ---
        'home.hero_title': '专注纺织助剂<br>研发生产',
        'home.hero_desc': '20+年行业经验 · 科技创新 · 品质保证 · 年产18000吨',
        'home.btn_explore': '探索产品 <i class="fas fa-arrow-right"></i>',
        'home.btn_about': '了解伟丰',
        'stats.unit_year': '年',
        'stats.unit_ton': '吨',
        'stats.unit_percent': '%',
        'stats.years': '励精图治',
        'stats.ton1': '助剂年产量',
        'stats.ton2': '硅油年产量',
        'stats.sat': '客户满意度',
        
        // --- 关于我们 (About) ---
        'sect.about_title': '公司简介',
        'sect.about_desc1': '浙江伟丰新材料有限公司是深耕环保型纺织印染助剂及有机硅新材料生产销售领域二十余年的现代化高新技术企业，一直致力于纺织印染的前处理、后整理，及防水系列等功能性产品开发、有机硅新材料的端氨硅油、低环体端环氧硅油和聚醚环氧硅油系列的产品创新研发。',
        'sect.about_desc2': '全力满足客户个性化需求，打造市场顶尖精品，与客户携手打造行业知名度，追求共同高质量发展是浙江伟丰一贯的追求！',
        'sect.about_list1': '<i class="fas fa-check-circle"></i> 环保型纺织印染助剂',
        'sect.about_list2': '<i class="fas fa-check-circle"></i> 高浓缩三元嵌段硅油',
        'sect.about_list3': '<i class="fas fa-check-circle"></i> 二甲基硅油及精细化工产品',
        'btn.more': '了解更多详情',
        'about.header_title': '20多年专注纺织助剂',
        'about.header_desc': '研发 · 生产 · 销售 —— 致力于成为行业领先的纺织化学品供应商',
        'about.why_1_title': '公司实力 — 20多年专业厂家',
        'about.why_1_desc': '20多年专业纺织印染助剂厂家，产品种类齐全，涵盖各类功能整理剂。产品包括各类新型有机硅柔软剂、平滑剂等。',
        'about.footer_desc': '专注纺织助剂20多年，为您提供最优质的化学品解决方案。致力于精细化工领域。',
        'footprint.title': '我们的全球布局',
        'footprint.subtitle': '从生产制造到本地服务，持续缩短与客户之间的距离',
        'footprint.map_eyebrow': '服务网络',
        'footprint.map_title': '连接制造、服务与市场',
        'footprint.factory': '工厂',
        'footprint.office': '办事处',
        'footprint.warehouse': '仓库',
        'footprint.customer': '客户',
        'footprint.map_note': '示意点位，后续可按实际地址精确更新',
        'footprint.factory_label': '生产基地',
        'footprint.office_label': '办事处',
        'footprint.warehouse_label': '仓储网络',
        'footprint.warehouse_countries': '土耳其 · 印度 · 埃及',
        'footprint.warehouse_presence': '三国均设有海外仓',
        'footprint.country_turkey': '土耳其',
        'footprint.country_india': '印度',
        'footprint.country_egypt': '埃及',
        'footprint.customer_eyebrow': '客户覆盖',
        'footprint.customer_title': '产品与服务触达多个城市及国家',
        'footprint.domestic': '国内城市',
        'footprint.overseas': '海外国家与地区',
        // --- 产品中心 (Products) ---
        'prod.header_title': '认真执着 精益求精',
        'prod.header_desc': '致力于纺织助剂产品研发、力求专业化、精细化',
        'prod.intro_title': '致力于精细化工领域',
        'prod.intro_text': '我公司纺织助剂类产品主要涵盖纺织品的前处理、染色和印花、后整理、功能整理等多个环节，包括多个系列数十个品种。主要包括：各类新型有机硅柔软剂、平滑剂、羊绒羊毛用助剂、三元嵌段硅油、多功能整理剂、染色用助剂、生物酶酵素、固色剂、净洗剂、消泡剂、高浓硅油、二甲基硅油及部分精细化工产品。',
        'prod.cat1_title': '端（含氢/环氧/聚醚环氧）硅油系列',
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
        'prod.search_label': '产品搜索',
        'prod.search_placeholder': '输入产品名称或型号，如 WF-4315C',
        'prod.search_button': '搜索',
        'prod.search_hint': '支持按产品型号、产品名称或系列名称搜索。',
        'prod.waterproof_sub': 'WATERPROOF SERIES',
        'prod.pre_sub': 'Pre-treatment Chemicals',
        'prod.dye_sub': 'Dyeing Series',
        'prod.soft_sub': 'Softener Flake Series',
        'prod.bright_sub': 'Brightening Series',
        'prod.func_sub': 'FUNCTIONAL AGENT SERIES',
        'btn.view_more': 'view more',
        'sect.prod_title': '核心产品系列',
        'prod.silicone': '端（含氢/环氧）硅油系列',
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
        'news.ind_2_desc': '据不完全统计，2000年纺织印染助剂产量47万t，销售额约200亿元；2005年产量75万t，销售额约330亿元；2007年产量达90多万t，销售额约400亿元；预计2008年我国助剂的产量、销售额都将继续维持增长趋势。',
        'news.ind_3_title': '印染助剂产品开发 配方还原是“捷径”',
        'news.ind_3_desc': '纺织印染助剂作为纺织印染的重要原料之一，是用以改善纺织印染品质，提高纺织品附加值。纺织印染助剂行业属于精细化工产品在纺织印染行业的应用技术，属于化工和印染的边缘科学。',
        'news.ind_4_title': '纺织柔软剂的发展历程',
        'news.ind_4_desc': '有机硅柔软剂起源于20世纪50年代，发展经历了二甲基硅油乳液、氨基硅油、聚醚改性氨基硅油及嵌段改性硅油等阶段。',
        'news.co_1_title': '浙江伟丰新材料有限公司 35kta 高端有机硅系列产品扩产项目环境影响评价信息公示',
        'news.co_1_desc': '浙江伟丰新材料有限公司 35kta 高端有机硅系列产品扩产项目环境影响评价信息公示.pdf',
        'news.co_2_title': '纺织品印染助剂不断创新 助力纺织品行业发展',
        'news.co_2_desc': '据不完全统计，2000年纺织印染助剂产量47万t，销售额约200亿元；2005年产量75万t，销售额约330亿元。预计未来我国助剂产量将继续维持增长趋势。',
        'article.company_innovation_date': '发布时间: 2020-11-25 17:55',
        'article.company_innovation_title': '纺织品印染助剂不断创新 助力纺织品行业发展',
        'article.company_innovation_category': '分类：公司新闻',
        'article.industry_innovation_category': '分类：行业资讯',
        'article.company_innovation_p1': '据不完全统计，2000年纺织印染助剂产量47万t，销售额约200亿元；2005年产量75万t，销售额约330亿元；2007年产量达90多万t，销售额约400亿元；预计2008年我国助剂的产量、销售额都将继续维持增长趋势。2000年以后我国助剂的产量一直保持着10%左右的增长速率，是我国纺织印染工业的高速发展，直接拉动了印染助剂行业的不断发展、壮大。',
        'article.company_innovation_p2': '纺织印染助剂的研发过去主要依靠剖析和仿制外国产品。近年来，在新产品、新配方的研发，基础原料的合成，基础理论的研究等方面有了很大的进步，基本满足了下游产业发展的需要。',
        'article.company_innovation_p3': '随着我国经济的不断发展，生活水平、消费能力逐步提高，纺织印染行业对染化料纺织印染助剂的需求会不断加大，进入国际市场的数量也会不断提高，所以这个行业总体前景是乐观的。',
        'article.company_innovation_p4': '我国目前是世界上最大的纺织品生产、消费和出口国家，2007年我国印染布产量达到500亿m，同比增长8.3%。2008年上半年，在人民币持续升值、银行贷款利率上升、出口退税率下调、国家对加工贸易实行限制、环保压力加大、原材料大幅度涨价及全球经济发展回落等诸多不利因素的影响下，我国印染布生产仍然保持了一定增长。长期来看，国内纺织印染业的稳定发展必将为印染助剂发展提供良好机遇。',
        'news.co_3_title': '印染助剂产品开发 配方还原是“捷径”',
        'news.co_3_desc': '纺织印染助剂作为纺织印染的重要原料之一，是用以改善纺织品染品质，提高纺织品附加值。',
        'article.company_formula_date': '发布时间: 2020-11-25 17:52',
        'article.company_formula_title': '印染助剂产品开发 配方还原是“捷径”',
        'article.company_formula_category': '分类：公司新闻',
        'article.industry_formula_category': '分类：行业资讯',
        'article.company_formula_p1': '近年来，随着我国工业化的深入，精细化工得到了长足的发展，助剂作为精细化工的一个小小分支更加明显。以纺织印染助剂为例，这类固定投资少、附加值高、利润大的助剂产业，保持不败之地的关键在于产品开发的市场效果。',
        'article.company_formula_p2': '纺织印染助剂作为纺织印染的重要原料之一，是用以改善纺织品染品质，提高纺织品附加值。纺织印染助剂行业属于精细化工产品在纺织印染行业的应用技术，属于化工和印染的边缘科学。',
        'article.company_formula_p3': '国内知名的第三方分析机构英格尔介绍到，纺织印染助剂由于涉及设备少、建设周期短，大部分原料市场化，新产品研发采用配方还原技术可以起到生产周期更短、市场效果更好。',
        'article.company_formula_p4': '目前，印染助剂是针对特殊的用户群设计的产品，是化工产品链中的“非标化”生产的典范，多品种、小批量是印染助剂的市场特点。总的来说，印染助剂产品的专用性极强，针对不同织物不同工序、不同的生产工艺、不同的织物风格，设计不同的印染助剂，这也就更加凸显了产品开发、配方还原技术的重要性。',
        'article.company_formula_p5': '大量配方还原技术的应用，对印染助剂的产品开发起到了革命性的变化。',
        'article.company_formula_p6': '上海英格尔分析测试中心，为了满足各种印染助剂企业的产品开发，所采用的配方还原技术，具有增效、改性的功能，使得性能往往超过结构单一的产品。因此，第三方机构掌握配方还原技术将是纺织印染助剂企业产品开发具备市场竞争能力的一个极为重要的方面。',
        'article.company_formula_p7': '总而言之，纺织印染助剂属于开发经营型工业，借助第三方机构的产品开发、配方还原的技术服务和技术支持，搞好新产品开发，搞好产品市场是确保产品的畅销，提高企业的竞争能力的一条“成功之路”。',
        'news.co_4_title': '纺织柔软剂的发展历程',
        'news.co_4_desc': '有机硅柔软剂起源于20世纪50年代，发展经历了二甲基硅油乳液、氨基硅油、聚醚改性氨基硅油及嵌段改性硅油等阶段。',
        'article.company_softener_date': '发布时间: 2020-11-25 17:50',
        'article.company_softener_title': '纺织柔软剂的发展历程',
        'article.company_softener_category': '分类：公司新闻',
        'article.industry_softener_category': '分类：行业资讯',
        'article.company_softener_intro': '（氨基硅油）纺织柔软剂的发展历程',
        'article.company_softener_p1': '有机硅柔软剂起源于20世纪50年代，发展经历了四个阶段。',
        'article.company_softener_p2': '第一代有机硅柔软剂：采用机械乳化法将二甲基硅油乳化，但由于硅油自身不含有活性基团，与织物结合不够牢度，不耐水洗。单独使用效果不理想，因此现在很少作为柔软剂使用，但是二甲基硅油乳液在其它领域还在广泛使用，如：香波柔顺剂、脱模剂等；羟基硅油，用羟基封头的有机硅乳液，在金属催化作用下，柔软剂能在织物表面形成网状交联，增强了耐水洗性，稳定性和柔软效果均得到了提高，但由于存在功能单一、易“漂油破乳”等缺点，还没工业化应用就被第二代有机硅柔软剂取代。',
        'article.company_softener_p3': '第二代有机硅柔软剂：氨基硅油改性硅油，简称氨基硅油，可以看成是二甲基硅油中部分甲基（包括侧位和端位）被氨基取代后的产物。氨基硅油除保留着二甲基硅油原有的疏水性和脱模性外，氨烃基的存在还可赋予其反应性、吸附性、润滑性及柔软性等，因而在织物柔软整理剂、抛光剂、涂料添加剂及树脂改性剂等方面获得了广泛的应用，并成为被官能硅油中用量最大的一个品种。',
        'article.company_softener_p4': '第三代有机硅柔软剂：即聚醚改性氨基硅油，是指通过侧链含氢硅油与烯丙基环氧化合物及烯丙基聚醚进行硅氢化加成反应，制得侧链型聚醚环氧硅油中间体，再用有机胺进行氨解开环反应，获得聚醚改性氨基硅油，织物经其处理后不仅柔软、滑爽，还具有优异的吸湿性。',
        'article.company_softener_p5': '第四代有机硅柔软剂：嵌段改性硅油。在柔软性、耐水洗性、弹性和亲水性等各方面都有较大程度的提升，满足了用户对织物的各种需求，已成为目前有机硅柔软剂发展的主流方向。',
        'news.home_company_title': '浙江伟丰新材料有限公司介绍',
        'news.home_company_desc': '浙江伟丰新材料有限公司位于江山市江东工业园区，是一家专业从事环保型纺织印染助剂的企业。',
        'news.faq_1_title': '二甲基硅油，它的功能可以运用在哪里？',
        'news.faq_1_desc': '有机硅行业中硅胶产品的原材料种类繁多，硅油可为不同产品提供柔和顺滑、耐温、消泡、载体、润滑等作用。',
        'news.faq_2_title': '端（含氢/环氧/聚醚环氧）硅油',
        'news.faq_2_desc': '端（含氢/环氧/聚醚环氧）硅油系列是各种端基反应性线性改性硅油，也是嵌段共聚反应的关键中间体，挥发份低，满足出口要求。',
        'news.faq_3_title': '高浓缩三元嵌段硅油',
        'news.faq_3_desc': '高浓缩三元嵌段硅油系列适用各种纤维织物提高柔滑挺弹度的后整理，特别适用于涤纶以及涤粘、涤棉等混纺织物。',
        'news.faq_4_title': '功能系列产品',
        'news.faq_4_desc': '功能系列适用于棉、涤纶、羊毛及其混纺织物的非耐久阻燃整理、吸湿排汗整理、抗静电处理、香味整理等。',
        'news.faq_5_title': '前处理助剂',
        'news.faq_5_desc': '前处理助剂就是纺织品在印染处理前进行一系列处理的助剂，一般有精练剂、洗净剂、除油剂、精练酶、软水剂等。',
        'news.faq_6_title': '染色系列产品',
        'news.faq_6_desc': '染色系列产品涵盖修补、消泡、匀染、防皱防擦伤、固色等染整应用，适用于涤纶、棉及其混纺织物。',
        'news.faq_7_title': '软片产品',
        'news.faq_7_desc': '软片系列适用于全棉及其混纺针织物、机织物的柔软整理，尤其适合对亲水及色光有要求的柔软整理工艺。',
        'news.faq_8_title': '增白剂系列产品',
        'news.faq_8_desc': '增白剂系列是一类能提高纤维织物和纸张等白度的有机化合物，适用于涤纶、棉、麻及混纺织物的增白增艳。',
        'article.back_news': '<i class="fas fa-arrow-left"></i> 返回新闻列表',
        'article.back_products': '<i class="fas fa-arrow-left"></i> 返回产品中心',
        'article.dimethyl_title': '二甲基硅油，它的功能可以运用在哪里？',
        'article.dimethyl_category': '分类：常见问题',
        'article.dimethyl_intro': '有机硅行业当中硅胶产品的原材料种类已经占据了多种，它们分布为不同的功能与作用，硅油属于不少行业使用比较多的一种，它的作用主要取到了产品中的柔和顺滑性，给不同产品提供良好的耐温、消泡、载体、润滑、韧性等作用，它除了在硅胶制品当中占据重要材料，也在其他行业略有作为！',
        'article.dimethyl_h3_1': '1、什么是二甲基硅油',
        'article.dimethyl_p1': '201甲基硅油一种新颖的有机硅合成材料。外观呈无色透明的油状液体。它的化学成分是直链的聚甲基硅氧烷，结构式为：',
        'article.dimethyl_p2': '由于硅氧键的稳定性和甲基的憎水性，以及甲基硅氧烷合体聚的结构特点，使甲基硅油具有良好的耐热性。闪点亮、不易挥发、粘度系数小、而压缩力大，表面张力小、化学性响的，电（绝缘）性好，并且抗水防潮，对生物体（包括人类）无毒害作用。为了使甲基硅油在其它物体表面形成薄膜或制成橡皮状固体物质，可以用高温（250-300℃）加热或加适当之催化剂（一般用过氧化物）进行固化处理。甲基硅油的使用温度范围为50-180℃。',
        'article.dimethyl_p3': '粘度不同的甲基硅油，它们的物理化学性质和特性参数也有一定的差异。该产品以粘度大小而分、有201-10、201-50、201-100、201-350、201-500、201-800、201-1000等多种牌号。还可以根据用户的要求，制成其它特种粘度规格的有机硅产品。',
        'article.dimethyl_h3_2': '2、应用范围',
        'article.dimethyl_use_1': '1、在电器和电子等工业方面作耐温、耐电弧、抗蚀、抗潮的绝缘介质。',
        'article.dimethyl_use_2': '2、在化学、制药、食品等工业部门作优良的载热体。',
        'article.dimethyl_use_3': '3、在合成树脂、油类加工、食品制造、以及发酵、造纸等工艺作高效消泡剂。',
        'article.dimethyl_use_4': '4、在精密机械和仪表中用来防震、阻尼、润滑、传力等。',
        'article.dimethyl_use_5': '5、在塑料制品和硅橡胶制品的成型加工，以及食品生产中作高温脱模剂。',
        'article.dimethyl_use_6': '6、在玻璃、陶瓷、金属、皮革、织物、丝线和水泥制品等物质上作表面处理剂，以达到增强、排水抗蚀、防霉、光滑等功效。',
        'article.dimethyl_use_7': '7、在涂料、油脂、化妆品等制作中作添加剂，用以提高流平、柔滑等性能。',
        'article.dimethyl_use_8': '8、在医疗上，如外科手术、伤口包扎、针剂处理、血液贮藏和口服药等方面，具有许多用途。',
        'article.terminal_silicone_date': 'Q&A 02',
        'article.terminal_silicone_title': '端（含氢/环氧/聚醚环氧）硅油',
        'article.terminal_silicone_category': '分类：常见问题',
        'article.terminal_silicone_series': '端（含氢/环氧/聚醚环氧）硅油系列',
        'article.terminal_silicone_intro': '各种端基反应性线性改性硅油；嵌段共聚反应的关键中间体；拥有极低的挥发份，可以达到欧美国家对D4、D5、D6等环体限制标准，满足出口要求。',
        'article.high_conc_date': 'Q&A 03',
        'article.high_conc_title': '高浓缩三元嵌段硅油',
        'article.high_conc_category': '分类：常见问题',
        'article.high_conc_series': '高浓缩三元嵌段硅油系列',
        'article.high_conc_intro': '适用各种纤维织物提高柔滑挺弹度的后整理，特别是涤纶以及涤粘、涤棉等混纺织物。',
        'article.high_conc_body': `
                <section class="article-product-block">
                    <h3>抗起毛起球整理剂 WF-6505</h3>
                    <p>适用于各种织物的抗起毛起球整理，具有良好的成膜性能。</p>
                    <ol>
                        <li>赋予织物抗起毛起球性能，减少织物起毛倾向。</li>
                        <li>提高织物的抗磨性。</li>
                        <li>对织物手感影响小。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>高浓亲水硅油 WF-6508</h3>
                    <p>适用于棉、麻、涤等及其混纺织物。</p>
                    <ol>
                        <li>能赋予纤维织物柔软、丰满和较好的透气、吸水及抗静电性能，改善合成纤维克服起毛、起球的缺点。</li>
                        <li>属非离子、亲水性、直乳型环保改性硅油，有效含量高，不存在破乳漂油问题。</li>
                        <li>很容易稀释化料，可以与冷水以任意比例化开使用，操作简便。</li>
                        <li>较好的配伍性，可以与其它功能助剂复配使用。</li>
                        <li>再染性强，无需去除硅油而直接复染。</li>
                        <li>低黄变性。</li>
                        <li>可与氟系防污整理剂同浴使用，不会影响处理后织物的防污效果。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>平滑嵌段整理剂 WF-8101N</h3>
                    <p>适合于大部分纤维织物的手感整理，极大改善纤维滑度和蓬松度，尤其适合于合成纤维和蛋白质纤维。</p>
                    <ol>
                        <li>新型自乳化织物柔软剂，赋予织物滑度和蓬松度，整理液具有良好剪切稳定性及 pH 稳定性。</li>
                        <li>复配到氨基硅油乳液中可改善乳液稳定性。</li>
                        <li>配伍性好，可与防皱树脂、增白剂、非离子或阳离子助剂、酶类等同浴使用。</li>
                        <li>在整理液较低浓度下仍有较出色的效果，提供合成纤维及其混纺织物天然的柔软度。</li>
                        <li>低黄变，适用于白色或浅色织物。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>低温成膜整理剂 WF-8102N</h3>
                    <p>适用于棉、涤等化纤及面料和纱线的柔软整理，在超柔、仿超柔、涤纶毯上有较好的手感。</p>
                    <ol>
                        <li>三元直链结构，不粘辊、不漂油、不残留油斑。</li>
                        <li>亲水性较好，能够助剂渗透到纤维内部，对厚重织物有较好的亲水蓬松柔软作用。</li>
                        <li>稳定性好，耐剪切、耐酸碱，可在 pH 3-10 的前处理浴中使用。</li>
                        <li>低温成膜，80-100℃ 烘干即有较好的手感。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>蓬松嵌段整理剂 WF-8104N</h3>
                    <p>适用于棉、涤等毛绒织物的手感整理，特别适用于涤纶、锦纶针织及毛绒织物。</p>
                    <ol>
                        <li>稳定性好，耐剪切，耐酸碱，可在前处理过程中使用。</li>
                        <li>本品为三元直链结构，不同普通氨基硅油，不粘辊、不漂油。</li>
                        <li>用量少，手感蓬松柔软，无滑度；用量高，有滑度表现，无油腻感。</li>
                        <li>能渗透到纤维内部，对厚中织物有较好的渗透柔软作用。</li>
                        <li>对毛绒织物有干爽、不粘手不油腻的蓬松带滑手感。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>亮光增深整理剂 WF-8105N</h3>
                    <p>适用于涤纶、棉及其混纺织物的增深亮光、弹性平滑整理。与柔滑剂配合使用，在毛绒类织物手感整理上效果显著。</p>
                    <ol>
                        <li>特殊硅油乳液，平滑有弹性，对织物有明显的增深亮光效果。</li>
                        <li>与阳离子助剂配伍使用不会有化学反应。</li>
                        <li>手感弹性好，不粘手、不粘辊。</li>
                        <li>棉织物上有一定亲水效果。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>人棉专用整理剂 WF-8109N/1</h3>
                    <p>适用于各类棉、麻、T/R、人棉等织物的柔软整理，尤其适用于涤纶仿活性印花家纺面料的柔软蓬松整理。</p>
                    <ol>
                        <li>超化学稳定性，能确保耐乳液、耐酸碱和较宽 pH 范围的稳定性。</li>
                        <li>低黄变性，尤其适用于白色或浅色织物。</li>
                        <li>亲水性好。</li>
                        <li>能赋予织物柔软、丰满、丝质般手感及突出的弹性，可显著改善棉针织类产品的立体回复性。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>涤用松软硅油 WF-8106N</h3>
                    <p>适用于棉、涤、涤棉混纺等化纤面料及纱线的柔软整理，尤其在中厚布类上有较好的松软手感。</p>
                    <ol>
                        <li>三元直链结构，不粘辊、不漂油、不残留油斑。</li>
                        <li>能帮助渗透到纤维内部，尤其对厚织物有较好的亲水蓬松柔软作用。</li>
                        <li>稳定性好，耐剪切，耐酸碱。</li>
                        <li>低温成膜，80-100℃ 烘干即有较好的手感。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>涤、棉用整理剂 WF-8191A</h3>
                    <p>适用于涤、棉及混纺织物的柔软整理。在 T/R、T/C 不倒绒后整理工艺上效果良好。</p>
                    <ol>
                        <li>对织物渗透性好，亲和力强。</li>
                        <li>赋予织物优异的滑爽、挺弹带柔的风格。</li>
                        <li>化学稳定性好，可与各种阳离子柔软剂配伍使用。</li>
                        <li>黄变小。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>弹滑整理剂 WF-8203A</h3>
                    <p>适合于人棉织物、罗马布类等各布种的后整理处理，能赋予织物柔滑、挺弹风格。</p>
                    <ol>
                        <li>新型自乳化织物柔软剂，赋予织物滑度和挺弹度，整理液具有良好剪切稳定性及 pH 稳定性。</li>
                        <li>配伍性好，可以与防皱树脂、增白剂、非离子或阳离子助剂、酶类等同浴使用。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>高手感亲水整理剂 WF-8204A</h3>
                    <p>适用于棉、人棉、涤及其混纺织物的滑软亲水整理。</p>
                    <ol>
                        <li>能赋予织物柔软、柔滑、丝质般的后整理效果。</li>
                        <li>低黄变，适用于白色或浅色织物上的整理。</li>
                        <li>特殊的分子结构，不粘辊、无硅斑、不漂油。</li>
                        <li>可与其它非、阳离子助剂配伍使用。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>软、滑整理剂 WF-8205N</h3>
                    <p>适用于各种毛绒类织物柔软整理，尤其适用于法兰绒。</p>
                    <ol>
                        <li>能赋予织物蓬松丰满、带滑度的手感效果，弹性好，干爽不粘手。</li>
                        <li>优良的配伍性，可与其它阳、非离子助剂同浴使用。</li>
                        <li>低泛黄性，可适用于白色或浅色织物上。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>松、软整理剂 WF-8206N</h3>
                    <p>适用于涤腈、涤棉毛及涤纶织物的蓬松、柔软、滑爽整理。</p>
                    <ol>
                        <li>具有良好的化学稳定性和配伍性。</li>
                        <li>低黄变。</li>
                        <li>可以赋予织物蓬松、柔软的手感。</li>
                        <li>对涤腈毛织物渗透性好，亲和力强。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>高浓平滑整理剂 WF-8301N</h3>
                    <p>适用于各种纤维织物，提高柔滑挺弹度手感，也可用于绒毛类如珊瑚绒的整理。</p>
                    <ol>
                        <li>按 1:3 到 1:10 稀释，化料后呈透明稍带蓝光有机硅微乳液。</li>
                        <li>有良好的水溶性、稳定性和混用性，能与阳、非离子助剂配伍使用。</li>
                        <li>能赋予织物持久耐洗的柔滑、挺弹风格，与蓬松整理剂复配可做出各种风格。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>高浓蓬松整理剂 WF-8402N</h3>
                    <p>适用于各种纤维织物，提高织物柔软蓬松的手感。</p>
                    <ol>
                        <li>按 1:3 到 1:10 稀释，化料后呈透明稍带蓝光有机硅微乳液。</li>
                        <li>有良好的水溶性、稳定性和混用性，能与阳、非离子助剂配伍使用。</li>
                        <li>能赋予织物持久耐洗的蓬松风格。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>亮光柔滑整理剂 WF-8403</h3>
                    <p>适用于涤纶不倒绒、T/C 不倒绒、全棉毛巾布等有绒类产品，具有良好的滑软手感及极佳的光泽亮度和鲜度。</p>
                    <ol>
                        <li>适合各种纤维浸渍、浸轧加工，整理后织物具有优异的油性、柔滑手感。</li>
                        <li>良好的化学稳定性，可与各种阳离子柔软剂配伍。</li>
                        <li>可单独使用，也可与柔软剂搭配使用，效果更佳。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>亲水冰感硅油 WF-8499</h3>
                    <p>适用于纯棉、棉拉架织物、丝光棉的亲水冰感爽滑整理。</p>
                    <ol>
                        <li>亲水效果好，热稳定性好，耐剪切，可轧中使用。</li>
                        <li>手感柔软、滑爽，冰凉丝质感明显。</li>
                        <li>极低黄变。</li>
                        <li>不含 APEO。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>环保去油灵 WF-201F</h3>
                    <p>适用于涤纶、膨纶及其混纺织物缸内长期前处理去油污，也可用于其它各类织物的去油、退浆、煮练及净洗处理，效果良好。</p>
                </section>
        `,
        'article.functional_qa_date': 'Q&A 04',
        'article.functional_qa_title': '功能系列产品',
        'article.functional_qa_category': '分类：常见问题',
        'article.functional_qa_series': '功能系列',
        'article.functional_qa_intro': '适用于棉、涤纶、羊毛及其混纺织物的非耐久阻燃整理、吸湿排汗整理、抗静电处理、香味整理。',
        'article.functional_qa_body': `
                <section class="article-product-block">
                    <h3>非离子抗静电剂 WF-6480A</h3>
                    <p>适用于涤纶、腈纶、锦纶、毛等及其混纺织物抗静电处理，并可改善织物抗起毛起球性能。</p>
                    <ol>
                        <li>优异的抗静电性能，优良的吸湿导电性和防污防尘性。</li>
                        <li>可提高织物抗起毛起球性 0.5 级以上。</li>
                        <li>能与固色剂、硅油同时使用，不影响织物手感和风格。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>硬挺剂 WF-6490</h3>
                    <p>适用于涤纶、锦纶及其混纺织物的硬挺整理，亦可作为交联剂使用。</p>
                    <ol>
                        <li>反应活性高，优异的硬挺、防皱效果，弹性好，不回软。</li>
                        <li>可与涂层胶和涂料印花粘合剂等复配使用，提高牢度。</li>
                        <li>与防水、防污助剂等复配使用，显著提高织物耐洗牢度。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>吸湿排汗剂 WF-6502C</h3>
                    <p>适用于各类涤、锦纶、醋酯及其混纺织物的吸湿排汗整理。</p>
                    <ol>
                        <li>优异的吸湿快干性，易去污性和抗静电性。</li>
                        <li>手感蓬松、柔软，采用浸轧或浸渍法效果更佳。</li>
                        <li>耐洗性好，经 AATCC-135 水洗 20 次以上，仍能保持优异的性能。</li>
                        <li>染色同浴时，可防止织物漂浮、折痕、打结和爪印的产生。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>抗热黄变剂 WF-6503</h3>
                    <p>适用于涤纶、尼龙、棉及其混纺织物的深色整理。</p>
                    <ol>
                        <li>能有效防止锦纶在热定型时末端氨基氧化造成的黄变，具有保护氨基的作用。</li>
                        <li>适用于合成纤维或纤维素纤维的坯布热定型，有效防止织物热定型时黄变。</li>
                        <li>非常适合于压模面料。</li>
                        <li>防止纤维由于空气原因引起的黄变。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>抗紫外线整理剂 WF-6504</h3>
                    <p>适用于涤纶织物的抗紫外线整理和提高日晒牢度。</p>
                    <ol>
                        <li>赋予涤纶织物优异的紫外线吸收性能，提高 UPF 值。</li>
                        <li>对 280-400nm 波段的紫外线有良好的吸收转化、反射和散射作用。</li>
                        <li>提高织物日晒牢度。</li>
                        <li>染色同浴色光影响小。</li>
                        <li>稳定性好，耐硬水、弱酸、弱碱。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>芳香整理剂 WF-6506</h3>
                    <p>适用于棉、麻、毛、丝、化纤织物的香味整理。</p>
                    <ol>
                        <li>赋予纺织品持久的优雅香味。</li>
                        <li>可应用于各种织物的浸轧、浸渍整理，也可用于印花或涂层加工，尤其适合纺织品的涂料染色和涂料印花，可使被整理织物具有持久留香。</li>
                        <li>香味纯正，主要香型有薄荷、玫瑰香、薰衣草、茉莉花、苹果香、柠檬香、古龙香等。</li>
                    </ol>
                </section>
        `,
        'article.pretreatment_qa_date': 'Q&A 05',
        'article.pretreatment_qa_title': '前处理助剂',
        'article.pretreatment_qa_category': '分类：常见问题',
        'article.pretreatment_qa_series': '前处理系列',
        'article.pretreatment_qa_intro': '前处理助剂就是纺织品在印染处理前进行一系列处理的助剂，一般有精练剂、洗净剂、除油剂、精练酶、软水剂 CT、除油灵、螯合分散剂和渗透等助剂。',
        'article.pretreatment_qa_body': `
                <section class="article-product-block">
                    <h3>环保去油灵 WF-101</h3>
                    <p>适用于涤纶及其混纺织物的前处理去除油污、油渍，也可用于其它各类织物的去油、煮练、退浆及一般净洗处理，并可用于清洗印染设备。</p>
                    <ol>
                        <li>去污能力强，乳化分散性好，对涤纶及其混纺织物上的油污具有特殊功效。</li>
                        <li>兼具退浆、煮练及净洗作用，使用后的织物能增白增艳，改善手感。</li>
                        <li>对印染设备上的油污也有清洗作用。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>环保去油灵 WF-201F</h3>
                    <p>适用于涤纶、腈纶及其混纺织物缸内、长车前处理去油污，也可用于其它织物的去油、退浆、煮练及净洗处理。</p>
                    <ol>
                        <li>对涤纶、增白品种去除黄斑及老油丝效果好。</li>
                        <li>用量少，效果显著。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>环保去油灵 WF-104</h3>
                    <p>适用于涤纶及其混纺织物低碱前处理去油工艺及练染同浴去油、退浆工艺。</p>
                    <ol>
                        <li>在近中性及弱碱性浴中去油效果好，对色光影响小。</li>
                        <li>不加碱条件下具有更好的去油污效果和退浆效果。</li>
                        <li>不含 APEO。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>多功能精练剂 WF-4006</h3>
                    <p>适用于棉、涤棉经纬编织物、毛巾、绞纱、筒子纱等碱氧一浴前处理工艺。</p>
                    <ol>
                        <li>集精练、渗透、螯合等功能于一体。</li>
                        <li>碱氧一浴漂白处理中只需加入本品和双氧水，使用方便。</li>
                        <li>织物失重率低，同时废水 COD 值也会下降。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>螯合分散剂 WF-4003A</h3>
                    <p>适用于织物前处理、增白、涤纶精练及减量、染色或印花后水洗、皂洗和白地防沾污等工艺。</p>
                    <ol>
                        <li>络合和分散能力优异，可分散无机和有机悬浮微粒，防止织物沾污。</li>
                        <li>具有强阻垢及化垢功能，有效改善水质，提高产品质量。</li>
                        <li>耐酸、碱、氧化剂、还原剂性能优异，无泡沫。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>氧漂稳定剂 WF-4004</h3>
                    <p>适用于纤维素纤维及其混纺织物的高温漂白和冷轧堆氧漂工艺。</p>
                    <ol>
                        <li>可替代硅酸盐，有效控制氧漂工艺中双氧水分解速率。</li>
                        <li>可直接加入漂白液中使用。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>高效精练剂 WF-4005N</h3>
                    <p>适用于棉及其混纺织物长车前处理，尤其适用于冷轧堆工艺。</p>
                    <ol>
                        <li>耐碱稳定性优异，在 180g/L NaOH 水溶液中仍具有良好稳定性。</li>
                        <li>耐碱渗透性优异，确保棉织物连续前处理加工时的带液率，提高精练效果。</li>
                        <li>可按常规用量 1/4 使用，也可按常规用量使用。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>高效皂洗剂 WF-4007N</h3>
                    <p>用于还原染料、直接染料、活性染料、纳夫妥染料印花和染色织物的皂洗。</p>
                    <ol>
                        <li>对未固着染料、碱剂及电解质有良好的净洗、分散和悬浮效果。</li>
                        <li>在织物白地上有优异的防沾色效果。</li>
                        <li>对钙、镁离子有良好螯合能力，可防止皂洗中的钙斑和皂斑。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>氧化退浆剂 WF-4008</h3>
                    <p>适用于 PA、PVA、CMC 等化学浆料的溢流、卷染或连续长车退浆工艺，尤其适用于高密度、高含浆量化纤织物退浆。</p>
                    <ol>
                        <li>氧化性较强，能完全将化学浆料氧化分解。</li>
                        <li>渗透、乳化分散性优异，对浆料有良好的去除、净洗和分散效果，防止浆料再沾附。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>非离子渗透剂 WF-4009</h3>
                    <p>适用于各种染整加工工艺，提高渗透性和带液率。</p>
                    <ol>
                        <li>渗透性和稳定性优异。</li>
                        <li>非离子性，复配性好，可与硅油、软片等复配使用。</li>
                        <li>用于棉前处理工艺可提高精练效果。</li>
                        <li>不耐强酸。</li>
                        <li>可提高染色均匀性及渗透性，改善织物手感。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>低聚物剥除剂 WF-4219</h3>
                    <p>清洗和去除容器或染整设备中沉积的聚酯低聚物、油渍和色渍。</p>
                    <ol>
                        <li>具有增溶、乳化、去污及中和残碱能力。</li>
                        <li>可清洗和清除设备内沉积的低聚物、油污和色渍。</li>
                        <li>对涤纶织物油污、染色后表面浮色、低聚物或减量后残留物有净洗清除作用。</li>
                        <li>对织物上的氨基硅油等整理剂有脱除作用。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>强力去油剂 WF-4315C</h3>
                    <p>适用于涤纶织物以及涤纶经、纬编的前处理或练染同浴工艺。</p>
                    <ol>
                        <li>不含磷，不含 APEO。</li>
                        <li>同浴去油染色工艺中可杜绝油剂、低聚物沾缸引起的色点、色花，提高加工质量。</li>
                        <li>在中性、弱酸性及碱性条件下具有良好乳化、分散能力，对分散化纤油剂等物质有效。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>乳化去油剂 WF-4315D</h3>
                    <p>适用于涤纶机织、经纬编针织及含氨纶织物或混纺织物前处理或练染同浴工艺。</p>
                    <ol>
                        <li>同浴去油染色工艺中可避免油剂、低聚物沾缸引起的色点、色花。</li>
                        <li>在中性、弱酸性及碱性条件下具有良好乳化、分散和去油污效果，是去油、乳化二合一产品。</li>
                        <li>对分散化纤油剂、粘度高的机械油、二甲基硅油等有效，可防止再沾污。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>精练去油剂 WF-4316N</h3>
                    <p>适用于装饰布低温去油、涤纶针织练染同浴及棉及其混纺织物精练去油工艺。</p>
                    <ol>
                        <li>弱碱性及中性浴中，可更有效地乳化、分散含氨纶织物上的油剂。</li>
                        <li>70-80℃ 中性条件下去除不耐碱织物油污，效果明显且不损伤纤维。</li>
                        <li>碱性条件下，在混纺及全棉精练去油同浴中具有优异精练和去污效果。</li>
                        <li>用于涤纶针织练染同浴染色工艺，色光影响小，可有效去除油污并充分乳化分散。</li>
                    </ol>
                </section>
        `,
        'article.dyeing_qa_date': 'Q&A 06',
        'article.dyeing_qa_title': '染色系列产品',
        'article.dyeing_qa_category': '分类：常见问题',
        'article.dyeing_qa_series': '染色系列',
        'article.dyeing_qa_intro': '染色剂是染色工艺的主体，不同纤维织物使用不同的染色剂，并按照不同工艺进行，染料加工助剂有助溶剂、分散剂、显色剂和酞菁黄助剂等。',
        'article.dyeing_qa_body': `
                <section class="article-product-block">
                    <h3>高效修补剂 WF-4016</h3>
                    <p>适用于聚酯纤维及其混纺织物的缺陷修补。</p>
                    <ol>
                        <li>具有超常的移染性，能有效解决涤纶及其混纺织物染色后产生的各种瑕疵；回修后色光基本保持不变。</li>
                        <li>组成中的特殊活性剂成份在染色低温阶段能起到缓染和防止染料二次凝聚作用，在高温阶段能起到很强的促染作用，故使用 WF-4016 对涤纶及其混纺织物的染色，不但能提高匀染性，还能增加成色率。</li>
                        <li>适用涤纶筒子纱染色，因其具有很强的扩散性，可有效避免筒子纱内外层色差问题。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>消泡剂 WF-4309N</h3>
                    <p>适用于纺织、印染、造纸、废水处理等工业中。</p>
                    <ol>
                        <li>本品是经专门设计应用于水相体系的消泡剂。</li>
                        <li>用量少、消泡快、效果持久，在抑制泡沫产生上也有良好功效。</li>
                        <li>适用于 80℃-160℃ 的水浴液中的消泡和抑泡，使用本品能减少工序所需时间，提高生产效率。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>高浓高温匀染剂 WF-4311N</h3>
                    <p>适用于涤纶，尤其是超细涤纶织物及其混纺织物的高温高压染色。</p>
                    <ol>
                        <li>本品消色性小，染色重现性好；化料方便，可直接冷水化料。</li>
                        <li>本品移染能力强，确保整个染色过程中对染料移染的要求，提高匀染效果；高用量时有较好的修色效果。</li>
                        <li>本品有优良的高温分散稳定性，防止染色过程中染料凝聚。</li>
                        <li>低泡。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>浴中抗皱、防擦伤整理剂 WF-4313</h3>
                    <p>适用于各种织物的前处理、染色和后处理的工艺。</p>
                    <ol>
                        <li>能防止或减轻织物在前处理（煮练、煮漂）、染色及后处理等绳状加工中折皱的产生，并有效防止鸡爪印的产生。</li>
                        <li>能赋予织物一定的柔滑手感。</li>
                        <li>低泡，稳定性。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>棉用高效固色剂 WF-4314</h3>
                    <p>适用于各种棉产品类活性染料的染色或印花改善色牢度，特别适用于高牢度要求的织物固色处理。</p>
                    <ol>
                        <li>能有效提高织物的耐洗、汗渍、高温水泡等湿摩擦牢度。</li>
                        <li>适用颜色范围广，对翠兰、大红、黑色、艳兰等各色系活性染料的染色及印花织物色牢度均有明显改善作用。</li>
                        <li>色变小，固色重现性好。</li>
                        <li>不影响染色织物的手感和织物的亲水性。</li>
                        <li>不含游离甲醛或结合甲醛。</li>
                    </ol>
                </section>
        `,
        'article.softener_qa_date': 'Q&A 07',
        'article.softener_qa_title': '软片产品',
        'article.softener_qa_category': '分类：常见问题',
        'article.softener_qa_series': '软片系列',
        'article.softener_qa_intro': '软片系列适用于全棉及其混纺针织物、机织物的柔软整理。尤其适合对亲水及色光有高要求的柔软整理工艺。',
        'article.softener_qa_body': `
                <section class="article-product-block">
                    <h3>腈纶柔软剂 WF-6155</h3>
                    <p>适用于腈纶、人棉、麻等天然纤维及其他合成纤维的浸渍和浸轧后整理工艺。</p>
                    <ol>
                        <li>手感柔软兼有滑度，非常适合腈纶的整体柔软整理。</li>
                        <li>优异的抗静电性能。</li>
                        <li>对整理后织物的色光影响小。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>棉用柔软剂 WF-6156</h3>
                    <p>适用于棉、人棉、麻等天然纤维及其他合成纤维的浸渍和浸轧后整理工艺。</p>
                    <ol>
                        <li>手感柔软兼有滑度，非常适合棉、人棉、麻等天然纤维的整体柔软整理。</li>
                        <li>优异的抗静电性能。</li>
                        <li>对整理后织物的色光影响小。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>软油精 WF-6157</h3>
                    <p>适用于棉、人棉、麻等天然纤维及其他合成纤维的浸渍和浸轧后整理工艺。</p>
                    <ol>
                        <li>手感柔软兼有滑度，非常适合棉、人棉、麻等天然纤维的整体柔软整理。</li>
                        <li>优异的抗静电性能。</li>
                        <li>对整理后织物的色光影响小。</li>
                    </ol>
                </section>
        `,
        'article.brightener_qa_date': 'Q&A 08',
        'article.brightener_qa_title': '增白剂系列产品',
        'article.brightener_qa_category': '分类：常见问题',
        'article.brightener_qa_series': '增白剂系列',
        'article.brightener_qa_intro': '增白剂是一类能提高纤维织物和纸张等白度的有机化合物，又称光学增白剂、荧光增白剂。织物等常常由于含有色杂质而呈黄色，过去都采用化学漂白的方法进行脱色，现在多采用在制品中添加增白剂的方法。',
        'article.brightener_qa_body': `
                <section class="article-product-block">
                    <h3>荧光增白剂 WF-9021</h3>
                    <p>适用于涤纶及其混纺织物的增白增艳，也可用于醋酸纤维的增白。</p>
                    <ol>
                        <li>性能优异的涤纶荧光增白剂，具有白度高、用量少、荧光强、色光纯正鲜艳等特点。</li>
                        <li>不产生黄斑及色光不匀的现象。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>高效荧光增白剂 WS-D</h3>
                    <p>适用于涤纶及混纺织物的增白增艳。</p>
                    <ol>
                        <li>白度特高，用量少，发色不受温度控制，是理想的低温发色增白剂。</li>
                        <li>适用于轧染热熔法、高温高压浸染、低温吸附固着法浸染。</li>
                        <li>可用于 T/C、T/R 等混纺织物的碱氧一浴工艺。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>棉用增白剂 MST-1</h3>
                    <p>适用于棉、麻、混纺等纤维织物常温轧染，具有良好的增白效果。</p>
                    <ol>
                        <li>具有很高的白度提升力，色光鲜艳，能达到特白效果，性能优于同类产品。</li>
                        <li>具有优良的白度，色光纯正鲜艳，高温定型泛黄少。</li>
                        <li>优异的耐酸、耐碱、耐硬水、耐电解质性能，在 pH 2-11 范围内具有极佳稳定性。</li>
                        <li>泡沫低，具有很好的水溶性。</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>荧光增白剂 4BK-1</h3>
                    <p>适用于棉、涤棉混纺织物的增白一浴法增白，也适用于轧染工艺。</p>
                    <ol>
                        <li>具有高效的荧光增白作用，略带蓝紫光。</li>
                        <li>对光线不敏感，化学性能较稳定。</li>
                        <li>能耐弱酸、碱、双氧水及过硼酸盐。</li>
                    </ol>
                </section>
        `,
        'article.ultra_hydrogen_title': '超低环体含量端含氢硅油',
        'article.ultra_hydrogen_caption': '超低环体含量端含氢硅油',
        'article.th_product': '产品名称',
        'article.th_mw': '分子量',
        'article.th_viscosity': '粘度mm2/s',
        'article.th_hydrogen': '含氢量(H%)',
        'article.th_volatile': '挥发份（%）',
        'article.th_epoxy': '环氧值eq/100g',
        'article.ultra_hydrogen_note': '挥发份：≤1.5%',
        'article.ultra_hydrogen_adv': '应用及优点：除有端含氢硅油的应用和优点外，该硅油拥有极低的挥发份，可以达到欧美国家对D4、D5、D6等环体限制标准，满足出口要求。',
        'article.hydrogen_title': '端含氢硅油',
        'article.hydrogen_caption': '端含氢硅油',
        'article.hydrogen_note': '挥发份：≤5%',
        'article.application': '应用',
        'article.advantages': '优点',
        'article.hydrogen_app': '各种端基反应性线性改性硅油；嵌段共聚反应的关键中间体；用于端环氧硅油的生产；用作天然及合成纤维织物、丝绸、皮革等的防水剂和柔软剂等。',
        'article.hydrogen_adv': '含氢量稳定；活性高。',
        'article.epoxy_title': '端环氧硅油',
        'article.epoxy_caption': '端环氧硅油',
        'article.epoxy_note': '挥发份：≤3%',
        'article.epoxy_app': '各种端基反应性线性改性硅油；有机硅嵌段共聚硅油柔软剂的关键中间体原料；其二元共聚硅油制成品克服了目前普通氨基硅油的黄变、不亲水和破乳粘辊三大缺点；与端基的环氧基反应，把硅氧烷链端及有机硅特性引入有机树脂中。',
        'article.epoxy_adv': '端环氧硅油中环氧基无任何破坏，环氧保持率高，挥发份低；SiH键加成反应较完全。',
        'news.read_more': '查看更多 <i class="fas fa-long-arrow-alt-right"></i>',

        // --- 企业形象 (Gallery) ---
        'gallery.header_title': '因为专业，所以值得信赖',
        'gallery.header_desc': '以部分影像记录伟丰的工作日常与成长足迹',
        'gallery.intro_label': '企业影像',
        'gallery.intro_title': '工作与成长的片段',
        'gallery.intro_desc': '以下为公司环境、研发生产与行业交流的部分影像记录。随着企业不断发展，我们将持续更新更多精彩片段。',
        'gallery.filter_all': '影像选辑',
        'gallery.filter_event': '活动剪影',
        'gallery.filter_env': '厂区掠影',
        'gallery.filter_office': '办公日常',
        'gallery.filter_workshop': '生产现场',
        'gallery.filter_lab': '研发日常',
        'gallery.cap_gate': '厂区环境掠影',
        'gallery.cap_garden': '厂区绿化一角',
        'gallery.cap_building': '办公区域外景',
        'gallery.cap_office': '办公会议环境',
        'gallery.cap_office_workspace': '办公空间一角',
        'gallery.cap_office_open': '日常办公环境',
        'gallery.cap_tank': '生产设备一角',
        'gallery.cap_lab': '研发环境掠影',
        'gallery.cap_lab_bench': '研发实验一角',
        'gallery.cap_lab_samples': '样品展示一角',
        'gallery.cap_event_booth': '展会现场剪影',
        'gallery.cap_event_team': '参展团队风采',
        'gallery.cap_event_exchange': '客户交流现场',
        'gallery.cap_event_business': '国际业务交流',
        'gallery.cap_event_display': '产品方案展示一角',

        // --- 资料下载 (Downloads) ---
        'downloads.header_title': '资料下载',
        'downloads.header_desc': '产品手册 · 认证资料 · 技术文件',
        'downloads.title': '下载中心',
        'downloads.subtitle': '点击预览在线查看，或直接将资料保存到本地',
        'downloads.type_manual': '产品资料',
        'downloads.type_certificate': '认证资料',
        'downloads.type_report': '检测报告',
        'downloads.type_cn': '中文资料',
        'downloads.manual_title': '伟丰产品手册',
        'downloads.manual_desc': '了解公司主要产品系列、应用方向与技术信息。',
        'downloads.oeko_title': 'OEKO-TEX® ECO PASSPORT',
        'downloads.oeko_desc': '英文版认证文件，证书编号 21.0.61626。',
        'downloads.chemcheck_title': 'ChemCheck 化学品筛查摘要',
        'downloads.chemcheck_desc': '浙江伟丰新材料有限公司 ChemCheck Summary。',
        'downloads.e_title': '伟丰 E 系列中文资料',
        'downloads.e_desc': '伟丰 E 系列相关中文资料。',
        'downloads.q_title': '伟丰 Q 系列中文资料',
        'downloads.q_desc': '伟丰 Q 系列相关中文资料。',
        'downloads.preview': '<i class="fas fa-eye"></i> 在线预览',
        'downloads.download': '<i class="fas fa-download"></i> 立即下载',
        'downloads.help': '如果您需要其他产品资料或技术支持，请联系我们获取。',
        'downloads.contact': '联系我们 <i class="fas fa-arrow-right"></i>',

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
        'contact.map_company': '浙江伟丰新材料有限公司',
        'contact.map_addr': '浙江省衢州市江山市上余镇兴工八二路一号',
        'contact.wechat_title': '官方平台',
        'contact.wechat_official_title': '微信公众号',
        'contact.wechat_official_desc': '扫码关注公众号',
        'contact.wechat_video_title': '微信视频号',
        'contact.wechat_video_desc': '扫码关注视频号',

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
        'nav.downloads': 'Downloads',
        'nav.contact': 'Contact Us',
        'footer.desc': 'Focusing on textile auxiliaries for 20+ years, providing you with the best chemical solutions.',
        'footer.links': 'Quick Links',
        'footer.wechat_official': '<i class="fab fa-weixin"></i> WeChat Official Account',
        'footer.wechat_video': '<i class="fas fa-video"></i> WeChat Channels',
        'footer.contact': 'Contact Info',
        'footer.contact_methods': 'Contact:',
        'footer.hotline': 'Customer Hotline:',
        'footer.manager_wang': '15924062099 (Manager Wang)',
        'footer.manager_mao': '15957042077 (Manager Mao)',
        'footer.addr': '<i class="fas fa-map-marker-alt"></i> Zhejiang Wei Feng New Material Co., Ltd., No. 1 Xinggong 82nd Rd, Shangyu Town, Jiangshan, Quzhou, Zhejiang',
        'footer.addr_text': 'Zhejiang Wei Feng New Material Co., Ltd., No. 1 Xinggong 82nd Rd, Shangyu Town, Jiangshan, Quzhou, Zhejiang',
        'footer.privacy': 'Privacy Policy',
        'footer.b2b_privacy': 'B2B Privacy',
        'footer.legal': 'Legal Notice',

        // --- Home ---
        'home.hero_title': 'Focus on Textile Auxiliaries<br>R&D and Production',
        'home.hero_desc': '20+ Years Experience · Innovation · Quality · 18,000 Tons Annual Output',
        'home.btn_explore': 'Explore Products <i class="fas fa-arrow-right"></i>',
        'home.btn_about': 'About Wei Feng',
        'stats.unit_year': 'Years',
        'stats.unit_ton': 'Tons',
        'stats.unit_percent': '%',
        'stats.years': 'of Dedicated Effort',
        'stats.ton1': 'Auxiliaries Output',
        'stats.ton2': 'Silicone Output',
        'stats.sat': 'Customer Satisfaction',

        // --- About ---
        'sect.about_title': 'Company Profile',
        'sect.about_desc1': 'Zhejiang Wei Feng New Material Co., Ltd. is a modern high-tech enterprise with more than 20 years of experience in eco-friendly textile printing and dyeing auxiliaries and new organic silicone materials. We focus on pretreatment, post-finishing and waterproof functional products for textile printing and dyeing, as well as innovative development of amino-terminated silicone oil, low-cyclic epoxy-terminated silicone oil, and polyether epoxy silicone oil series.',
        'sect.about_desc2': 'Fully meeting customers personalized needs, creating market-leading boutique products, building industry recognition together with customers, and pursuing shared high-quality development are Zhejiang Wei Feng’s consistent goals.',
        'sect.about_list1': '<i class="fas fa-check-circle"></i> Eco-friendly Auxiliaries',
        'sect.about_list2': '<i class="fas fa-check-circle"></i> High Conc. Block Silicone Oil',
        'sect.about_list3': '<i class="fas fa-check-circle"></i> Dimethyl Silicone Oil & Chemicals',
        'btn.more': 'Learn More',
        'about.header_title': 'Over 20 Years Focus on Auxiliaries',
        'about.header_desc': 'R&D · Production · Sales — Striving to be a leading textile chemical supplier',
        'about.why_1_title': 'Company Strength — Over 20 Years',
        'about.why_1_desc': 'Over 20 years professional manufacturer. Complete product range including various new organic silicone softeners and smoothing agents.',
        'about.footer_desc': 'Focusing on textile auxiliaries for over 20 years, providing you with the best chemical solutions.',
        'footprint.title': 'Our Global Footprint',
        'footprint.subtitle': 'From manufacturing to local support, we keep moving closer to our customers',
        'footprint.map_eyebrow': 'SERVICE NETWORK',
        'footprint.map_title': 'Connecting Manufacturing, Service and Markets',
        'footprint.factory': 'Factory',
        'footprint.office': 'Office',
        'footprint.warehouse': 'Warehouse',
        'footprint.customer': 'Customer',
        'footprint.map_note': 'Illustrative locations; update with exact addresses when available',
        'footprint.factory_label': 'Production Base',
        'footprint.office_label': 'Offices',
        'footprint.warehouse_label': 'Warehouse Network',
        'footprint.warehouse_countries': 'Turkey · India · Egypt',
        'footprint.warehouse_presence': 'Local warehouses in all three countries',
        'footprint.country_turkey': 'Turkey',
        'footprint.country_india': 'India',
        'footprint.country_egypt': 'Egypt',
        'footprint.customer_eyebrow': 'CUSTOMER COVERAGE',
        'footprint.customer_title': 'Our products and services reach cities and countries worldwide',
        'footprint.domestic': 'Cities in China',
        'footprint.overseas': 'Overseas Markets',
        // --- Products ---
        'prod.header_title': 'Diligent & Professional',
        'prod.header_desc': 'Committed to R&D of textile auxiliaries, striving for specialization and refinement',
        'prod.intro_title': 'Committed to Fine Chemicals',
        'prod.intro_text': 'Our textile auxiliary products mainly cover multiple links such as pretreatment, dyeing and printing, post-finishing, and functional finishing. Main products include: various new organic silicone softeners, smoothing agents, wool auxiliaries, ternary block silicone oil, multifunctional finishing agents, dyeing auxiliaries, biological enzymes, fixing agents, detergents, defoamers, high-concentration silicone oil, and dimethyl silicone oil.',
        'prod.cat1_title': 'Terminal Hydrogen / Epoxy / Polyether Epoxy Silicone Oil Series',
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
        'prod.search_label': 'Product Search',
        'prod.search_placeholder': 'Enter product name or model, e.g. WF-4315C',
        'prod.search_button': 'Search',
        'prod.search_hint': 'Search by product model, product name, or series name.',
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
        'news.ind_2_desc': 'According to incomplete statistics, textile auxiliaries output was 470,000 tons in 2000, with sales of about RMB 20 billion; output reached 750,000 tons in 2005, with sales of about RMB 33 billion; and output exceeded 900,000 tons in 2007, with sales of about RMB 40 billion.',
        'news.ind_3_title': 'Product Development: Formulation is the "Shortcut"',
        'news.ind_3_desc': 'As one of the important raw materials for textile printing and dyeing, textile auxiliaries are used to improve dyeing quality and increase the added value of textiles. The industry sits at the intersection of fine chemicals and dyeing technology.',
        'news.ind_4_title': 'Development History of Textile Softeners',
        'news.ind_4_desc': 'Organosilicon softeners originated in the 1950s and developed through dimethyl silicone emulsions, amino silicone oils, polyether-modified amino silicone oils and block-modified silicone oils.',
        'news.co_1_title': 'Wei Feng New Material 35kta High-end Silicone Expansion Project EIA Publicity',
        'news.co_1_desc': 'Zhejiang Wei Feng New Material Co., Ltd. 35kta high-end silicone series product expansion project environmental impact assessment information publicity.',
        'news.co_2_title': 'Innovation in Textile Printing and Dyeing Auxiliaries Aids Industry Development',
        'news.co_2_desc': 'According to incomplete statistics, textile printing and dyeing auxiliary output was 470,000 tons in 2000 and 750,000 tons in 2005. Output is expected to continue growing.',
        'article.company_innovation_date': 'Published: 2020-11-25 17:55',
        'article.company_innovation_title': 'Innovation in Textile Printing and Dyeing Auxiliaries Aids Industry Development',
        'article.company_innovation_category': 'Category: Company News',
        'article.industry_innovation_category': 'Category: Industry News',
        'article.company_innovation_p1': 'According to incomplete statistics, textile printing and dyeing auxiliary output was 470,000 tons in 2000, with sales of about RMB 20 billion; output reached 750,000 tons in 2005, with sales of about RMB 33 billion; and output exceeded 900,000 tons in 2007, with sales of about RMB 40 billion. It is expected that both output and sales of auxiliaries in China would continue to maintain growth in 2008. Since 2000, domestic auxiliary output has maintained an annual growth rate of around 10%, driven directly by the rapid development of China’s textile printing and dyeing industry.',
        'article.company_innovation_p2': 'In the past, research and development of textile printing and dyeing auxiliaries mainly relied on analysis and imitation of foreign products. In recent years, major progress has been made in new products, new formulations, synthesis of basic raw materials and basic theoretical research, generally meeting the needs of downstream industries.',
        'article.company_innovation_p3': 'As China’s economy continues to develop and living standards and consumption power gradually improve, demand for dyes, chemicals and textile printing and dyeing auxiliaries will continue to increase. The volume entering international markets will also keep rising, so the overall outlook for the industry is optimistic.',
        'article.company_innovation_p4': 'China is currently the world’s largest producer, consumer and exporter of textiles. In 2007, China’s printed and dyed fabric output reached 50 billion meters, up 8.3% year on year. In the first half of 2008, despite unfavorable factors such as continued RMB appreciation, rising bank lending rates, lower export tax rebates, restrictions on processing trade, increasing environmental pressure, sharp raw material price increases and the slowdown of the global economy, China’s printed and dyed fabric production still maintained a certain level of growth. In the long term, stable development of the domestic textile printing and dyeing industry will provide good opportunities for textile auxiliaries.',
        'news.co_3_title': 'Printing and Dyeing Auxiliary Product Development: Formula Restoration is the "Shortcut"',
        'news.co_3_desc': 'As an important raw material for textile printing and dyeing, auxiliaries improve fabric dyeing quality and increase the added value of textiles.',
        'article.company_formula_date': 'Published: 2020-11-25 17:52',
        'article.company_formula_title': 'Printing and Dyeing Auxiliary Product Development: Formula Restoration is the "Shortcut"',
        'article.company_formula_category': 'Category: Company News',
        'article.industry_formula_category': 'Category: Industry News',
        'article.company_formula_p1': 'In recent years, with the deepening of industrialization in China, fine chemicals have made considerable progress, and auxiliaries have become a more visible small branch of the fine chemical industry. Taking textile printing and dyeing auxiliaries as an example, this auxiliary industry features relatively low fixed investment, high added value and strong profitability. The key to maintaining competitiveness lies in the market performance of product development.',
        'article.company_formula_p2': 'Textile printing and dyeing auxiliaries are one of the important raw materials for textile printing and dyeing. They are used to improve fabric dyeing quality and increase the added value of textiles. The textile printing and dyeing auxiliary industry belongs to the application technology of fine chemical products in textile printing and dyeing, sitting at the intersection of chemistry and dyeing technology.',
        'article.company_formula_p3': 'According to a well-known domestic third-party analytical organization, textile printing and dyeing auxiliaries involve relatively little equipment, have short construction cycles, and most raw materials are marketized. Using formula restoration technology in new product development can help shorten production cycles and improve market results.',
        'article.company_formula_p4': 'At present, printing and dyeing auxiliaries are products designed for special user groups and are typical examples of non-standardized production in the chemical product chain. Multiple varieties and small batches are the market characteristics of printing and dyeing auxiliaries. Overall, these products are highly specialized. Different auxiliaries are designed for different fabrics, processes, production techniques and fabric styles, which further highlights the importance of product development and formula restoration technology.',
        'article.company_formula_p5': 'The widespread use of formula restoration technology has brought revolutionary changes to product development for printing and dyeing auxiliaries.',
        'article.company_formula_p6': 'To meet product development needs for various printing and dyeing auxiliary enterprises, Shanghai Ingeer Analysis and Testing Center uses formula restoration technology with functions such as efficiency enhancement and modification, often allowing product performance to exceed that of single-structure products. Therefore, third-party mastery of formula restoration technology is an extremely important aspect of building market competitiveness in product development for textile printing and dyeing auxiliary enterprises.',
        'article.company_formula_p7': 'In short, textile printing and dyeing auxiliaries belong to a development-driven industrial field. With product development, formula restoration services and technical support from third-party organizations, successful new product development and market building can become an effective path to smooth sales and stronger enterprise competitiveness.',
        'news.co_4_title': 'Development History of Textile Softeners',
        'news.co_4_desc': 'Organosilicon softeners originated in the 1950s and developed through dimethyl silicone emulsions, amino silicone oils, polyether-modified amino silicone oils and block-modified silicone oils.',
        'article.company_softener_date': 'Published: 2020-11-25 17:50',
        'article.company_softener_title': 'Development History of Textile Softeners',
        'article.company_softener_category': 'Category: Company News',
        'article.industry_softener_category': 'Category: Industry News',
        'article.company_softener_intro': '(Amino Silicone Oil) Development History of Textile Softeners',
        'article.company_softener_p1': 'Organosilicon softeners originated in the 1950s and developed through four stages.',
        'article.company_softener_p2': 'First-generation organosilicon softeners used mechanical emulsification to emulsify dimethyl silicone oil. Because the silicone oil itself contained no active groups, its bonding with fabrics was not durable and it was not resistant to washing. Used alone, the effect was not ideal, so it is now rarely used as a softener. Dimethyl silicone oil emulsions are still widely used in other fields, such as shampoo conditioning agents and release agents. Hydroxy silicone oil, made with hydroxyl-terminated silicone emulsions, can form a network crosslink on fabric surfaces under metal catalysis, improving wash resistance, stability and softness. However, due to shortcomings such as single functionality and easy oil floating or emulsion breaking, it was replaced by second-generation organosilicon softeners before large-scale industrial application.',
        'article.company_softener_p3': 'Second-generation organosilicon softeners are amino-silicone modified silicone oils, referred to as amino silicone oils. They can be viewed as dimethyl silicone oils in which some methyl groups, including side and terminal positions, are replaced by amino groups. In addition to retaining the original hydrophobicity and release properties of dimethyl silicone oil, amino silicone oil gains reactivity, adsorption, lubrication and softness from aminoalkyl groups. It has therefore been widely used in fabric soft finishing agents, polishing agents, coating additives and resin modifiers, and has become one of the most widely used functional silicone oils.',
        'article.company_softener_p4': 'Third-generation organosilicon softeners are polyether-modified amino silicone oils. They are produced by hydrosilylation of side-chain hydrogen silicone oil with allyl epoxy compounds and allyl polyethers to form side-chain polyether epoxy silicone oil intermediates, followed by ring-opening aminolysis with organic amines. Fabrics treated with this material are not only soft and smooth, but also have excellent moisture absorption.',
        'article.company_softener_p5': 'Fourth-generation organosilicon softeners are block-modified silicone oils. They offer major improvements in softness, wash resistance, elasticity and hydrophilicity, meeting a wide range of fabric requirements, and have become the mainstream direction for current organosilicon softener development.',
        'news.home_company_title': 'Introduction to Zhejiang Wei Feng New Material Co., Ltd.',
        'news.home_company_desc': 'Zhejiang Wei Feng New Material Co., Ltd. is located in Jiangshan and specializes in eco-friendly textile printing and dyeing auxiliaries.',
        'news.faq_1_title': 'Where can Dimethyl Silicone Oil be applied?',
        'news.faq_1_desc': 'Silicone oil can provide softness, smoothness, heat resistance, defoaming, carrier, lubrication and toughness functions for different products.',
        'news.faq_2_title': 'Terminal (Hydrogen/Epoxy/Polyether Epoxy) Silicone Oil',
        'news.faq_2_desc': 'This series includes terminal reactive linear modified silicone oils and key intermediates for block copolymerization, with low volatile content for export requirements.',
        'news.faq_3_title': 'High-concentration Ternary Block Silicone Oil',
        'news.faq_3_desc': 'This series is used in finishing processes to improve softness, smoothness, fullness and resilience on many fabrics, especially polyester and polyester-blend fabrics.',
        'news.faq_4_title': 'Functional Series Products',
        'news.faq_4_desc': 'The functional series is used for non-durable flame-retardant, moisture-wicking, antistatic and fragrance finishing on cotton, polyester, wool and blended fabrics.',
        'news.faq_5_title': 'Pre-treatment Auxiliaries',
        'news.faq_5_desc': 'Pre-treatment auxiliaries are used before textile dyeing and printing, including scouring agents, detergents, oil-removing agents, enzymes and water softeners.',
        'news.faq_6_title': 'Dyeing Series Products',
        'news.faq_6_desc': 'The dyeing series covers repairing, defoaming, leveling, anti-crease, anti-abrasion and fixing applications for polyester, cotton and blended fabrics.',
        'news.faq_7_title': 'Softener Flake Products',
        'news.faq_7_desc': 'The softener flake series is used for soft finishing of cotton and blended knits or woven fabrics, especially where hydrophilicity and shade stability are required.',
        'news.faq_8_title': 'Brightening Series Products',
        'news.faq_8_desc': 'Brightening agents are organic compounds used to improve whiteness of fibers, fabrics and paper, suitable for brightening polyester, cotton, linen and blended fabrics.',
        'article.back_news': '<i class="fas fa-arrow-left"></i> Back to News',
        'article.back_products': '<i class="fas fa-arrow-left"></i> Back to Products',
        'article.dimethyl_title': 'Where can Dimethyl Silicone Oil be applied?',
        'article.dimethyl_category': 'Category: FAQ',
        'article.dimethyl_intro': 'In the silicone industry, there are many types of raw materials for silicone products, each serving different functions. Silicone oil is widely used in many industries. It mainly gives products softness and smoothness, while also providing heat resistance, defoaming, carrier, lubrication and toughness benefits. Beyond silicone rubber products, it also plays a role in other industries.',
        'article.dimethyl_h3_1': '1. What is Dimethyl Silicone Oil?',
        'article.dimethyl_p1': '201 methyl silicone oil is a new organosilicon synthetic material. It appears as a colorless, transparent oily liquid. Chemically, it is a linear polymethylsiloxane, with the structural formula as follows:',
        'article.dimethyl_p2': 'Thanks to the stability of Si-O bonds, the hydrophobicity of methyl groups and the structural characteristics of methyl siloxane polymers, methyl silicone oil has good heat resistance. It has a high flash point, low volatility, low viscosity coefficient, high compressibility, low surface tension, good chemical stability, good electrical insulation, water and moisture resistance, and is non-toxic to organisms, including humans. To form a film on other material surfaces or cure into a rubber-like solid, methyl silicone oil can be heated at 250-300&deg;C or treated with an appropriate catalyst, usually a peroxide. Its operating temperature range is 50-180&deg;C.',
        'article.dimethyl_p3': 'Methyl silicone oils with different viscosities vary in physical and chemical properties and characteristic parameters. This product is classified by viscosity, including grades such as 201-10, 201-50, 201-100, 201-350, 201-500, 201-800 and 201-1000. Special viscosity specifications can also be customized according to user requirements.',
        'article.dimethyl_h3_2': '2. Applications',
        'article.dimethyl_use_1': '1. Used as an insulating medium with heat resistance, arc resistance, corrosion resistance and moisture resistance in the electrical and electronics industries.',
        'article.dimethyl_use_2': '2. Used as an excellent heat-transfer medium in the chemical, pharmaceutical and food industries.',
        'article.dimethyl_use_3': '3. Used as a high-efficiency defoamer in synthetic resin, oil processing, food manufacturing, fermentation and papermaking processes.',
        'article.dimethyl_use_4': '4. Used in precision machinery and instruments for shock resistance, damping, lubrication and force transmission.',
        'article.dimethyl_use_5': '5. Used as a high-temperature release agent in the molding of plastic products and silicone rubber products, as well as in food production.',
        'article.dimethyl_use_6': '6. Used as a surface treatment agent for glass, ceramics, metals, leather, fabrics, threads and cement products to improve reinforcement, water repellency, corrosion resistance, mildew resistance and smoothness.',
        'article.dimethyl_use_7': '7. Used as an additive in coatings, oils and cosmetics to improve leveling and softness.',
        'article.dimethyl_use_8': '8. Used in medical applications such as surgery, wound dressing, injection processing, blood storage and oral medicines.',
        'article.terminal_silicone_date': 'Q&A 02',
        'article.terminal_silicone_title': 'Terminal (Hydrogen/Epoxy/Polyether Epoxy) Silicone Oil',
        'article.terminal_silicone_category': 'Category: FAQ',
        'article.terminal_silicone_series': 'Terminal (Hydrogen/Epoxy/Polyether Epoxy) Silicone Oil Series',
        'article.terminal_silicone_intro': 'A range of terminal reactive linear modified silicone oils; key intermediates for block copolymerization; with very low volatile content, meeting European and American restrictions on cyclics such as D4, D5 and D6 and satisfying export requirements.',
        'article.high_conc_date': 'Q&A 03',
        'article.high_conc_title': 'High-concentration Ternary Block Silicone Oil',
        'article.high_conc_category': 'Category: FAQ',
        'article.high_conc_series': 'High-concentration Ternary Block Silicone Oil Series',
        'article.high_conc_intro': 'Used in finishing processes for many fiber fabrics to improve soft, smooth, full and resilient hand feel, especially for polyester and polyester-blend fabrics.',
        'article.high_conc_body': `
                <section class="article-product-block">
                    <h3>Anti-pilling Finishing Agent WF-6505</h3>
                    <p>Suitable for anti-pilling finishing on many fabrics, with good film-forming performance.</p>
                    <ol>
                        <li>Improves anti-pilling performance and reduces fabric fuzzing tendency.</li>
                        <li>Enhances abrasion resistance.</li>
                        <li>Has little influence on fabric hand feel.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>High-concentration Hydrophilic Silicone Oil WF-6508</h3>
                    <p>Suitable for cotton, linen, polyester and blended fabrics.</p>
                    <ol>
                        <li>Gives fabrics softness, fullness, good breathability, water absorbency and antistatic performance, and helps synthetic fibers reduce fuzzing and pilling.</li>
                        <li>Nonionic, hydrophilic and self-emulsifying modified silicone oil with high active content and good emulsion stability.</li>
                        <li>Easy to dilute and dissolve in cold water at any ratio, convenient to operate.</li>
                        <li>Good compatibility with other functional auxiliaries.</li>
                        <li>Strong re-dyeability; fabrics can be re-dyed without removing silicone oil.</li>
                        <li>Low yellowing.</li>
                        <li>Can be used in the same bath with fluorine-based stain-release finishing agents without affecting the stain-release result.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Smoothing Block Finishing Agent WF-8101N</h3>
                    <p>Suitable for hand-feel finishing on most fiber fabrics. It greatly improves smoothness and fullness, especially on synthetic and protein fibers.</p>
                    <ol>
                        <li>Self-emulsifying textile softener that provides smoothness and fullness, with good shear stability and pH stability in the finishing bath.</li>
                        <li>Can improve emulsion stability when blended into amino silicone oil emulsions.</li>
                        <li>Good compatibility with anti-crease resins, brighteners, nonionic or cationic auxiliaries and enzymes.</li>
                        <li>Delivers good performance at low finishing-bath concentration and gives synthetic and blended fabrics a natural soft hand feel.</li>
                        <li>Low yellowing, suitable for white and light-colored fabrics.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Low-temperature Film-forming Finishing Agent WF-8102N</h3>
                    <p>Suitable for soft finishing of cotton, polyester chemical-fiber fabrics and yarns, with good hand feel on extra-soft, imitation extra-soft and polyester blanket fabrics.</p>
                    <ol>
                        <li>Ternary linear structure; no roller sticking, oil floating or oil spots.</li>
                        <li>Good hydrophilicity and penetration into fibers, providing hydrophilic, fluffy and soft effects on heavy fabrics.</li>
                        <li>Good stability, resistant to shearing, acids and alkalis; usable in pretreatment baths at pH 3-10.</li>
                        <li>Forms film at low temperature; good hand feel after drying at 80-100&deg;C.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Fluffy Block Finishing Agent WF-8104N</h3>
                    <p>Suitable for hand-feel finishing of cotton, polyester and fleece fabrics, especially polyester, nylon knits and fleece fabrics.</p>
                    <ol>
                        <li>Good stability, shear resistance and acid/alkali resistance; can be used during pretreatment.</li>
                        <li>Ternary linear structure, different from ordinary amino silicone oil, with no roller sticking or oil floating.</li>
                        <li>Low dosage gives fluffy softness without obvious slipperiness; higher dosage brings smoothness without greasy feel.</li>
                        <li>Penetrates into fibers and provides good fluffy softness on medium and heavy fabrics.</li>
                        <li>Gives fleece fabrics a dry, non-sticky and non-greasy fluffy-smooth hand feel.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Brightening and Deepening Finishing Agent WF-8105N</h3>
                    <p>Suitable for deepening, brightening, elastic and smoothing finishing on polyester, cotton and blended fabrics. It works especially well with smooth softeners on fleece fabrics.</p>
                    <ol>
                        <li>Special silicone emulsion with smooth elasticity and clear color-deepening and brightening effects.</li>
                        <li>Can be used with cationic auxiliaries without chemical reaction.</li>
                        <li>Elastic hand feel, non-sticky and no roller sticking.</li>
                        <li>Provides a certain hydrophilic effect on cotton fabrics.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Rayon Special Finishing Agent WF-8109N/1</h3>
                    <p>Suitable for soft finishing on cotton, linen, T/R and rayon fabrics, especially soft and fluffy finishing for polyester imitation reactive-printed home-textile fabrics.</p>
                    <ol>
                        <li>Excellent chemical stability, including emulsion, acid/alkali and wide-pH stability.</li>
                        <li>Low yellowing, especially suitable for white and light-colored fabrics.</li>
                        <li>Good hydrophilicity.</li>
                        <li>Gives fabrics soft, full, silk-like hand feel and outstanding elasticity, improving three-dimensional recovery of cotton knitted products.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Polyester Soft Silicone Oil WF-8106N</h3>
                    <p>Suitable for soft finishing of cotton, polyester, polyester-cotton blended chemical-fiber fabrics and yarns, especially giving medium-heavy fabrics a good soft and fluffy hand feel.</p>
                    <ol>
                        <li>Ternary linear structure; no roller sticking, oil floating or residual oil spots.</li>
                        <li>Helps penetrate into fibers and provides good hydrophilic, fluffy and soft effects on heavy fabrics.</li>
                        <li>Good stability, shear resistance and acid/alkali resistance.</li>
                        <li>Forms film at low temperature; good hand feel after drying at 80-100&deg;C.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Polyester/Cotton Finishing Agent WF-8191A</h3>
                    <p>Suitable for soft finishing of polyester, cotton and blended fabrics. It performs well in T/R and T/C non-down velvet finishing processes.</p>
                    <ol>
                        <li>Good fabric penetration and strong affinity.</li>
                        <li>Provides excellent smooth, resilient and soft style.</li>
                        <li>Good chemical stability and compatibility with cationic softeners.</li>
                        <li>Low yellowing.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Elastic Smoothing Finishing Agent WF-8203A</h3>
                    <p>Suitable for finishing rayon fabrics, Roma fabrics and other fabric types, giving a smooth and resilient style.</p>
                    <ol>
                        <li>Self-emulsifying textile softener that provides smoothness and elasticity, with good shear stability and pH stability.</li>
                        <li>Good compatibility with anti-crease resins, brighteners, nonionic or cationic auxiliaries and enzymes.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>High Hand-feel Hydrophilic Finishing Agent WF-8204A</h3>
                    <p>Suitable for smooth, soft and hydrophilic finishing on cotton, rayon, polyester and blended fabrics.</p>
                    <ol>
                        <li>Gives fabrics a soft, smooth and silk-like finishing effect.</li>
                        <li>Low yellowing, suitable for white and light-colored fabrics.</li>
                        <li>Special molecular structure with no roller sticking, silicone spots or oil floating.</li>
                        <li>Compatible with other nonionic and cationic auxiliaries.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Soft and Smooth Finishing Agent WF-8205N</h3>
                    <p>Suitable for soft finishing on various fleece fabrics, especially flannel.</p>
                    <ol>
                        <li>Gives fabrics fluffy fullness, smooth hand feel, good elasticity and a dry non-sticky touch.</li>
                        <li>Excellent compatibility with cationic and nonionic auxiliaries in the same bath.</li>
                        <li>Low yellowing, suitable for white and light-colored fabrics.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Fluffy and Soft Finishing Agent WF-8206N</h3>
                    <p>Suitable for fluffy, soft and smooth finishing on polyester-acrylic, polyester-cotton fleece and polyester fabrics.</p>
                    <ol>
                        <li>Good chemical stability and compatibility.</li>
                        <li>Low yellowing.</li>
                        <li>Gives fabrics a fluffy and soft hand feel.</li>
                        <li>Good penetration and affinity on polyester-acrylic wool-like fabrics.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>High-concentration Smoothing Finishing Agent WF-8301N</h3>
                    <p>Suitable for many fiber fabrics to improve soft, smooth and resilient hand feel; also usable for fleece fabrics such as coral fleece.</p>
                    <ol>
                        <li>Dilute at 1:3 to 1:10; after dissolving, it forms a transparent silicone microemulsion with slight blue light.</li>
                        <li>Good water solubility, stability and compatibility with cationic and nonionic auxiliaries.</li>
                        <li>Gives fabrics durable-wash smoothness and resilience, and can be blended with fluffy finishing agents for different styles.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>High-concentration Fluffy Finishing Agent WF-8402N</h3>
                    <p>Suitable for many fiber fabrics to improve soft and fluffy hand feel.</p>
                    <ol>
                        <li>Dilute at 1:3 to 1:10; after dissolving, it forms a transparent silicone microemulsion with slight blue light.</li>
                        <li>Good water solubility, stability and compatibility with cationic and nonionic auxiliaries.</li>
                        <li>Gives fabrics durable-wash fluffy style.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Glossy Soft-smooth Finishing Agent WF-8403</h3>
                    <p>Suitable for polyester non-down velvet, T/C non-down velvet, cotton terry and other pile fabrics, providing good smooth-soft hand feel and excellent gloss and brightness.</p>
                    <ol>
                        <li>Suitable for dipping and padding on many fibers, giving finished fabrics excellent oily, soft and smooth touch.</li>
                        <li>Good chemical stability and compatibility with cationic softeners.</li>
                        <li>Can be used alone or together with softeners for better effect.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Hydrophilic Cooling Silicone Oil WF-8499</h3>
                    <p>Suitable for hydrophilic, cool and smooth finishing on pure cotton, cotton-spandex knitted fabrics and mercerized cotton.</p>
                    <ol>
                        <li>Good hydrophilic effect, heat stability and shear resistance; suitable for padding use.</li>
                        <li>Soft and smooth hand feel with obvious cool silky touch.</li>
                        <li>Very low yellowing.</li>
                        <li>APEO-free.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Eco Oil-removing Agent WF-201F</h3>
                    <p>Suitable for long-bath in-tank pretreatment oil removal on polyester, spandex and blended fabrics. It can also be used for oil removal, desizing, scouring and washing on other fabrics with good results.</p>
                </section>
        `,
        'article.functional_qa_date': 'Q&A 04',
        'article.functional_qa_title': 'Functional Series Products',
        'article.functional_qa_category': 'Category: FAQ',
        'article.functional_qa_series': 'Functional Series',
        'article.functional_qa_intro': 'Used for non-durable flame-retardant, moisture-wicking, antistatic and fragrance finishing on cotton, polyester, wool and blended fabrics.',
        'article.functional_qa_body': `
                <section class="article-product-block">
                    <h3>Nonionic Antistatic Agent WF-6480A</h3>
                    <p>Suitable for antistatic finishing on polyester, acrylic, nylon, wool and blended fabrics, and can improve anti-pilling performance.</p>
                    <ol>
                        <li>Excellent antistatic performance, with good moisture absorption, conductivity, stain resistance and dust resistance.</li>
                        <li>Can improve fabric anti-pilling performance by more than 0.5 grade.</li>
                        <li>Can be used together with fixing agents and silicone oils without affecting fabric hand feel or style.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Stiffening Agent WF-6490</h3>
                    <p>Suitable for stiff finishing on polyester, nylon and blended fabrics, and can also be used as a crosslinking agent.</p>
                    <ol>
                        <li>High reactivity, excellent stiffness and anti-wrinkle effect, good elasticity and no softening back.</li>
                        <li>Can be compounded with coating adhesives and pigment-printing binders to improve fastness.</li>
                        <li>Can be compounded with water-repellent and stain-release auxiliaries to greatly improve wash durability.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Moisture-wicking Agent WF-6502C</h3>
                    <p>Suitable for moisture-wicking finishing on polyester, nylon, acetate and blended fabrics.</p>
                    <ol>
                        <li>Excellent moisture absorption and quick-drying performance, easy soil release and antistatic properties.</li>
                        <li>Soft and fluffy hand feel; padding or exhaustion methods give better results.</li>
                        <li>Good wash durability; excellent performance can still be maintained after more than 20 washes under AATCC-135.</li>
                        <li>When used in the dyeing bath, it can help prevent floating, creases, knots and claw marks.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Heat-yellowing Resistant Agent WF-6503</h3>
                    <p>Suitable for dark finishing on polyester, nylon, cotton and blended fabrics.</p>
                    <ol>
                        <li>Effectively prevents yellowing caused by oxidation of terminal amino groups during heat setting of nylon, with amino-protecting effect.</li>
                        <li>Suitable for heat setting of grey fabrics made from synthetic or cellulose fibers, preventing yellowing during heat setting.</li>
                        <li>Especially suitable for molded fabrics.</li>
                        <li>Helps prevent yellowing caused by exposure to air.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>UV-resistant Finishing Agent WF-6504</h3>
                    <p>Suitable for UV-resistant finishing on polyester fabrics and for improving light fastness.</p>
                    <ol>
                        <li>Provides excellent UV absorption for polyester fabrics and improves UPF value.</li>
                        <li>Has good absorption conversion, reflection and scattering effects for UV light in the 280-400nm range.</li>
                        <li>Improves fabric light fastness.</li>
                        <li>Has little influence on shade when used in the same dyeing bath.</li>
                        <li>Good stability and resistance to hard water, weak acids and weak alkalis.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Fragrance Finishing Agent WF-6506</h3>
                    <p>Suitable for fragrance finishing on cotton, linen, wool, silk and chemical-fiber fabrics.</p>
                    <ol>
                        <li>Gives textiles a long-lasting and elegant fragrance.</li>
                        <li>Applicable in padding and exhaustion finishing, as well as printing or coating processes. Especially suitable for pigment dyeing and pigment printing, giving finished fabrics lasting fragrance.</li>
                        <li>Pure fragrance types include mint, rose, lavender, jasmine, apple, lemon and cologne.</li>
                    </ol>
                </section>
        `,
        'article.pretreatment_qa_date': 'Q&A 05',
        'article.pretreatment_qa_title': 'Pre-treatment Auxiliaries',
        'article.pretreatment_qa_category': 'Category: FAQ',
        'article.pretreatment_qa_series': 'Pre-treatment Series',
        'article.pretreatment_qa_intro': 'Pre-treatment auxiliaries are used before textile dyeing and printing, including scouring agents, detergents, oil-removing agents, scouring enzymes, water softeners, chelating dispersants and penetrants.',
        'article.pretreatment_qa_body': `
                <section class="article-product-block">
                    <h3>Eco Oil-removing Agent WF-101</h3>
                    <p>Used for removing oils and oil stains in the pretreatment of polyester and blended fabrics. It can also be used for oil removal, scouring, desizing, general washing and cleaning dyeing equipment.</p>
                    <ol>
                        <li>Strong detergency and good emulsifying/dispersing ability, with special effect on oils on polyester and blended fabrics.</li>
                        <li>Provides desizing, scouring and washing functions; improves whiteness, brightness and hand feel after use.</li>
                        <li>Also helps clean oil stains on dyeing and printing equipment.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Eco Oil-removing Agent WF-201F</h3>
                    <p>Suitable for in-tank and continuous pretreatment oil removal on polyester, acrylic and blended fabrics, and for oil removal, desizing, scouring and washing on other fabrics.</p>
                    <ol>
                        <li>Good effect on removing yellow stains and aged oil marks from polyester and brightened goods.</li>
                        <li>Low dosage with obvious effect.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Eco Oil-removing Agent WF-104</h3>
                    <p>Suitable for low-alkali pretreatment oil removal of polyester and blended fabrics, as well as one-bath scouring/dyeing oil removal and desizing.</p>
                    <ol>
                        <li>Good oil-removing effect in near-neutral and weak-alkaline baths, with little influence on shade.</li>
                        <li>Provides better oil removal and desizing effects without added alkali.</li>
                        <li>APEO-free.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Multifunctional Scouring Agent WF-4006</h3>
                    <p>Suitable for alkali-peroxide one-bath pretreatment of cotton and polyester-cotton warp/weft knits, towels, hanks and cone yarns.</p>
                    <ol>
                        <li>Combines scouring, penetration and chelation functions.</li>
                        <li>Only this product and hydrogen peroxide are needed in one-bath bleaching, making operation simple.</li>
                        <li>Low fabric weight loss and reduced wastewater COD.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Chelating Dispersant WF-4003A</h3>
                    <p>Suitable for textile pretreatment, whitening, polyester scouring and weight reduction, post-dyeing or post-printing washing, soaping and anti-staining of white grounds.</p>
                    <ol>
                        <li>Excellent chelating and dispersing ability, dispersing inorganic and organic suspended particles and preventing fabric contamination.</li>
                        <li>Strong scale inhibition and scale removal, effectively improving water quality and product quality.</li>
                        <li>Excellent resistance to acids, alkalis, oxidants and reducing agents, with no foam.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Peroxide Bleach Stabilizer WF-4004</h3>
                    <p>Suitable for high-temperature bleaching and cold pad-batch peroxide bleaching of cellulose fibers and blends.</p>
                    <ol>
                        <li>Can replace silicate and effectively control hydrogen peroxide decomposition in peroxide bleaching.</li>
                        <li>Can be added directly into the bleaching bath.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>High-efficiency Scouring Agent WF-4005N</h3>
                    <p>Suitable for continuous pretreatment of cotton and blended fabrics, especially cold pad-batch processes.</p>
                    <ol>
                        <li>Excellent alkali stability; remains stable in 180g/L NaOH solution.</li>
                        <li>Excellent alkali-resistant penetration, ensuring liquor pickup in continuous cotton pretreatment and improving scouring effect.</li>
                        <li>Can be used at one quarter of conventional dosage, or at normal dosage when needed.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>High-efficiency Soaping Agent WF-4007N</h3>
                    <p>Used for soaping of fabrics printed or dyed with vat, direct, reactive and naphthol dyes.</p>
                    <ol>
                        <li>Good washing, dispersing and suspending effects for unfixed dyes, alkalis and electrolytes.</li>
                        <li>Excellent anti-staining effect on white grounds.</li>
                        <li>Good chelating ability for calcium and magnesium ions, preventing calcium and soap spots during soaping.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Oxidative Desizing Agent WF-4008</h3>
                    <p>Suitable for overflow, jig or continuous desizing of PA, PVA, CMC and other chemical sizes, especially for high-density and high-size-content chemical-fiber fabrics.</p>
                    <ol>
                        <li>Strong oxidizing ability that can fully oxidize and decompose chemical sizes.</li>
                        <li>Excellent penetration, emulsification and dispersion, removing and dispersing size while preventing redeposition.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Nonionic Penetrant WF-4009</h3>
                    <p>Suitable for many dyeing and finishing processes to improve penetration and liquor pickup.</p>
                    <ol>
                        <li>Excellent penetration and stability.</li>
                        <li>Nonionic character gives good compatibility with silicone oils, softener flakes and other auxiliaries.</li>
                        <li>Improves scouring effect in cotton pretreatment.</li>
                        <li>Not resistant to strong acids.</li>
                        <li>Improves dyeing uniformity and penetration, and improves fabric hand feel.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Oligomer Removing Agent WF-4219</h3>
                    <p>Used to clean and remove polyester oligomers, oil stains and color stains deposited in vessels or dyeing and finishing equipment.</p>
                    <ol>
                        <li>Has solubilizing, emulsifying, cleaning and residual-alkali neutralizing ability.</li>
                        <li>Cleans and removes oligomers, oil stains and color stains deposited in equipment.</li>
                        <li>Removes oils, surface floating color, oligomers and residues after weight reduction from polyester fabrics.</li>
                        <li>Can strip finishing agents such as amino silicone oil from fabrics.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Strong Oil-removing Agent WF-4315C</h3>
                    <p>Suitable for polyester woven fabrics and polyester warp/weft knits in pretreatment or one-bath scouring and dyeing processes.</p>
                    <ol>
                        <li>Phosphorus-free and APEO-free.</li>
                        <li>Prevents oil agents and oligomers from staining the machine during one-bath oil removal and dyeing, reducing color spots and improving quality.</li>
                        <li>Good emulsifying and dispersing ability under neutral, weak-acid and alkaline conditions, especially for disperse chemical-fiber oils.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Emulsifying Oil-removing Agent WF-4315D</h3>
                    <p>Suitable for pretreatment or one-bath scouring/dyeing of polyester woven, warp/weft knitted, spandex-containing and blended fabrics.</p>
                    <ol>
                        <li>Prevents oil agents and oligomers from staining equipment and causing color spots during one-bath oil removal and dyeing.</li>
                        <li>Excellent emulsifying, dispersing and oil-removing effects under neutral, weak-acid and alkaline conditions; combines oil removal and emulsification.</li>
                        <li>Effective on disperse chemical-fiber oils, high-viscosity mechanical oils and dimethyl silicone oil, helping prevent redeposition.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Scouring Oil-removing Agent WF-4316N</h3>
                    <p>Suitable for low-temperature oil removal of decorative fabrics, one-bath scouring/dyeing of polyester knits, and scouring oil removal of cotton and blended fabrics.</p>
                    <ol>
                        <li>In weak-alkaline and neutral baths, effectively emulsifies and disperses oils on spandex-containing fabrics.</li>
                        <li>At 70-80&deg;C under neutral conditions, removes oils from alkali-sensitive fabrics without damaging fibers.</li>
                        <li>Under alkaline conditions, gives excellent scouring and cleaning in blended and all-cotton scouring/oil-removal baths.</li>
                        <li>Suitable for polyester knitted one-bath dyeing, with little shade influence and effective oil removal in weak-acid and near-neutral baths.</li>
                    </ol>
                </section>
        `,
        'article.dyeing_qa_date': 'Q&A 06',
        'article.dyeing_qa_title': 'Dyeing Series Products',
        'article.dyeing_qa_category': 'Category: FAQ',
        'article.dyeing_qa_series': 'Dyeing Series',
        'article.dyeing_qa_intro': 'Dyeing agents are central to dyeing processes. Different fibers require different dyeing agents and process routes, while dye-processing auxiliaries include solubilizers, dispersants, color developers and phthalocyanine yellow auxiliaries.',
        'article.dyeing_qa_body': `
                <section class="article-product-block">
                    <h3>High-efficiency Repairing Agent WF-4016</h3>
                    <p>Suitable for defect repair on polyester fibers and blended fabrics.</p>
                    <ol>
                        <li>Exceptional migration ability, effectively repairing defects produced after dyeing of polyester and blended fabrics; the shade remains basically unchanged after repair.</li>
                        <li>Special active ingredients provide retarding and help prevent secondary dye aggregation at the low-temperature dyeing stage, while strongly promoting dyeing at the high-temperature stage. WF-4016 improves leveling and color yield on polyester and blended fabrics.</li>
                        <li>Suitable for polyester package-yarn dyeing; strong diffusibility helps avoid inner and outer layer shade differences.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Defoamer WF-4309N</h3>
                    <p>Suitable for textile, printing and dyeing, papermaking, wastewater treatment and other industries.</p>
                    <ol>
                        <li>A specially designed defoamer for aqueous systems.</li>
                        <li>Low dosage, fast defoaming and lasting effect, with good foam-inhibition performance.</li>
                        <li>Suitable for defoaming and foam inhibition in 80&deg;C-160&deg;C aqueous baths, reducing process time and improving production efficiency.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>High-concentration High-temperature Leveling Agent WF-4311N</h3>
                    <p>Suitable for high-temperature, high-pressure dyeing of polyester, especially microfiber polyester and blended fabrics.</p>
                    <ol>
                        <li>Low shade stripping and good dyeing reproducibility; easy preparation and can be dissolved directly in cold water.</li>
                        <li>Strong migration ability, meeting dye migration requirements through the dyeing process and improving leveling; higher dosage gives good shade-correction effect.</li>
                        <li>Excellent high-temperature dispersion stability, preventing dye aggregation during dyeing.</li>
                        <li>Low foam.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>In-bath Anti-crease and Anti-abrasion Finishing Agent WF-4313</h3>
                    <p>Suitable for pretreatment, dyeing and aftertreatment processes of various fabrics.</p>
                    <ol>
                        <li>Prevents or reduces creases during rope processing in pretreatment, dyeing and aftertreatment, and effectively prevents claw marks.</li>
                        <li>Gives fabrics a smooth hand feel.</li>
                        <li>Low foam and good stability.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>High-efficiency Fixing Agent for Cotton WF-4314</h3>
                    <p>Suitable for improving color fastness in reactive dyeing or printing of cotton products, especially for fabrics requiring high fastness.</p>
                    <ol>
                        <li>Effectively improves washing fastness, perspiration fastness and wet rubbing fastness after hot-water soaking.</li>
                        <li>Wide color applicability, with obvious fastness improvement for reactive dyeing and printing in turquoise blue, scarlet, black, bright blue and other shades.</li>
                        <li>Low shade change and good fixing reproducibility.</li>
                        <li>Does not affect fabric hand feel or hydrophilicity.</li>
                        <li>Free of free formaldehyde and bound formaldehyde.</li>
                    </ol>
                </section>
        `,
        'article.softener_qa_date': 'Q&A 07',
        'article.softener_qa_title': 'Softener Flake Products',
        'article.softener_qa_category': 'Category: FAQ',
        'article.softener_qa_series': 'Softener Flake Series',
        'article.softener_qa_intro': 'The softener flake series is used for soft finishing of cotton and blended knits or woven fabrics, especially for finishing processes requiring good hydrophilicity and shade stability.',
        'article.softener_qa_body': `
                <section class="article-product-block">
                    <h3>Acrylic Softener WF-6155</h3>
                    <p>Suitable for exhaustion and padding after-finishing of acrylic, rayon, linen and other natural or synthetic fibers.</p>
                    <ol>
                        <li>Soft and smooth hand feel, especially suitable for overall soft finishing of acrylic fabrics.</li>
                        <li>Excellent antistatic performance.</li>
                        <li>Low influence on the shade of finished fabrics.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Cotton Softener WF-6156</h3>
                    <p>Suitable for exhaustion and padding after-finishing of cotton, rayon, linen and other natural or synthetic fibers.</p>
                    <ol>
                        <li>Soft and smooth hand feel, especially suitable for overall soft finishing of cotton, rayon, linen and other natural fibers.</li>
                        <li>Excellent antistatic performance.</li>
                        <li>Low influence on the shade of finished fabrics.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Softening Oil Concentrate WF-6157</h3>
                    <p>Suitable for exhaustion and padding after-finishing of cotton, rayon, linen and other natural or synthetic fibers.</p>
                    <ol>
                        <li>Soft and smooth hand feel, especially suitable for overall soft finishing of cotton, rayon, linen and other natural fibers.</li>
                        <li>Excellent antistatic performance.</li>
                        <li>Low influence on the shade of finished fabrics.</li>
                    </ol>
                </section>
        `,
        'article.brightener_qa_date': 'Q&A 08',
        'article.brightener_qa_title': 'Brightening Series Products',
        'article.brightener_qa_category': 'Category: FAQ',
        'article.brightener_qa_series': 'Brightening Series',
        'article.brightener_qa_intro': 'Brightening agents are organic compounds that improve the whiteness of fibers, fabrics and paper. Also known as optical brighteners or fluorescent brighteners, they help correct yellowing caused by colored impurities. Instead of relying only on chemical bleaching, brighteners are added to products to improve whiteness and brightness.',
        'article.brightener_qa_body': `
                <section class="article-product-block">
                    <h3>Fluorescent Brightener WF-9021</h3>
                    <p>Suitable for whitening and brightening polyester and blended fabrics, and also for brightening acetate fibers.</p>
                    <ol>
                        <li>A high-performance fluorescent brightener for polyester, with high whiteness, low dosage, strong fluorescence and pure bright shade.</li>
                        <li>Does not cause yellow spots or uneven shade.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>High-efficiency Fluorescent Brightener WS-D</h3>
                    <p>Suitable for whitening and brightening polyester and blended fabrics.</p>
                    <ol>
                        <li>Very high whiteness, low dosage and shade development not limited by temperature; ideal for low-temperature brightening.</li>
                        <li>Suitable for thermosol padding, high-temperature high-pressure exhaustion, and low-temperature adsorption/fixation exhaustion.</li>
                        <li>Can be used in alkaline peroxide one-bath processes for T/C, T/R and other blended fabrics.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Cotton Brightener MST-1</h3>
                    <p>Suitable for room-temperature padding brightening of cotton, linen and blended fiber fabrics, with good brightening effect.</p>
                    <ol>
                        <li>High whiteness improvement and bright shade, achieving special-white effect; performance is superior to similar products.</li>
                        <li>Excellent whiteness, pure bright shade and low yellowing during high-temperature setting.</li>
                        <li>Excellent resistance to acid, alkali, hard water and electrolytes, with strong stability in the pH 2-11 range.</li>
                        <li>Low foam and good water solubility.</li>
                    </ol>
                </section>
                <section class="article-product-block">
                    <h3>Fluorescent Brightener 4BK-1</h3>
                    <p>Suitable for one-bath brightening of cotton and polyester/cotton blended fabrics, and also for padding processes.</p>
                    <ol>
                        <li>Efficient fluorescent brightening effect with a slight bluish-violet shade.</li>
                        <li>Insensitive to light and chemically stable.</li>
                        <li>Resistant to weak acids, alkali, hydrogen peroxide and perborates.</li>
                    </ol>
                </section>
        `,
        'article.ultra_hydrogen_title': 'Ultra-low Cyclic Terminal Hydrogen Silicone Oil',
        'article.ultra_hydrogen_caption': 'Ultra-low Cyclic Terminal Hydrogen Silicone Oil',
        'article.th_product': 'Product Name',
        'article.th_mw': 'Molecular Weight',
        'article.th_viscosity': 'Viscosity mm2/s',
        'article.th_hydrogen': 'Hydrogen Content (H%)',
        'article.th_volatile': 'Volatile Matter (%)',
        'article.th_epoxy': 'Epoxy Value eq/100g',
        'article.ultra_hydrogen_note': 'Volatile matter: ≤1.5%',
        'article.ultra_hydrogen_adv': 'Applications and advantages: In addition to the uses and advantages of terminal hydrogen silicone oil, this silicone oil has extremely low volatile content, meeting European and American restrictions on cyclics such as D4, D5 and D6 and satisfying export requirements.',
        'article.hydrogen_title': 'Terminal Hydrogen Silicone Oil',
        'article.hydrogen_caption': 'Terminal Hydrogen Silicone Oil',
        'article.hydrogen_note': 'Volatile matter: ≤5%',
        'article.application': 'Applications',
        'article.advantages': 'Advantages',
        'article.hydrogen_app': 'Terminal reactive linear modified silicone oils; key intermediates for block copolymerization; used for producing terminal epoxy silicone oil; used as water repellents and softeners for natural and synthetic fiber fabrics, silk and leather.',
        'article.hydrogen_adv': 'Stable hydrogen content; high activity.',
        'article.epoxy_title': 'Terminal Epoxy Silicone Oil',
        'article.epoxy_caption': 'Terminal Epoxy Silicone Oil',
        'article.epoxy_note': 'Volatile matter: ≤3%',
        'article.epoxy_app': 'Terminal reactive linear modified silicone oils; key intermediate raw materials for organic silicone block copolymer silicone oil softeners; the binary copolymer silicone oil products overcome the yellowing, poor hydrophilicity and emulsion-breaking roller sticking of common amino silicone oil; by reacting with terminal epoxy groups, siloxane chain ends and silicone characteristics can be introduced into organic resins.',
        'article.epoxy_adv': 'The epoxy groups in terminal epoxy silicone oil remain intact, with high epoxy retention and low volatile content; the Si-H addition reaction is relatively complete.',
        'news.read_more': 'Read More <i class="fas fa-long-arrow-alt-right"></i>',

        // --- Gallery ---
        'gallery.header_title': 'Trust Built on Professionalism',
        'gallery.header_desc': 'Selected images from our everyday work and continuing journey',
        'gallery.intro_label': 'CORPORATE MOMENTS',
        'gallery.intro_title': 'Moments from Our Journey',
        'gallery.intro_desc': 'A curated selection of moments from our workplace, R&D and production, and industry exchanges. More stories will be added as we continue to grow.',
        'gallery.filter_all': 'Highlights',
        'gallery.filter_event': 'Events',
        'gallery.filter_env': 'Campus',
        'gallery.filter_office': 'Workplace',
        'gallery.filter_workshop': 'Production',
        'gallery.filter_lab': 'R&D',
        'gallery.cap_gate': 'A Glimpse of Our Campus',
        'gallery.cap_garden': 'A Corner of the Factory Grounds',
        'gallery.cap_building': 'Office Area Exterior',
        'gallery.cap_office': 'Meeting and Office Environment',
        'gallery.cap_office_workspace': 'A Corner of Our Workplace',
        'gallery.cap_office_open': 'Everyday Office Environment',
        'gallery.cap_tank': 'A Glimpse of Production Equipment',
        'gallery.cap_lab': 'A Glimpse of Our R&D Environment',
        'gallery.cap_lab_bench': 'A Moment in the Laboratory',
        'gallery.cap_lab_samples': 'A Corner of the Sample Display',
        'gallery.cap_event_booth': 'A Moment from the Trade Show',
        'gallery.cap_event_team': 'Our Exhibition Team',
        'gallery.cap_event_exchange': 'Customer Exchange',
        'gallery.cap_event_business': 'International Business Exchange',
        'gallery.cap_event_display': 'A Glimpse of Our Product Solutions',

        // --- Downloads ---
        'downloads.header_title': 'Downloads',
        'downloads.header_desc': 'Product Catalogues · Certificates · Technical Documents',
        'downloads.title': 'Download Center',
        'downloads.subtitle': 'Preview documents online or save them directly to your device',
        'downloads.type_manual': 'Product Catalogue',
        'downloads.type_certificate': 'Certificate',
        'downloads.type_report': 'Test Report',
        'downloads.type_cn': 'Chinese Document',
        'downloads.manual_title': 'Wei Feng Product Catalogue',
        'downloads.manual_desc': 'Explore our main product ranges, applications and technical information.',
        'downloads.oeko_title': 'OEKO-TEX® ECO PASSPORT',
        'downloads.oeko_desc': 'English certification document, certificate No. 21.0.61626.',
        'downloads.chemcheck_title': 'ChemCheck Summary',
        'downloads.chemcheck_desc': 'ChemCheck Summary for Zhejiang Wei Feng New Material Co., Ltd.',
        'downloads.e_title': 'Wei Feng E Series — Chinese',
        'downloads.e_desc': 'Chinese-language document for the Wei Feng E Series.',
        'downloads.q_title': 'Wei Feng Q Series — Chinese',
        'downloads.q_desc': 'Chinese-language document for the Wei Feng Q Series.',
        'downloads.preview': '<i class="fas fa-eye"></i> Preview',
        'downloads.download': '<i class="fas fa-download"></i> Download',
        'downloads.help': 'Need another product document or technical support? Please contact us.',
        'downloads.contact': 'Contact Us <i class="fas fa-arrow-right"></i>',

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
        'contact.map_company': 'Zhejiang Wei Feng New Material Co., Ltd.',
        'contact.map_addr': 'No. 1 Xinggong 82nd Rd, Shangyu Town, Jiangshan, Quzhou, Zhejiang',
        'contact.wechat_title': 'Official Platforms',
        'contact.wechat_official_title': 'WeChat Official Account',
        'contact.wechat_official_desc': 'Scan to follow WeChat Official Account',
        'contact.wechat_video_title': 'WeChat Channels',
        'contact.wechat_video_desc': 'Scan to follow WeChat Channels',

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
    '端（含氢/环氧/聚醚环氧）硅油 | 浙江伟丰新材料有限公司': 'Terminal (Hydrogen/Epoxy/Polyether Epoxy) Silicone Oil | Zhejiang Wei Feng New Material Co., Ltd.',
    '高浓缩三元嵌段硅油 | 浙江伟丰新材料有限公司': 'High-concentration Ternary Block Silicone Oil | Zhejiang Wei Feng New Material Co., Ltd.',
    '功能系列产品 | 浙江伟丰新材料有限公司': 'Functional Series Products | Zhejiang Wei Feng New Material Co., Ltd.',
    '前处理助剂 | 浙江伟丰新材料有限公司': 'Pre-treatment Auxiliaries | Zhejiang Wei Feng New Material Co., Ltd.',
    '染色系列产品 | 浙江伟丰新材料有限公司': 'Dyeing Series Products | Zhejiang Wei Feng New Material Co., Ltd.',
    '软片产品 | 浙江伟丰新材料有限公司': 'Softener Flake Products | Zhejiang Wei Feng New Material Co., Ltd.',
    '增白剂系列产品 | 浙江伟丰新材料有限公司': 'Brightening Series Products | Zhejiang Wei Feng New Material Co., Ltd.',
    '纺织品印染助剂不断创新 助力纺织品行业发展 | 浙江伟丰新材料有限公司': 'Innovation in Textile Printing and Dyeing Auxiliaries Aids Industry Development | Zhejiang Wei Feng New Material Co., Ltd.',
    '印染助剂产品开发 配方还原是“捷径” | 浙江伟丰新材料有限公司': 'Printing and Dyeing Auxiliary Product Development: Formula Restoration is the "Shortcut" | Zhejiang Wei Feng New Material Co., Ltd.',
    '纺织柔软剂的发展历程 | 浙江伟丰新材料有限公司': 'Development History of Textile Softeners | Zhejiang Wei Feng New Material Co., Ltd.',
    '二甲基硅油，它的功能可以运用在哪里？ | 浙江伟丰新材料有限公司': 'Where can Dimethyl Silicone Oil be applied? | Zhejiang Wei Feng New Material Co., Ltd.',
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

    '端（含氢/环氧/聚醚环氧）硅油系列详情 | 浙江伟丰新材料有限公司': 'Silicone Oil Series Details | Zhejiang Wei Feng New Material Co., Ltd.',
    '端（含氢/环氧/聚醚环氧）硅油系列': 'Terminal Hydrogen / Epoxy / Polyether Epoxy Silicone Oil Series',
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
    '资料下载 | 浙江伟丰新材料有限公司': 'Downloads | Zhejiang Wei Feng New Material Co., Ltd.',
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
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
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
