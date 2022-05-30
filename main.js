const app = new Vue({
    el: '#app',
    data: {
        email: "",
    },
    created() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((res) => {
                console.log(res);
            }),
    },
})