const useToggleBodyFilter = (isModalVisible) => {
    const body = document.querySelector("body");
//    if (isModalVisible && modal.classList.contains("hidden")){
//         modal.classList.remove("hidden");
//         !body.classList.contains("background-filter") && body.classList.add("background-filter");
//         return;
//    }
//    if (!isModalVisible && !modal.classList.contains("hidden")){
//         modal.classList.add("hidden");
//         body.classList.contains("background-filter") && body.classList.remove("background-filter");
//         return;
// }
isModalVisible ? body.classList.add("background-filter") : body.classList.remove("background-filter")
}
 
export default useToggleBodyFilter;