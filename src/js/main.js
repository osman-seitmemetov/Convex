import './vendor/focus-visible.min';
import './vendor/hystmodal.min';
import './components/magic-line';
import './components/search';
import './components/sliders';
import './components/select';
import './components/product-table';
// import './components/menu';
import './components/auth-dropdown';
// import './components/account-accordion';
import './_vars';

//disableScroll(fix) // fix -> class of element with position: fixed
document.addEventListener('DOMContentLoaded', () => {
    const TabItemSelector = '.account-head__tab';
    const ContentItemSelector = '.account-tab-content';

    const myModal = new HystModal({
        linkAttributeName: "data-hystmodal",
    });

    class TabsManager {
        constructor(navNode) {
            this.tabs = [];
            this.activeTab = null;

            this.initFromHtml(navNode);
            this.activateTab(this.tabs[0]);
        }

        initFromHtml(navNode) {
            const headers = navNode.querySelectorAll(TabItemSelector);
            const contents = navNode.querySelectorAll(ContentItemSelector);

            for (var i = 0; i < headers.length; i++) {
                this.registerTab(headers[i], contents[i]);
            }
        }

        registerTab(header, content) {
            const tab = new TabItem(header, content);
            tab.onActivate(() => this.activateTab(tab));
            this.tabs.push(tab);
        }

        activateTab(tabItem) {
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
        constructor(header, content) {
            this.header = header;
            this.content = content;
        }
        onActivate(action) {
            this.header.addEventListener('click', () => action(this));
        }
        setActive(value) {
            this.header.classList.toggle(ActiveTabHeaderClass, value);
            this.content.classList.toggle(ActiveTabContentClass, value);
            this.content.classList.toggle('animate__animated', value);
            this.content.classList.toggle('animate__fadeIn', value);
        }
    }
    let tabs = new TabsManager(document.querySelector('.account-tabs-area'));

    // choice
    // let inputField = document.querySelectorAll('.input__field');
    // let input = document.querySelectorAll('.input');
    // let checkbox = document.querySelector('.checkbox-item__input');

    // checkbox.addEventListener('click', () => {
    //     inputField[2].classList.toggle('input__field--hidden');
    //     inputField[3].classList.toggle('input__field--hidden');
    //     inputField[4].classList.toggle('input__field--hidden');
    //     input[2].classList.toggle('input--hidden')
    // });
});