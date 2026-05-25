// useEffect(() => {
//   const media = window.matchMedia("(prefers-color-scheme: dark)");

//   const handleChange = () => {
//     if (!localStorage.getItem("theme")) {
//       if (media.matches) {
//         document.documentElement.classList.add("dark");
//       } else {
//         document.documentElement.classList.remove("dark");
//       }
//     }
//   };

//   media.addEventListener("change", handleChange);

//   return () => media.removeEventListener("change", handleChange);
// }, []);