---
page: true
---

<section id="hero">
  <h1 class="tagline">
    The Progressive<br>
    Lightweight Web Framework
  </h1>
  <p class="description">
    一个简单、快速、轻量的 HTTP 服务框架，专为 API 而生，是 COA 核心 HTTP 库
  </p>
  <p class="actions">
    <a class="get-started" href="/guide/introduction.html">Get Started <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg></a>
    <a class="setup" href="/guide/start.html">Install</a>
  </p>
</section>

<!-- TODO make dynamic based on data -->
<section id="special-sponsor">
  <span>Special Sponsor</span>
</section>

<section id="highlights" class="vt-box-container">
  <div class="vt-box">
    <h3>为API而生</h3>
    <p>专为 API 开发使用.</p>
  </div>
  <div class="vt-box">
    <h3>轻量极简</h3>
    <p>不到 10K、不依赖第三方库、不过度封装.</p>
  </div>
  <div class="vt-box">
    <h3>灵活</h3>
    <p>支持微服务、Serverless 模式、Context 可自由扩展.</p>
  </div>
  <div class="vt-box">
    <h3>文档友好</h3>
    <p>自动生成接口文档、自动生成前端接口代码.</p>
  </div>
  <div class="vt-box">
    <h3>TypeScript</h3>
    <p>全部使用 TypeScript 书写，类型约束、IDE 友好.</p>
  </div>
  <div class="vt-box">
    <h3>Deno</h3>
    <p>支持在 Deno 下运行（todo，计划 6 月份完成）.</p>
  </div>
</section>

<section id="sponsors">
  <!-- TODO -->
</section>

<section id="ways-to-use">
  <!-- TODO show toggleable example between CDN vs. SFC usage -->
</section>

<section id="tooling">
  <!-- TODO show tooling screenshots -->
</section>

<style scoped>
section {
  padding: 42px 32px;
}

#hero {
  padding: 76px 32px;
  text-align: center;
}

.tagline {
  font-size: 62px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 900px;
  margin: 0px auto;
}

.dark .tagline {
  /* color: var(--vt-c-green-light); */
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 760px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 18px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  font-weight: 600;
  background-color: var(--vt-c-green);
  color: #fff;
  margin-right: 18px
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.dark .actions .get-started {
  color: var(--vt-c-indigo);
}

.actions .get-started:hover {
  background-color: var(--vt-c-green-dark);
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.dark .actions .get-started:hover {
  background-color: var(--vt-c-green-light);
}

.actions .setup {
  color: var(--vt-c-text-code);
}

.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

#special-sponsor {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
  text-align: center;
}

#special-sponsor span {
  color: var(--vt-c-text-2);
  font-weight: 500;
  font-size: 13px;
  vertical-align: middle;
  margin: 0 24px;
}

#special-sponsor img {
  display: inline-block;
  vertical-align: middle;
  height: 36px;
}

.dark #special-sponsor img {
  filter: grayscale(1) invert(1);
}

#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#highlights h3 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}

@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 64px 32px;
  }
  .tagline {
    font-size: 38px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
  #special-sponsor img {
    display: block;
    margin: 2px auto 1px;
  }
  #highlights h3 {
    margin-bottom: 0.6em;
  }
  #highlights .vt-box {
    padding: 20px 36px;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>
