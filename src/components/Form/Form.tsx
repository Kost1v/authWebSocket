import { FC, useState } from "react";
import css from "./Form.module.css";
interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={css.form}>
      <label className={css.label}>
        <input
          className={css.inputForm}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
      </label>
      <label className={css.label}>
        <input
          className={css.inputForm}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
      </label>

      <button
        onClick={() => handleClick(email, password)}
        className={css.btnForm}
      >
        {title}
      </button>
    </div>
  );
};

export default Form;
