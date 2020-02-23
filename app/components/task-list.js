import Component from '@glimmer/component';

export default class TaskListComponent extends Component {

    /**
     * Filter component task param to only the pinned tasks
     * use `filterBy` ember object method to ensure the method is reactive
     * @returns {*|Array}
     */
    get pinnedTasks() {
        return this.args.tasks.filterBy('isPinned', true)
    }

    /**
     * Filter to return only unpinned tasks
     * use `filterBy` ember object method to ensure the method is reactive
     * @returns {*|Array}
     */
    get unPinnedTasks() {
        // need to map first so as to set `isPinned` property in case it's undefined
        return this.args.tasks.map((task) => {
            task.isPinned = !!task.isPinned;
            return task;
        }).filterBy('isPinned', false)
    }
}
