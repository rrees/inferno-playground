
import {render, linkEvent} from 'inferno';
import h from 'inferno-hyperscript';
import {choose} from 'rrees-js-random';

function createStory() {
  const personalities = [
    "plucky",
    "shy",
  ];

  const personality = choose(personalities);

  const jobs = [
    "cattle herder",
    "apprentice mechanical",
    "message runner",
    "junior scribe",
  ];

  const job = choose(jobs);

  return {
    summary: `A ${personality} ${job} starts on a journey`
  }
}

function regenerateStory(props) {
  renderApp({story: createStory()});
}

function MyApp(props) {
  return h('section', {}, [
    h('p', {}, props.story.summary),
    h('button', {onClick: linkEvent(props, regenerateStory)}, 'Try again')
  ]);
}

function renderApp(props) {
  render(MyApp(props), document.getElementById('app'));
}

renderApp({story: createStory()});

