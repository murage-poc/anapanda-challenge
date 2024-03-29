import Model, {attr} from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string') name;
  @attr('string') description;
  @attr('boolean') isComplete;
}
