export class RootStyleHandler {
    constructor() {
        // Constructor if needed
    }

    static openMobileNavbar() {
        document.documentElement.style.setProperty("--mobile-navbar-position", "0px");
        document.body.style.overflow = "hidden";
    }

    static closeMobileNavbar() {
        document.documentElement.style.setProperty("--mobile-navbar-position", "100%");
        document.body.style.overflow = "initial";
    }

    static visibleHamburgerIconHiddenCloseIcon() {
        document.documentElement.style.setProperty("--hambuger-menu-open-icon-visible-state", "block");
        document.documentElement.style.setProperty("--mobile-menu-close-icon-visible-state", "none");

    }


    static visibleMobileCloseIconHiddenHamburgerIcon() {
        document.documentElement.style.setProperty("--mobile-menu-close-icon-visible-state", "block");
        document.documentElement.style.setProperty("--hambuger-menu-open-icon-visible-state", "none");
    }


}

