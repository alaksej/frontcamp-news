export default `
<div id="mainContainer" class="container">
<header class="header">
  <div class="content-wrapper">
    <h1>Worldwide News</h1>
  </div>
</header>
<main>
  <div class="content-wrapper">
    <h2 class="welcome-title">Welcome to Worldwide News!</h2>
    <app-search-panel></app-search-panel>
    <section class="card-list" id="newsListContainer">Click Go to get some news</section>
  </div>
</main>

<footer class="footer">
  <div class="content-wrapper">
    <a href="https://newsapi.org" class="attribution">Powered by News API</a>
  </div>
</footer>

<div class="popup-container"></div>
</div>

`;