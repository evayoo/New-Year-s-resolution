<template>
    <div class="blog">
        <h1>Biggest Challenge</h1>
        <ul>
            <li>Developing a vue app</li>
            <li>connecting the backend to the frontend</li>
            <li>Big thanks to Alex, helping me out everytime there was fatal error, and Olena, for always being present on Tuesdays and Fridays</li>
        </ul>
        <img src="../components/img/web.jpg" alt="web dev class">

        <h1>Biggest Failure and Learning</h1>
        <ul>
            <li>I wanted to develop a chat and mypage into the website</li>
            <li>I need to learn more about Vue.js and backend</li>
            <li>I need to Google more, and use less ChatGPT</li>
        </ul>
        <img src="../components/img/web1.jpg" alt="web dev class">

        <h1>Greatest Success</h1>
        <ul>
            <li>I managed to connect frontend with backend with Alex's help</li>
            <li>I used Vue.js and Pinia to develop this website</li>
            <li>I'm so happy I chose advanced web-development</li>
        </ul>
    </div>
</template>

<style>
.blog {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

li {
    width: 700px;
    font-size: 1.5em;
}

img {
    width: 400px;
}
</style>