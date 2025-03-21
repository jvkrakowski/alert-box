class AlertBox {
    constructor(alertBox, showButton) {
        this.alertBox = $(alertBox);
        this.closeButton = this.alertBox.find('.close');
        this.showButton = $(showButton);
        this.init();
    }

    init() {
        this.alertBox.hide(); // Hide the alert box by default
        this.closeButton.click(() => this.hide());
        this.showButton.click((event) => {
            event.preventDefault();
            this.show();
        });
    }

    show() {
        this.alertBox.fadeIn();
    }

    hide() {
        this.alertBox.fadeOut();
    }

    toggle() {
        this.alertBox.toggle();
    }
}

$(document).ready(function () {
    // Initialize multiple alert boxes with corresponding buttons using data attributes
    $('[data-alert-id]').each(function () {
        const alertId = $(this).data('alert-id');
        const alertBoxSelector = `[data-alert-id="${alertId}"]`;
        const showButtonSelector = `[data-show-alert="${alertId}"]`;
        new AlertBox(alertBoxSelector, showButtonSelector);
    });
});
