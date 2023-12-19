<template>
    <form @submit.prevent="handleSubmit">
        <label>email:</label>
        <input type="email" required v-model="email">
        <label>password:</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>
        <label>Preferred Language:</label>
        <select v-model="language">
           <option value="English">English</option> 
           <option value="German">German</option> 
        </select>

        <label>What is your passion?:</label>
        <input type="text" v-model="tempinterest" @keyup="addinterest">
        <div v-for="interest in interests" :key="interest" class="pill">
            <span @click="deleteinterest(interest)"> {{ interest }}</span>
            </div>
        

        <div class="terms">
            <input type="checkbox" v-model="terms" required>
            <label>Accept terms and conditions</label>
        </div>

        <div class="submit"><button>Register</button></div>


    </form>
</template>

<script>
export default {
data (){
    return{
        email: '',
        password: '',
        language:'',
        terms: false,
        tempinterest: '',
        interests: [], 
        passwordError: ''
    }
}, 
methods: {
    addinterest(e) {
        if (e.key === ',' && this.tempinterest) {
            // e is event, key is pressed key
            // create variable , value is tempSkll without comma 
            const deleteComma = this.tempinterest.replaceAll(',','');
            if (!this.interests.includes(deleteComma)){
                this.interests.push(deleteComma)

            }
            
            this.tempinterest = ''
        }
    }, 
    deleteinterest(interest) {
        this.interests = this.interests.filter((item) => {
            return interest !== item
        }) 
    },
    async handleSubmit() {
      this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 chars long';

      if (!this.passwordError) {
        // Prepare the data to be sent to the backend
        const formData = {
          email: this.email,
          password: this.password,
          language: this.language,
          interests: this.interests,
          terms: this.terms,
        };

        try {
          const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            // Registration successful
            console.log('Registration successful');
            // You can redirect the user or perform other actions here
          } else {
            // Handle registration failure
            console.error('Registration failed');
          }
        } catch (error) {
          console.error('Error during registration:', error);
        }
      }
    },
}
}
</script>

<style>
form {
    max-width: 800px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;

}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 1em;
    text-transform: uppercase;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 450px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color:#555;

}
input[type="checkbox"] {
    display: inline-block;
    width:16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}

.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}

button {
    background: transparent;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    font-size: 1em;
    color: white;
    border-radius: 20px;
    cursor: pointer;
}

.submit {
    text-align: center;
}

.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>