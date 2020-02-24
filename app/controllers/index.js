import Controller from '@ember/controller';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class IndexController extends Controller {
    @tracked showCompletedTasks = false;
    @tracked showAllTasks = true;

    /**
     * Toggles "tab" to show either all tasks or just completed tasks
     * @param id
     */
    @action
    showTab(id) {
        this.showAllTasks = (id === 0);
        this.showCompletedTasks = (id === 1);
    }

    /**
     * filter the Task model to return only completed tasks
     * @returns {*}
     */
    get completedTasks() {
        return this.model.filterBy('isComplete', true);
    }

    /**
     * filter the Task model to return only incomplete tasks
     * @returns {*}
     */
    get inCompleteTasks() {
        return this.model.filterBy('isComplete', false);
    }

    get completedTasksTotal() {
        return this.completedTasks.length;
    }

}
