import { shallowMount } from '@vue/test-utils';
import TodoList from '@/components/TodoList.vue';

describe('TodoList.vue', () => {
  it('toggles task completion', () => {
    const wrapper = shallowMount(TodoList, {
      data() {
        return {
          tasks: [{ name: 'Test Task', completed: false }]
        };
      }
    });
    wrapper.vm.toggleComplete(0);
    expect(wrapper.vm.tasks[0].completed).toBe(true);
  });
});
