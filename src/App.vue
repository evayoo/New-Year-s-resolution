<template>
    <main>
    
      <header>
        <div class="nav">
        <router-link to="/"><button>Home</button></router-link>  
        <router-link :to="{ name: 'blog' }"><button>Blog</button></router-link>
        <router-link :to="{ name: 'signup' }"><button>Sign Up</button></router-link>
        <router-link :to="{ name: 'login' }"><button>Login</button></router-link>
      
      </div>
    
        <img src="./components/img/newyear.jpg" alt=".">
        <h1>New Year's Resolution</h1>
      </header>

      <router-view/>
      </main>
    </template>