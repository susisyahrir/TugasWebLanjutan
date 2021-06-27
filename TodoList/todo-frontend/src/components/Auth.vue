<template>
    <div>
        <div class="form-control">
            <label for="username">Username </label>
            <input type="text" v-model="username">
        </div>
        <div class="form-control">
            <label for="password">Password </label>
            <input type="password" v-model="password">
        </div>

        <div class="buttons">
            <button @click="simpan">Simpan</button>
            <button @click="hapus">Hapus</button>
        </div>
        
    </div>
</template>

<script>
export default{
    data: function(){
        return {
            username: '',
            password: ''
        }
    },
    created: function(){
        this.username = localStorage.getItem('usr')
        this.password = localStorage.getItem('pwd')
    },

    methods:{
        simpan: function(){
            localStorage.setItem('usr', this.username)
            localStorage.setItem('pwd', this.password)
        },
        hapus: function(){
            localStorage.removeItem('usr')
            localStorage.removeItem('pwd')
            this.username = ''
            this.password = ''
        }
    }
}
</script>