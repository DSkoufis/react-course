function App() {
    const inputType = "number";
    const min = "5";
    return (
        <input
            type={inputType}
            min={min}
            max={10}
            list={[5,6,7]}
            style={{color: 'red', width: '170px'}}
        />
    );
}

export default App;
