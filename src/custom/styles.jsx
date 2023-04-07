const useStyles = {
  root: {
    backgroundColor: "#1E1E20",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    justifyContent: "center",
    alignItems: "center",
  },
  containerGrid: {
    boxShadow: "8px 8px 8px 0px black",
    maxWidth: "500px",
    width: "100%",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "48px",
    fontWeight: "bold",
    height: { xs: "100px", sm: "150px", md: "150px" },
    transition:"0.3s all ease-out",
    "&:hover": {
      transition: "0.2s all ease-in",
      opacity: "0.8",
      cursor: "pointer",
    },
  },
  containerSettings: {
    width: "100%",
    maxWidth: "500px",
    height:"50px",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center"
  },
};

export { useStyles };
