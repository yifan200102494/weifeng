// Available English TDS files, shared by product pages and the download centre.
(() => {
    const englishDocuments = {
    "WF-4007N": {
        "href": "pdf/E4007N.pdf",
        "filename": "WF-4007N-TDS-EN.pdf"
    },
    "WF-4012": {
        "href": "pdf/E4012.pdf",
        "filename": "WF-4012-TDS-EN.pdf"
    },
    "WF-4314N": {
        "href": "pdf/E4314N.pdf",
        "filename": "WF-4314N-TDS-EN.pdf"
    },
    "WF-4316N": {
        "href": "pdf/E4316N.pdf",
        "filename": "WF-4316N-TDS-EN.pdf"
    },
    "WF-6513N": {
        "href": "pdf/E6513N.pdf",
        "filename": "WF-6513N-TDS-EN.pdf"
    },
    "WF-7113": {
        "href": "pdf/E7113.pdf",
        "filename": "WF-7113-TDS-EN.pdf"
    },
    "WF-711F": {
        "href": "pdf/E711F.pdf",
        "filename": "WF-711F-TDS-EN.pdf"
    },
    "WF-7126A": {
        "href": "pdf/E7126A.pdf",
        "filename": "WF-7126A-TDS-EN.pdf"
    },
    "WF-713F": {
        "href": "pdf/E713F.pdf",
        "filename": "WF-713F-TDS-EN.pdf"
    },
    "WF-8101N": {
        "href": "pdf/E8101N.pdf",
        "filename": "WF-8101N-TDS-EN.pdf"
    },
    "WF-8204N": {
        "href": "pdf/E8204N.pdf",
        "filename": "WF-8204N-TDS-EN.pdf"
    },
    "WF-8208T": {
        "href": "pdf/E8208T.pdf",
        "filename": "WF-8208T-TDS-EN.pdf"
    },
    "WF-8212N": {
        "href": "pdf/E8212N.pdf",
        "filename": "WF-8212N-TDS-EN.pdf"
    },
    "WF-8307N": {
        "href": "pdf/E8307N.pdf",
        "filename": "WF-8307N-TDS-EN.pdf"
    },
    "WF-8408N": {
        "href": "pdf/E8408N.pdf",
        "filename": "WF-8408N-TDS-EN.pdf"
    },
    "WF-8497N": {
        "href": "pdf/E8497N.pdf",
        "filename": "WF-8497N-TDS-EN.pdf"
    },
    "WF-8713T": {
        "href": "pdf/E8713T.pdf",
        "filename": "WF-8713T-TDS-EN.pdf"
    },
    "WF-8905": {
        "href": "pdf/E8905.pdf",
        "filename": "WF-8905-TDS-EN.pdf"
    }
};
    window.WF_TDS_EN = englishDocuments;
    function updateDocuments() {
        const english = document.documentElement.lang === 'en';
        document.querySelectorAll('[data-english-only="true"]').forEach(element => {
            if (element !== document.body && !element.classList.contains('tds-entry')) element.hidden = !english;
        });
        const model = document.body.dataset.productModel;
        const documentInfo = englishDocuments[model];
        if (!documentInfo) return;
        document.querySelectorAll('#documents a[href^="pdf/"]').forEach(link => {
            if (!link.dataset.tdsZhHref) {
                link.dataset.tdsZhHref = link.getAttribute('href');
                if (link.hasAttribute('download')) link.dataset.tdsZhDownload = link.getAttribute('download');
            }
            link.setAttribute('href', english ? documentInfo.href : link.dataset.tdsZhHref);
            if (link.hasAttribute('download')) {
                link.setAttribute('download', english ? documentInfo.filename : link.dataset.tdsZhDownload);
            }
        });
    }
    document.addEventListener('languagechange', updateDocuments);
    updateDocuments();
})();
