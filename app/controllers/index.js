import Controller from '@ember/controller';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class IndexController extends Controller {
    @tracked showCompletedTasks = false;
    @tracked showAllTasks = true;

    /**
     * will toggle what "tab" to show
     * @param id
     */
    @action
    showTab(id) {
        this.showAllTasks = (id === 0);
        this.showCompletedTasks = (id === 1);
    }


    /**
     * Pin/Unpin a task
     * @param task
     * @returns {boolean}
     */
    @action
    toggleTaskPinStatus(task) {

        task.isPinned = !task.isPinned;
    }

    /**
     * filter the Task model to return only completed tasks
     * @returns {*}
     */
    get completedTasks() {
        return this.model.filter((task) => task.isComplete);
    }

    /**
     * filter the Task model to return only incomplete tasks
     * @returns {*}
     */
    get inCompleteTasks() {
        return this.model.filter((task) => !task.isComplete);
    }


}
