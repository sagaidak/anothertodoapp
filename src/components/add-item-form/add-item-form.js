import React, {useState} from 'react';

import './add-item-form.css';

const AddItemForm = ({onAddItem}) => {
    let [text, setText] = useState('smth');

    let handleSubmit = (e) => {
        e.preventDefault();
        onAddItem(text);
        setText('');
    };

    return (
        <form className={'add-item-form'}
                onSubmit={handleSubmit}>
            <input
                className={'form-control add-text-input'}
                type={'text'}
                value={text}
                onChange={e => setText(e.target.value)} />
            <button type="submit"
                    className="btn btn-sm float-right"
                    >
                Add Item
            </button>
        </form>
    );
};

export default AddItemForm;