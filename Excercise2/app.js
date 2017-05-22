new Vue({
        el: '#exercise',
        data: {
            value: 'Hello'
        },
        methods: {
            showAlert:function(){
                alert('OK');
            },
            storeValue: function (event) {
                this.value = event.target.value;
            }
        }
    });