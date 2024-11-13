import { fail } from '@sveltejs/kit'

import { addTodo, clearTodos, getTodos, removeTodo } from "../../lib/server/contact"
export const prerender = false;
export async function load() {
  const todos = getTodos()
  return { todos }
}

export const actions = {
  addTodo: async ({ request }) => {
    const formData = await request.formData()
    const todo = String(formData.get('todo'))

    if (!todo) {
      return fail(400, { todo, missing: true })
    }

    addTodo(todo)

    return { success: true }
  },
  removeTodo: async ({ request }) => {
    const formData = await request.formData()
    const todoId = Number(formData.get('id'))

    removeTodo(todoId)

    return { success: true }
  },
  clearTodos: () => {
    clearTodos()
  }
}
