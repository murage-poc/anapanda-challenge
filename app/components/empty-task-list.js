import Component from '@glimmer/component';

export default class EmptyTaskListComponent extends Component {
  get imageSrc() {
    return this.args.complete
      ? 'assets/images/find-illustration.svg'
      : 'assets/images/no-task.svg';
  }
}
