(function(){
    define(function(){
        if (typeof Dep !== 'undefined') {
            var d = document.getElementById('shim');
            d.innerText = Dep;
        }
    });    
})();