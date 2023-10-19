export const Input = ({ register }) => {
  return <input placeholder="Digite seu email" {...register("email")} />;
};
