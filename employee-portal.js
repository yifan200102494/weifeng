(function initEmployeePortal() {
    const systems = Array.isArray(window.WEIFENG_EMPLOYEE_SYSTEMS)
        ? window.WEIFENG_EMPLOYEE_SYSTEMS
        : [];

    const state = {
        query: '',
        category: '全部'
    };

    const isConfigured = system => typeof system.url === 'string' && /^https?:\/\//i.test(system.url.trim());

    function normalize(value) {
        return String(value || '').trim().toLocaleLowerCase('zh-CN');
    }

    function systemMatches(system) {
        const categoryMatches = state.category === '全部' || system.category === state.category;
        const haystack = normalize([system.name, system.description, system.category].join(' '));
        return categoryMatches && (!state.query || haystack.includes(normalize(state.query)));
    }

    function createSystemCard(system) {
        const configured = isConfigured(system);
        const element = document.createElement(configured ? 'a' : 'article');
        element.className = `employee-system-card${configured ? '' : ' is-unconfigured'}`;

        if (configured) {
            element.href = system.url.trim();
            element.target = '_blank';
            element.rel = 'noopener noreferrer';
            element.setAttribute('aria-label', `${system.name}（新窗口打开）`);
        }

        const icon = document.createElement('span');
        icon.className = 'employee-system-icon';
        const iconGlyph = document.createElement('i');
        iconGlyph.className = `fas ${system.icon || 'fa-link'}`;
        iconGlyph.setAttribute('aria-hidden', 'true');
        icon.appendChild(iconGlyph);

        const content = document.createElement('span');
        content.className = 'employee-system-content';
        const title = document.createElement('strong');
        title.textContent = system.name;
        const description = document.createElement('small');
        description.textContent = system.description || '';
        content.append(title, description);

        const status = document.createElement('span');
        status.className = 'employee-system-status';
        status.innerHTML = configured
            ? '<span>进入系统</span><i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>'
            : '<span>待配置</span><i class="fas fa-lock" aria-hidden="true"></i>';

        element.append(icon, content, status);
        return element;
    }

    function renderSystems() {
        const grid = document.getElementById('employeeSystemsGrid');
        const empty = document.getElementById('employeeSystemsEmpty');
        const resultCount = document.getElementById('employeeResultCount');
        if (!grid || !empty || !resultCount) return;

        const visibleSystems = systems.filter(systemMatches);
        grid.replaceChildren(...visibleSystems.map(createSystemCard));
        grid.hidden = visibleSystems.length === 0;
        empty.hidden = visibleSystems.length !== 0;
        resultCount.textContent = `${visibleSystems.length} 个入口`;
    }

    function renderCategories() {
        const container = document.getElementById('employeeCategories');
        if (!container) return;

        const categories = ['全部', ...new Set(systems.map(system => system.category).filter(Boolean))];
        categories.forEach(category => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `employee-category${category === state.category ? ' active' : ''}`;
            button.textContent = category;
            button.addEventListener('click', () => {
                state.category = category;
                container.querySelectorAll('.employee-category').forEach(item => {
                    item.classList.toggle('active', item === button);
                });
                renderSystems();
            });
            container.appendChild(button);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const search = document.getElementById('employeeSystemSearch');
        const searchForm = document.getElementById('employeeSearchForm');
        const configuredCount = systems.filter(isConfigured).length;
        const configuredLabel = document.getElementById('employeeConfiguredCount');

        if (configuredLabel) {
            configuredLabel.textContent = `${configuredCount}/${systems.length} 已配置`;
        }

        if (search) {
            search.addEventListener('input', () => {
                state.query = search.value;
                renderSystems();
            });

            document.addEventListener('keydown', event => {
                if (event.key === '/' && document.activeElement !== search) {
                    event.preventDefault();
                    search.focus();
                }
                if (event.key === 'Escape' && document.activeElement === search) {
                    search.value = '';
                    state.query = '';
                    search.blur();
                    renderSystems();
                }
            });
        }

        if (searchForm && search) {
            searchForm.addEventListener('submit', event => {
                event.preventDefault();
                state.query = search.value;
                renderSystems();
            });
        }

        renderCategories();
        renderSystems();
    });
})();
