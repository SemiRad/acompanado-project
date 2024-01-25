import { ref, onMounted, type Ref } from 'vue'
import type ITodo from '../common/interfaces/ITodo'

export function useRetrieve() {
  const todos: Ref<ITodo[]> = ref([]);

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        todos.value = json;
      });
  };

  onMounted(() => {
    fetchData();
  });

  return { todos, fetchData };
}

export function useTodo() {
  const { fetchData } = useRetrieve();
  
    function addTodo() {
      fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
          title: 'mr telephone man',
          completed: false,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          fetchData();
          console.log(json);
        });
    }

    async function deleteTodo() {
      await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((json) => {
          fetchData();
          console.log(json);
        });
    }
  
    return { addTodo, deleteTodo };
}