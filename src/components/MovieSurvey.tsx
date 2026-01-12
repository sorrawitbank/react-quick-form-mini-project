import { Film, RefreshCw, Send } from "lucide-react";
import TextField from "./common/TextField";
import MovieRadio from "./MovieRadio";
import { movies } from "../data/movies";
import Button from "./common/Button";
import { useState, type FormEvent } from "react";
import validateEmail from "../utils/validateEmail";

function MovieSurvey() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
    movie: "",
  });

  const [errorText, setErrorText] = useState({
    name: "",
    email: "",
    movie: "",
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleMovieChange = (movieValue: string) => {
    setForm((prev) => {
      return {
        ...prev,
        movie: movieValue,
      };
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newError = { name: "", email: "", movie: "" };

    if (!form.name) {
      newError.name = "โปรดใส่ชื่อของคุณ";
    }
    if (!form.email) {
      newError.email = "โปรดใส่อีเมลของคุณ";
    } else if (!validateEmail(form.email)) {
      newError.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }
    if (!form.movie) {
      newError.movie = "กรุณาเลือกหนังที่คุณชอบ";
    }
    setErrorText(newError);
  };

  return (
    <section
      aria-labelledby="movie-survey"
      className="flex flex-col w-[446px] my-10 rounded-b-lg shadow-lg"
    >
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-2 p-6 text-white bg-brand-purple">
          <Film size={24} />
          <h1 id="movie-survey" className="text-2xl font-semibold">
            Movie Survey
          </h1>
        </div>
        <div className="flex flex-col gap-6 p-6 bg-white">
          <TextField
            id="name"
            label="ชื่อ"
            placeholder="กรุณากรอกชื่อของคุณ"
            value={form.name}
            onChange={handleChange}
            errorLabel={errorText.name}
            isRequired={true}
          />
          <TextField
            id="email"
            label="อีเมล์"
            placeholder="example@email.com"
            value={form.email}
            onChange={handleChange}
            errorLabel={errorText.email}
            isRequired={true}
          />
          <div className="flex flex-col gap-2">
            <span className="text-sm text-grey-200">
              เลือกหนังที่คุณชอบ <span className="text-brand-red">*</span>
            </span>
            <MovieRadio
              movies={movies}
              setMovie={handleMovieChange}
              errorLabel={errorText.movie}
            />
            {errorText.movie && (
              <span className="text-sm text-brand-red">{errorText.movie}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="comment" className="text-sm">
              ความคิดเห็นเกี่ยวกับหนัง
            </label>
            <textarea
              id="comment"
              name="comment"
              value={form.comment}
              placeholder="พิมพ์ความคิดเห็นของคุณที่นี่"
              onChange={handleChange}
              className="min-h-[98px] px-3 py-2 text-sm border border-grey-50 rounded-md placeholder:text-grey-100"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-between px-6 pt-4 pb-6">
          <Button
            borderColor="grey-50"
            type="button"
            onClick={(event) => {
              event.preventDefault();
              setForm({
                name: "",
                email: "",
                comment: "",
                movie: "",
              });
            }}
          >
            <RefreshCw size={16} />
            รีเซ็ต
          </Button>
          <Button textColor="white" bgColor="brand-purple" type="submit">
            <Send size={16} /> ส่งแบบสำรวจ
          </Button>
        </div>
      </form>
    </section>
  );
}

export default MovieSurvey;
