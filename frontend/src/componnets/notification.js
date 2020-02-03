// import React from "react"
//
// const [open, setOpen] = React.useState(false);
//
// const handleClick = () => {
//     setOpen(true);
// };
//
// props={
//     open: 是否开启 flag
//     type: info / error
//     message: ' '
//     corresponding attributes in redux,so it will watch the change
//     and appear depneding on whether errorMsg/successMsg exists
//     // TODO add location by default it will be on top center
// }
//
// useEffect(() => {
//     setTimeout(() => {
//         setOpen(true);
//     }, 2000);
// }, []);
//
// return (
//     <Snackbar
//         anchorOrigin={{ horizontal: "center", vertical: "top" }}
//         open={open}
//         autoHideDuration={6000}
//         onClose={handleClose}
//     >
//         <Alert onClose={handleClose} severity="success">
//             This is a success message!
//         </Alert>
//     </Snackbar>
// )
