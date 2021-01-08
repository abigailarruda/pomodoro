export default function timer(state = {}, action: any) {
  switch (action.type) {
    case "@timer/":
      return;
    default:
      return state;
  }
}
