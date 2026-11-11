import { useState, useId } from 'react';
import List from './components/List';
import InputArea from './components/InputArea';

function App() {
    const [todoItems, updateList] = useState([]);

    function deleteListItem(id) {
        console.log(id);
        updateList((prevItems) => {
            return prevItems.filter((_, idx) => {
                return idx !== id;
            });
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea key={useId()} onAdd={updateList} />
            <div>
                <ul>
                    {todoItems.map((item, i) => (
                        <List
                            key={i}
                            name={item}
                            id={i}
                            handleClick={deleteListItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
