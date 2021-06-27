<template>
  <div>
    <h1>Halaman User</h1>
    <div>Berikut daftar user:</div>
    <ul>
      <li v-for="item in users" :key="item.id">{{item.username}} <button @click="hapus(item.id)">X</button></li>
    </ul>
    <input v-model="username"/>
    <input v-model="password" type="password"/>
    <button @click="tambahUser">Add User</button>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data: () => {
    return { 
        users: [] ,
        username: '',
        password: ''
      }
  },

  created: function() {
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "http://localhost:3000/todo");
    // xhr.send();
    // xhr.onreadystatechange();

    const username = localStorage.getItem('usr')
    const password = localStorage.getItem('pwd')

    axios.get('http://localhost:3000/user', {headers: {username ,password} })
    .then(result => {
      // alert(JSON.stringify(result.data))
      this.users = result.data
    })
  },

  methods: {
    tambahUser: function(){
        
      const username = localStorage.getItem('usr')
      const password = localStorage.getItem('pwd')

      let newItem = {username: this.username, password: this.password}
      axios.post('http://localhost:3000/user', newItem, {headers: {username ,password} })
      .then(result => {
            this.users.push(result.data)
            this.username =''
            this.password =''
      })
    //   this.users.push(newItem)
      console.log(newItem)
    },
    hapus: function(id){
        
      const username = localStorage.getItem('usr')
      const password = localStorage.getItem('pwd')

      axios.delete(`http://localhost:3000/user/${id}`, {headers: {username ,password} })
      .then(result => {
            this.users = this.users.filter((e)=>e.id !== id )
      })
    }
  }
}
</script>
