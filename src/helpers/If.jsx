/* eslint-disable no-else-return */
// Helper to do conditional rendering
export default props => {
    if (props.test) {
        return props.children;
    } else {
        return false;
    }
};
