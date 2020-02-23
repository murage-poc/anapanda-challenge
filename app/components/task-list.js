import Component from '@glimmer/component';

export default class TaskListComponent extends Component {

    get pinnedTasks() {
        return this.args.tasks.filter((task) => task.isPinned)
    }


    get unPinnedTasks() {
        return this.args.tasks.filter((task) => !task.isPinned)
    }
}
