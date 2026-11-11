import { useState } from 'react';

function InputArea(props) {
    const [inputValue, setInputValue] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputValue);
        if (!inputValue) return;

        props.onAdd((prevItems) => [...prevItems, inputValue]);
        setInputValue('');
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
            />
            <button type="submit">
                <span>Add</span>
            </button>
        </form>
    );
}

export default InputArea;
