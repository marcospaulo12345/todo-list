import {Trash} from '@phosphor-icons/react'

import styles from './Task.module.css'

export interface TaskType {
    checked?: boolean;
    description: string;
    onChangeTask: (description: string) => void;
    onDelete: (description: string) => void;
}

export function Task({ checked, description, onChangeTask, onDelete }: TaskType) {
    // const [checked, setChecked] = useState(false)
    console.log(checked)

    function handleChangeTask() {
        onChangeTask(description)
    }

    function handleDeleteTask() {
        onDelete(description)
    }

    return (
        <div className={styles.task}>
            <input type="checkbox" checked={checked} onChange={handleChangeTask} />
            <p style={{ textDecorationLine: checked ? 'line-through' : 'none'}}>{description}</p>
            <button onClick={handleDeleteTask}>
                <Trash size={18} />
            </button>
        </div>
    )
}