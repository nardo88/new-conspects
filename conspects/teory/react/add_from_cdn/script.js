
// получаем контейнер
const root = document.getElementById('root');
// создаем компоненту
const App = () => {
    return (
        <div>
            hello
        </div>
    )
}
// рендерим компоненту в контейнере
ReactDOM.render(<App />, root);


