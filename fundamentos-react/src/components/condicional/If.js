// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  if (!props.test) {
    return false
  }
  return props.children
}