(() => {
  const data = window.PRODUCT_FINDER_DATA || [];
  const groups = (window.PRODUCT_SEARCH_GROUPS || []).filter(g=>!g.englishOnly);
  const fabrics = [['棉','Cotton','(?<!人)棉'],['涤纶','Polyester','涤|polyester'],['粘胶 / 人棉','Viscose','粘胶|黏胶|人棉|viscose'],['羊毛 / 羊绒','Wool / cashmere','羊毛|羊绒|wool|cashmere'],['锦纶','Nylon','锦纶|尼龙|nylon'],['麻','Linen','亚麻|苎麻|麻织|棉麻|麻、|linen'],['腈纶','Acrylic','腈纶|acrylic'],['混纺','Blends','混纺|blends']];
  const effects = [['爽滑','Smooth','爽滑|柔滑|滑爽|平滑|滑软|丝滑'],['松软','Fluffy','松软|蓬松|蓬软'],['回弹好','Resilient','回弹|弹性|弹力'],['柔软','Soft','柔软|软滑|滑软|柔滑|蓬软|松软'],['亲水 / 吸湿排汗','Hydrophilic','亲水|吸湿|吸水|排汗'],['防水 / 防油','Water repellent','防水|拒水|防油'],['去油 / 精练','Scouring','去油|除油|精练|精炼'],['渗透','Wetting','渗透'],['漂白 / 增白','Whitening','漂白|增白'],['除毛 / 抛光','Biopolishing','除毛|抛光'],['匀染','Levelling','匀染'],['皂洗 / 净洗','Soaping','皂洗|净洗|清洗'],['固色 / 牢度','Colour fixing','固色|牢度'],['消泡','Defoaming','消泡|抑泡'],['抗静电','Antistatic','抗静电'],['抗菌 / 防臭','Antibacterial','抗菌|防臭'],['抗紫外线','UV protection','紫外线'],['阻燃','Flame retardant','阻燃'],['抗起毛起球','Anti-pilling','起毛起球'],['芳香','Fragrance','芳香'],['除硅','Silicone removal','除硅'],['螯合 / 分散','Chelating','螯合|分散'],['增深 / 增艳','Deepening','增深|增艳'],['起毛','Raising','起毛柔软|起绒'],['清缸','Machine cleaning','清缸'],['APEO / NPEO 去除','APEO removal','APEO|NPEO'],['荧光剥除','Fluorescence removal','荧光剥除|剥除荧光']];
  const subtypes = [['端含氢','Terminal hydrogen'],['端环氧','Terminal epoxy'],['聚醚环氧','Polyether epoxy'],['端乙烯基','Terminal vinyl'],['高含氢','High hydrogen'],['低含氢','Low hydrogen']];
  // Compatibility with another agent, or no impact on an effect, is not a claimed function.
  const copy = p=>[p.name,p.application,...p.features].join('。').split(/[。；，]/).filter(s=>!/不影响|无影响|复配|混用|配伍|配合|不含|无须|无需/.test(s)).join('。');
  const processes = [['前处理','Pretreatment'],['染色及染后处理','Dyeing & aftertreatment'],['后整理','Finishing'],['有机硅原料','Silicone raw materials'],['清洗及返修','Cleaning & rework']];
  // Catalogue-based exceptions preserve applications spanning several processes.
  const processOverrides = {
    'WF-4003':[0,1], 'WF-4005C':[0,1,2], 'WF-4005D':[0,1,2],
    'WF-4016AB':[0,1], 'WF-4017':[1,2], 'WF-4019A':[0,1,2],
    'WF-4054':[0,1], 'WF-4309N':[0,1,2], 'WF-4313':[0,1,2],
    'WF-4315C':[0,1], 'WF-4315CA':[0,1], 'WF-4315D':[0,1],
    'WF-4315DA':[0,1], 'WF-4315DE':[0,1], 'WF-4315DL':[0,1],
    'WF-4316D':[0,1], 'WF-4316N':[0,1],
    'WF-6409':[1,2], 'WF-6409A':[1,2],
    'WF-4219':[4], 'WF-6529':[4], 'WF-6523':[4], 'WF-6522':[4]
  };
  const processTags=p=>p.raw?[3]:processOverrides[p.model]||(
    p.series==='前处理系列'?[0]:p.series==='染色系列'?[1]:[2]);
  const processMatch=(p,i)=>i===undefined||i<0||processTags(p).includes(i);
  const types = [
    ['硅油','Silicone oils',p=>p.raw||p.series==='纺织嵌段硅油系列'],
    ['防水剂','Water repellents',p=>/防水|三防/.test(p.name)],
    ['柔软剂','Softeners',p=>/柔软|软片|软油|松软/.test(p.name)||p.series==='软片系列'],
    ['去油剂 / 精练剂','Degreasers / scouring agents',p=>/去油|除油|精练|精炼/.test(p.name)],
    ['固色剂','Fixing agents',p=>/固色|牢度/.test(p.name)],
    ['匀染剂','Levelling agents',p=>/匀染|染色促进|分散促进/.test(p.name)],
    ['皂洗剂 / 净洗剂','Soaping / cleaning agents',p=>/皂洗|净洗|清洗|清缸|剥除|除硅/.test(p.name)],
    ['消泡剂','Defoamers',p=>/消泡|抑泡/.test(p.name)],
    // Temporarily paused: ['增白剂','Brighteners',p=>/增白/.test(p.name)],
    ['渗透剂','Wetting agents',p=>/渗透/.test(p.name)],
    ['酵素 / 生物酶','Enzymes',p=>/酶|酵素/.test(p.name)],
    ['分散剂','Dispersants',p=>/分散|螯合/.test(p.name)],
    ['抗静电剂','Antistatic agents',p=>/抗静电/.test(p.name)],
    ['抗菌剂','Antibacterial agents',p=>/抗菌|防臭/.test(p.name)],
    ['阻燃剂','Flame retardants',p=>/阻燃/.test(p.name)]
  ];
  const mainTypes=types.slice();
  types.push(['其他产品','Other products',p=>!mainTypes.some(t=>t[2](p))]);
  const typeMatch=(p,type)=>type===undefined||type<0||!types[type]||types[type][2](p);
  const productLabel=p=>(p.raw||p.series==='纺织嵌段硅油系列')?types[0]:types.find(t=>t[2](p));
  const aliases = o=>[o[0],...o[0].split(' / '),...o[2].split('|').filter(s=>!/[()?]/.test(s)),o[1].toLowerCase()].map(s=>s.toLowerCase());
  const fabricMatch=(p,i)=>{
    const application=p.fabric||p.application;
    return new RegExp(fabrics[i][2],'i').test(application)||(!p.raw&&/各种织物|各类织物|各种纤维|各类纤维|所有织物/.test(application));
  };
  function search(state) {
    let query = state.query.toLowerCase().trim();
    const required = new Set(state.effects), requestedFabrics = new Set(state.fabric>=0?[state.fabric]:[]);
    const terms = [...fabrics.flatMap((f,i)=>aliases(f).map(a=>({a,type:'fabric',i}))),...effects.flatMap((f,i)=>aliases(f).map(a=>({a,type:'effect',i})))].sort((a,b)=>b.a.length-a.a.length);
    for (const term of terms) if (query.includes(term.a)) { (term.type==='fabric'?requestedFabrics:required).add(term.i); query=query.split(term.a).join(' '); }
    query=query.replace(/我想|一款|用在|用于|上|的|产品|效果|好|和|且|需要|适用|[,，/、;；+]/g,' ').trim();
    const tokens=query.split(/\s+/).filter(Boolean);
    return data.filter(p=>{
      const all=[p.model,...p.aliases,copy(p),p.nameEn,p.applicationEn,...p.featuresEn,p.series,p.seriesEn,p.subtype,...p.specs.flatMap(s=>[s.label,s.value,s.labelEn,s.valueEn])].join(' ').toLowerCase().replace(/-/g,'');
      const viscosity=p.specs.find(s=>/粘度|黏度/.test(s.label)&&/mm²/.test(s.label));
      const numeric=viscosity?Number(viscosity.value.replace(/,/g,'')):NaN;
      return processMatch(p,state.process)&&typeMatch(p,state.type)&&(!state.series||p.series===state.series)&&(!state.subtype||p.subtype===state.subtype)&&[...requestedFabrics].every(i=>fabricMatch(p,i))&&[...required].every(i=>new RegExp(effects[i][2],'i').test(copy(p)))&&tokens.every(token=>all.includes(token.replace(/-/g,'')))&&(state.min===''||Number.isFinite(numeric)&&numeric>=Number(state.min))&&(state.max===''||Number.isFinite(numeric)&&numeric<=Number(state.max));
    }).sort((a,b)=>{const q=state.query.toLowerCase().replace(/-/g,'');return Number(b.model.toLowerCase().replace(/-/g,'')===q)-Number(a.model.toLowerCase().replace(/-/g,'')===q)||a.model.localeCompare(b.model,undefined,{numeric:true});});
  }
  function availableFilters(state){
    const matches=search(state);
    // Single-choice groups replace their own value; effects add to the current selection.
    const typeCandidates=search({...state,type:-1,series:'',subtype:'',min:'',max:''});
    const fabricCandidates=search({...state,fabric:-1});
    const subtypeCandidates=search({...state,subtype:''});
    return {
      processes:processes.map((_,i)=>i).filter(i=>i===state.process||search({...state,process:i}).length>0),
      types:types.map((_,i)=>i).filter(i=>i===state.type||typeCandidates.some(p=>typeMatch(p,i))),
      fabrics:fabrics.map((_,i)=>i).filter(i=>i===state.fabric||fabricCandidates.some(p=>fabricMatch(p,i))),
      effects:effects.map((e,i)=>i).filter(i=>state.effects.includes(i)||matches.some(p=>!p.raw&&new RegExp(effects[i][2],'i').test(copy(p)))),
      subtypes:subtypes.map((s,i)=>i).filter(i=>subtypes[i][0]===state.subtype||subtypeCandidates.some(p=>p.subtype===subtypes[i][0]))
    };
  }
  window.ProductFinder={search,fabrics,effects,types,processes,processTags,availableFilters};
  const form=document.getElementById('productSearchForm');if(!form)return;
  const input=document.getElementById('productSearchInput'),results=document.getElementById('productSearchResults');
  const clearButton=document.getElementById('productSearchClear'),submitButton=form.querySelector('.finder-submit'),searchStatus=document.getElementById('productSearchStatus');
  const state={query:'',process:-1,type:-1,series:'',subtype:'',fabric:-1,effects:[],min:'',max:''};
  let page=1,showAll=false;const pageSize=6;
  const en=()=>document.documentElement.lang.startsWith('en'),t=(zh,eng)=>en()?eng:zh;
  const esc=v=>String(v||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const panel=document.createElement('div');panel.className='product-finder';form.append(panel);
  function updateFilterVisibility(){
    state.query=input.value;
    const available=availableFilters(state);
    for(const [key,values] of Object.entries(available)){
      const attribute={processes:'process',types:'type',fabrics:'fabric',effects:'effect',subtypes:'subtype'}[key];
      panel.querySelectorAll(`[data-${attribute}]`).forEach(button=>{
        const index=Number(button.dataset[attribute]);
        button.hidden=index>=0&&!values.includes(index);
      });
    }
  }
  function syncSearchControls(){
    clearButton.hidden=!input.value;
    clearButton.setAttribute('aria-label',t('清空搜索内容','Clear search'));
    clearButton.title=t('清空搜索内容','Clear search');
    submitButton.textContent=t('搜索','Search');
  }
  function clearSearchFeedback(){searchStatus.textContent='';syncSearchControls();}
  function scrollToResults(){
    requestAnimationFrame(()=>{
      const navbar=document.getElementById('navbar');
      const offset=(navbar?.getBoundingClientRect().height||80)+20;
      const top=Math.max(0,results.getBoundingClientRect().top+window.scrollY-offset);
      window.scrollTo({top,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
    });
  }
  function clearSearch(){
    input.value='';page=1;showAll=false;clearSearchFeedback();render();updateFilterVisibility();
    searchStatus.textContent=t('已清空搜索内容','Search cleared');
    input.focus({preventScroll:true});
  }
  const iconPaths=[
    '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    '<path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z"/><path d="M9 15a3 3 0 0 0 3 3"/>',
    '<path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z"/><path d="m8 12 3 3 5-6"/>',
    '<path d="M4 20c1-7 4-14 15-16 2 11-5 16-11 14M4 20 16 8M9 15v-5m3 2h5"/>',
    '<path d="M8 7h8v14H8zM10 7V3h4v4M8 11h8M5 4H3m2 4H2m17 5h2"/>',
    '<path d="M6 4h12v16H6zM9 4v5h6V4M9 15l2 2 4-4"/>',
    '<path d="M3 7c3-5 6 5 9 0s6 5 9 0M3 12c3-5 6 5 9 0s6 5 9 0M3 17c3-5 6 5 9 0s6 5 9 0"/>',
    '<path d="M4 12h16l-2 8H6l-2-8Z"/><circle cx="8" cy="7" r="2"/><circle cx="15" cy="5" r="3"/>',
    '<circle cx="8" cy="15" r="5"/><circle cx="17" cy="7" r="3"/><path d="m15 15 6 6m0-6-6 6"/>',
    '<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/>',
    '<path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11ZM3 10h4m10 0h4M9 14h6m-3-3v6"/>',
    '<path d="M5 4c14 0 0 16 14 16M19 4C5 4 19 20 5 20M7 7h10M8 12h8M7 17h10"/>',
    '<circle cx="12" cy="12" r="3"/><circle cx="4" cy="5" r="2"/><circle cx="20" cy="5" r="2"/><circle cx="4" cy="19" r="2"/><circle cx="20" cy="19" r="2"/><path d="m6 7 4 3m4 0 4-3M6 17l4-3m4 0 4 3"/>',
    '<path d="m13 2-8 12h6l-1 8 9-13h-7l1-7Z"/>',
    '<path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3ZM9 12h6m-3-3v6"/>',
    '<path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z"/><path d="M12 8c-5 5-3 9 0 9s5-4 0-9Z"/>',
    '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>'
  ];
  const typeIcon=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[i+1]||iconPaths[0]}</svg>`;
  const typeButton=(i,label,pressed)=>`<button type="button" data-type="${i}" aria-pressed="${pressed}"><span class="finder-type-icon">${typeIcon(i)}</span><span class="finder-type-name">${esc(label)}</span></button>`;
  const options=(items,key,current)=>items.map((f,i)=>key==='type'?typeButton(i,f[en()?1:0],current===i):`<button type="button" data-${key}="${i}" aria-pressed="${Array.isArray(current)?current.includes(i):current===i}">${esc(f[en()?1:0])}</button>`).join('');
  function controls(){
    const available=effects.map((e,i)=>[e,i]);
    const field=(title,content,hint='',step='',kind='')=>`<fieldset class="finder-step ${kind?`finder-step--${kind}`:''}"><legend>${step?`<span class="finder-step-number" aria-hidden="true">${step}</span>`:''}<span class="finder-step-title">${title}${hint?`<small>${hint}</small>`:''}</span></legend><div class="finder-options">${content}</div></fieldset>`;
    const productButtons=`${typeButton(-1,t('全部产品','All products'),state.type<0)}${options(types,'type',state.type)}`;
    const fabricButtons=`<button type="button" data-fabric="-1" aria-pressed="${state.fabric<0}">${t('不限','Any')}</button>${options(fabrics,'fabric',state.fabric)}`;
    const effectButtons=available.map(([e,i])=>`<button type="button" data-effect="${i}" aria-pressed="${state.effects.includes(i)}">${esc(e[en()?1:0])}</button>`).join('');
    const processButtons=`<button type="button" data-process="-1" aria-pressed="${state.process<0}">${t('全部','All')}</button>${options(processes,'process',state.process)}`;
    panel.innerHTML=field(t('工艺用途','Process application'),processButtons,t('按工艺选择，跨工序产品可在多个用途下找到','Choose a process; products may serve multiple stages'),'01','process')
      +field(t('您在找什么产品？','What product are you looking for?'),productButtons,t('选择您熟悉的产品名称','Start with a familiar product name'),'02','products')
      +field(t('用在什么面料上？','What fabric is it for?'),fabricButtons,t('按实际使用的面料选择','Choose the fabric you work with'),'03','fabric')
      +field(t('想达到什么效果？','What effect do you need?'),effectButtons,t('可多选，仅显示能与当前条件组合的效果','Select multiple; only compatible effects are shown'),'04','effects')
      +(state.type===0?`<details class="finder-advanced" ${state.subtype||state.min||state.max?'open':''}><summary>${t('找原料硅油？按类型和粘度进一步筛选','Looking for raw silicone oil? Filter by chemistry and viscosity')}</summary>${field(t('原料类型','Raw material type'),`<button type="button" data-subtype="-1" aria-pressed="${!state.subtype}">${t('不限','Any')}</button>${options(subtypes,'subtype',subtypes.findIndex(s=>s[0]===state.subtype))}`)}<div class="finder-range"><span>${t('粘度范围（mm²/s）','Viscosity range (mm²/s)')}</span><label><span class="sr-only">${t('最低粘度','Minimum viscosity')}</span><input type="number" min="0" step="any" data-range="min" placeholder="${t('最低','Min')}" value="${esc(state.min)}"></label><span>—</span><label><span class="sr-only">${t('最高粘度','Maximum viscosity')}</span><input type="number" min="0" step="any" data-range="max" placeholder="${t('最高','Max')}" value="${esc(state.max)}"></label></div></details>`:'')
      +`<div class="finder-filter-footer"><span>${t('选工艺、选产品、选面料，再选您想要的效果','Choose a process, product, fabric and desired effect')}</span><button type="button" class="finder-reset">${t('重置筛选','Reset filters')}</button></div>`;
    input.placeholder=t('例如：硅油、防水剂、棉用柔软剂，也可输入型号','e.g. silicone oil, water repellent, cotton softener, or a model');
    form.querySelector('.product-search-label span').textContent=t('找您需要的产品','Find the product you need');
    form.querySelector('.product-search-hint').textContent=t('不知道型号也没关系，按工艺用途、产品名称、面料和想要的效果来找。','No model needed. Search by process, product name, fabric and the effect you want.');
    syncSearchControls();
    updateFilterVisibility();
  }
  function render(){
    state.query=input.value;
    if(!(showAll||state.query.trim()||state.process>=0||state.type>=0||state.subtype||state.fabric>=0||state.effects.length)){results.innerHTML='';results.classList.remove('active');input.setAttribute('aria-expanded','false');return;}
    const matches=search(state),pages=Math.ceil(matches.length/pageSize);page=Math.min(page,Math.max(1,pages));
    results.innerHTML=`<div class="finder-results-head"><div><span class="finder-kicker">${t('选型结果','MATCHING PRODUCTS')}</span><h3>${t('找到','Found')} <b>${matches.length}</b> ${t('款产品','products')}</h3></div><span>${t('依据产品用途与技术资料匹配','Matched against catalogue applications and specifications')}</span></div>`+(matches.length?`<div class="finder-grid">${matches.slice((page-1)*pageSize,page*pageSize).map(p=>{
      const tags=effects.filter(e=>new RegExp(e[2],'i').test(copy(p))).slice(0,4),specs=p.raw?p.specs.filter(s=>!/外观/.test(s.label)).slice(0,3):[];
      return `<article class="finder-card"><div class="finder-card-top"><span class="finder-series-label">${esc(productLabel(p)[en()?1:0])}</span><span class="finder-card-icon" aria-hidden="true">${p.raw?'Si':'WF'}</span></div><h4>${esc(p.model)}</h4><p class="finder-product-name">${esc(en()?p.nameEn:p.name)}</p><p class="finder-application">${esc(en()?(p.applicationEn||p.application):p.application)}</p>${specs.length?`<dl class="finder-specs">${specs.map(s=>`<div><dt>${esc(en()?s.labelEn:s.label)}</dt><dd>${esc(en()?s.valueEn:s.value)}</dd></div>`).join('')}</dl>`:`<div class="finder-tags">${tags.map(e=>`<span>${esc(e[en()?1:0])}</span>`).join('')}</div>`}<div class="finder-card-bottom"><a class="finder-detail-link" href="${esc(p.href)}" aria-label="${esc(p.model)} · ${p.tableOnly?t('查看产品资料','View product information'):t('查看产品详情','View details')}">${p.tableOnly?t('查看产品资料','View product information'):t('查看产品详情','View details')}</a><a class="finder-inquire" href="contact.html?product=${encodeURIComponent(p.model)}#technical-contact">${t('咨询选型','Inquire')}</a></div></article>`;
    }).join('')}</div><nav class="finder-pagination" aria-label="${t('搜索结果分页','Search result pages')}"><span>${t(`第 ${page} / ${pages} 页 · 每页 ${pageSize} 款`,`Page ${page} / ${pages} · ${pageSize} per page`)}</span><div><button type="button" data-page="${page-1}" ${page===1?'disabled':''}>${t('上一页','Previous')}</button><button type="button" data-page="${page+1}" ${page>=pages?'disabled':''}>${t('下一页','Next')}</button></div></nav>`:`<div class="finder-empty"><span aria-hidden="true">⌕</span><h4>${t('暂无同时满足条件的产品','No products match all filters')}</h4><p>${t('减少一个筛选条件，或告诉我们您的具体工艺和需求。','Remove a filter or tell us your process and requirements.')}</p><a href="contact.html">${t('联系技术人员协助选型 →','Ask our technical team →')}</a></div>`);
    results.classList.add('active');input.setAttribute('aria-expanded','true');
    return matches.length;
  }
  panel.addEventListener('click',event=>{
    const b=event.target.closest('button');if(!b)return;
    const previousTop=b.getBoundingClientRect().top;
    if(b.hasAttribute('data-process')){showAll=true;state.process=Number(b.dataset.process);}
    else if(b.hasAttribute('data-type')){showAll=true;state.type=Number(b.dataset.type);state.series='';state.subtype='';state.min='';state.max='';}
    else if(b.hasAttribute('data-subtype'))state.subtype=subtypes[Number(b.dataset.subtype)]?.[0]||'';
    else if(b.hasAttribute('data-fabric'))state.fabric=Number(b.dataset.fabric);
    else if(b.hasAttribute('data-effect')){const i=Number(b.dataset.effect);state.effects=state.effects.includes(i)?state.effects.filter(x=>x!==i):[...state.effects,i];}
    else{showAll=false;Object.assign(state,{query:'',process:-1,type:-1,series:'',subtype:'',fabric:-1,effects:[],min:'',max:''});input.value='';}
    page=1;clearSearchFeedback();controls();render();
    const key=['process','type','subtype','fabric','effect'].find(k=>b.hasAttribute('data-'+k));
    if(key){
      const selectedButton=panel.querySelector(`[data-${key}="${b.dataset[key]}"]`);
      selectedButton?.focus({preventScroll:true});
      requestAnimationFrame(()=>{
        if(selectedButton?.isConnected)window.scrollBy({top:selectedButton.getBoundingClientRect().top-previousTop,behavior:'instant'});
      });
    }
    else if(b.classList.contains('finder-reset')){
      const status=panel.querySelector('.finder-filter-footer > span');
      status.classList.add('finder-reset-status');
      status.setAttribute('role','status');
      status.textContent=t('已清除全部筛选条件，可重新选择产品和效果','All filters cleared. Choose a product and effect to start again.');
      panel.querySelector('.finder-reset').focus({preventScroll:true});
    }
  });
  panel.addEventListener('input',event=>{if(event.target.dataset.range){state[event.target.dataset.range]=event.target.value;page=1;clearSearchFeedback();render();updateFilterVisibility();}});
  results.addEventListener('click',event=>{
    const detail=event.target.closest('.finder-detail-link');
    if(detail){
      try {
        sessionStorage.setItem('weifeng.finder.return.v1',JSON.stringify({state:{...state,query:input.value},page,showAll,y:window.scrollY}));
        const destination=new URL(detail.href,location.href);
        destination.searchParams.set('fromFinder','1');
        detail.href=destination.href;
        const current=new URL(location.href);
        current.searchParams.set('restoreFinder','1');
        history.replaceState(history.state,'',current.href);
      } catch(error) { /* Keep navigation available when storage is blocked. */ }
      return;
    }
    const b=event.target.closest('[data-page]');if(!b||b.disabled)return;
    const direction=Number(b.dataset.page)>page?1:-1;
    page=Number(b.dataset.page);render();
    results.querySelector('.finder-grid')?.classList.add('finder-page-enter');
    const nextButton=results.querySelector(`[data-page="${page+direction}"]`);
    if(nextButton&&!nextButton.disabled)nextButton.focus({preventScroll:true});
    else results.querySelector('.finder-pagination button:not(:disabled)')?.focus({preventScroll:true});
    scrollToResults();
  });
  form.addEventListener('submit',event=>{
    event.preventDefault();page=1;showAll=true;
    clearSearchFeedback();render();updateFilterVisibility();
    results.querySelector('.finder-grid')?.classList.add('finder-page-enter');
    scrollToResults();
  });
  clearButton.addEventListener('click',clearSearch);
  input.addEventListener('keydown',event=>{if(event.key==='Escape'&&input.value){event.preventDefault();clearSearch();}});
  input.addEventListener('input',()=>{page=1;if(!input.value)showAll=false;clearSearchFeedback();render();updateFilterVisibility();});
  document.addEventListener('languagechange',()=>{clearSearchFeedback();controls();render();});
  let restoreY=null;
  if(new URLSearchParams(location.search).get('restoreFinder')==='1'){
    try {
      const saved=JSON.parse(sessionStorage.getItem('weifeng.finder.return.v1')||'null');
      if(saved&&saved.state&&Array.isArray(saved.state.effects)){
        for(const key of Object.keys(state))if(key in saved.state)state[key]=saved.state[key];
        page=Number.isInteger(saved.page)&&saved.page>0?saved.page:1;
        showAll=!!saved.showAll;
        input.value=state.query;
        restoreY=Number.isFinite(saved.y)?Math.max(0,saved.y):0;
      }
    } catch(error) { /* Invalid or unavailable saved state starts a fresh search. */ }
  }
  controls();
  if(restoreY!==null){
    render();
    const restorePosition=()=>requestAnimationFrame(()=>{
      window.scrollTo({top:restoreY,behavior:'instant'});
      window.dispatchEvent(new Event('scroll'));
      requestAnimationFrame(()=>{
        clearTimeout(window.finderReturnRevealTimer);
        document.documentElement.style.removeProperty('visibility');
      });
    });
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',restorePosition,{once:true});
    else restorePosition();
  }
})();





