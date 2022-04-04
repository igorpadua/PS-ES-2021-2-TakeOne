import FormCard from "components/FormCard";
import FormComment from "components/FormComment";
import { useParams } from "react-router-dom";

function Form() {
  const params = useParams();

  return (
    <>
      <div>
        <FormCard movieId={`${params.movieId}`} />
      </div>
      <div>
        <FormComment />
      </div>
    </>
  );
}

export default Form;
