(() => {
    const library = document.querySelector('.tds-library');
    if (!library) return;
    const zh = {product8905:"Soft and smooth hydrophilic silicone oil",product713F:"Three-proof finishing agent",product711F:"Waterproofing agent",product7113:"Waterproofing agent",product6513N:"Soft and smooth hydrophilic silicone oil for cotton",product6409A:"浴中柔软剂",product6529:"除硅剂",product4018AH:"高效退浆酶",product4019A:"中性抛光酶",product4054:"螯合分散剂",product4112:"高浓高温匀染剂",product4118:"乳化精炼剂",product4119:"翠蓝艳蓝匀染剂",product4219:"低聚物剥除剂",product4309N:"消泡剂",product4313:"浴中宝",product4314N:"高浓固色剂",product4315C:"强力去油剂",product4315CA:"强力乳化去油剂",product4315D:"乳化去油剂",product4315DA:"乳化去油剂",product4315DE:"去油剂",product4315DL:"强力乳化去油剂",product4316D:"低温去油剂",product4316F:"乳化精炼剂",product4316N:"精炼去油剂",product4815:"涤纶固色剂",product4016:"高效修补剂",product4016A:"高效修补剂",product4016AB:"练染同浴剂",product4017:"中和酸",product4017A:"酸性匀染剂",product4008:"氧化退浆剂",product4011KN:"高浓匀染剂",product4012:"高效快速匀染剂",product4013N:"高浓酸性匀染剂",product4014B:"高温匀染剂",product4014N:"高温匀染剂",product4015:"还原清洗剂",product4003Z:"螯合分散剂",product4005C:"非离子渗透剂",product4005D:"非离子渗透剂",product4007N:"高效皂洗剂",product7121:"无氟防水剂",product8804T:"超滑弹硅油",product8804N:"超滑弹硅油",product8804A:"超弹整理剂",product8715T:"低气味平滑原油",product8715A:"低气味平滑硅油",product8713T:"油滑硅油",product8713A:"细滑整理剂",product8582B:"涤蓬松剂",product8568A:"柔软剂",product8568N:"全棉松软原油",product8537N:"全棉滑软原油",product8538A:"棉柔软",product8537A:"棉平滑",product8497N:"冰感硅油",product8497D:"冰感硅油",product8473D:"平滑整理剂",product8431A:"纱线平滑剂",product8408B:"氨基蓬松整理剂",product8406N:"氨基蓬松原油",product8406A:"蓬松整理剂",product8381B:"涤平滑剂",product8344A:"柔软剂",product8307N:"滑弹整理剂",product8307C:"氨基滑弹整理剂",product8307B:"氨基滑弹整理剂",product8266N:"松软硅油",product8266A:"松软硅油",product8247A:"涤绒柔软剂",product8244A:"兔毛蓬松剂",product8243A:"兔毛平滑剂",product8233N:"高浓超稳定弹滑硅油",product8233A:"软、滑整理剂",product8228NA:"蓬松硅油",product8228N:"蓬松硅油",product8217N:"多元共聚嵌段有机硅油",product8213A:"特柔滑硅油",product8212N:"松软细腻硅油",product8212A:"松软细腻硅油",product8211T:"滑软整理剂",product8208T:"特蓬松整理剂",product8208NA:"特蓬松硅油",product8208C:"特蓬松整理剂",product8207N:"高浓超稳定蓬松硅油",product8207FN:"超稳定蓬松、软型原油",product8207F:"松软整理剂",product8206A:"松弹整理剂",product8205A:"松滑整理剂",product8204A:"高手感亲水整理剂",product8104A:"蓬松整理剂",product8101N:"平滑嵌段整理剂",product7200:"交联剂",product7126S:"无氟防水剂",product7126A:"无氟防水剂",product7125:"无氟防水剂",product7122H:"无氟防水剂",product7122A:"无氟防水剂",product7121H:"无氟防水剂",product7120A:"无氟防水剂",product7120:"无氟防水剂",product6513A:"棉软滑亲水硅油",product6508N:"高浓亲水硅油",product6507N:"亲水软滑硅油",product6505:"抗起毛起球整理剂",moistureWicking:'吸湿排汗整理剂',bathSoftener:'浴中柔软剂',cationicAntistatic:'阳离子抗静电剂',antistatic:'非离子抗静电剂',aminoFluffy:'氨基松软原油',fluffy:'松软整理剂',hydrophilic:'高手感亲水整理剂',searchLabel:'查找产品 TDS',search:'搜索',all:'全部',reset:'重置筛选',name:'资料名称',models:'适用型号',actions:'操作',preview:'预览',download:'下载',empty:'暂未找到匹配的资料',emptyHint:'请尝试其他型号或名称，或联系我们获取所需 TDS。',prev:'上一页',next:'下一页',viscose:'人棉专用整理剂'};
    const en = {product8905:"Soft and smooth hydrophilic silicone oil",product713F:"Three-proof finishing agent",product711F:"Waterproofing agent",product7113:"Waterproofing agent",product6513N:"Soft and smooth hydrophilic silicone oil for cotton",product6409A:"In-bath softener",product6529:"Silicone remover",product4018AH:"High-efficiency desizing enzyme",product4019A:"Neutral biopolishing enzyme",product4054:"Chelating dispersant",product4112:"High-concentration high-temperature levelling agent",product4118:"Emulsifying scouring agent",product4119:"Turquoise and brilliant-blue levelling agent",product4219:"Oligomer stripping agent",product4309N:"Defoamer",product4313:"In-bath lubricant",product4314N:"Fixing agent",product4315C:"Powerful degreasing agent",product4315CA:"Powerful emulsifying degreasing agent",product4315D:"Emulsifying degreasing agent",product4315DA:"Emulsifying degreasing agent",product4315DE:"Degreasing agent",product4315DL:"Powerful emulsifying degreasing agent",product4316D:"Low-temperature degreasing agent",product4316F:"Emulsifying scouring agent",product4316N:"Degreasing agent",product4815:"Polyester fixing agent",product4016:"High-efficiency dyeing repair agent",product4016A:"High-efficiency dyeing repair agent",product4016AB:"Combined scouring and dyeing agent",product4017:"Neutralising acid",product4017A:"Acid-dye levelling agent",product4008:"Oxidative desizing agent",product4011KN:"High-concentration levelling agent",product4012:"Levelling agent",product4013N:"High-concentration acid-dye levelling agent",product4014B:"High-temperature levelling agent",product4014N:"High-temperature levelling agent",product4015:"Reduction clearing agent",product4003Z:"Chelating dispersant",product4005C:"Nonionic penetrating agent",product4005D:"Nonionic penetrating agent",product4007N:"Soaping agent",product7121:"Fluorine-free water repellent",product8804T:"Super-smooth resilient silicone oil",product8804N:"Super-smooth resilient silicone oil",product8804A:"Super-resilient finishing agent",product8715T:"Low-odour smoothing silicone concentrate",product8715A:"Low-odour smoothing silicone oil",product8713T:"Fine and smooth finishing agent",product8713A:"Fine-smooth finishing agent",product8582B:"Polyester fluffy finishing agent",product8568A:"Softener",product8568N:"Cotton full-soft silicone concentrate",product8537N:"Cotton smooth-soft silicone concentrate",product8538A:"Cotton softener",product8537A:"Cotton smoothing agent",product8497N:"Cool-touch silicone oil",product8497D:"Cool-touch silicone oil",product8473D:"Smoothing finishing agent",product8431A:"Yarn smoothing agent",product8408B:"Amino fluffy finishing agent",product8406N:"Amino fluffy silicone concentrate",product8406A:"Fluffy finishing agent",product8381B:"Polyester smoothing agent",product8344A:"Softener",product8307N:"Amino silicone oil",product8307C:"Amino smooth and resilient finishing agent",product8307B:"Amino smooth and resilient finishing agent",product8266N:"Full and soft silicone oil",product8266A:"Full and soft silicone oil",product8247A:"Polyester-pile softener",product8244A:"Rabbit-fur full-handle agent",product8243A:"Rabbit-fur smoothing agent",product8233N:"High-concentration ultra-stable resilient and smooth silicone oil",product8233A:"Soft and smooth finishing agent",product8228NA:"Fluffy silicone oil",product8228N:"Fluffy silicone oil",product8217N:"Multicomponent block silicone copolymer oil",product8213A:"Extra-soft and smooth silicone oil",product8212N:"Soft and fine silicone oil",product8212A:"Full, soft and fine-handle silicone oil",product8211T:"Smooth and soft finishing agent",product8208T:"Fluffy finishing agent",product8208NA:"Extra-full silicone oil",product8208C:"Extra-full finishing agent",product8207N:"High-concentration ultra-stable fluffy silicone oil",product8207FN:"Ultra-stable full and soft silicone concentrate",product8207F:"Full and soft finishing agent",product8206A:"Full and resilient finishing agent",product8205A:"Full and smooth finishing agent",product8204A:"Premium-handle hydrophilic finishing agent",product8104A:"Fluffy finishing agent",product8101N:"Smooth finishing agent",product7200:"Crosslinking agent",product7126S:"Fluorine-free water repellent",product7126A:"Fluorine-free finishing agent",product7125:"Fluorine-free water repellent",product7122H:"Fluorine-free water repellent",product7122A:"Fluorine-free water repellent",product7121H:"Fluorine-free water repellent",product7120A:"Fluorine-free water repellent",product7120:"Fluorine-free water repellent",product6513A:"Hydrophilic soft and smooth silicone oil for cotton",product6508N:"High-concentration hydrophilic silicone oil",product6507N:"Hydrophilic soft and smooth silicone oil",product6505:"Anti-fuzzing and anti-pilling finishing agent",moistureWicking:'Moisture-wicking finishing agent',bathSoftener:'In-bath softener',cationicAntistatic:'Cationic antistatic agent',antistatic:'Nonionic antistatic agent',aminoFluffy:'Amino silicone base oil for soft and fluffy finishing',fluffy:'Soft and fluffy finishing agent',hydrophilic:'Hydrophilic finishing agent with superior handle',searchLabel:'Find product TDS',search:'Search',all:'All',reset:'Reset filters',name:'Document',models:'Applicable models',actions:'Actions',preview:'Preview',download:'Download',empty:'No matching documents',emptyHint:'Try another model or product name, or contact us for the TDS you need.',prev:'Previous',next:'Next',viscose:'Finishing agent for viscose'};
    for (const [lang, values] of Object.entries({zh,en})) {
        for (const [key, value] of Object.entries(values)) translations[lang]['tds.'+key] = value;
    }
    const rows = Array.from(library.querySelectorAll('.tds-entry'));
    const input = library.querySelector('input');
    const clear = library.querySelector('.tds-search-clear');
    const filters = Array.from(library.querySelectorAll('[data-category]')).filter(e => e.tagName === 'BUTTON');
    // Follow the series tabs, then compare model numbers naturally (6K before 10K).
    const seriesOrder = filters.map(button => button.dataset.category);
    const modelOrder = new Intl.Collator('en', {numeric: true, sensitivity: 'base'});
    rows.sort((a, b) => {
        const aSeries = seriesOrder.indexOf(a.dataset.category);
        const bSeries = seriesOrder.indexOf(b.dataset.category);
        const seriesDifference = (aSeries < 0 ? seriesOrder.length : aSeries)
            - (bSeries < 0 ? seriesOrder.length : bSeries);
        return seriesDifference || Number(!a.dataset.models) - Number(!b.dataset.models)
            || modelOrder.compare(a.dataset.models, b.dataset.models);
    });
    rows.forEach(row => row.parentNode.appendChild(row));
    const pageNumbers = library.querySelector('.tds-page-numbers');
    const jumpInput = library.querySelector('#tds-jump-input');
    const jumpButton = library.querySelector('#tds-jump-button');
    const pageSize = 10;
    let category = 'all', page = 1;
    const normalize = value => value.toLowerCase().replace(/[\s\-–—/]+/g, '');
    function render() {
        const english = document.documentElement.lang === 'en';
        rows.forEach(row => {
            const documentInfo = (window.WF_TDS_EN || {})[row.dataset.models];
            row.querySelectorAll('.tds-row-actions a').forEach(link => {
                if (!link.dataset.tdsZhHref) {
                    link.dataset.tdsZhHref = link.getAttribute('href');
                    if (link.hasAttribute('download')) link.dataset.tdsZhDownload = link.getAttribute('download');
                }
                link.setAttribute('href', english && documentInfo ? documentInfo.href : link.dataset.tdsZhHref);
                if (link.hasAttribute('download')) {
                    link.setAttribute('download', english && documentInfo ? documentInfo.filename : link.dataset.tdsZhDownload);
                }
            });
        });
        const words = normalize(input.value);
        clear.hidden = !input.value;
        clear.setAttribute('aria-label', english ? 'Clear search' : '清空搜索');
        const matches = rows.filter(row => {
            if (!english && row.dataset.englishOnly === 'true') return false;
            if (english && !(window.WF_TDS_EN || {})[row.dataset.models]) return false;
            const key = row.dataset.titleKey;
            const haystack = normalize([translations.zh[key],translations.en[key],row.dataset.models].join(' '));
            return (category === 'all' || row.dataset.category === category) && haystack.includes(words);
        });
        const pages = Math.max(1,Math.ceil(matches.length/pageSize));
        page = Math.min(page,pages);
        rows.forEach(row => {row.hidden = true;});
        matches.slice((page-1)*pageSize,page*pageSize).forEach(row => {row.hidden = false;});
        library.querySelector('#tds-count').textContent = english ? `${matches.length} documents · ${pageSize} per page` : `共 ${matches.length} 份资料 · 每页 ${pageSize} 份`;
        library.querySelector('#tds-page').textContent = english ? `${page} / ${pages}` : `第 ${page} / ${pages} 页`;
        const visiblePages = pages <= 7
            ? Array.from({length: pages}, (_, index) => index + 1)
            : Array.from(new Set([1, pages, ...Array.from({length: 3}, (_, index) => Math.max(2, Math.min(page - 1, pages - 3)) + index)])).sort((a, b) => a - b);
        const controls = [];
        visiblePages.forEach((number, index) => {
            if (index && number - visiblePages[index - 1] > 1) {
                const gap = document.createElement('span');
                gap.className = 'tds-page-gap';
                gap.textContent = '…';
                gap.setAttribute('aria-hidden', 'true');
                controls.push(gap);
            }
            const button = document.createElement('button');
            button.type = 'button';
            button.dataset.page = String(number);
            button.textContent = String(number);
            button.setAttribute('aria-label', english ? 'Go to page ' + number : '跳转到第 ' + number + ' 页');
            if (number === page) button.setAttribute('aria-current', 'page');
            controls.push(button);
        });
        pageNumbers.replaceChildren(...controls);
        jumpInput.max = String(pages);
        jumpInput.value = String(page);
        jumpInput.setCustomValidity('');
        jumpInput.setAttribute('aria-label', english ? 'Page number, 1 to ' + pages : '跳转页码，1 至 ' + pages);
        library.querySelector('label[for="tds-jump-input"]').textContent = english ? 'Go to page' : '跳转至';
        library.querySelector('.tds-jump-unit').textContent = english ? '' : '页';
        library.querySelector('.tds-jump-unit').hidden = english;
        jumpButton.textContent = english ? 'Go' : '跳转';
        library.querySelector('#tds-prev').disabled = page === 1;
        library.querySelector('#tds-next').disabled = page === pages;
        library.querySelector('.tds-pagination').hidden = matches.length === 0;
        library.querySelector('.tds-table-wrap').hidden = matches.length === 0;
        library.querySelector('.tds-empty').hidden = matches.length > 0;
        library.querySelector('#tds-reset').hidden = !input.value && category === 'all';
        filters.forEach(button => button.setAttribute('aria-pressed',String(button.dataset.category === category)));
        input.placeholder = english ? 'Model or product name, e.g. HD-6K, 8109N' : '输入产品型号或名称，如 HD-6K、8109N';
        library.querySelector('.tds-filters').setAttribute('aria-label',english ? 'Product series' : '产品系列');
        library.querySelector('.tds-pagination').setAttribute('aria-label',english ? 'Document pages' : '资料分页');
        library.querySelectorAll('.tds-model-count').forEach(span => {span.textContent = english ? `${span.dataset.count} models · View all` : `等 ${span.dataset.count} 款 · 全部型号`;});
    }
    library.querySelector('form').addEventListener('submit',event => {event.preventDefault();page=1;render();});
    clear.addEventListener('click', () => {input.value='';page=1;render();input.focus();});
    input.addEventListener('input',() => {page=1;render();});
    filters.forEach(button => button.addEventListener('click',() => {category=button.dataset.category;page=1;render();}));
    library.querySelector('#tds-reset').addEventListener('click',() => {input.value='';category='all';page=1;render();input.focus();});
    for (const [id,delta] of [['tds-prev',-1],['tds-next',1]]) {
        library.querySelector('#'+id).addEventListener('click',() => {page+=delta;render();library.querySelector('.tds-result-bar').scrollIntoView({block:'center'});});
    }
    pageNumbers.addEventListener('click', event => {
        const button = event.target.closest('button[data-page]');
        if (!button) return;
        page = Number(button.dataset.page);
        render();
        pageNumbers.querySelector('[aria-current]').focus({preventScroll: true});
        library.querySelector('.tds-result-bar').scrollIntoView({block:'center'});
    });
    function jumpToPage() {
        const number = Number(jumpInput.value);
        if (!Number.isInteger(number) || number < 1 || number > Number(jumpInput.max)) {
            jumpInput.setCustomValidity(document.documentElement.lang === 'en'
                ? 'Enter a whole page number from 1 to ' + jumpInput.max
                : '请输入 1 至 ' + jumpInput.max + ' 之间的整数页码');
            jumpInput.reportValidity();
            return;
        }
        page = number;
        render();
        library.querySelector('.tds-result-bar').scrollIntoView({block:'center'});
    }
    jumpButton.addEventListener('click', jumpToPage);
    jumpInput.addEventListener('input', () => jumpInput.setCustomValidity(''));
    jumpInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') {event.preventDefault();jumpToPage();}
    });
    document.addEventListener('languagechange',render);
    render();
})();
