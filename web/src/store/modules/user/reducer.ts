export default function user(state = {}, action: any) {
  switch (action.type) {
    case "@user/":
      return;
    default:
      return state;
  }
}
