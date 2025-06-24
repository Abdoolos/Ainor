// Enhanced Mobile Menu Fix for Static Export - Version 2.0
(function() {
    'use strict';
    
    // Global variables
    let isInitialized = false;
    let mobileMenuActive = false;
    
    // Console logging helper
    function log(message) {
        if (typeof console !== 'undefined' && console.log) {
            console.log('[Mobile Menu]: ' + message);
        }
    }
    
    // Wait for DOM to be ready
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState === 'complete') fn();
            });
        }
    }
    
    // Check if we're on mobile/tablet
    function isMobileDevice() {
        return window.innerWidth <= 991.98;
    }
    
    // Create mobile menu styles if not exist
    function injectMobileStyles() {
        if (document.getElementById('mobile-menu-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'mobile-menu-styles';
        style.textContent = `
            .mobile-menu-overlay {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                background-color: rgba(0, 0, 0, 0.5) !important;
                z-index: 9998 !important;
                display: block !important;
                opacity: 1 !important;
                visibility: visible !important;
            }
            
            .mobile-header-active {
                position: fixed !important;
                top: 0 !important;
                right: -100% !important;
                width: 300px !important;
                height: 100vh !important;
                background: #fff !important;
                z-index: 9999 !important;
                transition: right 0.3s ease !important;
                overflow-y: auto !important;
            }
            
            .mobile-header-active.sidebar-visible {
                right: 0 !important;
            }
            
            .burger-icon {
                cursor: pointer !important;
                padding: 10px !important;
                display: flex !important;
                flex-direction: column !important;
                justify-content: center !important;
                align-items: center !important;
                width: 40px !important;
                height: 40px !important;
            }
            
            .burger-icon span {
                display: block !important;
                width: 20px !important;
                height: 2px !important;
                background-color: #333 !important;
                margin: 2px 0 !important;
                transition: 0.3s !important;
            }
            
            .burger-icon.burger-close span:nth-child(1) {
                transform: rotate(-45deg) translate(-5px, 6px) !important;
            }
            
            .burger-icon.burger-close span:nth-child(2) {
                opacity: 0 !important;
            }
            
            .burger-icon.burger-close span:nth-child(3) {
                transform: rotate(45deg) translate(-5px, -6px) !important;
            }
            
            .mobile-menu li {
                list-style: none !important;
            }
            
            .mobile-menu a {
                display: block !important;
                padding: 10px 20px !important;
                color: #333 !important;
                text-decoration: none !important;
                border-bottom: 1px solid #eee !important;
            }
            
            .mobile-menu a:hover {
                background-color: #f5f5f5 !important;
            }
            
            .sub-menu {
                background-color: #f9f9f9 !important;
                padding-left: 20px !important;
            }
            
            .menu-expand {
                cursor: pointer !important;
                padding: 10px !important;
                float: right !important;
                margin-top: -40px !important;
                margin-right: 10px !important;
            }
            
            body.mobile-menu-active {
                overflow: hidden !important;
            }
        `;
        document.head.appendChild(style);
        log('Mobile styles injected');
    }
    
    ready(function() {
        // Inject mobile styles
        injectMobileStyles();
        
        // Mobile menu toggle functionality
        function initMobileMenu() {
            if (isInitialized) return;
            
            log('Initializing mobile menu...');
            
            // Function to open mobile menu
            function openMobileMenu() {
                log('Opening mobile menu');
                mobileMenuActive = true;
                document.body.classList.add('mobile-menu-active');
                
                const mobileMenus = document.querySelectorAll('.mobile-header-active');
                mobileMenus.forEach(menu => {
                    menu.classList.add('sidebar-visible');
                });
                
                // Update burger icons
                const burgerIcons = document.querySelectorAll('.burger-icon');
                burgerIcons.forEach(icon => {
                    icon.classList.add('burger-close');
                });
                
                // Create overlay if it doesn't exist
                let overlay = document.querySelector('.mobile-menu-overlay');
                if (!overlay) {
                    overlay = document.createElement('div');
                    overlay.className = 'mobile-menu-overlay';
                    overlay.addEventListener('click', closeMobileMenu);
                    overlay.addEventListener('touchstart', closeMobileMenu);
                    document.body.appendChild(overlay);
                }
            }
            
            // Function to close mobile menu
            function closeMobileMenu() {
                log('Closing mobile menu');
                mobileMenuActive = false;
                document.body.classList.remove('mobile-menu-active');
                
                const mobileMenus = document.querySelectorAll('.mobile-header-active');
                mobileMenus.forEach(menu => {
                    menu.classList.remove('sidebar-visible');
                });
                
                // Update burger icons
                const burgerIcons = document.querySelectorAll('.burger-icon');
                burgerIcons.forEach(icon => {
                    icon.classList.remove('burger-close');
                });
                
                // Remove overlay
                const overlay = document.querySelector('.mobile-menu-overlay');
                if (overlay) {
                    overlay.remove();
                }
            }
            
            // Find and setup burger buttons
            function setupBurgerButtons() {
                const burgerButtons = document.querySelectorAll('.burger-icon, .mobile-menu-toggle, [data-mobile-menu]');
                log('Found burger buttons: ' + burgerButtons.length);
                
                burgerButtons.forEach((button, index) => {
                    log('Setting up burger button ' + index);
                    
                    // Remove any existing listeners
                    const newButton = button.cloneNode(true);
                    if (button.parentNode) {
                        button.parentNode.replaceChild(newButton, button);
                    }
                    
                    // Click event
                    newButton.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        log('Burger button clicked');
                        
                        if (mobileMenuActive) {
                            closeMobileMenu();
                        } else {
                            openMobileMenu();
                        }
                    });
                    
                    // Touch events for mobile
                    newButton.addEventListener('touchstart', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        setTimeout(() => {
                            if (mobileMenuActive) {
                                closeMobileMenu();
                            } else {
                                openMobileMenu();
                            }
                        }, 100);
                    });
                });
            }
            
            // Setup menu links
            function setupMenuLinks() {
                const menuLinks = document.querySelectorAll('.mobile-menu a:not(.menu-expand)');
                log('Setting up menu links: ' + menuLinks.length);
                
                menuLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        // Don't close menu for hash links or if it has children
                        if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                            return;
                        }
                        setTimeout(closeMobileMenu, 200);
                    });
                });
            }
            
            // Setup sub-menu toggles
            function setupSubMenus() {
                const menuExpands = document.querySelectorAll('.menu-expand');
                log('Setting up sub-menus: ' + menuExpands.length);
                
                menuExpands.forEach(expand => {
                    expand.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        const parentLi = this.closest('li');
                        const subMenu = parentLi ? parentLi.querySelector('.sub-menu') : null;
                        
                        if (subMenu) {
                            const isVisible = subMenu.style.display === 'block';
                            subMenu.style.display = isVisible ? 'none' : 'block';
                            parentLi.classList.toggle('open', !isVisible);
                            log('Sub-menu toggled: ' + (!isVisible ? 'opened' : 'closed'));
                        }
                    });
                });
            }
            
            // Setup escape key handler
            function setupKeyboardHandlers() {
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape' && mobileMenuActive) {
                        closeMobileMenu();
                    }
                });
            }
            
            // Initialize all components
            setupBurgerButtons();
            setupMenuLinks();
            setupSubMenus();
            setupKeyboardHandlers();
            
            // Handle resize events
            window.addEventListener('resize', function() {
                if (!isMobileDevice() && mobileMenuActive) {
                    closeMobileMenu();
                }
            });
            
            // Handle page navigation (for SPAs)
            window.addEventListener('popstate', function() {
                if (mobileMenuActive) {
                    closeMobileMenu();
                }
            });
            
            isInitialized = true;
            log('Mobile menu initialization complete');
        }
        
        // Initialize immediately
        initMobileMenu();
        
        // Re-initialize after delays for dynamic content
        setTimeout(function() {
            isInitialized = false;
            initMobileMenu();
        }, 1000);
        
        setTimeout(function() {
            isInitialized = false;
            initMobileMenu();
        }, 3000);
        
        // Re-initialize on window load
        window.addEventListener('load', function() {
            setTimeout(function() {
                isInitialized = false;
                initMobileMenu();
            }, 500);
        });
        
        // MutationObserver to handle dynamic content changes
        if (typeof MutationObserver !== 'undefined') {
            const observer = new MutationObserver(function(mutations) {
                let shouldReinit = false;
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                        for (let i = 0; i < mutation.addedNodes.length; i++) {
                            const node = mutation.addedNodes[i];
                            if (node.nodeType === 1) { // Element node
                                if (node.classList && (
                                    node.classList.contains('burger-icon') ||
                                    node.classList.contains('mobile-menu') ||
                                    node.querySelector('.burger-icon') ||
                                    node.querySelector('.mobile-menu')
                                )) {
                                    shouldReinit = true;
                                    break;
                                }
                            }
                        }
                    }
                });
                
                if (shouldReinit) {
                    setTimeout(function() {
                        isInitialized = false;
                        initMobileMenu();
                    }, 100);
                }
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    });
})();
