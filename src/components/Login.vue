<template>
    <div>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required>
  
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required>
  
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:3000/auth', {
          method: 'POST', // Adjust the method as needed
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });

        if (response.ok) {
          // Successful login
          this.errorMessage = '';
          alert('Login successful!');
        } else {
          // Failed login
          this.errorMessage = 'Invalid username or password';
        }
      } catch (error) {
        console.error('Error during login:', error);
        this.errorMessage = 'An error occurred during login';
      }
    },
  },
};
  </script>
  
  <style scoped>
  /* Add your styles if needed */
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  