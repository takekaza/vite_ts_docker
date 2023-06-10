import { InjectionKey, ref } from "vue";

type Todo = {
  id: number;
  title: string;
};

const defaultTodos = [
  { id: 0, title: "first" },
  { id: 1, title: "second" },
];
// export const todos = ref<Todo[]>(defaultTodos);
// export const addTodo = (title: string) => {
//   const newTodo: Todo = {
//     id: Math.random(),
//     title,
//   };
//   todos.value.push(newTodo);
// };

export const todos = () => {
  const todos = ref<Todo[]>(defaultTodos);

  const addTodo = (title: string) => {
    const todo: Todo = {
      id: Math.random(),
      title,
    };
    todos.value.push(todo);
  };

  return { todos, addTodo };
};

// todoKeyという型指定、InjectionKeyの中で指定したTodosTypeという型でInjectionできるKeyですよ..という感じ
// todokeyの中身はuseTodosという文字列でとってこれる
// Symbol：JS関数 -> 中に引数で文字列をとって、文字列をもとに一意のIDを生成してくれる -> 別の値になる
type TodosType = typeof todos;

// todoKeyを使ってtodosをprovideしている
export const todoKey: InjectionKey<TodosType> = Symbol("useTodos");
