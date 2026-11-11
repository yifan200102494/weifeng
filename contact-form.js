(() => {
    const copy = {
        zh: { title: '给我们留言', intro: '无论是产品咨询、样品需求，还是合作意向，欢迎与我们联系。', name: '姓名', email: '邮箱', company: '公司名称', phone: '联系电话', message: '留言内容', required: '* 为必填项', send: '发送留言', preview: '在线留言即将开通，您也可以直接通过下方邮箱联系我们。', pending: '在线留言尚未开通，本次内容未发送。请通过 admin@wfchemistry.com 联系我们；您填写的内容已保留在当前页面。' },
        en: { title: 'Send us a message', intro: 'For product enquiries, sample requests or partnership opportunities, we would love to hear from you.', name: 'Name', email: 'Email', company: 'Company name', phone: 'Phone', message: 'Message', required: '* Required fields', send: 'Send message', preview: 'Our online enquiry service is coming soon. You can also contact us directly at the email below.', pending: 'Online enquiries are not available yet. Your message has not been sent. Please contact admin@wfchemistry.com. Your entries remain on this page.' }
    };
    const form = document.getElementById('inquiry-form');
    const status = document.getElementById('inquiry-status');
    const language = () => document.documentElement.lang === 'en' ? 'en' : 'zh';
    const messages = {
        zh: { sending: '正在发送，请稍候…', sent: '留言已提交，感谢您的联系，我们会尽快回复。', unconfigured: '留言服务暂时不可用，请通过 admin@wfchemistry.com 联系我们。', authentication: '留言服务暂时不可用，请通过邮箱联系我们。', tls: '留言服务暂时不可用，请稍后再试。', failed: '暂时无法确认提交结果，请勿重复提交；如需确认，请通过邮箱联系我们。', invalid: '请检查邮箱及留言内容。', wait: '提交较频繁，请稍后再试，或通过邮箱联系我们。', expired: '页面会话已过期，请刷新后重试。', local_only: '此测试接口仅允许在服务器本机访问。' },
        en: { sending: 'Sending…', sent: 'Your message has been submitted. Thank you for contacting us.', unconfigured: 'The message service is temporarily unavailable. Please email admin@wfchemistry.com.', authentication: 'The message service is temporarily unavailable. Please contact us by email.', tls: 'The message service is temporarily unavailable. Please try again later.', failed: 'Submission could not be confirmed. Please avoid submitting again and contact us by email.', invalid: 'Please check your email address and message.', wait: 'Too many requests. Please try later or contact us by email.', expired: 'Session expired. Refresh and try again.', local_only: 'This test endpoint is only available on the server itself.' }
    };
    let state = '';
    let busy = false;
    let completed = false;
    const trap = document.createElement('input');
    trap.name = 'website'; trap.tabIndex = -1; trap.autocomplete = 'off'; trap.setAttribute('aria-hidden', 'true'); trap.style.cssText = 'position:absolute;left:-10000px;width:1px;height:1px;'; form.appendChild(trap);
    const button = form.querySelector('button[type="submit"]');
    function show(next) { state = next; status.hidden = false; status.textContent = messages[language()][state] || messages[language()].failed; }
    function translate() {
        const labels = copy[language()];
        document.querySelectorAll('[data-inquiry]').forEach(node => { node.textContent = labels[node.dataset.inquiry]; });
        if (state) show(state);
    }
    form.addEventListener('submit', async event => {
        event.preventDefault();
        if (busy || completed) return;
        const message = form.elements.message;
        message.setCustomValidity(message.value.trim() ? '' : (language() === 'en' ? 'Please enter a message.' : '请填写留言内容。'));
        if (!form.reportValidity()) return;
        busy = true;
        button.disabled = true;
        show('sending');
        try {
            const setup = await fetch('mail-api/inquiry.ashx', { credentials: 'same-origin', cache: 'no-store' });
            const info = await setup.json();
            if (!setup.ok || info.status !== 'ready') { show(info.status); return; }
            const data = new URLSearchParams(new FormData(form));
            const response = await fetch('mail-api/inquiry.ashx', { method: 'POST', credentials: 'same-origin', headers: { 'X-Inquiry-Token': info.token }, body: data });
            const result = await response.json();
            show(result.status);
            if ((response.ok && result.status === 'sent') || result.status === 'failed') completed = true;
        } catch (_) { completed = true; show('failed'); }
        finally { busy = false; button.disabled = completed; }
    });
    form.elements.message.addEventListener('input', () => form.elements.message.setCustomValidity(''));
    new MutationObserver(translate).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    translate();
})();
