<template>
    <div>
     Id: <input type="text" v-model='Id' /> <br/><br/>
     FirstName: <input type="text" v-model='FirstName' /> <br/><br/>
     lastName <input type="text"  v-model='lastName'/> <br/><br/>
     Password:  <input type="password"  v-model='Password' /> <br/><br/>
      Role:   <select v-model='Role'>
    <option value="Admin">Admin</option>
    <option value="User">User</option>
  </select><br/><br/>
      <button @click='create'>Register</button>
    </div> 
</template>
<script>
import axios from 'axios';

export default {
    name:'CreateUser',
    data(){
        return {
            Id:'',
            FirstName:'',
            lastName:'',
            Password:'',
            Role:''
        }
    },
    methods:{
        create() {
            var user= {
            Id:this.Id,
            FirstName:this.FirstName,
            lastName:this.lastName,
            Password:this.Password,
            Role:this.Role,
             }  
             axios.post('http://localhost:4000/CreateUser',user)    
        }

    }
}
</script>