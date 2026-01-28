<template>
  <div class="app">
    <!-- Hero Header -->
    <header class="header">
      <div class="header-content">
        <h1 class="heading-text">Animate On Scroll</h1>
        <p class="subtitle">A simple Vue 3 directive that animates elements as they scroll into view.</p>
        <div class="header-links">
          <a href="https://www.npmjs.com/package/vue-animate-onscroll" target="_blank" title="npm">
            <svg viewBox="0 0 576 512" width="28" height="28" fill="currentColor"><path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"/></svg>
          </a>
          <a href="https://github.com/josephharveyangeles/vue-animate-onscroll" target="_blank" title="GitHub">
            <svg viewBox="0 0 496 512" width="28" height="28" fill="currentColor"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.8-14.1-112.8-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/></svg>
          </a>
        </div>
      </div>
    </header>

    <!-- Section 1: Basic -->
    <section class="section">
      <h3 class="section-heading">Basic</h3>
      <div class="items">
        <div class="item">
          <h4 class="sub-heading">Once</h4>
          <div class="image-container" v-animate-onscroll="'animate__animated animate__fadeInUp'">
            <img src="./img/grumpcat1.jpg" alt="grumpcat" />
          </div>
        </div>
        <div class="item">
          <h4 class="sub-heading">Repeat</h4>
          <div class="image-container" v-animate-onscroll.repeat="'animate__animated animate__fadeInUp'">
            <img src="./img/grumpcat2.jpg" alt="grumpcat" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Downscroll -->
    <section class="section">
      <h3 class="section-heading">Downscroll</h3>
      <div class="items">
        <div class="item">
          <div class="image-container" v-animate-onscroll="{down: 'animate__animated animate__bounceIn'}">
            <img src="./img/grumpcat1.jpg" alt="grumpcat" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Upscroll -->
    <section class="section">
      <h3 class="section-heading">Upscroll</h3>
      <div class="items">
        <div class="item">
          <div class="image-container" v-animate-onscroll="{up: 'animate__animated animate__bounceIn'}">
            <img src="./img/grumpcat2.jpg" alt="grumpcat" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Bi-directional -->
    <section class="section">
      <h3 class="section-heading">Bi-directional</h3>
      <div class="items">
        <div class="item">
          <div class="image-container" v-animate-onscroll="{down: 'animate__animated animate__rotateIn', up: 'animate__animated animate__rollIn'}">
            <img src="./img/grumpcat1.jpg" alt="grumpcat" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: In/Out -->
    <section class="section">
      <h3 class="section-heading">In / Out</h3>
      <div class="items">
        <div class="item">
          <div class="image-container" v-animate-onscroll.repeat="{in: 'animate__animated animate__flipInX', out: 'animate__animated animate__flipOutX'}" data-animate-onscroll-offset="100">
            <img src="./img/grumpcat2.jpg" alt="grumpcat" />
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="social-links">
          <a class="social" href="https://github.com/josephharveyangeles/vue-animate-onscroll" target="_blank" title="GitHub">
            <svg viewBox="0 0 496 512" width="24" height="24" fill="currentColor"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.8-14.1-112.8-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/></svg>
          </a>
        </div>
        <p>vue-animate-onscroll &copy; 2024</p>
      </div>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Ubuntu', sans-serif;
  margin: 0;
  padding: 0;
  background: #1a1a2e;
  color: #fff;
}

.header {
  min-height: 100vh;
  background: #1a1a2e;
  clip-path: polygon(0 16%, 100% 0, 100% 66%, 0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.header-content {
  padding: 2rem;
}

.heading-text {
  font-family: 'Press Start 2P', cursive;
  font-size: 2.5rem;
  color: #fdd835;
  background-image: -webkit-linear-gradient(92deg, #e65100, #ffee58);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.header-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.header-links a {
  color: #fff;
  transition: all 0.4s ease;
}

.header-links a:hover {
  transform: scale(1.2);
  filter: brightness(200%);
}

.section {
  clip-path: polygon(0 0, 100% 4%, 100% 94%, 0 100%);
  padding: 12rem 2rem 20rem;
  text-align: center;
}

.section:nth-child(odd) {
  background: #16213e;
}

.section:nth-child(even) {
  background: #0f3460;
}

.section-heading {
  font-family: 'Press Start 2P', cursive;
  font-size: 1.5rem;
  color: #fdd835;
  background-image: -webkit-linear-gradient(92deg, #e65100, #ffee58);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
}

.sub-heading {
  color: #d81b60;
  background-image: -webkit-linear-gradient(92deg, #880e4f, #ef5350);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.items {
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
}

.item:not(:last-child) {
  margin-bottom: 2rem;
}

.image-container {
  background-color: #ffa726;
  min-width: 250px;
  min-height: 250px;
  border-radius: 20px;
  display: inline-block;
}

.image-container img {
  border-radius: inherit;
  display: block;
  height: 250px;
  width: 250px;
  object-fit: cover;
}

.footer {
  font-family: 'Ubuntu', sans-serif;
  margin-top: 10rem;
  background-color: #7a0d47;
  padding: 3rem 2rem;
  text-align: center;
}

.footer-content p {
  margin: 1rem 0 0;
  font-size: 0.8rem;
  opacity: 0.8;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social {
  color: #fff;
  transition: all 0.4s ease;
}

.social:hover {
  transform: scale(1.2);
  filter: brightness(200%);
}
</style>
