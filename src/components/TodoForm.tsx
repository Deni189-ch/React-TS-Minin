import React from "react";

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
  //const [title, setTitle] = React.useState<string>('')

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const ref = React.useRef<HTMLInputElement>(null);

  const KeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      if(ref.current?.value.trim()) {
        onAdd(ref.current!.value);
        ref.current!.value = '' 
      } else {
        ref.current!.value = 'Введите название дела'
      }
      // console.log(title);
      // setTitle('')
    }
  }
  return (
    <div className="input-field  mt2">
      <input 
      //  value={title}
       ref={ref}
       type="text"
       placeholder="Введите название дела"
      //  onChange={changeHandler}
       onKeyPress={KeyPressHandler}
       />
      <label htmlFor="title" className='active'>
        Введите название дела
      </label>
    </div>
  )
}