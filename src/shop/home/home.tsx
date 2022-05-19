import s from './Home.module.css'

export const Home = () => {
    return (
        <div className={s.main}>
            <h1>React</h1>
            <p>JavaScript-библиотека для создания пользовательских интерфейсов</p>
            <img src={'https://techblog.sdstudio.top/wp-content/uploads/2021/09/ba11d056cec27254d89b310745e4071b-1.png'}/>
            <p className={s.text}> React-компоненты реализуют метод <code className="gatsby-code-text">render()</code>,
                который принимает
                входные данные и&nbsp;возвращает что-то для вывода. В&nbsp;этом примере используется XML-подобный
                синтаксис под названием JSX. Входные данные, передаваемые в&nbsp;компонент, доступны в&nbsp;<code
                    className="gatsby-code-text">render()</code> через <code
                    className="gatsby-code-text">this.props</code>.</p>
            <p><strong>JSX необязателен для работы с&nbsp;React.</strong> Попробуйте <a
                href="https://babeljs.io/repl/#?presets=react&amp;code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA"
                target="_blank" rel="noreferrer">Babel REPL</a>, чтобы увидеть JavaScript-код, полученный на&nbsp;этапе
                компиляции JSX.</p>

            <div className={s.text2}><h3 className="css-17jiu04">Приложение</h3>
                <div><p>Используя <code className="gatsby-code-text">props</code> и&nbsp;<code
                    className={s.text2}>state</code>, можно создать небольшое приложение списка&nbsp;дел.
                    В&nbsp;этом примере используется <code className="gatsby-code-text">state</code> для отслеживания
                    текущего списка элементов, а&nbsp;также текста, введённого пользователем. Хотя обработчики событий
                    встроены в&nbsp;разметку, они собираются и&nbsp;реализуются с&nbsp;помощью делегирования событий.
                </p></div>
            </div>

            <div className={s.text}><h3 className="css-17jiu04">Компонент с&nbsp;использованием внешних
                плагинов</h3>
                <div><p>React позволяет работать с&nbsp;другими библиотеками и&nbsp;фреймворками. В&nbsp;этом примере
                    используется внешняя библиотека <strong>remarkable</strong>, чтобы в&nbsp;режиме реального времени
                    преобразовать Markdown-синтаксис, введённый в&nbsp;элемент <code
                        className="gatsby-code-text">&lt;textarea&gt;</code>.</p></div>
            </div>
        </div>
    )
}