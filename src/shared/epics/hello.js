/**
 * Module with a simple epic.
 * @module src/shared/epics/hello.
 */
// Rxjs.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

// Actions.
import { toggleHello } from '../actions/home';

// Constants.
import { TOGGLE_HELLO } from '../constants/actions';

const helloEpic = action$ =>
  action$.ofType(TOGGLE_HELLO)
    .mergeMap(() => (
      Observable.of(toggleHello())
        .delay(600)
    ));

export default helloEpic;
