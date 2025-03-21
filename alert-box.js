class AlertBox {
    constructor(selector) {
        this.alertBox = $(selector);
        this.closeButton = this.alertBox.find('.close');
        this.init();
    }

    init() {
        this.closeButton.click(() => this.hide());
        $('.show-alert').click(() => this.toggle());
    }

    show() {
        this.alertBox.show();
    }

    hide() {
        this.alertBox.hide();
    }

    toggle() {
        this.alertBox.toggle();
    }
}

$(document).ready(function () {
    const alertBox = new AlertBox('.alert');
});
