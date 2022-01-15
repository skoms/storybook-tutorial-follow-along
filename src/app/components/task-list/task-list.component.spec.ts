import { render } from "@testing-library/angular";

import { TaskListComponent } from "./task-list.component";
import { TaskComponent } from "../task/task.component";

// Story import
import { WithPinnedTasks } from "./task-list.stories";

describe('TaskList Component', () => {
  it('renders pinned tasks at the start of the list', async () => {
    const mockedActions = jest.fn()
    const tree = await render(
      TaskListComponent,
      {
        declarations: [TaskComponent],
        componentProperties: {
          ...WithPinnedTasks.args,
          onPinTask: {
            emit: mockedActions
          } as any,
          onArchiveTask: {
            emit: mockedActions,
          } as any,
        }
      }
    )
    const component = tree.fixture.componentInstance
    expect(component.tasksInOrder[0].id).toBe('6')
  });
});