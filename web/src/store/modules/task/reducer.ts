export default function task(state = [], action: any) {
  switch (action.type) {
    case "@task/CREATE_TASK":
      return;
    case "@task/READ_TASK":
      return;
    case "@task/UPDATE_TASK":
      return;
    case "@task/DELETE_TASK":
      return;
    case "@task/GET_TASK":
      return;
    default:
      return state;
  }
}
