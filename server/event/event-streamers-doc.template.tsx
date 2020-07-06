import * as React from "preact";
import base from "server/base.template";
import { CommonLocals } from "server/common.middleware";
import links from "server/core/links";
import { BookshelfModel } from "bookshelf";

export default function render(context: CommonLocals & { event: BookshelfModel }) {
  const {event} = context;

  registerStreamersDocStyles(context);

  return base(context,
    <div class="container thin">
      <h1>About streamers</h1>
      <p>Entering the event as a streamer is open to everyone, <b>even if you don't plan to make a game</b>.
        Joining grants access to a variety of perks (see below).
        From competing for high scores to actually rating the submitted games,
        they should give you some cool opportunities to have fun with your viewers.</p>

      <p><a href={links.routeUrl(event, "event", "dashboard")} class="btn btn-primary">Access the dashboard to enter as a streamer</a></p>
      {streamersDoc(event)}
    </div>);
}

export function registerStreamersDocStyles(context: CommonLocals) {
  context.inlineStyles.push(`
  .streamer-perks {
    background: url('{links.staticUrl('/static/images/streamer-background.jpg')}');
    background-size: cover;
    padding: 50px;
  }
  .streamer-perks .card {
    background-color: rgba(255, 255, 255, 0.8);
  }
  `);
}

export function streamersDoc(event: BookshelfModel) {
  return <div class="streamer-perks">
    <div class="card card-body mb-4">
      <h2>Streamer perks</h2>

      <div class="featured">Taking part in the event as a streamer lets you:

        <ul>
          <li><b>Get embedded</b> automatically on the Alakajam! front page when you go live.</li>
          <li><b>Appear on the <a href={links.routeUrl(event, "event", "streamers")}>streamer list</a></b>,
            to let jammers know about your scheduled streams.</li>
          <li><b>Review && rate entries</b>, even if you don't make a game.
            Tip: most jammers don't mind if you rate games in the open, it's up to you.</li>
          <li><b>Enter the gaming competition</b> of the event, held in the 24 hours following the jam results.
            Your scores will be submitted in the form of screenshots, uploaded directly on the game pages.</li>
        </ul>
      </div>
    </div>
    <div class="card card-body">

      <h2>Resources</h2>

      <ul>
        <li><a href="/article/about/press-kit">Alakajam! press kit</a></li>
        <li><a href="/api">JSON API</a></li>
        <li><a href="/chat">Chat</a></li>
      </ul>
    </div>
  </div>;
};
