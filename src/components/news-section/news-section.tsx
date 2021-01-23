import { Component, ComponentInterface, h, State } from '@stencil/core';
import { News } from './news';

/*
* acme's news container using Fetch 
*/

@Component({
  tag: 'news-section',
  styleUrl: 'news-section.css',
  shadow: true,
})
export class NewsSection implements ComponentInterface {
  @State() news: Array <News> = [];
  @State() limit = 2;
  
  /**
   * The component is loaded and has rendered.
   * 
   * Updating data in this event may cause the component to re-render.
   * 
   * Will only be called once
   */

  componentDidLoad() {
    this.fetchData();
  }

  /*
  * controllo della caricamento degli atricolo della fetch
  */
 
  private fetchData = () => {
    if (this.limit >= 10) {
      return;
    }

    /* Con il bottone "carica altri" vengono caricati 2 articoli alla volta */

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}`)
      .then(response => response.json())
      .then((json) => (this.news = json))
    this.limit = this.limit + 2;
  };


  render() {
    return (
     <div class="box-esterno">
        <h3>NEWS</h3>
        {this.news.map(news =>
          <div class="container">
            <div class="singolo">
              <div>
                <h3 class="titoletto">{news.title}</h3>
                <p>{news.body}</p>
              </div>
            <div class="numero-news">{news.id}</div>
            </div>
          </div>
        )}
        <bottone-scuro btnTextScuro="Carica altri" onClick={this.fetchData}></bottone-scuro>
      </div>
    );
  }

}
