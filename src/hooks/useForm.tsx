// @packages
import { ChangeEvent, useState } from "react";

// @interfaces
interface IInitialForm {
  searchText: string;
}

export const useForm = (initialForm: IInitialForm) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => setFormState(initialForm);

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
