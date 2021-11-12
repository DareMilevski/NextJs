function userProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default userProfilePage;

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;
  

  return {
    props: {
      username: "Dare",
    },
  };
};
