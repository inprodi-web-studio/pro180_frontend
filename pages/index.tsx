// pages/index.js
export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/auth/login', // La ruta a la que deseas redirigir
      permanent: false, // false para redirección temporal (código de estado 307)
    },
  };
};

const Home = () => {
  return null; // Esta página nunca se renderiza porque se redirige.
};

export default Home;