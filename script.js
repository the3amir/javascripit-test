Vue.component ('todo-item' , 
    {
        template: '<li>to do list</li>'
    })


var app = new Vue({
    el: '#app',
    data: {
        text: 'welcome in my vue.js'
    },
    computed: {
        revtext: function() {
            return this.text.split('').reverse().join('');
        }
    }
  })

var span = new Vue({
    el: '#span',
    data: {
        seen: true
    }
})


var app3 = new Vue({
    el: '#app3',
    data: {
        todos: [
        { text: 'first todo' },
        { text: 'second todo' },
        { text: 'third todo' }
    ]
    }
})




var app4 = new Vue({
    el: '#app4',
    data: {
        text : 'hello'
    }
})


Vue.component('todo-item' ,{
    props:['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app5 = new Vue({
    el: '#app5' ,
    data: {
        x: [
            {id: 0, text: 'a'},
            {id: 1, text: 'b'},
            {id: 2, text: 'c'}
        ]
    }
})



var date = new Vue({
    el: '#date',
    data: {
        date: 'today'
    },
    methods: {
        showDate() {
            return this.date = Date()
        }
    },
})