const getHeader = () => {
    return {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
}
export { getHeader };