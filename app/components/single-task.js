import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SingleTaskComponent extends Component {
  @action
  toggleTaskStatus(task) {
    //delay for user to click undo (an animation will be shown)
    task.isComplete = !task.isComplete;
    task.setProperties({ isPinned: false });
  }

  togglePinStatus(task) {
    task.toggleProperty('isPinned');
  }
}
