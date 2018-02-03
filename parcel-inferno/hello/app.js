
import {render} from 'inferno';
import h from 'inferno-hyperscript';

function MyApp(props) {
  return h('p', {}, props && props.message ? props.message : 'Hello default world');
}

render(MyApp(), document.getElementById('app'));
render(MyApp({message: "Hello world"}), document.getElementById('app2'));
