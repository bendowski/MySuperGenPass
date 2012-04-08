(function($) {
    $.fn.selectText = function() {
        if (this.length > 0) {
            var selection = window.getSelection();
            selection.removeAllRanges();
            var range = document.createRange();
            range.selectNodeContents(this[0]);
            selection.addRange(range);
        }
        return this;
    };
})(Zepto);
