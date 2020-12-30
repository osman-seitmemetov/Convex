const TabItemSelector = '.account-head__tab';
const ContentItemSelector = '.account-tab-content';

class TabsManager {
    constructor(navNode){
        this.tabs = [];
        this.activeTab = null;

        this.initFromHtml(navNode);
        this.activateTab(this.tabs[0]);
    }

    initFromHtml (navNode) {
        const headers  = navNode.querySelectorAll(TabItemSelector);
        const contents = navNode.querySelectorAll(ContentItemSelector);

        for (var i = 0; i < headers.length; i++) {
            this.registerTab(headers[i], contents[i]);
        }
    }

    registerTab (header, content) {
        const tab = new TabItem(header, content);
        tab.onActivate(() => this.activateTab(tab));
        this.tabs.push(tab);
    }

    activateTab (tabItem) {
        if (this.activeTab) {
            this.activeTab.setActive(false);
        }

        this.activeTab = tabItem;
        this.activeTab.setActive(true);
    }
}

const ActiveTabHeaderClass = 'account-head__tab--active';
const ActiveTabContentClass = 'account-tab-content--active';

class TabItem {
    constructor (header, content) {
        this.header  = header;
        this.content = content;
    }
    onActivate (action) {
        this.header.addEventListener('click', () => action(this));
    }
    setActive(value) {
        this.header.classList.toggle(ActiveTabHeaderClass, value);
        this.content.classList.toggle(ActiveTabContentClass, value);
        this.content.classList.toggle('animate__animated', value);
        this.content.classList.toggle('animate__fadeIn', value);
    }
}