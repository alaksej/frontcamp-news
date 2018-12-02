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
    <section class="search-panel">
      <form onsubmit="event.preventDefault()">
        <div class="form-group row" title="Select the news source">
          <label class="col-1" for="source">Channel:</label>
          <div class="col-5">
            <select class="form-control" name="source" id="source"> </select>
          </div>
        </div>
        <div id="pageContainer" class="form-group row" title="Enter the page number" hidden>
          <label class="col-1" for="page">Page:</label>
          <div class="col-5">
            <input class="form-control" type="number" name="page" id="page" value="1" placeholder="Enter the page number">
          </div>
        </div>
        <div class="row">
          <div class="col-6 align-right">
            <button class="btn btn-primary" id="submit" type="submit" title="Begin search" disabled>Go</button>
          </div>
        </div>
      </form>
    </section>
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