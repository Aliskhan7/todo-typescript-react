import React, { useRef } from 'react';


interface TodosFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodosFormProps> = (props) =>{

    const ref = useRef<HTMLInputElement>(null)
    // const [title, setTitle] = useState<string>('')

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: React.KeyboardEvent) =>{
        if(event.key == 'Enter'){
            // console.log(title);
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
            
            
            
        }
    }

    return(
        <div className="input-field mt2">
            <input 
            // onChange={changeHandler} 
            // value={title} 
            ref={ref}
            onKeyPress={keyPressHandler} 
            type="text" 
            id='title' />
            <label htmlFor="title" className='active'>
                Введите название дела
            </label>
        </div>
    )
}

export default TodoForm