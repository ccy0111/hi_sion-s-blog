import ThemeToggler from "./themeBtn/page";
import Title from "./title/page";

// css만 적용시키기
export default function HeaderLayout() {
    return (
        <div> <Title /> <ThemeToggler /> <div> --- </div> </div>
    );
}