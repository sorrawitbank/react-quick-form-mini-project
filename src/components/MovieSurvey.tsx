import { Film, RefreshCw, Send } from "lucide-react";
import TextField from "./common/TextField";
import MovieRadio from "./MovieRadio";
import { movies } from "../data/movies";
import Button from "./common/Button";
import { useState, type FormEvent } from "react";
import validateEmail from "../utils/validateEmail";
import Summary from "./Summary";

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

  const [isSend, setIsSet] = useState(false);

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

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      comment: "",
      movie: "",
    });
    setErrorText({
      name: "",
      email: "",
      movie: "",
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newError = { name: "", email: "", movie: "" };
    let isValid = true;

    if (!form.name) {
      newError.name = "โปรดใส่ชื่อของคุณ";
      isValid = false;
    }
    if (!form.email) {
      newError.email = "โปรดใส่อีเมลของคุณ";
      isValid = false;
    } else if (!validateEmail(form.email)) {
      newError.email = "รูปแบบอีเมลไม่ถูกต้อง";
      isValid = false;
    }
    if (!form.movie) {
      newError.movie = "กรุณาเลือกหนังที่คุณชอบ";
      isValid = false;
    }
    setErrorText(newError);

    if (!isValid) return;
    setIsSet(true);
  };

  return (
    <section
      aria-labelledby="movie-survey"
      className="flex flex-col w-[446px] my-10 rounded-b-lg shadow-lg"
    >
      <div className="flex items-center gap-2 p-6 text-white bg-brand-purple">
        <Film size={24} />
        <h1 id="movie-survey" className="text-2xl font-semibold">
          Movie Survey
        </h1>
      </div>
      {isSend ? (
        <Summary
          name={form.name}
          email={form.email}
          movie={form.movie}
          comment={form.comment}
          handleReset={handleReset}
          setIsSend={setIsSet}
        />
      ) : (
        <form onSubmit={handleSubmit}>
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
              type="email"
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
                onChange={handleMovieChange}
                selectedMovie={form.movie}
                errorLabel={errorText.movie}
              />
              {errorText.movie && (
                <span className="text-sm text-brand-red">
                  {errorText.movie}
                </span>
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
          <div className="flex justify-between px-6 pt-4 pb-6 border-t border-grey-50">
            <Button borderColor="grey-50" type="button" onClick={handleReset}>
              <RefreshCw size={16} />
              รีเซ็ต
            </Button>
            <Button textColor="white" bgColor="brand-purple" type="submit">
              <Send size={16} /> ส่งแบบสำรวจ
            </Button>
          </div>
        </form>
      )}
    </section>
  );
}

export default MovieSurvey;
