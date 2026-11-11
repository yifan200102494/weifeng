// English product copy is sourced from the English TDS; Chinese copy stays independent.
(() => {
    const main = document.querySelector('main.hd-page');
    const template = document.getElementById('english-product-content');
    if (!main || !template) return;
    const chineseContent = main.innerHTML;
    const chineseTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const chineseDescription = description ? description.content : '';
    let activeLanguage = 'zh';
    function render() {
        const language = document.documentElement.lang === 'en' ? 'en' : 'zh';
        if (activeLanguage !== language) {
            main.replaceChildren(language === 'en'
                ? template.content.cloneNode(true)
                : document.createRange().createContextualFragment(chineseContent));
            activeLanguage = language;
        }
        document.title = language === 'en' ? document.body.dataset.englishTitle : chineseTitle;
        if (description) description.content = language === 'en'
            ? document.body.dataset.englishDescription : chineseDescription;
    }
    document.addEventListener('languagechange', render);
    render();
})();
