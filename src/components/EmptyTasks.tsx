import { ClipboardText } from "@phosphor-icons/react";

import styles from './EmptyTasks.module.css';

export function EmptyTasks() {
    return (
        <div className={styles.emptyTasks}>
            <ClipboardText size={56} />
            <h2>Você ainda não tem tarefas cadastradas</h2>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}